<template>
  <div class="aliased post-card relative">
    <div class="post-card__content flex flex-col h-full justify-between flex-grow bg-white text-black">

      <!-- Link -->
      <g-link class="post-card__link" :to="post.path">Link</g-link>

      <div class="post-card__header">
        <g-image alt="Cover image" v-if="post.cover_image" class="post-card__image" :src="post.cover_image" />
      </div>

      <div class="p-4 pb-0">
        <!-- <PostTags class="post-card__tags mb-4" :post="post" /> -->
        <h2 class="post-card__title text-xl font-bold mb-2" v-html="post.title" />
        <p class="post-card__description text-gray-500 text-xl overflow-hidden" v-html="post.description" />
      </div>

      <div class="p-4">
        <PostMeta class="post-card__meta bg-white text-black" :post="post" />
      </div>
      
    </div>

  </div>
</template>

<script>
import PostMeta from '~/components/global/PostMeta'
import PostTags from '~/components/global/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">


.post-card {

  @apply text-xl rounded-xl text-white;
  border: 6px solid;
  border-image: url('../../assets/images/ui-outline.png') 6;
  background-color: white;

  &__header {
    @apply overflow-hidden;
    border-bottom: 6px solid;
    border-image: url('../../assets/images/ui-outline.png') 6;

    &:empty {
      @apply hidden;
    }
  }

  &__image{
    @apply w-full h-64 object-cover;
  }

  &__description{
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
