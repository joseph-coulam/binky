<template>
    <div :class="['aliased button', 'button__' + buttonType]">
      <div class="button__text">{{ buttonText }}</div>
      <div class="button__shine"></div>
  </div>
</template>

<script>
export default {
  props: ['buttonText', 'buttonType']
}
</script>

<style lang="scss">
.button {
  @apply relative cursor-pointer select-none flex items-center justify-center text-base uppercase text-white font-display overflow-hidden;

  // Text Effect
  &__text {
    @apply relative py-4 px-8 pointer-events-none z-20;
  }

  // Shine Effect
  &__shine{
    @apply absolute rounded-2xl overflow-hidden w-full h-full z-30;

    &:after{
      @apply absolute top-0 opacity-30;
      content: "";
      left: -86px;
      background-image: url('../../assets/images/button-shine.png');
      width: 86px;
      height: 86px;
    }

    &:hover{
      &:after{
        animation: buttonShine .8s ease-in-out forwards;
      }
    }

    // Shine Animation
    @keyframes buttonShine {
      0% {
        left: -86px;
      }
      100% {
        left: 100%;
      }
    }
  }

  &:before{
    @apply absolute w-full h-full rounded-xl;
    content: "";
  }

  &:after{
    @apply absolute rounded-xl bg-black w-full h-full opacity-0 mix-blend-overlay transition duration-500 ease-in-out pointer-events-none;
    content: "";
  }

  // Hover overlay
  &:hover{
      &:after {
          @apply opacity-40;
      }
  }

  &__primary {
    @apply relative text-black;
    &:before{
      border: 10px solid;
      border-image: url('../../assets/images/ui-button-primary.png') 10;
      background-color: #f9c054;
    }
  }
  
  &__secondary {
    &:before{
      border: 10px solid;
      border-image: url('../../assets/images/ui-button-secondary.png') 10;
      background-color: #102133;
    }
  }

  &__kickstarter {
    @apply text-black;
    &:before{
      border: 10px solid;
      border-image: url('../../assets/images/ui-button-ks.png') 10;
      background-color: #05ce78;
    }
  }

  &__alert {
  }
}
</style>
