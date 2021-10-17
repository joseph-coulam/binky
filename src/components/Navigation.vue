<template>
  <nav :class="['aliased navigation lg:block mx-auto center flex flex-col', {'navigation--active': !this.$store.state.activeMenu}]">

    <div @click="toggleMenu" class="absolute top-2 right-2 opacity-80 hover:opacity-100 lg:hidden">
      <img class
        src="@/assets/images/button-close.png"
        width="34"
        height="34"
        alt="Close"
      />
    </div>

    <ul class="navigation__wrapper">
      <li
        v-for="link in navigation"
        :key="link.name"
        class="inline-block text-center"
      >
        <a
          @click="toggleMenu"
          :href="link.href"
          class="font-display text-2xl lg:text-base uppercase text-white hover:text-indigo-50 opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
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
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    }
  }
}
</script>

<style lang="scss">
.navigation {
  border: 10px solid;
  border-image: url('../assets/images/ui-navbar.png') 10;
  background-color: rgba(15, 23, 36, 0.95);

  &--active{
    @apply hidden lg:block
  }

  @apply fixed left-0 top-0 w-full h-full z-50;

  @screen lg {
    @apply relative rounded-xl text-white py-4 px-8;
  }

  &__wrapper{
    @apply grid grid-flow-row gap-10;

    @screen lg {
      @apply grid grid-flow-col gap-10 justify-center auto-cols-max;
    }
  }
}
</style>
