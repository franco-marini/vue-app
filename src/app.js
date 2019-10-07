import Vue from 'vue'
import store from '../src/vuex'
import AppLayot from './theme/Layout.vue'
import router from './router'

const app = new Vue({
  router,
  ...AppLayot,
  store
})

export { app, router, store }
