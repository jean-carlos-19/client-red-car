import { ServiceProduct } from '@/mvc/services';

const service: ServiceProduct = ServiceProduct.getService();

const getEnableds = async (): Promise<ResponseArraySA<ProductDto>> => {
 try {
  const result = await service.showEnable();
  return { data: result.data.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las productos', error);
 }
 return { data: null, error: 'Ocurrio un error al obtener las productos' };
};
const getDisableds = async (): Promise<ResponseArraySA<ProductDto>> => {
 try {
  const result = await service.showDisable();
  return { data: result.data.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las productos', error);
 }
 return { data: null, error: 'Ocurrio un error al obtener las productos desabilitadas' };
};

const create = async (
 category: ProductModel,
 token: string,
): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.create(category, token);
  return { data: result.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las productos', error);
 }
 return { data: null, error: 'Ocurrio un error al crear las productos' };
};

const edit = async (
 category: ProductModel,
 token: string,
): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.edit(category, token);
  return { data: result.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las productos', error);
 }
 return { data: null, error: 'Ocurrio un error al editar las productos' };
};

const enable = async ({
 id,
 product,
 token,
}: {
 id: string;
 product: string;
 token: string;
}): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.enable(id, product, token);
  return { data: result.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las productos', error);
 }
 return { data: null, error: 'Ocurrio un error al habilitar las productos' };
};

const disable = async ({
 id,
 product,
 token,
}: {
 id: string;
 product: string;
 token: string;
}): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.disable(id, product, token);
  return { data: result.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las productos', error);
 }
 return { data: null, error: 'Ocurrio un error al desabilitar las productos' };
};

const product = Object.freeze({
        getEnableds,
        getDisableds,
        create,
        edit,
        enable,
        disable,
});
export { product };
