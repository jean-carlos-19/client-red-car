import { ServiceCategory } from '@/mvc/services';

const service: ServiceCategory = ServiceCategory.getService();

const getEnabled = async (): Promise<CategoryDto[]> => {
    try {
        const result = await service.showEnable();
        return result.data.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las categorias', error);
        throw new Error('Ocurrio un error al obtener las categorias');
    }
};
const getDisabled = async (): Promise<CategoryDto[]> => {
    try {
        const result = await service.showDisable();
        return result.data.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las categorias', error);
        throw new Error('Ocurrio un error al obtener las categorias');
    }
};

const create = async (category: CategoryModel): Promise<ResponseDto> => {
    try {
        const result = await service.create({ category, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las categorias', error);
        throw new Error('Ocurrio un error al obtener las categorias');
    }
};

const edit = async (category: CategoryModel): Promise<ResponseDto> => {
    try {
        const result = await service.edit({ category, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las categorias', error);
        throw new Error('Ocurrio un error al obtener las categorias');
    }
};

const enable = async (category: CategoryModel, token: string): Promise<ResponseDto> => {
    try {
        const result = await service.enable({ category, token });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las categorias', error);
        throw new Error('Ocurrio un error al obtener las categorias');
    }
};

const disable = async (category: CategoryModel, token: string): Promise<ResponseDto> => {
    try {
        const result = await service.disable({ category, token });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las categorias', error);
        throw new Error('Ocurrio un error al obtener las categorias');
    }
};

const find = async (id: string): Promise<CategoryDto> => {
    try {
        const result = await service.find({ id });
        return result.data.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las categorias', error);
        throw new Error('Ocurrio un error al obtener las categorias');
    }
};
const category = Object.freeze({
    getEnabled,
    getDisabled,
    create,
    edit,
    enable,
    disable,
    find,
});
export { category };
