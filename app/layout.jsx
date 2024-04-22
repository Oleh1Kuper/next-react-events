import { Lato } from 'next/font/google';
import MainHeader from '@/components/MainHeader/MainHeader';
import './globals.css';

const lato = Lato({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'NextJs Events',
  description: 'Find a lot of great events',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <MainHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
