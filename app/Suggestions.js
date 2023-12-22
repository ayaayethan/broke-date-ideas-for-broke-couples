export default function Suggestions({ suggestions }) {
  return (
    <ul>
      {suggestions?.map(suggestion => {
        return (
          <li key={suggestion.id}>
            <span>{suggestion.name}</span>
            <a href={suggestion.url} target="_blank">
              <img src={suggestion.image_url} alt={suggestion.alias}/>
            </a>
          </li>
        )
      })}
    </ul>
  )
}