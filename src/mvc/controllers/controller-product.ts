import { Search } from '@/types';
import { AxiosResponse } from 'axios';

interface ProductController {
 showEnable: () => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 showDisable: () => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 find: (params: { id: string }) => Promise<AxiosResponse<{ data: ProductDto }>>;
 edit: (params: { product: ProductModel; token: string }) => Promise<AxiosResponse<ResponseDto>>;
 create: (params: { product: ProductModel; token: string }) => Promise<AxiosResponse<ResponseDto>>;
 search: (params: { search: Search }) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 searchLaboratory: (params: {
  category: string;
  laboratory: string;
  search: Search;
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
 showCategory: (params: { category: string }) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 searchCategory: (params: {
  product: string;
  category: string;
 }) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 showLaboratory: (params: {
  category: string;
  laboratory: string;
 }) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
}
export type { ProductController };
