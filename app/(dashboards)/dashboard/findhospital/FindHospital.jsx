// app/(dashboards)/dashboard/find/page.jsx
'use client'

import { useState } from 'react'
import HospitalCard from '../../../components/hospitalCard/HospitalCard'
import hospitals from '../../../../data/hospitals.json'

export default function FindHospitalPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-center">
        <h2 className="text-lg font-semibold text-green-700">Verified & Trusted Hospitals</h2>
        <p className="text-gray-700 mt-1 text-sm">
          Every hospital listed below has been verified for safety, credibility, and active participation in blood donation. You can trust your donation reaches the right hands.
        </p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for hospitals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHospitals.map((hospital, idx) => (
          <HospitalCard key={idx} hospital={hospital} />
        ))}
      </div>
    </div>
  )
}
