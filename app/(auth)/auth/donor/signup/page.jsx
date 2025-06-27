// app/auth/donor/register.jsx

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DonorRegister() {
  const [form, setForm] = useState({
    fullname: '',
    age: '',
    address: '',
    email: '',
    donatedBefore: 'no',
    bloodType: '',
    password: '',
    confirmPassword: '',
    agree: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Donor Registered:', form)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Donor Registration</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="fullname" value={form.fullname} onChange={handleChange} placeholder="Full Name" className="input" required />
          <input type="number" name="age" value={form.age} onChange={handleChange} placeholder="Age" className="input" required />
          <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Address" className="input" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input" required />

          <select name="bloodType" value={form.bloodType} onChange={handleChange} className="input" required>
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <div className="flex items-center gap-2">
            <label htmlFor="donatedBefore">Donated Before?</label>
            <select name="donatedBefore" value={form.donatedBefore} onChange={handleChange} className="input">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" className="input" required />
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="input" required />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} required />
          <label>I agree to the <Link href="/terms" className="text-blue-600 underline">terms and conditions</Link></label>
        </div>

        <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 mt-6 rounded">Register</button>

        <p className="mt-4 text-center text-sm">Already have an account? <Link href="/auth/donor/login" className="text-blue-600 underline">Login</Link></p>
      </form>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 0.375rem;
        }
      `}</style>
    </div>
  )
}
