import { Search } from '@/types';
import { AxiosResponse } from 'axios';

interface LaboratoryController {
 showEnable: () => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
 showDisable: () => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
 find: (id: string) => Promise<AxiosResponse<{ data: LaboratoryDto }>>;
 edit: (laboratory: LaboratoryModel, token: string) => Promise<AxiosResponse<ResponseDto>>;
 create: (laboratory: LaboratoryModel, token: string) => Promise<AxiosResponse<ResponseDto>>;
 enable: (laboratory: LaboratoryModel, token: string) => Promise<AxiosResponse<ResponseDto>>;
 disable: (laboratory: LaboratoryModel, token: string) => Promise<AxiosResponse<ResponseDto>>;
 search: (search: Search) => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
 listCategory: (category: string) => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
}
export type { LaboratoryController };
