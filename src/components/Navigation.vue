<template>
  <nav class="hidden md:block navigation mx-auto center">
    <ul class="grid grid-flow-col gap-10 justify-centerauto-cols-max">
      <li v-for="link in navigation" :key="link.name" class="inline-block">
        <a
          :href="link.href"
          class="text-lg font-bold text-white hover:text-indigo-50"
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
        { name: 'About', href: '#' },
        { name: 'Gameplay', href: '#' },
        { name: 'Support', href: '#' }
      ]
    }
  }
}
</script>

<style lang="scss">
.navigation {
  @apply text-xl rounded-xl text-white py-2 px-8;
  border: 10px solid;
  border-image: url('../assets/images/ui-navbar.png') 10;
  background-color: rgba(15, 23, 36, 0.95);
}
</style>
