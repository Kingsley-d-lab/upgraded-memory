'use client'

import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Login successful! (Demo)')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-700">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">🔐 Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
