<template>
  <div class="content">
    <div v-if="this.isAuthenticated">
      Hello user!
      <button v-on:click="logout()" class="button is-primary">
        Logout
      </button>
    </div>
    <div v-else >
      <h2>Login</h2>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Email</label>
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <input v-model="email" class="input" type="text" placeholder="Your email">
          </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <input v-model="password" class="input" type="password" placeholder="Your password">
          </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <button v-on:click="login()" class="button is-primary">
            Login
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import appService from '../app.service.js'

  export default {
    data () {
      return {
        email: '',
        password: '',
        isAuthenticated: false
      }
    },
    methods: {
      login () {
        appService.login({ email: this.email, password: this.password })
          .then((data) => {
            window.localStorage.setItem('token', data.token)
            window.localStorage.setItem('expiration', data.expiration)
            this.isAuthenticated = true
            this.email = ''
            this.password = ''
          })
          .catch(() => {
          })
      },
      logout () {
        window.localStorage.setItem('token', null)
        window.localStorage.setItem('expiration', null)
        this.isAuthenticated = false
      }
    },
    created () {
      let expiration = window.localStorage.getItem('expiration')
      let unixTimestamp = new Date().getTime() / 1000
      if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
        this.isAuthenticated = true
      }
    },
    updated () {
      // let expiration = window.localStorage.getItem('expiration')
      // let unixTimestamp = new Date().getTime() / 1000
      // if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
      //   this.isAuthenticated = true
      // }
    }
  }
</script>
