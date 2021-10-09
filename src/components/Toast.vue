<template>
  <div
    class="fixed z-50 mx-auto left-0 right-0 max-w-2xl bottom-2 md:bottom-8 px-4"
    data-aos="slide-up"
    data-aos-delay="500"
    v-if="open"
  >
    <div
      class="toast relative mx-auto left-0 right-0 max-w-2xl px-4 py-4 rounded-xl"
    >
      <div @click="open = false" class="absolute top-2 right-2">
        <img
          src="@/assets/images/button-close.png"
          width="34"
          height="34"
          alt="Accessibility Toggle"
        />
      </div>
      <div
        class="toast__content flex items-center justify-center text-xl rounded-xl text-white w-11/12"
      >
        <div class="toast__icon flex-shrink-0 mr-6 hidden md:block">
          <img
            src="@/assets/images/accessibility.png"
            width="44"
            height="42"
            alt="Accessibility Toggle"
          />
        </div>
        <div class="toast__text">
          <p class="text-2xl">Accessibility</p>
          <p>
            This site uses pixel art, but you can change the font by using the
            'Aa' button in the top left corner
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return { open: false }
  },
  mounted() {
    if (localStorage.firstVisit == null || false) {
      this.open = true
      localStorage.firstVisit = true
    } else {
      localStorage.firstVisit = false
    }
  }
}
</script>

<style lang="scss">
.toast {
  border: 10px solid;
  border-image: url('../assets/images/ui-outline-purple.png') 10;
  background-color: #9a51d9;
}
</style>
