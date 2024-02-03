interface AuthAdapter {
 id: string;
 name: string;
 email: string;
 user: string;
 token: string;
}

interface SessionProps {
 session: Session;
 token?: JWT;
}

interface JWTProps {
 token: JWT;
 account: Account | null;
}
