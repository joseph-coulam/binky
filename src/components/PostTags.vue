<template>
   <div class="inline-flex post-tags">
   		<g-link class="inline-block text-base post-tags__tag ext-base" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
   			{{ tag.title }}
   		</g-link>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
	.post-tags {
        &__tag {
			@apply rounded-xl text-gray-300 px-2;
            border: 6px solid;
            border-image: url('../assets/images/ui-outline.png') 6;
            background-color: #010101;

			&:not(:last-child) {
				margin-right: 10px;
			}
        }
	}
</style>
