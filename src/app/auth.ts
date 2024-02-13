import { login } from '@/actions/user';
import { authConfig } from '@/app/auth.config';
import { NEXTAUTH_SECRET } from '@/constants/env.';
import { pinoLogger } from '@/lib/pino-logger';
import jwt from 'jsonwebtoken';
import NextAuth, { NextAuthConfig, Session } from 'next-auth';
import { type JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
interface SessionProps {
    session: Session
    token?: JWT
  }
  
const authOptions: NextAuthConfig = {
    ...authConfig,
    secret: NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                user: { label: 'Username', type: 'text', placeholder: 'jsmith' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    const result = await login({
                        user: credentials?.user as string,
                        password: credentials?.password as string,
                    });
                    const payload = jwt.decode(result.token) as Payload
                    return payload
                } catch (error) {
                    if (error instanceof Error) pinoLogger.error(error.message);
                    throw error;
                }
            },
        }),
    ],
    session: { maxAge: 7200, strategy: 'jwt' },
    callbacks: {
        async session({ session, token }:SessionProps) {
            console.log('******************************');
            console.log('session', session);
            console.log('token', token);
            console.log('******************************');
            return session;
        },
        async jwt({ token, account, user }) {
          
            if (account != null && account.type === 'credentials') {
                token.userId = account.providerAccountId;
            }
            return { ...token, ...user }
        },
    },
    pages: {
        signIn: '/admin/login',
    },
};
export const nextAuthResult = NextAuth(authOptions);
export const { auth } = nextAuthResult;
