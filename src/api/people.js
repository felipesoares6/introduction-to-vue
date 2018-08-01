import { API } from './index'

export const getPeople = () => API.get('/people').then(response => response.data)
