import axios from 'axios'
let token = ''
export default axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
