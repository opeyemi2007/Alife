'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiUser, FiSearch, FiFileText, FiClock, FiSettings, FiLogOut } from 'react-icons/fi'
import logo from '@/public/alifenobg-Logo.png'
import Image from 'next/image'

const navLinks = [
  { label: 'Profile', href: '/dashboard', icon: <FiUser /> },
  { label: 'Find Hospital', href: '/dashboard/findhospital', icon: <FiSearch /> },
  { label: 'Request', href: '/dashboard/request', icon: <FiFileText /> },
  { label: 'History', href: '/dashboard/history', icon: <FiClock /> },
  { label: 'Settings', href: '/dashboard/settings', icon: <FiSettings /> },
  { label: 'Logout', href: '/logout', icon: <FiLogOut /> }
]

export default function Sidebar({ isOpen }) {
  const pathname = usePathname()

  return (
    <aside className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 fixed md:static top-0 left-0 h-full w-55 bg-white shadow-md py-6 px-2 overflow-y-auto transition-transform duration-300 z-40`}>
      <Image
      src={logo}
      width={100}
      height={100}
      alt='alife-logo'
      />
      <nav className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 text-sm font-medium px-3 py-2 rounded hover:bg-red-50 transition-all ${
              pathname === link.href ? 'bg-red-100 text-red-700' : 'text-gray-600'
            }`}
          >
            <span className="text-lg">{link.icon}</span>
            <span className="truncate">{link.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
