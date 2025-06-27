// app/auth/layout.jsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/alifenobg-Logo.png'


export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        {/* Top bar with logo and home link */}
        <div className="flex items-center justify-between px-6 border-b border-gray-200">
          <Link href="/">
            <Image
              src={logo}
              alt="ALIFE Logo"
              width={90}
              height={50}
              className="hover:scale-105 transition duration-300"
            />
          </Link>

          <Link href="/">
            <span className="text-sm text-red-600 hover:underline transition duration-300">
              ← Back to Home
            </span>
          </Link>
        </div>

        {/* Page transition wrapper */}
        <main className="flex-1 animate-fadeIn">
          {children}
        </main>

        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out;
          }
        `}</style>
      </body>
    </html>
  )
}
