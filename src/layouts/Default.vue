<template>
  <div id="app" :class="this.$store.state.pixelFont ? 'font-type--pixel' : 'font-type--standard'">
    <Toast />

    <header
      class="header fixed w-full z-50 pt-4 px-4 flex justify-evenly items-center lg:items-start"
    >
      <!-- Menu Items -->
      <div class="flex flex-1 justify-start">
        <MobileMenuButton @click.native="toggleMenu" class="block lg:hidden mr-3 lg:mr-0 opacity-90 hover:opacity-100" />
        <Accessibility @click.native="toggleFonts" class="opacity-90 hover:opacity-100" />
      </div>

      <!-- Navigation -->
      <Navigation class="lg:flex lg:flex-1 justify-center" />

      <!-- Kickstarter -->
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
import Accessibility from '~/components/global/Accessibility.vue'
import Navigation from '~/components/pixel-perfect/Navigation.vue'
import Button from '~/components/global/Button.vue'
import Toast from '~/components/global/Toast.vue'
import Footer from '~/components/global/Footer.vue'
import MobileMenuButton from '~/components/global/MobileMenuButton.vue'

export default {
  props: {},
  components: {
    Accessibility,
    Navigation,
    Button,
    Toast,
    Footer,
    MobileMenuButton
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
  },
  methods: {
    toggleFonts() {
      this.$store.commit('changeFont')
    },
    toggleMenu() {
      this.$store.commit('toggleMenu')
    }
  }
}
</script>

<style lang="scss">
  .header{
    &:before{
      @apply absolute top-0 w-full h-24 bg-gradient-to-b from-black to-transparent opacity-60 z-0 pointer-events-none;
      content: "";
    }
  }
</style>
