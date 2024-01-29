import { ServiceProduct } from '@/mvc/services';
import { Search } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const service: ServiceProduct = ServiceProduct.getService();

const useProduct = () => {
 const [existError, setExistError] = useState<boolean>(false);
 const [messageError, setMessageError] = useState<string>('');
 const session = useSession();

 /* create */
 const create = async (values: ProductModel): Promise<AxiosResponse<ResponseDto> | undefined> => {
  try {
   return await service.create(values, String(session.data?.user.token));
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };
 /* edit */
 const edit = async (values: ProductModel): Promise<AxiosResponse<ResponseDto> | undefined> => {
  try {
   return await service.edit(values, String(session.data?.user.token));
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };

 /* enable */
 const enable = async (
  idProduct: string,
  product: string,
 ): Promise<AxiosResponse<ResponseDto> | undefined> => {
  try {
   return await service.enable(idProduct, product, String(session.data?.user.token));
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };
 /* disable */
 const disable = async (
  idProduct: string,
  product: string,
 ): Promise<AxiosResponse<ResponseDto> | undefined> => {
  try {
   return await service.disable(idProduct, product, String(session.data?.user.token));
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };
 /* search all */
 const search = async (
  search: Search,
 ): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.search(search);
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };

 const find = async (
  id: string,
 ): Promise<
  | AxiosResponse<{
     data: ProductDto;
    }>
  | undefined
 > => {
  try {
   return await service.find(id);
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };

 /* show all disable */
 const listEnableds = async (): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.showEnable();
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };
 /* show all enable */
 const listDisableds = async (): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.showDisable();
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };
 /* show all categories */
 const listCategories = async (
  category: string,
 ): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.showCategory(category);
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };
 /* show all laboratories */
 const listLaboratories = async (
  category: string,
  laboratory: string,
 ): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.showLaboratory(category, laboratory);
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };
 /* search all categories */
 const searchCategory = async (
  product: string,
  category: string,
 ): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.searchCategory(product, category);
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };

 /* search all categories */
 const searchLaboratory = async (
  category: string,
  laboratory: string,
  search: Search,
 ): Promise<
  | AxiosResponse<{
     data: ProductDto[];
    }>
  | undefined
 > => {
  try {
   return await service.searchLaboratory(category, laboratory, search);
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data.error as string);
  }
  return undefined;
 };
 return {
  edit,
  find,
  create,
  enable,
  search,
  disable,
  listEnableds,
  listDisableds,
  searchCategory,
  listCategories,
  searchLaboratory,
  listLaboratories,
  existError,
  messageError,
 };
};
export { useProduct };
