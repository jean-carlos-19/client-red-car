import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { SessionAuth } from '@/context';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
 title: 'Carrito Rojo',
 description: 'created by piguavesof.com',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <body className={inter.className}>
    <SessionAuth>{children}</SessionAuth>
   </body>
  </html>
 );
}
