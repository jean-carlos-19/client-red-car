import { ServiceLaboratory } from '@/mvc/services';

const service: ServiceLaboratory = ServiceLaboratory.getService();

const getEnableds = async (): Promise<ResponseArraySA<LaboratoryDto>> => {
 try {
  const result = await service.showEnable();
  return { data: result.data.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
 }
 return { data: null, error: 'Ocurrio un error al obtener las laboratorios' };
};
const getDisabled = async (): Promise<ResponseArraySA<LaboratoryDto>> => {
 try {
  const result = await service.showDisable();
  return { data: result.data.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
 }
 return { data: null, error: 'Ocurrio un error al obtener las laboratorios desabilitadas' };
};

const create = async (
 category: LaboratoryModel,
 token: string,
): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.create(category, token);
  return { data: result.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
 }
 return { data: null, error: 'Ocurrio un error al crear las laboratorios' };
};

const edit = async (category: LaboratoryModel, token: string): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.edit(category, token);
  return { data: result.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
 }
 return { data: null, error: 'Ocurrio un error al editar las laboratorios' };
};

const enable = async (
 category: LaboratoryModel,
 token: string,
): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.enable(category, token);
  return { data: result.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
 }
 return { data: null, error: 'Ocurrio un error al habilitar las laboratorios' };
};

const disable = async (
 category: LaboratoryModel,
 token: string,
): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.disable(category, token);
  return { data: result.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
 }
 return { data: null, error: 'Ocurrio un error al desabilitar las laboratorios' };
};

const Laboratory = Object.freeze({
 getEnableds,
 getDisabled,
 create,
 edit,
 enable,
 disable,
});
export { Laboratory };
