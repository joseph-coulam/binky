<template>
  <Layout :show-logo="false">
          <ClientOnly>
    <MagicBackdrop />
          </ClientOnly>
  </Layout>
</template>

<script>
import MagicBackdrop from '~/components/pixel-perfect/MagicBackdrop'

export default {
  components: {
    MagicBackdrop
  },
  props: ['showTitle']
}
</script>
