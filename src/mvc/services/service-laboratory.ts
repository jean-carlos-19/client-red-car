import { LaboratoryController } from '@/mvc/controllers';

import { Search } from '@/types';
import { AxiosResponse } from 'axios';
import { Http } from './http/http';

class ServiceLaboratory implements LaboratoryController {
    public create = async (
        { laboratory, token }: {
            laboratory: LaboratoryModel,
            token: string,
        }
    ): Promise<AxiosResponse<ResponseDto>> => {
        return await this.http.post<ResponseDto>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/create/laboratory`,
            this.getFormData(laboratory),
            token,
        );
    };
    public edit = async (
        { laboratory, token }: {
            laboratory: LaboratoryModel,
            token: string,
        }
    ): Promise<AxiosResponse<ResponseDto>> => {
        return await this.http.put<ResponseDto>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/edit/laboratory`,
            this.getFormData(laboratory),
            token,
        );
    };
    public enable = async (
        { laboratory, token }: {
            laboratory: LaboratoryModel,
            token: string,
        }
    ): Promise<AxiosResponse<ResponseDto>> => {
        return await this.http.put<ResponseDto>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/enable/laboratory`,
            this.getFormData(laboratory),
            token,
        );
    };
    public disable = async (
        { laboratory, token }: {
            laboratory: LaboratoryModel,
            token: string,
        }
    ): Promise<AxiosResponse<ResponseDto>> => {
        return await this.http.put<ResponseDto>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/disable/laboratory`,
            this.getFormData(laboratory),
            token,
        );
    };
    public search = async ({ search }: { search: Search }): Promise<AxiosResponse<{ data: LaboratoryDto[] }>> => {
        return await this.http.get<LaboratoryModel>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/search/laboratory?search=${search.search}`,
        );
    };
    public find = async ({ id }: { id: string }): Promise<AxiosResponse<{ data: LaboratoryDto }>> => {
        return await this.http.get<LaboratoryModel>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/find/laboratory?id=${id}`,
        );
    };
    public getAllProductsDisabled = async (): Promise<AxiosResponse<{ data: LaboratoryDto[] }>> => {
        return await this.http.get<{ data: LaboratoryDto[] }>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/show/disable/laboratory`,
        );
    };
    public getAllProductsEnabled = async (): Promise<AxiosResponse<{ data: LaboratoryDto[] }>> => {
        return await this.http.get<{ data: LaboratoryDto[] }>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/show/enable/laboratory`,
        );
    };

    public listCategory = async (
        category: string,
    ): Promise<AxiosResponse<{ data: LaboratoryDto[] }>> => {
        return await this.http.get<{ data: LaboratoryDto[] }>(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/show/enable/laboratory/category?category=${category}`,
        );
    };

    public getFormData = (laboratory: LaboratoryModel): URLSearchParams => {
        const formData: URLSearchParams = new URLSearchParams();
        formData.append('idLaboratory', `${laboratory.id}`);
        formData.append('laboratory', laboratory.laboratory as string);
        return formData;
    };

    public static getService = (): ServiceLaboratory => {
        if (this.service === undefined) this.service = new ServiceLaboratory();
        return this.service;
    };
    private constructor() { }

    private static service: ServiceLaboratory;
    private http: Http = new Http();
}
export { ServiceLaboratory };
