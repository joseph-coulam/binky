<template>
  <div id="app" :class="this.$store.state.pixelFont ? 'font-type--pixel' : 'font-type--standard'">
    <Toast />

    <header
      class="header fixed w-full z-50 top-4 px-4 flex justify-evenly items-start"
    >
      <Accessibility class="flex flex-1 justify-start" />
      <Navigation class="flex flex-1 justify-center" />
      <div class="flex flex-1 justify-end">
      <Button
        button-text="Kickstarter"
        button-type="kickstarter"
      />
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script>
import 'aos/dist/aos.css'
import AOS from 'aos'
import Accessibility from '~/components/Accessibility.vue'
import Navigation from '~/components/Navigation.vue'
import Button from '~/components/Button.vue'
import Toast from '~/components/Toast.vue'
import Footer from '~/components/Footer.vue'

export default {
  props: {},
  components: {
    Accessibility,
    Navigation,
    Button,
    Toast,
    Footer
  },
  data () {
    return {
      pixelFonts: true
    }
  },
  mounted() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-quad'
    })
  }
}
</script>

<style lang="scss"></style>
