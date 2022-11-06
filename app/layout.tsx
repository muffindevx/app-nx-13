import '../styles/globals.css';
import { ReactNode } from 'react';
import { Open_Sans } from '@next/font/google';
import Navigation from './components/Navigation';

const font = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Blogsfera</title>
      </head>
      <body className={font.className}>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
