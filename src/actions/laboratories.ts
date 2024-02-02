import { ServiceLaboratory } from '@/mvc/services';

const service: ServiceLaboratory = ServiceLaboratory.getService();

const getEnabled = async (): Promise<LaboratoryDto[]> => {
 try {
  const result = await service.showEnable();
  return result.data.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
  throw new Error('Ocurrio un error al obtener las laboratorios');
 }
};
const getDisabled = async (): Promise<LaboratoryDto[]> => {
 try {
  const result = await service.showDisable();
  return result.data.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
  throw new Error('Ocurrio un error al obtener las laboratorios');
 }
};

const create = async (category: LaboratoryModel): Promise<ResponseDto> => {
 try {
  const result = await service.create(category, '');
  return result.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
  throw new Error('Ocurrio un error al obtener las laboratorios');
 }
};

const edit = async (category: LaboratoryModel, token: string): Promise<ResponseDto> => {
 try {
  const result = await service.edit(category, '');
  return result.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
  throw new Error('Ocurrio un error al editar las laboratorios');
 }
};

const enable = async (category: LaboratoryModel): Promise<ResponseDto> => {
 try {
  const result = await service.enable(category, '');
  return result.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
  throw new Error('Ocurrio un error al obtener las laboratorios');
 }
};

const disable = async (category: LaboratoryModel): Promise<ResponseDto> => {
 try {
  const result = await service.disable(category, '');
  return result.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las laboratorios', error);
  throw new Error('Ocurrio un error al obtener las laboratorios');
 }
};

const Laboratory = Object.freeze({
 getEnabled,
 getDisabled,
 create,
 edit,
 enable,
 disable,
});
export { Laboratory };
