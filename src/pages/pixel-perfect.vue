<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Splash :show-title="true" />

    <!-- List posts -->
	<div class="relative bg-gray-900">

    <div class="w-100 max-w-6xl mx-auto grid grid-cols-3 gap-6 py-16">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  
  </div>

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        ...on Post {
        id
        title
        path
        }
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Splash from '~/components/pixel-perfect/Splash.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Splash,
    PostCard
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss">

</style>
