'use client'

import openai from 'openai'
import dotenv from 'dotenv'

dotenv.config()

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-6xl text-center bg-emerald-400 rounded-3xl p-11 shadow-xl">Broke Date Ideas for Broke Couples &lt;3</h1>
      <p>Location:</p>
      <p>Budget:</p>
      <p>Likes:</p>
      <p>Dislikes:</p>
      <button>Generate</button>
    </main>
  )
}
