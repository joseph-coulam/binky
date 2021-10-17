<template>
  <Layout>
    <div class="max-w-4xl mx-auto px-6 my-32">
      <div class="post-title mb-4">
        <h1 class="text-2xl font-bold mb-2 post-title__text">
        </h1>
        <Heading :heading="$page.post.title" textDirection="left" textSize="large" />
        <PostMeta :post="$page.post" />
      </div>

      <div class="post content-box">
        <div class="post__header">
          <g-image
            alt="Cover image"
            class="post__image w-full object-cover mb-4"
            v-if="$page.post.cover_image"
            :src="$page.post.cover_image"
          />
        </div>

        <PostTags class="mb-4" :post="$page.post" />
        <div class="post__content text-2xl" v-html="$page.post.content" />
      </div>
    </div>
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Heading from '~/components/Heading.vue'

export default {
  components: {
    PostMeta,
    PostTags,
    Heading
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.post {
  &__image {
    border: 10px solid;
    border-image: url('../assets/images/ui-outline-purple.png') 10;
    background-color: #9a51d9;
    max-height: 300px;
  }
  &__content{
    p {
      @apply mb-8;
    }
  }
}
</style>
