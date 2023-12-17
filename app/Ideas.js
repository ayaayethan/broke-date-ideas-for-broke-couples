'use client'

import CircularProgress from '@mui/material/CircularProgress'
import { useState, useEffect } from 'react'

export default function Ideas({ ideas }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        return prevProgress >= 100 ? 100 : prevProgress + 10
      })
    }, 800)

    return () => {
      clearInterval(timer)
    }
  })

  return (
    <div>
      {
        !ideas.length ?
        <div className="flex flex-col justify-center items-center">
          <p>Generating Date Ideas...</p>
          <CircularProgress variant="determinate" value={progress} color="inherit"/>
        </div>
        :
        <div className="my-10 py-5 text-center bg-emerald-400 rounded-lg shadow-xl">
          {ideas.map((idea, idx) => {
            if (idx % 2 === 0) {
              return <div className="my-5 mx-7 p-5 bg-emerald-600 rounded-xl" key={idx}>
                       <h2 className="text-xl sm:text-2xl">{(idx + 1) - (idx / 2)}. {idea}</h2>
                       <p className="text-sm sm:text-lg">{ideas[idx + 1]}</p>
                     </div>
            }
          })}
        </div>
      }
    </div>
  )
}