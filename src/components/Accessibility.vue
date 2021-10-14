<template>
  <button role="button" @click.prevent="toggleFonts">
    <img src="@/assets/images/accessibility.png" width="44" height="42" alt="Accessibility Toggle">
  </button>
</template>

<script>
export default {
  methods: {
    toggleFonts() {
      this.$store.commit('changeFont')
    }
  }
}
</script>

<style lang="scss">

</style>
