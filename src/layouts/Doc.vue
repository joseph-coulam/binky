<template>
    <div class="doc">
        <div class="doc__wrapper grid">
            <Sidebar />
            <main class="main">
                <slot />
            </main>
        </div>
    </div>
</template>
<script>
import Heading from '~/components/global/Heading.vue'
import Sidebar from '~/components/global/Sidebar.vue'
import Layout from '~/layouts/Doc.vue'

export default {
  components: {
    Heading,
    Layout,
    Sidebar
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss">
.doc{
    @apply min-h-screen;
    &__wrapper{
        @apply min-h-screen;
        grid-template-columns: 1fr 5fr;
    }
}
</style>
