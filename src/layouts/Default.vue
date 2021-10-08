<template>
  <div id="app">
    <Toast />

    <header
      class="header fixed w-full z-50 top-4 px-4 flex justify-evenly items-start"
    >
      <Accessibility class="flex flex-1 justify-start" />
      <Navigation class="flex flex-1 justify-center" />
      <Button
        class="flex flex-1 justify-end"
        button-text="Kickstarter"
        button-type="kickstarter"
      />
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <span class="footer__copyright"
        >Copyright © {{ new Date().getFullYear() }}.
      </span>
      <span class="footer__links"
        >Powered by <a href="//www.suits.at"> SUITS </a></span
      >
    </footer>
  </div>
</template>

<script>
import 'aos/dist/aos.css'

import AOS from 'aos'
import Accessibility from '~/components/Accessibility.vue';
import Navigation from '~/components/Navigation.vue';
import Button from '~/components/Button.vue';
import Toast from '~/components/Toast.vue';

export default {
  props: {},
  components: {
    Accessibility,
    Navigation,
    Button,
    Toast
  },
  mounted() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out-quad'
  });
}
}
</script>

<style lang="scss"></style>
