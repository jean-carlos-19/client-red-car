import { login } from '@/actions/user';
import { authConfig } from '@/app/auth.config';
import { pinoLogger } from '@/lib/pino-logger';
import NextAuth, { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthConfig = {
    ...authConfig,
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                user: { label: 'Username', type: 'text', placeholder: 'jsmith' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    const data = await login({
                        user: credentials?.user as string,
                        password: credentials?.password as string,
                    });
                    console.log('data', data);
                    return data.data;
                } catch (error) {
                    if (error instanceof Error) pinoLogger.error(error.message);
                    throw error;
                }
            },
        }),
    ],
    callbacks: {
        async session({ session, token }: SessionProps) {
            console.log('******************************');
            console.log('session', session);
            console.log('token', token);
            console.log('******************************');
            session.user = token as any;
            return session
        },
        async jwt({ token, account, user }) {
            if (account != null && account.type === 'credentials') {
                token.userId = account.providerAccountId
            }
            return { ...token, ...user };
        },
    },
    session: { maxAge: 7200, strategy: 'jwt' },
    pages: {
        signIn: '/admin/login',
    },
};
export const nextAuthResult = NextAuth(authOptions)
export const { auth } = nextAuthResult