import { ProductController } from '@/mvc/controllers';

import { BACKEND_URL } from '@/constants/env.';
import { Search } from '@/types';
import { AxiosResponse } from 'axios';
import { Http } from './http/http';

class ServiceProduct implements ProductController {
    public create = async ({
        product,
        token,
    }: {
        product: ProductModel;
        token: string;
    }): Promise<AxiosResponse<ResponseDto>> => {
        return await this.http.post<ResponseDto>(
            `${BACKEND_URL}/create/product`,
            this.getFormData(product),
            token,
        );
    };
    public getAllProductsByCategory = async ({
        category,
    }: {
        category: string;
    }): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
        return await this.http.get<ProductDto>(
            `${BACKEND_URL}/show/category/product?category=${category}`,
        );
    };
    public getAllProductsByCategoryAndLaboratory = async ({
        category,
        laboratory,
    }: {
        category: string;
        laboratory: string;
    }): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
        return await this.http.get<ProductDto>(
            `${BACKEND_URL}/show/laboratory/product?category=${category}&laboratory=${laboratory}`,
        );
    };
    public edit = async ({
        product,
        token,
    }: {
        product: ProductModel;
        token: string;
    }): Promise<AxiosResponse<ResponseDto>> => {
        return await this.http.put<ResponseDto>(
            `${BACKEND_URL}/edit/product`,
            this.getFormData(product),
            token,
        );
    };
    public enable = async ({
        id,
        product,
        token,
    }: {
        id: string;
        product: string;
        token: string;
    }): Promise<AxiosResponse<ResponseDto>> => {
        return await this.http.put<ResponseDto>(
            `${BACKEND_URL}/enable/product`,
            this.getSearchParams(id, product),
            token,
        );
    };
    public disable = async ({
        id,
        product,
        token,
    }: {
        id: string;
        product: string;
        token: string;
    }): Promise<AxiosResponse<ResponseDto>> => {
        return await this.http.put<ResponseDto>(
            `${BACKEND_URL}/disable/product`,
            this.getSearchParams(id, product),
            token,
        );
    };

    public getAllProductsDisabled = async (): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
        return await this.http.get<{ data: ProductDto[] }>(
            `${BACKEND_URL}/show/disable/product`,
        );
    };

    public getAllProductsEnabled = async (): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
        return await this.http.get<{ data: ProductDto[] }>(
            `${BACKEND_URL}/show/enable/product`,
        );
    };

    public searchByCategory = async ({
        category,
        search,
    }: {
        search: string;
        category: string;
    }): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
        return await this.http.get<{ data: ProductDto[] }>(
            `${BACKEND_URL}/search/category/product?product=${search}&category=${category}`,
        );
    };

    public search = async ({
        search,
    }: {
        search: Search;
    }): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
        return await this.http.get<ProductDto>(
            `${BACKEND_URL}/search/product?search=${search.search}`,
        );
    };
    public searchByCategoryAndLaboratory = async ({
        category,
        laboratory,
        search,
    }: {
        category: string;
        laboratory: string;
        search: string;
    }): Promise<AxiosResponse<{ data: ProductDto[] }>> => {
        return await this.http.get<ProductDto>(
            `${BACKEND_URL}/search/laboratory/product?laboratory=${laboratory}&search=${search}&category=${category}`,
        );
    };
    public find = async ({ id }: { id: string }): Promise<AxiosResponse<{ data: ProductDto }>> => {
        return await this.http.get<ProductDto>(
            `${BACKEND_URL}/find/product?id=${id}`,
        );
    };

    public getFormData = (product: ProductModel): FormData => {
        const formData: FormData = new FormData();
        if (product.id) formData.append('idProduct', product.id.toString());
        if (product.laboratory) formData.append('laboratory', product.laboratory);
        if (product.features) formData.append('features', product.features);
        if (product.category) formData.append('category', product.category);
        if (product.photo) formData.append('photo', product.photo as File);
        if (product.product) formData.append('product', product.product);
        if (product.barcode) formData.append('barcode', product.barcode);
        if (product.summary) formData.append('summary', product.summary);
        if (product.idimage) formData.append('idimage', product.idimage);
        if (product.dosage) formData.append('dosage', product.dosage);
        if (product.cost) formData.append('cost', product.cost);
        if (product.pvp) formData.append('pvp', product.pvp);
        return formData;
    };

    public getSearchParams = (id: string, product: string): URLSearchParams => {
        const formData: URLSearchParams = new URLSearchParams();
        formData.append('idProduct', id);
        formData.append('product', product);
        return formData;
    };

    public static getService = (): ServiceProduct => {
        if (this.service === undefined) this.service = new ServiceProduct();
        return this.service;
    };
    private constructor() { }

    private static service: ServiceProduct;
    private http: Http = new Http();
}
export { ServiceProduct };
