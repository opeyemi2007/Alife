// app/auth/hospital/login.jsx

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HospitalLogin() {
  const [form, setForm] = useState({
    credential: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Hospital Login:', form)
    // add login logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Hospital Login</h2>

        <input
          type="text"
          name="credential"
          value={form.credential}
          onChange={handleChange}
          placeholder="Email or Phone Number"
          required
          className="input"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="input mt-4"
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 mt-6 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link href="/auth/hospital/register" className="text-blue-600 underline">
            Sign Up
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
