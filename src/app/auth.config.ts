import { type NextAuthConfig } from 'next-auth';


export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/admin/login'
    },
    callbacks: {
        async authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !(auth?.user == null)
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
            if (isOnDashboard) {
                if (isLoggedIn) return true
                return false
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl))
            }
            return true
        },
    },
    providers: []
}
