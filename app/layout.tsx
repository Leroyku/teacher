import { Rubik } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.scss';

const rubik = Rubik({ subsets: ['cyrillic'], display: 'swap' });
const rubik_one = localFont({
  src: './fonts/RubikOne-Regular.ttf',
  variable: '--font-title',
});
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
      <body className={`${overdoze.variable} ${rubik_one.variable} ${rubik.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
