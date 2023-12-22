'use client'

import CircularProgress from '@mui/material/CircularProgress'
import { useState, useEffect } from 'react'

export default function Loading() {
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
    <div className="flex flex-col justify-center items-center">
      <CircularProgress variant="determinate" value={progress} color="inherit"/>
      <p>Generating Date Ideas...</p>
    </div>
  )
}