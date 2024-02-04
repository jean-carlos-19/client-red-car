import { Search } from '@/types';
import { AxiosResponse } from 'axios';
interface CategoryController {
 create: (params: {
  category: CategoryModel;
  token: string;
 }) => Promise<AxiosResponse<ResponseDto>>;
 edit: (params: { category: CategoryModel; token: string }) => Promise<AxiosResponse<ResponseDto>>;
 enable: (params: {
  category: CategoryModel;
  token: string;
 }) => Promise<AxiosResponse<ResponseDto>>;
 disable: (params: {
  category: CategoryModel;
  token: string;
 }) => Promise<AxiosResponse<ResponseDto>>;
 search: (params: { search: Search }) => Promise<AxiosResponse<{ data: CategoryDto[] }>>;
 find: (params: { id: string }) => Promise<AxiosResponse<{ data: CategoryDto }>>;
 showDisable: () => Promise<AxiosResponse<{ data: CategoryDto[] }>>;
 showEnable: () => Promise<AxiosResponse<{ data: CategoryDto[] }>>;
}
export type { CategoryController };
