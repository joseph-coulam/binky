<template>
  <nav class="aliased hidden md:block navigation mx-auto center">
    <ul class="grid grid-flow-col gap-10 justify-centerauto-cols-max">
      <li
        v-for="link in navigation"
        :key="link.name"
        class="inline-block text-center"
      >
        <a
          :href="link.href"
          class="font-display text-base uppercase text-white hover:text-indigo-50 opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
        >
          {{ link.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      navigation: [
        { name: 'About', href: '#about' },
        { name: 'Gameplay', href: '#gameplay' },
        { name: 'Updates', href: '#updates' },
        { name: 'Support', href: '#' }
      ]
    }
  }
}
</script>

<style lang="scss">
.navigation {
  @apply rounded-xl text-white py-4 px-8;
  border: 10px solid;
  border-image: url('../assets/images/ui-navbar.png') 10;
  background-color: rgba(15, 23, 36, 0.95);
}
</style>
