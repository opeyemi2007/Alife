'use client'

import { useState } from 'react'

// Sample data (replace with your real hospital data or import from JSON)
const hospitals = [
  {
    name: 'Lagos State General Hospital',
    location: 'Lagos, Nigeria',
    phone: '+234 802 123 4567',
    slug: 'lagos-state-hospital'
  },
  {
    name: 'National Hospital Abuja',
    location: 'Abuja, Nigeria',
    phone: '+234 803 765 4321',
    slug: 'national-hospital-abuja'
  }
]

export default function RequestPage() {
  const [selectedHospital, setSelectedHospital] = useState(null)

  const handleBook = (hospital) => {
    setSelectedHospital(hospital)
  }

  return (
    <div className="p-6">
      {/* Top Message */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-center">
        <h2 className="text-lg font-semibold text-blue-700">
          Book an Appointment with Confidence
        </h2>
        <p className="text-gray-700 mt-1 text-sm">
          All hospitals listed here are verified and safe. Schedule a donation at your convenience and help save lives.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search hospitals by name or location..."
          className="w-full md:w-1/2 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <select className="px-4 py-2 border rounded text-sm focus:outline-none">
          <option value="">All Locations</option>
          <option value="lagos">Lagos</option>
          <option value="abuja">Abuja</option>
          <option value="ph">Port Harcourt</option>
        </select>
      </div>

      {/* Hospital Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hospitals.map((hospital, index) => (
          <div key={index} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-red-600">{hospital.name}</h3>
            <p className="text-sm text-gray-500">{hospital.location}</p>
            <p className="text-sm mt-1 text-gray-600">Phone: {hospital.phone}</p>
            <button
              onClick={() => handleBook(hospital)}
              className="mt-4 px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      {/* Appointment Modal/Form */}
      {selectedHospital && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
            <h2 className="text-lg font-bold text-red-600 mb-4">Schedule Appointment</h2>
            <p className="text-sm mb-2"><strong>Hospital:</strong> {selectedHospital.name}</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <input type="date" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
                <input type="time" className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Additional Notes (optional)</label>
                <textarea className="w-full border px-3 py-2 rounded" rows={3}></textarea>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedHospital(null)}
                  className="px-4 py-2 text-gray-600 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
