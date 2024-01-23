
import { ServiceLaboratory } from '@/mvc/services';
import { Search } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';

const service: ServiceLaboratory = ServiceLaboratory.getService();
const useLaboratory = () => {
 const [existError, setExistError] = useState<boolean>(false);
 const [messageError, setMessageError] = useState<string>('');

 /* create laboratory */
 const create = async (
  values: LaboratoryModel,
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
 /* edit laboratory */
 const edit = async (
  values: LaboratoryModel,
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
 /* disable laboratory */
 const disable = async (
  values: LaboratoryModel,
  token: string,
 ): Promise<AxiosResponse<ResponseDto> | undefined> => {
  try {
   return await service.disable(values, token);
  } catch (error) {
   // console.log(error);
   setExistError(true);
  }
  return undefined;
 };

 /* enable laboratory */
 const enable = async (
  values: LaboratoryModel,
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

 /* search all laboratories */
 const search = async (
  search: Search,
 ): Promise<
  | AxiosResponse<{
     data: LaboratoryDto[];
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
     data: LaboratoryDto;
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
     data: LaboratoryDto[];
    }>
  | undefined
 > => {
  try {
   return await service.showDisable();
  } catch (error) {
   // console.log(error)
   setExistError(true);
  }
  return undefined;
 };

 /* show all enable */
 const listEnableds = async (): Promise<
  | AxiosResponse<{
     data: LaboratoryDto[];
    }>
  | undefined
 > => {
  try {
   return await service.showEnable();
  } catch (error) {
   // console.log(error)
   setExistError(true);
  }
  return undefined;
 };

 /* show all enable */
 const listCategory = async (
  category: string,
 ): Promise<
  | AxiosResponse<{
     data: LaboratoryDto[];
    }>
  | undefined
 > => {
  try {
   return await service.listCategory(category);
  } catch (error) {
   // console.log(error)
   setExistError(true);
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
  listCategory,
  listDisableds,
  existError,
  messageError,
 };
};
export { useLaboratory };
