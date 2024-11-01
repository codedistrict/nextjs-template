import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';
import { Toaster } from 'react-hot-toast';

import ThemeRegistry from '../lib/muiRegistry';
import { Providers } from '../store/storeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.next-boilerplate.com'),
  title: {
    default: 'Next-Boilerplate',
    template: `%s | Next-Boilerplate`,
  },
  description: 'This is the description of Next-Boilerplate',
  verification: {
    google: 'google-site-verification=878787878',
  },
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} />
        <Toaster position="top-center" />
        <ThemeRegistry options={{ key: 'mui' }}>
          <>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Link href="/">Home</Link>
              <Link href="/testing">Test Page</Link>
              <Link href="/posts">Posts</Link>
              <Link href="/redux">Redux Counter</Link>
              <Link href="/mui">Mui</Link>
              <Link href="/ag-grid">AG Grid</Link>
              <Link href="/braintree">Braintree</Link>
              <Link href="/login">Login</Link>
            </div>
            <Providers>{children}</Providers>
          </>
        </ThemeRegistry>
      </body>
    </html>
  );
}
