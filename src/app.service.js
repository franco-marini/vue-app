import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'

const appService = {
  getPosts (categoryId) {
    return new Promise((resolve) => {
      axios.get(`/data${categoryId}`)
        .then(response => {
          resolve(response.data)
        })
    })
  }
}

export default appService
