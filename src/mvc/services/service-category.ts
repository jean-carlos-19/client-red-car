import { CategoryController } from '@/mvc/controllers';

import { BACKEND_URL } from '@/constants/env.';
import { Search } from '@/types';
import { AxiosResponse } from 'axios';
import { Http } from './http/http';

class ServiceCategory implements CategoryController {
    public create = async ({
        category,
        token,
    }: {
        category: CategoryModel;
        token: string;
    }): Promise<AxiosResponse<ResponseDto>> => {
        return await this.http.post<ResponseDto>(
            `${BACKEND_URL}/create/category`,
            this.getFormData(category),
            token,
        );
    };
    public edit = async ({
        category,
        token,
    }: {
        category: CategoryModel;
        token: string;
    }): Promise<AxiosResponse<ResponseDto>> => {
        return await this.http.put<ResponseDto>(
            `${BACKEND_URL}/edit/category`,
            this.getFormData(category),
            token,
        );
    };
    public enable = async ({
        category,
        token,
    }: {
        category: CategoryModel;
        token: string;
    }): Promise<AxiosResponse<ResponseDto>> => {
        return await this.http.put<ResponseDto>(
            `${BACKEND_URL}/enable/category`,
            this.getURLSearchParams(category),
            token,
        );
    };
    public disable = async ({
        category,
        token,
    }: {
        category: CategoryModel;
        token: string;
    }): Promise<AxiosResponse<ResponseDto>> => {
        return await this.http.put<ResponseDto>(
            `${BACKEND_URL}/disable/category`,
            this.getURLSearchParams(category),
            token,
        );
    };

    public getAllProductsDisabled = async (): Promise<AxiosResponse<{ data: CategoryDto[] }>> => {
        return await this.http.get<{ data: CategoryDto[] }>(
            `${BACKEND_URL}/show/disable/category`,
        );
    };

    public getAllProductsEnabled = async (): Promise<AxiosResponse<{ data: CategoryDto[] }>> => {
        return await this.http.get<{ data: CategoryDto[] }>(
            `${BACKEND_URL}/show/enable/category`,
        );
    };

    public search = async ({
        search,
    }: {
        search: Search;
    }): Promise<AxiosResponse<{ data: CategoryDto[] }>> => {
        return await this.http.get<CategoryDto>(
            `${BACKEND_URL}/search/category?search=${search.search}`,
        );
    };

    public find = async ({ id }: { id: string }): Promise<AxiosResponse<{ data: CategoryDto }>> => {
        return await this.http.get<CategoryDto>(
            `${BACKEND_URL}/find/category?id=${id}`,
        );
    };

    public getFormData = (category: CategoryModel): FormData => {
        const formData: FormData = new FormData();
        if (category.id) formData.append('idCategory', `${category.id}`);
        if (category.category) formData.append('category', category.category as string);
        if (category.photo) formData.append('photo', category.photo as File);
        if (category.idphoto) formData.append('idphoto', category.idphoto);
        return formData;
    };

    public getURLSearchParams = (category: CategoryModel): URLSearchParams => {
        const formData: URLSearchParams = new URLSearchParams();
        if (category.id) formData.append('idCategory', `${category.id}`);
        if (category.category) formData.append('category', category.category as string);
        return formData;
    };

    public static getService = (): ServiceCategory => {
        if (this.service === undefined) this.service = new ServiceCategory();
        return this.service;
    };
    private constructor() { }

    private static service: ServiceCategory;
    private http: Http = new Http();
}
export { ServiceCategory };
