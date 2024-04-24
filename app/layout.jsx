import { Lato } from 'next/font/google';
import MainHeader from '@/components/MainHeader/MainHeader';
import NotificationContexts from '@/store/NotificationContexts';
import './globals.css';
import Wrapper from '@/components/Wrapper/Wrapper';

const lato = Lato({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'NextJs Events',
  description: 'Find a lot of great events',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <NotificationContexts>
          <Wrapper>
            <MainHeader />
            <main>{children}</main>
          </Wrapper>
        </NotificationContexts>
      </body>
    </html>
  );
}
