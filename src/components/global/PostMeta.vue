<template>
   <div class="post-meta text-lg">
      Posted {{ post.date }}.
      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min read.</strong>
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>
