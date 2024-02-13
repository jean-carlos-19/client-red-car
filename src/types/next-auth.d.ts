import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    interface Session extends DefaultSession {
        accessToken?: Account.accessToken;
        user: {
            id: string,
            username: string,
            email: string,
            fullName: string,
            iat: number;
            exp: number;
        } & DefaultSession['user'];
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken?: Account.accessToken;
    }
}
