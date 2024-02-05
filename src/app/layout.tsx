import { SessionAuth } from '@/context';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
 title: 'Carrito Rojo',
 description: 'created by piguavesof.com',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <body className={`${inter.className} bg-helper`}>
   <SessionAuth>
    {children}
   </SessionAuth>
    <Toaster />
   </body>
  </html>
 );
}
