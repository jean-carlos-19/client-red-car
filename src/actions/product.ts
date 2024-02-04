import { ServiceProduct } from '@/mvc/services';

const service: ServiceProduct = ServiceProduct.getService();

const getAllProductsEnabled = async (): Promise<ProductDto[]> => {
    try {
        const result = await service.getAllProductsEnabled();
        return result.data.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
};
const getAllProductsDisabled = async (): Promise<ProductDto[]> => {
    try {
        const result = await service.getAllProductsDisabled();
        return result.data.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
};

const create = async (product: ProductModel): Promise<ResponseDto> => {
    try {
        const result = await service.create({ product, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
};

const edit = async (product: ProductModel): Promise<ResponseDto> => {
    try {
        const result = await service.edit({ product, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
};

const enable = async ({ id, product }: { id: string; product: string }): Promise<ResponseDto> => {
    try {
        const result = await service.enable({ id, product, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
};

const disable = async ({ id, product }: { id: string; product: string }): Promise<ResponseDto> => {
    try {
        const result = await service.disable({ id, product, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las productos', error);
        throw new Error('Ocurrio un error al obtener las productos');
    }
};

const product = Object.freeze({
    getAllProductsEnabled,
    getAllProductsDisabled,
    create,
    edit,
    enable,
    disable,
});
export { product };
