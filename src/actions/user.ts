'use server';
import { auth, nextAuthResult } from '@/app/auth';
import { pinoLogger } from '@/lib/pino-logger';
import { ServiceUser } from '@/mvc/services';
import { Session } from 'next-auth';
import { redirect } from 'next/navigation';

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

export async function authentication(user: LoginModel): Promise<string> {
  try {
    await nextAuthResult.signIn('credentials', { user: user.user, password: user.password });
  } catch (error) {
    console.log('error', error);
    return 'ocurrio un error'
  }
  redirect('admin/dashboard');
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

export async function getSession(): Promise<Session> {
  const session = await auth();
  if (session == null) throw new Error('Sesión expirada');
  return session;
}
