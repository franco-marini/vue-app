import Vue from 'vue'
import AppLayot from './theme/Layout.vue'
import router from './router'

const app = new Vue({
  router,
  ...AppLayot
})

export { app, router }
