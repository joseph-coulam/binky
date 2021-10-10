<template>
  <footer class="footer bg-black text-white text-center py-4 px-4">
    <span class="footer__copyright"
      >Copyright © {{ new Date().getFullYear() }}.
    </span>
    <span class="footer__links"
      ><a href="https://binky.games/" class="underline"> Binky Games </a></span
    >
  </footer>
</template>

<style>
footer {
  border-top: 6px solid;
  border-image: url('../assets/images/ui-navbar.png') 6;
}
</style>
