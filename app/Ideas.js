import Loading from './Loading.js'
import Idea from './Idea.js'

export default function Ideas({ ideas, location }) {
  console.log('IDEAS', ideas)
  return (
    <div>
      {
        !ideas.length ?
        <Loading/>
        :
        <>
          <p className="text-center mt-10 text-2xl">Showing date ideas for {location}</p>
          <div className="my-3 py-5 text-center bg-emerald-400 rounded-lg shadow-xl">
            {ideas.map((idea, idx) => {
              return <div className="my-5 mx-7 p-5 bg-emerald-500 rounded-xl" key={idx}>
                        <Idea idx={idx} idea={idea} location={location}/>
                      </div>
            })}
          </div>
        </>
      }
    </div>
  )
}