/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
        NEXT_PUBLIC_API_RED_CAR_ORIGIN: process.env.NEXT_PUBLIC_API_RED_CAR_ORIGIN,
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
    images: {
        domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
    },
    experimental: {
        serverComponentsExternalPackages: ['cloudinary'],
    },
};

module.exports = nextConfig;
