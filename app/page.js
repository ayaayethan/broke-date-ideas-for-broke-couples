'use client'

import Ideas from './Ideas.js'

import OpenAI from 'openai'
import dotenv from 'dotenv'

import { useState, useEffect, useRef } from 'react'
import formatIdeas from '../helpers/formatIdeas.js'

import { Carousel } from 'flowbite-react'

dotenv.config()

const openai = new OpenAI({
  apiKey: `${process.env.NEXT_PUBLIC_OPENAI_KEY}`,
  dangerouslyAllowBrowser: true
})

export default function Home() {
  const [ ideas, setIdeas ] = useState([])
  const [ loadIdeas, setLoadIdeas ] = useState(false)
  const [ location , setLocation ] = useState('')

  const locationRef = useRef(null)
  const budgetRef = useRef(null)

  const handleGenerate = async () => {
    if (!locationRef.current.value.length || !budgetRef.current.value.length) {
      alert("Please enter appropriate values")
      return
    }

    let location = locationRef.current.value
    let budget = budgetRef.current.value

    setLoadIdeas(true)
    setLocation(location)

    const completion = await openai.chat.completions.create({
      messages: [{
        role: "system",
        content: `Give me 10 date ideas based in ${location} assuming we have a budget of up to ${budget} dollars.
                  Please title each idea appropriately without quotation marks and separate it with a colon. Exclude the estimated price of each date.`
      }],
      model: "gpt-3.5-turbo"
    });

    let ideas = completion.choices[0].message.content.split(/\b\d+\.\s*|:/g).filter(string => string !== '')
    let formatted = formatIdeas(ideas)

    setIdeas(formatted)
  }

  const handleReset = async () => {
    setLoadIdeas(false)
    setIdeas([])
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-24">
      <h1 className="font-bold text-4xl sm:text-6xl text-center bg-emerald-400 rounded-3xl p-11 shadow-xl">Broke Date Ideas for Broke Couples</h1>
      { !loadIdeas ?
        <div className="sm:flex sm:justify-evenly min-w-full border-separate">
          <form className="flex flex-col min-w-[70%] sm:min-w-[60%] md:min-w-[40%]">
            <input id="location"
                  ref={locationRef}
                  placeholder="Where are you located?"
                  autoComplete="off"
                  className="text-black py-2 rounded-full text-center mb-5"
                  ></input>
            <input type="number"
                  id="budget"
                  placeholder="What is your budget?"
                  ref={budgetRef}
                  className="text-black py-2 rounded-full text-center"
                  ></input>
          </form>
        </div>
        :
        <Ideas ideas={ideas} location={location} />
      }
      <button onClick={ !loadIdeas ? handleGenerate : handleReset }
      className="bg-emerald-400 hover:bg-emerald-300 text-4xl py-5 px-12 rounded-xl shadow-xl transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200"
      >{ !loadIdeas ? 'Generate' : 'Reset' }</button>
    </main>
  )
}
