import { NextResponse } from 'next/server'
import axios from 'axios'
import dotenv from 'dotenv'

import formatIdeas from '../../../helpers/formatIdeas.js'

dotenv.config()

const KEY = `Bearer ${process.env.NEXT_PUBLIC_YELP_KEY}`
const URL = 'https://api.yelp.com/v3/businesses/search'

export async function POST(req, res) {
  const data = await req.json()
  const {idea, location} = data.data

  let term = idea.title.replace('"', '')

  let result = await axios({
    method: 'get',
    url: URL,
    headers: {
      'Authorization': KEY,
      'accept': 'application/json'
    },
    params: {
      location,
      term,
      sort_by: 'rating',
      limit: 5
    }
  })

  let related = result.data.businesses

  console.log(related)

  return NextResponse.json(related)
}