import { Search } from '@/types';
import { AxiosResponse } from 'axios';

interface LaboratoryController {
 showEnable: () => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
 showDisable: () => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
 find: (params: { id: string }) => Promise<AxiosResponse<{ data: LaboratoryDto }>>;
 edit: (params: {
  laboratory: LaboratoryModel;
  token: string;
 }) => Promise<AxiosResponse<ResponseDto>>;
 create: (params: {
  laboratory: LaboratoryModel;
  token: string;
 }) => Promise<AxiosResponse<ResponseDto>>;
 enable: (params: {
  laboratory: LaboratoryModel;
  token: string;
 }) => Promise<AxiosResponse<ResponseDto>>;
 disable: (params: {
  laboratory: LaboratoryModel;
  token: string;
 }) => Promise<AxiosResponse<ResponseDto>>;
 search: (params: { search: Search }) => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
 listCategory: (category: string) => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
}
export type { LaboratoryController };
