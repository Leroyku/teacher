import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const montserrat = Montserrat({ subsets: ['cyrillic'], display: 'swap' });
const overdoze = localFont({
  src: './fonts/overdozesans.otf',
  variable: '--font-overdoze',
});

import Header from './components/header/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${overdoze.variable} ${montserrat.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
