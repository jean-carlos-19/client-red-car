import { ServiceCategory } from '@/mvc/services';

const service: ServiceCategory = ServiceCategory.getService();

const getEnableds = async (): Promise<ResponseArraySA<CategoryDto>> => {
 try {
  const result = await service.showEnable();
  return { data: result.data.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las categorias', error);
 }
 return { data: null, error: 'Ocurrio un error al obtener las categorias' };
};
const getDisabled = async (): Promise<ResponseArraySA<CategoryDto>> => {
 try {
  const result = await service.showDisable();
  return { data: result.data.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las categorias', error);
 }
 return { data: null, error: 'Ocurrio un error al obtener las categorias desabilitadas' };
};

const create = async (category: CategoryModel): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.create(category, '');
  return { data: result.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las categorias', error);
 }
 return { data: null, error: 'Ocurrio un error al crear las categorias' };
};

const edit = async (category: CategoryModel): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.edit(category, '');
  return { data: result.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las categorias', error);
 }
 return { data: null, error: 'Ocurrio un error al editar las categorias' };
};

const enable = async (category: CategoryModel, token: string): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.enable(category, token);
  return { data: result.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las categorias', error);
 }
 return { data: null, error: 'Ocurrio un error al habilitar las categorias' };
};

const disable = async (
 category: CategoryModel,
 token: string,
): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.disable(category, token);
  return { data: result.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las categorias', error);
 }
 return { data: null, error: 'Ocurrio un error al desabilitar las categorias' };
};

const find = async (id: string): Promise<ResponseSA<CategoryDto>> => {
 try {
  const result = await service.find(id);
  return { data: result.data.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las categorias', error);
 }
 return { data: null, error: 'Ocurrio un error al obtener la categoria' };
};
const category = Object.freeze({
 getEnableds,
 getDisabled,
 create,
 edit,
 enable,
 disable,
 find,
});
export { category };
