import Loading from './Loading.js'
import Suggestions from './Suggestions.js'

export default function Ideas({ ideas }) {
  console.log('IDEAS', ideas)
  return (
    <div>
      {
        !ideas.length ?
        <Loading />
        :
        <div className="my-10 py-5 text-center bg-emerald-400 rounded-lg shadow-xl">
          {ideas.map((idea, idx) => {
            return <div className="my-5 mx-7 p-5 bg-emerald-500 rounded-xl" key={idx}>
                      <h2 className="text-xl sm:text-2xl">{idx + 1}. {idea.title}</h2>
                      <p className="text-sm sm:text-lg">{idea.description}</p>
                      <Suggestions suggestions={idea.suggestions}/>
                    </div>
          })}
        </div>
      }
    </div>
  )
}