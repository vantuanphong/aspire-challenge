import axios from 'axios'

let url = 'http://localhost:5000/'

const instance = axios.create({
  baseURL: url
})

export default instance
