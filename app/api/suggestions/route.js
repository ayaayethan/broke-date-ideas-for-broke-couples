import { NextResponse } from 'next/server'
import axios from 'axios'
import dotenv from 'dotenv'

import formatIdeas from '../../../helpers/formatIdeas.js'

dotenv.config()

const KEY = `Bearer ${process.env.NEXT_PUBLIC_YELP_KEY}`
const URL = 'https://api.yelp.com/v3/businesses/search'

export async function POST(req, res) {
  const data = await req.json()
  const {ideas, date_location} = data.data

  let formatted = formatIdeas(ideas)
  let promises = []

  for (let i = 0; i < formatted.length; i++) {
    promises.push(axios({
      method: 'get',
      url: URL,
      headers: {
        'Authorization': KEY,
        'accept': 'application/json'
      },
      params: {
        location: date_location,
        term: formatted[i],
        sort_by: 'rating',
        limit: 5
      }
    }))
  }

  //TODO

  try {
    let results = await Promise.all(promises)
    results.forEach((suggestion, idx) => {
      formatted[idx].suggestions = suggestion.data.businesses;
    })
  } catch (error) {
    console.log(error)
  }

  return NextResponse.json(formatted)
}