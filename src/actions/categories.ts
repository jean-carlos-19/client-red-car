'use server';
import { pinoLogger } from '@/lib/pino-logger';
import { ServiceCategory } from '@/mvc/services';

const service: ServiceCategory = ServiceCategory.getService();

export async function getAllCategoriesEnabled(): Promise<CategoryDto[]> {
 try {
  const result = await service.getAllProductsEnabled();
  return result.data.data;
 } catch (error) {
  if (error instanceof Error) {
   pinoLogger.error('Ocurrio un error al obtener las categorias', error);
  }
  throw new Error('Ocurrio un error al obtener las categorias');
 }
}
export async function getAllCategoriesDisabled(): Promise<CategoryDto[]> {
 try {
  const result = await service.getAllProductsDisabled();
  return result.data.data;
 } catch (error) {
  if (error instanceof Error) {
   pinoLogger.error('Ocurrio un error al obtener las categorias', error);
  }
  throw new Error('Ocurrio un error al obtener las categorias');
 }
}

export async function createCategory(category: CategoryModel): Promise<ResponseDto> {
 try {
  const result = await service.create({ category, token: '' });
  return result.data;
 } catch (error) {
  if (error instanceof Error) {
   pinoLogger.error('Ocurrio un error al obtener las categorias', error);
  }
  throw new Error('Ocurrio un error al obtener las categorias');
 }
}

export async function editCategory(category: CategoryModel): Promise<ResponseDto> {
 try {
  const result = await service.edit({ category, token: '' });
  return result.data;
 } catch (error) {
  if (error instanceof Error) {
   pinoLogger.error('Ocurrio un error al obtener las categorias', error);
  }
  throw new Error('Ocurrio un error al obtener las categorias');
 }
}

export async function enableCategory(category: CategoryModel, token: string): Promise<ResponseDto> {
 try {
  const result = await service.enable({ category, token });
  return result.data;
 } catch (error) {
  if (error instanceof Error) {
   pinoLogger.error('Ocurrio un error al obtener las categorias', error);
  }
  throw new Error('Ocurrio un error al obtener las categorias');
 }
}

export async function disableCategory(
 category: CategoryModel,
 token: string,
): Promise<ResponseDto> {
 try {
  const result = await service.disable({ category, token });
  return result.data;
 } catch (error) {
  if (error instanceof Error) {
   pinoLogger.error('Ocurrio un error al obtener las categorias', error);
  }
  throw new Error('Ocurrio un error al obtener las categorias');
 }
}

export async function findCategory(id: string): Promise<CategoryDto> {
 try {
  const result = await service.find({ id });
  return result.data.data;
 } catch (error) {
  if (error instanceof Error) {
   pinoLogger.error('Ocurrio un error al obtener las categorias', error);
  }
  throw new Error('Ocurrio un error al obtener las categorias');
 }
}
