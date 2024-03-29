import { CategoryDto, ResponseDto } from '@/mvc/models/dto';
import { ServiceCategory } from '@/mvc/services';
import { CategoryModel } from '@/mvc/models';
import { AxiosError, AxiosResponse } from 'axios';
import { Search } from '@/types';
import { useState } from 'react';

const service: ServiceCategory = ServiceCategory.getService();
const useCategory = () => {
 const [existError, setExistError] = useState<boolean>(false);
 const [messageError, setMessageError] = useState<string>('');

 /* create category */
 const create = async (
  values: CategoryModel,
  token: string,
 ): Promise<AxiosResponse<ResponseDto> | undefined> => {
  try {
   return await service.create(values, token);
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data?.error as string);
  }
  return undefined;
 };
 /* edit category */
 const edit = async (
  values: CategoryModel,
  token: string,
 ): Promise<AxiosResponse<ResponseDto> | undefined> => {
  try {
   return await service.edit(values, token);
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data?.error as string);
  }
  return undefined;
 };
 /* disable category */
 const disable = async (
  values: CategoryModel,
  token: string,
 ): Promise<AxiosResponse<ResponseDto> | undefined> => {
  try {
   return await service.disable(values, token);
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data?.error as string);
  }
 };
 /* enable category */
 const enable = async (
  values: CategoryModel,
  token: string,
 ): Promise<AxiosResponse<ResponseDto> | undefined> => {
  try {
   return await service.enable(values, token);
  } catch (error) {
   const e: AxiosError<{ error: string }> = error as AxiosError<{
    error: string;
   }>;
   //    console.log(e.response?.data);
   setExistError(true);
   setMessageError(e.response?.data?.error as string);
  }
  return undefined;
 };
 /* search all categories */
 const search = async (
  search: Search,
 ): Promise<
  | AxiosResponse<{
     data: CategoryDto[];
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
   setMessageError(e.response?.data?.error as string);
  }
  return undefined;
 };

 const find = async (
  id: number,
 ): Promise<
  | AxiosResponse<{
     data: CategoryDto;
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
   setMessageError(e.response?.data?.error as string);
  }
  return undefined;
 };

 /* show all disable */
 const listDisableds = async (): Promise<
  | AxiosResponse<{
     data: CategoryDto[];
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
   setMessageError(e.response?.data?.error as string);
  }
  return undefined;
 };
 /* show all enable */
 const listEnableds = async (): Promise<
  | AxiosResponse<{
     data: CategoryDto[];
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
   setMessageError(e.response?.data?.error as string);
  }
  return undefined;
 };
 return {
  edit,
  find,
  create,
  search,
  enable,
  disable,
  listEnableds,
  listDisableds,
  existError,
  messageError,
 };
};
export { useCategory };
