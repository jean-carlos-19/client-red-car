import { ServiceUser } from '@/mvc/services';

const service: ServiceUser = ServiceUser.getService();

const login = async (user: LoginModel): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.login(user);
  return { data: result.data.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las usuarios', error);
 }
 return { data: null, error: 'Ocurrio un error al obtener las usuarios' };
};

const register = async (user: RegisterModel): Promise<ResponseSA<ResponseDto>> => {
 try {
  const result = await service.create(user);
  return { data: result.data, error: null };
 } catch (error) {
  console.error('Ocurrio un error al obtener las usuarios', error);
 }
 return { data: null, error: 'Ocurrio un error al obtener las usuarios' };
};
const user = Object.freeze({
 login,
 register,
});

export { user };
