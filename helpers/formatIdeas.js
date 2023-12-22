export default function formatIdeas(ideas) {
  let res = []

  for (let i = 0; i < ideas.length; i += 2) {
    res.push({
      title: ideas[i],
      description: ideas[i + 1]
    })
  }

  return res;
}