<template>
  <button role="button" @click.prevent="toggleFonts">
    <img src="@/assets/images/accessibility.png" width="44" height="42" alt="Accessibility Toggle">
  </button>
</template>

<script>
export default {
  data() {
    return {
      pixelFonts: true
    }
  },
  methods: {
    toggleFonts() {
      this.pixelFonts = !this.pixelFonts
    }
  },
  mounted() {
    // if (window.__theme == 'dark') this.darkTheme = true
  }
}
</script>

<style lang="scss">

</style>
