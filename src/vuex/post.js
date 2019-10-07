import appService from '../app.service'

const state = {
  posts: [],
  category: 0
}

const getters = {
  posts: state => state.posts
}

const actions = {
  updateCategory (context, categoryId) {
    appService.getPosts(categoryId).then(data => {
      context.commit('updateCategory', { categoryId, posts: data })
    })
  }
}

const mutations = {
  updateCategory (state, category) {
    state.categoryId = category.categoryId
    state.posts = category.posts
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
