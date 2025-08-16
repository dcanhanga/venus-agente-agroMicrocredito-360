import axios from 'axios'
const baseURL = 'https://venus-agrocredito-api.onrender.com'

const api = axios.create({
  baseURL,
})

export { api }
