'use client'

import Suggestions from './Suggestions.js'

import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Idea({ idea, idx, location }) {
  const [ suggestions, setSuggestions ] = useState([])
  const [ open, toggleOpen ] = useState(false)

  const generateSuggestions = async () => {
    await axios.post('/api/suggestions', {
      data: {
        idea,
        location
      }
    }).then(response => {
      setSuggestions(response.data)
    })
  }

  const toggle = async () => {
    await toggleOpen(!open)
  }

  useEffect(() => {
    if (open && suggestions.length === 0) {
      generateSuggestions()
    }

  }, [open])

  return (
    <>
      <div>
        <h2 className="text-xl sm:text-2xl">{idx + 1}. {idea.title}</h2>
        <p className="text-sm sm:text-lg">{idea.description}</p>
        <button onClick={toggle} className="text-xs sm:text-sm bg-emerald-600 px-5 py-2 rounded-md hover:bg-emerald-700 mt-2 transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-200">{ open ? 'Hide' : 'Show' } Related Ideas </button>
      </div>
      {
        open !== false &&
        <Suggestions suggestions={suggestions}/>
      }
    </>
  )
}