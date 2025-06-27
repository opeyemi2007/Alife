'use client'

import { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { FiBell, FiUser, FiMenu } from 'react-icons/fi'

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content Wrapper */}
      <div className="flex flex-col flex-1">
        {/* Fixed Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 z-40">
          <div className="flex items-center gap-4">
            <FiMenu
              className="text-xl text-gray-600 cursor-pointer block md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
            <h1 className="text-lg font-semibold text-gray-600">Welcome Kingsley</h1>
          </div>
          <div className="flex items-center gap-4">
            <FiBell className="text-xl text-gray-600" />
            <FiUser className="text-xl text-gray-600" />
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  )
}
