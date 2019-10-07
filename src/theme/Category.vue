<template>
  <div class="columns">
    <div class="column is-one-third" v-for="post in posts.publications" v-bind:key="post._id">
        <app-post :link="post.link">
          <h3 slot="title" v-html="post.title"></h3>
          <span slot="content" v-html="post.content"></span>
        </app-post>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import Post from './Post.vue'

  const fetchInitialData = (store, route) => {
    let categoryId = '5d978bf9d36b042814bf9bd9'
    if (route.params.id === 'mobile') {
      categoryId = '5d978c01d36b042814bf9bda'
    }
    return store.dispatch('updateCategory', categoryId)
  }

  export default {
    asyncData (store, route) {
      return fetchInitialData(store, route)
    },
    components: {
      'app-post': Post
    },
    computed: {
      ...mapGetters({
        posts: 'posts'
      })
    },
    methods: {
      loadPosts () {
        fetchInitialData(this.$store, this.$route)
      }
    },
    watch: {
      '$route' (to, from) {
        this.loadPosts()
      }
    },
    created () {
      this.loadPosts()
    }
  }
</script>
