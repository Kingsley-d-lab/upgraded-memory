'use client'

import { useState } from 'react'

export default function Jokes() {
  const [joke, setJoke] = useState({ setup: '', punchline: '' })
  const [loading, setLoading] = useState(false)

  const fetchJoke = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://official-joke-api.appspot.com/random_joke')
      const data = await res.json()
      setJoke({ setup: data.setup, punchline: data.punchline })
    } catch (error) {
      setJoke({ setup: 'Oops!', punchline: 'Could not fetch joke' })
    }
    setLoading(false)
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-12 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-8">😂 Joke Generator</h1>
        
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg mb-8 min-h-32 flex flex-col justify-center">
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : joke.setup ? (
            <>
              <p className="text-lg font-semibold mb-4">{joke.setup}</p>
              <p className="text-2xl font-bold text-purple-600">{joke.punchline}</p>
            </>
          ) : (
            <p className="text-gray-500">Click button to get a joke!</p>
          )}
        </div>

        <button
          onClick={fetchJoke}
          disabled={loading}
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Get Another Joke'}
        </button>
      </div>
    </div>
  )
}
