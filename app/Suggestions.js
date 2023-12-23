import CircularProgress from '@mui/material/CircularProgress'
import { Carousel } from 'flowbite-react'

export default function Suggestions({ suggestions }) {
  return (
    <>
      {
        suggestions.length ?
        <div className="h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96 mt-3">
          <Carousel slide={false} indicators={false}>
            {suggestions.map(suggestion => {
              return (
                <div key={suggestion.id} className="h-full w-full bg-emerald-900">
                  <a href={suggestion.url} target="_blank"className="h-full w-full">
                    <img className="object-contain h-5/6 w-full" src={suggestion.image_url} alt={suggestion.alias}/>
                  </a>
                  <p className="text-sm sm:text-lg md:text-2xl">{suggestion.name}</p>
                </div>
              )
            })}
          </Carousel>
        </div>
        :
        <CircularProgress color="inherit" className="mt-4"/>
      }
    </>
  )
}
