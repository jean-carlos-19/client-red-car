import { Search } from '@/types';
import { AxiosResponse } from 'axios';

interface LaboratoryController {
 getAllProductsEnabled: () => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
 getAllProductsDisabled: () => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
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
 getAllLaboratoriesByCategory: ({
  category,
 }: {
  category: string;
 }) => Promise<AxiosResponse<{ data: LaboratoryDto[] }>>;
}
export type { LaboratoryController };
