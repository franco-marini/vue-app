<template>
  <div class="columns">
    <div class="column is-one-third" v-for="post in posts" v-bind:key="post._id">
        <app-post :link="post.link">
          <h3 slot="title" v-html="post.title"></h3>
          <span slot="content" v-html="post.content"></span>
        </app-post>
    </div>
  </div>
</template>
<script>
  import Post from './Post.vue'
  import appService from '../app.service'
  export default {
    components: {
      'app-post': Post
    },
    data () {
      return {
        id: this.$route.params.id,
        posts: []
      }
    },
    methods: {
      loadPosts () {
        let categoryId = '5d978bf9d36b042814bf9bd9'
        if (this.id === 'mobile') {
          categoryId = '5d978c01d36b042814bf9bda'
        }
        appService.getPosts(categoryId)
          .then(res => {
            const { publications } = res
            this.posts = publications
          })
      }
    },
    watch: {
      '$route' (to, from) {
        this.id = to.params.id
        this.loadPosts()
      }
    },
    created () {
      this.loadPosts()
    }
  }
</script>
