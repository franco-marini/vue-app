import axios from 'axios'
// import { rejects } from 'assert'

axios.defaults.baseURL = 'http://localhost:3001/api'

axios.interceptors.request.use((config) => {
  if (typeof window === 'undefined') {
    return config
  }
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Beaerer ${token}`
  }

  return config
})

const appService = {
  getPosts (categoryId) {
    return new Promise((resolve) => {
      axios.get(`/publications/category/${categoryId}`)
        .then(response => {
          resolve(response.data)
        })
    })
  },
  getProfile (userId) {
    return new Promise((resolve) => {
      axios.get(`/users/profile/${userId}`)
        .then(response => {
          resolve(response.data)
        })
    })
  },
  login (credentials) {
    return new Promise((resolve, reject) => {
      axios.post('/users/login', credentials)
        .then(response => {
          resolve(response.data)
        }).catch(error => {
          reject(error.status)
        })
    })
  }
}

export default appService
