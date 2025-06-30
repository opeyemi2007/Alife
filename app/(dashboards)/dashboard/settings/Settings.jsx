'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaUser, FaBell, FaLock, FaCheckCircle } from 'react-icons/fa'

export default function SettingsPage() {
  const [tab, setTab] = useState('profile')
  const [imagePreview, setImagePreview] = useState('/profilepc.jpeg')

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) setImagePreview(URL.createObjectURL(file))
  }

  const renderTab = () => {
    switch (tab) {
      case 'profile':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-6 mb-4">
              <Image
                src={imagePreview}
                alt="avatar"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <div className="space-x-2">
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                  id="profileImg"
                />
                <label htmlFor="profileImg" className="bg-blue-600 text-white px-4 py-1 rounded cursor-pointer">Upload New</label>
                <button className="text-red-500 border border-red-500 px-4 py-1 rounded">Delete Avatar</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="border px-3 py-2 rounded" placeholder="First Name" />
              <input className="border px-3 py-2 rounded" placeholder="Last Name" />
              <input className="border px-3 py-2 rounded" placeholder="Email" />
              <input className="border px-3 py-2 rounded" placeholder="Phone Number" />
              <select className="border px-3 py-2 rounded">
                <option>Male</option>
                <option>Female</option>
              </select>
              <input className="border px-3 py-2 rounded" placeholder="ID Number" />
              <input className="border px-3 py-2 rounded" placeholder="Residential Address" />
              <input className="border px-3 py-2 rounded" placeholder="Country" />
            </div>

            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">Save Changes</button>
          </div>
        )
      case 'password':
        return (
          <div className="space-y-4">
            <input className="border px-3 py-2 w-full rounded" type="password" placeholder="Current Password" />
            <input className="border px-3 py-2 w-full rounded" type="password" placeholder="New Password" />
            <input className="border px-3 py-2 w-full rounded" type="password" placeholder="Confirm New Password" />
            <button className="bg-blue-600 text-white px-6 py-2 rounded">Update Password</button>
          </div>
        )
      case 'notifications':
        return <p className="text-gray-600">🔔 You will receive appointment reminders and health tips.</p>
      case 'verification':
        return <p className="text-gray-600">✅ You are a verified donor. All details match hospital records.</p>
    }
  }

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
      {/* Left Menu */}
      <aside className="md:w-1/4 border-r bg-gray-50">
        <ul className="text-sm font-medium space-y-2 p-6">
          <li
            className={`flex items-center gap-2 p-2 rounded cursor-pointer ${tab === 'profile' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            onClick={() => setTab('profile')}
          >
            <FaUser /> Profile Settings
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded cursor-pointer ${tab === 'password' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            onClick={() => setTab('password')}
          >
            <FaLock /> Password
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded cursor-pointer ${tab === 'notifications' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            onClick={() => setTab('notifications')}
          >
            <FaBell /> Notifications
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded cursor-pointer ${tab === 'verification' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            onClick={() => setTab('verification')}
          >
            <FaCheckCircle /> Verification
          </li>
        </ul>
      </aside>

      {/* Right Panel */}
      <main className="flex-1 p-6">{renderTab()}</main>
    </div>
  )
}
