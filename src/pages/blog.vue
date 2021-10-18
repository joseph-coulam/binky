<template>
  <Layout :show-logo="false">
    <div class="blog relative py-20 px-6 sm:px-4 lg:px-8">
      <div class="w-100 mt-20 mb-14 max-w-2xl mx-auto">
        <Heading heading="Blog Posts" textDirection="center" />
        <p class="text-xl text-center leading-relaxed text-white">
          In Pixel Perfect you take on the role of a God overlooking the
          universe of Pixia. As you expand a civilization through different ages
          you’ll meet challenges along the way; from building up an empire to
          fighting off hordes of enemies - how long do you think you can succeed
          as a God?
        </p>
      </div>

      <div class="max-w-2xl mx-auto">
        <div class="posts">
          <PostCard
            v-for="edge in $page.posts.edges"
            :key="edge.node.id"
            :post="edge.node"
          />
        </div>
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
import PostCard from '~/components/global/PostCard.vue'
import Heading from '~/components/global/Heading.vue'

export default {
  components: {
    PostCard,
    Heading
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss">
  .blog {
    min-height: 100vh;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      rgb(18, 18, 40) 0%,
      rgb(43, 21, 69) 100%
    );
  }
</style>
