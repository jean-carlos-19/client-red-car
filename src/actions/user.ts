'use server';
import { pinoLogger } from '@/lib/pino-logger';
import { ServiceUser } from '@/mvc/services';

const service: ServiceUser = ServiceUser.getService();

export async function login(user: LoginModel): Promise<LoginDto> {
 try {
  const result = await service.login(user);
  return result.data;
 } catch (error) {
  if (error instanceof Error) {
   pinoLogger.error('Ocurrio un error al obtener las usuarios', error.message);
  }
  throw new Error('Ocurrio un error al obtener las usuarios');
 }
}

export async function register(user: RegisterModel): Promise<ResponseDto> {
 try {
  const result = await service.create(user);
  return result.data;
 } catch (error) {
  if (error instanceof Error) {
   pinoLogger.error('Ocurrio un error al obtener las usuarios', error.message);
  }
  throw new Error('Ocurrio un error al obtener las usuarios');
 }
}
