// app/(dashboards)/dashboard/profile/page.jsx
'use client'

import Image from 'next/image'
import { FiEdit2 } from 'react-icons/fi'

export default function ProfilePage() {
  const donor = {
    fullName: 'Opeyemi Adio',
    age: 18,
    gender: 'Male',
    bloodGroup: 'O+',
    email: 'opeyemi@example.com',
    phone: '+234 810 123 4567',
    location: 'Lagos, Nigeria',
    profilePic: '/profilepc.jpeg'
  }

  const achievements = [
    '🎖️ First Donation Completed',
    '🩸 Donated 3 Times',
    '🌟 Lifesaver Badge Earned'
  ]

  const tips = [
    'Stay hydrated before and after donation.',
    'Eat a healthy meal rich in iron.',
    'Avoid strenuous activity for 24 hours post-donation.',
    'Donate regularly to maintain blood supply.'
  ]

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-3xl mx-auto">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={donor.profilePic}
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
        <h2 className="text-xl font-semibold text-gray-800">{donor.fullName}</h2>
        <p className="text-sm text-gray-500">{donor.email}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-gray-700">
        <div>
          <p className="font-medium">Age</p>
          <p>{donor.age}</p>
        </div>
        <div>
          <p className="font-medium">Blood Group</p>
          <p>{donor.bloodGroup}</p>
        </div>
        <div>
          <p className="font-medium">Gender</p>
          <p>{donor.gender}</p>
        </div>
        <div>
          <p className="font-medium">Phone Number</p>
          <p>{donor.phone}</p>
        </div>
        <div>
          <p className="font-medium">Location</p>
          <p>{donor.location}</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="inline-flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition">
          <FiEdit2 className="text-sm" /> Edit Profile
        </button>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">🏅 Achievements</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {achievements.map((achieve, idx) => (
            <li key={idx}>{achieve}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Blood Health Tips</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
