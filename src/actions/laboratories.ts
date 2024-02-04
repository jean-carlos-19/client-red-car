'use server';
import { ServiceLaboratory } from '@/mvc/services';

const service: ServiceLaboratory = ServiceLaboratory.getService();

export async function getAllLaboratoriesEnabled(): Promise<LaboratoryDto[]> {
 try {
  const result = await service.getAllProductsEnabled();
  return result.data.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
  throw new Error('Ocurrio un error al obtener las laboratorios');
 }
}
export async function getAllLaboratoriesByCategory({
 category,
}: {
 category: string;
}): Promise<LaboratoryDto[]> {
 try {
  const result = await service.getAllLaboratoriesByCategory({ category });
  return result.data.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
  throw new Error('Ocurrio un error al obtener las laboratorios');
 }
}
export async function getAllLaboratoriesDisabled(): Promise<LaboratoryDto[]> {
 try {
  const result = await service.getAllProductsDisabled();
  return result.data.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
  throw new Error('Ocurrio un error al obtener las laboratorios');
 }
}

export async function createLaboratory(laboratory: LaboratoryModel): Promise<ResponseDto> {
 try {
  const result = await service.create({ laboratory, token: '' });
  return result.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
  throw new Error('Ocurrio un error al obtener las laboratorios');
 }
}

export async function editLaboratory(
 laboratory: LaboratoryModel,
 token: string,
): Promise<ResponseDto> {
 try {
  const result = await service.edit({ laboratory, token: '' });
  return result.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
  throw new Error('Ocurrio un error al editar las laboratorios');
 }
}

export async function enableLaboratory(laboratory: LaboratoryModel): Promise<ResponseDto> {
 try {
  const result = await service.enable({ laboratory, token: '' });
  return result.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
  throw new Error('Ocurrio un error al obtener las laboratorios');
 }
}

export async function disableLaboratory(laboratory: LaboratoryModel): Promise<ResponseDto> {
 try {
  const result = await service.disable({ laboratory, token: '' });
  return result.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
  throw new Error('Ocurrio un error al obtener las laboratorios');
 }
}
