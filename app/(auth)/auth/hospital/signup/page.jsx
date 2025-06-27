// app/auth/hospital/register.jsx

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HospitalRegister() {
  const [form, setForm] = useState({
    name: '',
    address: '',
    localGov: '',
    email: '',
    phone: '',
    password: '',
    confirm: '',
    terms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Hospital Register:', form)
    // Add backend logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Hospital Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Hospital Name"
          value={form.name}
          onChange={handleChange}
          required
          className="input"
        />

        <input
          type="text"
          name="address"
          placeholder="Office Address"
          value={form.address}
          onChange={handleChange}
          required
          className="input mt-4"
        />

        <input
          type="text"
          name="localGov"
          placeholder="Local Government"
          value={form.localGov}
          onChange={handleChange}
          required
          className="input mt-4"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="input mt-4"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="input mt-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="input mt-4"
        />

        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={handleChange}
          required
          className="input mt-4"
        />

        <div className="flex items-center mt-4 text-sm">
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
            required
            className="mr-2"
          />
          <label htmlFor="terms">I agree to the terms & conditions</label>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 mt-6 rounded"
        >
          Register
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/auth/hospital/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
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
