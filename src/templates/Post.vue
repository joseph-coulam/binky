<template>
  <Layout>

    <div class="post relative py-20 px-6 sm:px-4 lg:px-8">
        <div class="w-100 mt-20 max-w-2xl mx-auto">
          <div class="text-center mb-6">
            <Heading heading="Blog Posts" textDirection="center" />
            <PostMeta :post="$page.post" />
          </div>
          <div class="content-box">
            <div class="post__header">
              <g-image
                alt="Cover image"
                class="post__image w-full object-cover mb-4"
                v-if="$page.post.cover_image"
                :src="$page.post.cover_image"
              />
            </div>

            <PostTags class="mb-4" :post="$page.post" />
            <div class="post__content text-xl" v-html="$page.post.content" />
          </div>
        </div>
      </div>
  </Layout>
</template>

<script>
import PostMeta from '~/components/global/PostMeta'
import PostTags from '~/components/global/PostTags'
import Heading from '~/components/global/Heading.vue'

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
  @apply text-white;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(31, 15, 31, 1) 0%,
    rgba(32, 25, 64, 1) 100%
  );

  &__image {
    border: 10px solid;
    border-image: url('../assets/images/ui-outline-purple.png') 10;
    max-height: 300px;
  }
  &__content{

    p {
      @apply mb-8;
    }
  }
}
</style>
