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
  export default {
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
        let categoryId = '5d978bf9d36b042814bf9bd9'
        if (this.$route.params.id === 'mobile') {
          categoryId = '5d978c01d36b042814bf9bda'
        }
        this.$store.dispatch('updateCategory', categoryId)
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
