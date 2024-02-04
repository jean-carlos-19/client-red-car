import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface SessionAuthProps {
 children: React.ReactNode;
}
const SessionAuth = (props: SessionAuthProps) => {
 return <SessionProvider>{props.children}</SessionProvider>;
};

export { SessionAuth };
