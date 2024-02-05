import { login } from '@/actions/user';
import { ServiceUser } from '@/mvc/services';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const service: ServiceUser = ServiceUser.getService();

const handler = NextAuth({
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
     return data.data;
    } catch (error) {
     pinoLogger.error(error);
     throw error;
    }
   },
  }),
 ],
 callbacks: {
  async session({ session, token }: SessionProps) {
   if (token !== undefined && session.user !== undefined) {
    session.user.id = token.accessToken;
   } else {
    throw new Error('Token is undefined');
   }
   return session;
  },
  async jwt({ token, account }: JWTProps) {
   if (account !== null && account.type === 'credentials') {
    token.id = account.providerAccountId;
   }
   return { ...token };
  },
 },
 session: { maxAge: 7200, strategy: 'jwt' },
 pages: {
  signIn: '/admin/login',
 },
});
export { handler };
