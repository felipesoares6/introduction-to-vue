import axios from 'axios'
import { getPeople } from './people'

export const API = axios.create({
  baseURL: 'https://swapi.co/api/',
  timeout: 3000
})

export default {
  getPeople
}
