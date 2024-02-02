import { ServiceUser } from '@/mvc/services';

const service: ServiceUser = ServiceUser.getService();

const login = async (user: LoginModel): Promise<LoginDto> => {
    try {
        const result = await service.login(user);
        return result.data
    } catch (error) {
        console.error('Ocurrio un error al obtener las usuarios', error);
        throw new Error('Ocurrio un error al obtener las usuarios');
    }
};

const register = async (user: RegisterModel): Promise<ResponseDto> => {
    try {
        const result = await service.create(user);
        return result.data
    } catch (error) {
        console.error('Ocurrio un error al obtener las usuarios', error);
        throw new Error('Ocurrio un error al obtener las usuarios');
    }
};
const user = Object.freeze({
    login,
    register,
});

export { user };
