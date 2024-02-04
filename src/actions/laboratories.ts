import { ServiceLaboratory } from '@/mvc/services';

const service: ServiceLaboratory = ServiceLaboratory.getService();

const getAllLaboratoriesEnabled = async (): Promise<LaboratoryDto[]> => {
    try {
        const result = await service.getAllProductsEnabled();
        return result.data.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las laboratorios', error);
        throw new Error('Ocurrio un error al obtener las laboratorios');
    }
};
const getAllLaboratoriesDisabled = async (): Promise<LaboratoryDto[]> => {
    try {
        const result = await service.getAllProductsDisabled();
        return result.data.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las laboratorios', error);
        throw new Error('Ocurrio un error al obtener las laboratorios');
    }
};

const create = async (laboratory: LaboratoryModel): Promise<ResponseDto> => {
    try {
        const result = await service.create({ laboratory, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las laboratorios', error);
        throw new Error('Ocurrio un error al obtener las laboratorios');
    }
};

const edit = async (laboratory: LaboratoryModel, token: string): Promise<ResponseDto> => {
    try {
        const result = await service.edit({ laboratory, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las laboratorios', error);
        throw new Error('Ocurrio un error al editar las laboratorios');
    }
};

const enable = async (laboratory: LaboratoryModel): Promise<ResponseDto> => {
    try {
        const result = await service.enable({ laboratory, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las laboratorios', error);
        throw new Error('Ocurrio un error al obtener las laboratorios');
    }
};

const disable = async (laboratory: LaboratoryModel): Promise<ResponseDto> => {
    try {
        const result = await service.disable({ laboratory, token: '' });
        return result.data;
    } catch (error) {
        console.error('Ocurrio un error al obtener las laboratorios', error);
        throw new Error('Ocurrio un error al obtener las laboratorios');
    }
};

const Laboratory = Object.freeze({
    getAllLaboratoriesEnabled,
    getAllLaboratoriesDisabled,
    create,
    edit,
    enable,
    disable,
});
export { Laboratory };
