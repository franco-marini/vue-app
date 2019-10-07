<template>
  <div class="content">
    <div v-if="this.isAuthenticated">
      Hello User!
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
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      ...mapGetters(['isAuthenticated'])
    },
    methods: {
      ...mapActions({
        logout: 'logout'
      }),
      login () {
        this.$store.dispatch('login', { email: this.email, password: this.password })
          .then(() => {
            this.password = ''
            this.email = ''
          })
      }
    }
  }
</script>
