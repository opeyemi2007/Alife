// app/auth/page.jsx

import Link from 'next/link'
import Image from 'next/image'
import { FaHospitalAlt, FaUser } from 'react-icons/fa'
import image from '../../../../public/africa-humanitarian-aid-doctor-taking-care-patient (6).jpg'

export default function AuthEntry() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left image section */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src={image}
          alt="Donate Blood"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-red-600/30" />
      </div>

      {/* Right content section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 md:px-16 py-10 bg-white">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to ALIFE</h1>
        <p className="text-center text-gray-600 mb-10">Please choose your role to continue</p>

        <div className="flex flex-col gap-6 w-full max-w-sm">
          <Link href="/auth/hospital/signup" className="flex items-center justify-center gap-3 px-6 py-3 border border-red-600 text-red-600 hover:bg-red-50 rounded-md transition">
            <FaHospitalAlt /> Sign up as Hospital
          </Link>

          <Link href="/auth/donor/signup" className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-800 text-gray-800 hover:bg-gray-100 rounded-md transition">
            <FaUser /> Sign up as Donor
          </Link>
        </div>
      </div>
    </div>
  )
}
