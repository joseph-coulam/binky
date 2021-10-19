<template>
  <nav class="aliased font-type--pixel sidebar lg:block mx-auto center flex flex-col">
    <ul class="sidebar__wrapper">
      <li
        v-for="link in navigation"
        :key="link.name"
        class="inline-block text-left"
      >
        <a
          @click="toggleMenu"
          :href="link.href"
          class="font-display text-2xl lg:text-base uppercase text-white hover:text-indigo-50 opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
        >
          {{ link.name }}
        </a>
      </li>
      <a class="text-xl ml-4 opacity-80 text-white" href="">test</a>
    </ul>
  </nav>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      navigation: [
        { name: 'About', href: '/pixel-perfect/#about' },
        { name: 'Gameplay', href: '/pixel-perfect/#gameplay' },
        { name: 'Updates', href: '/pixel-perfect/#updates' },
        { name: 'Support', href: '#' }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    }
  }
}
</script>

<style lang="scss">
.sidebar {
  @apply relative top-0 p-6 w-full h-full z-50 lg:block;

  border: 10px solid;
  border-left: none;
  border-image: url('../../assets/images/ui-navbar.png') 10;
  background-color: rgba(22, 16, 34, 0.96);

  &__wrapper{
    @apply grid grid-flow-row gap-4;
  }
}
</style>
