const axios = require('axios')

async function main() {
  let results = await axios({
    method: 'get',
    url: 'https://api.yelp.com/v3/businesses/search',
    headers: {
      'Authorization': '',
      'accept': 'application/json'
    },
    params: {
      location: 'San Bruno',
      term: 'Mini Golf Fun',
      sort_by: 'rating',
      limit: 5
    }
  })

  console.log('DATA:', results.data.businesses)
}

main()