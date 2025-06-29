import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google';
import { Providers } from './provider'
const inter = Inter({ subsets: ['latin'] });
import BodyWrapper from './components/bodywrapper/BodyWrapper';

export const metadata = {
  title: 'ALIFE',
  description: 'Find and connect with blood donors nearby.',
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}>
      <BodyWrapper>
        <Providers>
        {children}
        </Providers>
      </BodyWrapper>
      </body>
    </html>
  );
}
