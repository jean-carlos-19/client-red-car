import { ServiceProduct } from '@/mvc/services';

const service: ServiceProduct = ServiceProduct.getService();

const getEnabled = async (): Promise<ProductDto[]> => {
 try {
  const result = await service.showEnable();
  return result.data.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las productos', error);
  throw new Error('Ocurrio un error al obtener las productos');
 }
};
const getDisabled = async (): Promise<ProductDto[]> => {
 try {
  const result = await service.showDisable();
  return result.data.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las productos', error);
  throw new Error('Ocurrio un error al obtener las productos');
 }
};

const create = async (category: ProductModel): Promise<ResponseDto> => {
 try {
  const result = await service.create(category, '');
  return result.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las productos', error);
  throw new Error('Ocurrio un error al obtener las productos');
 }
};

const edit = async (category: ProductModel): Promise<ResponseDto> => {
 try {
  const result = await service.edit(category, '');
  return result.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las productos', error);
  throw new Error('Ocurrio un error al obtener las productos');
 }
};

const enable = async ({ id, product }: { id: string; product: string }): Promise<ResponseDto> => {
 try {
  const result = await service.enable(id, product, '');
  return result.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las productos', error);
  throw new Error('Ocurrio un error al obtener las productos');
 }
};

const disable = async ({ id, product }: { id: string; product: string }): Promise<ResponseDto> => {
 try {
  const result = await service.disable(id, product, '');
  return result.data;
 } catch (error) {
  console.error('Ocurrio un error al obtener las productos', error);
  throw new Error('Ocurrio un error al obtener las productos');
 }
};

const product = Object.freeze({
 getEnabled,
 getDisabled,
 create,
 edit,
 enable,
 disable,
});
export { product };
