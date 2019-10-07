import axios from 'axios'
// import { rejects } from 'assert'

axios.defaults.baseURL = 'http://localhost:3001/api'

const appService = {
  getPosts (categoryId) {
    return new Promise((resolve) => {
      axios.get(`/publications/category/${categoryId}`)
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
