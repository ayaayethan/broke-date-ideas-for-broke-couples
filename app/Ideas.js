export default function Ideas({ ideas }) {
  return (
    <div>
      {
        !ideas.length ?
        <p>Generating Date Ideas</p>
        :
        ideas.map(idea => {
          return <p>{idea}</p>
        })
      }
    </div>
  )
}