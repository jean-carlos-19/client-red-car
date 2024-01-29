import { Search } from '@/types';
import { AxiosResponse } from 'axios';

interface ProductController {
 showEnable: () => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 showDisable: () => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 find: (id: string) => Promise<AxiosResponse<{ data: ProductDto }>>;
 edit: (product: ProductModel, token: string) => Promise<AxiosResponse<ResponseDto>>;
 create: (product: ProductModel, token: string) => Promise<AxiosResponse<ResponseDto>>;
 search: (search: Search) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 searchLaboratory: (
  category: string,
  laboratory: string,
  search: Search,
 ) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 enable: (id: string, product: string, token: string) => Promise<AxiosResponse<ResponseDto>>;
 disable: (id: string, product: string, token: string) => Promise<AxiosResponse<ResponseDto>>;
 showCategory: (category: string) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 searchCategory: (
  product: string,
  category: string,
 ) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
 showLaboratory: (
  category: string,
  laboratory: string,
 ) => Promise<AxiosResponse<{ data: ProductDto[] }>>;
}
export type { ProductController };
