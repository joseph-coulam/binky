<template>
  <div id="app">

    <header class="header fixed w-full z-50 top-4 px-4 flex justify-evenly items-start">
      <ToggleTheme class="flex flex-1 justify-start" />
      <Navigation class="flex flex-1 justify-center" />
			<Button class="flex flex-1 justify-end" button-text="Kickstarter" button-type="kickstarter" />
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
      <span class="footer__links">Powered by <a href="//www.suits.at"> SUITS </a></span>
    </footer>

  </div>
</template>

<script>
import ToggleTheme from '~/components/ToggleTheme.vue'
import Navigation from '~/components/Navigation.vue'
import Button from '~/components/Button.vue'

export default {
  props: {
  },
  components: {
    ToggleTheme,
    Navigation,
    Button
  }
}
</script>

<style lang="scss">
</style>
