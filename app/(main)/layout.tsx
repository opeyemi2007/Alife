import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ALIFE',
  description: 'Find and connect with blood donors nearby.',
}


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
