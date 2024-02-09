import { Search } from '@/types';
import { AxiosResponse } from 'axios';

interface ProductController {
    getAllProductsEnabled: () => Promise<AxiosResponse<{ data: ProductDto[] }>>;
    getAllProductsDisabled: () => Promise<AxiosResponse<{ data: ProductDto[] }>>;
    find: (params: { id: string }) => Promise<AxiosResponse<{ data: ProductDto }>>;
    edit: (params: { product: ProductModel; token: string }) => Promise<AxiosResponse<ResponseDto>>;
    create: (params: { product: ProductModel; token: string }) => Promise<AxiosResponse<ResponseDto>>;
    search: (params: { search: Search }) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
    searchByCategoryAndLaboratory: (params: {
        category: string;
        laboratory: string;
        search: string;
    }) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
    enable: (params: {
        id: string;
        product: string;
        token: string;
    }) => Promise<AxiosResponse<ResponseDto>>;
    disable: (params: {
        id: string;
        product: string;
        token: string;
    }) => Promise<AxiosResponse<ResponseDto>>;
    getAllProductsByCategory: (params: {
        category: string;
    }) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
    searchByCategory: (params: {
        search: string;
        category: string;
    }) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
    getAllProductsByCategoryAndLaboratory: (params: {
        category: string;
        laboratory: string;
    }) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
}
export type { ProductController };
