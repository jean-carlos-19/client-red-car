import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
 interface Session extends DefaultSession {
  accessToken?: Account.accessToken;
  user: {
   id: string;
   name: string;
   email: string;
   user: string;
   token: string;
  } & DefaultSession['user'];
 }
}

declare module 'next-auth/jwt' {
 interface JWT {
  accessToken?: Account.accessToken;
 }
}
