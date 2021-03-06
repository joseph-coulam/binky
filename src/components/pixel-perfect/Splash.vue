<template>
  <div class="splash relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 ">
      <ClientOnly>
        <MagicBackdrop />
      </ClientOnly>
    </div>
    <div class="min-h-screen flex justify-center items-center">
      <div
        class="relative w-100 max-w-2xl my-32 px-6 mx-auto center grid gap-8 z-10"
        data-aos="fade-in"
      >
        <h1>
          <a href="/pixel-perfect">
            <img
              class="mx-auto"
              src="@/assets/images/header.gif"
              width="314"
              height="234"
              alt="Pixel Perfect"
            />
          </a>
        </h1>

        <p class="text-xl text-center leading-relaxed text-white">
          In Pixel Perfect you take on the role of a God overlooking the
          universe of Pixia. As you expand a civilization through different ages
          you’ll meet challenges along the way; from building up an empire to
          fighting off hordes of enemies - how long do you think you can succeed
          as a God?
        </p>

        <div class="max-w-md mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2">
          <Button button-text="Support Us" button-type="primary" />
          <Button button-text="Updates" button-type="secondary" />
        </div>
      </div>
    </div>

    <div class="splash__peep aliased">
    </div>

    <div class="aliased parallax">
      <div class="parallax__plx04" v-rellax="{ speed: -5 }"></div>
      <div class="parallax__plx03" v-rellax="{ speed: -3 }"></div>
      <div class="parallax__plx01" v-rellax="{ speed: -1 }"></div>
      <div class="parallax__plx02" v-rellax="{ speed: 0 }"></div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Button from '~/components/global/Button'
import MagicBackdrop from '~/components/pixel-perfect/MagicBackdrop'

export default {
  components: {
    Button,
    MagicBackdrop
  },
  props: ['showTitle']
}
</script>

<style lang="scss">
.splash {
  min-height: calc(100vh + 312px);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgb(30, 16, 46) 20%,
    rgba(34, 19, 74, 1) 40%,
    rgba(59, 160, 254, 1) 80%
  );

  &::after {
    @apply absolute w-full bottom-0;
    content: '';
    height: 28px;
    background-image: url('../../assets/images/divider-grass.png');
  }

  &::before {
    @apply absolute top-0 w-full h-screen bg-fixed bg-repeat-x opacity-20;
    content: '';
    background-image: url('../../assets/images/splash-stars.png');
  }
  
  &__peep{
    @apply absolute left-0 right-0 bottom-4 mx-auto z-20;
    width: 56px;
    height: 392px;

    &::before{
      @apply absolute w-full z-10;
      content:"";
      bottom: -2px;
      left: 5px;
      width: 24px;
      height: 58px;
      background-image: url('../../assets/images/splash-peep.png');
    }

    &::after{
      @apply absolute w-full z-10;
      content:"";
      width: 56px;
      left: -13px;
      height: 392px;
      bottom: 10px;
      background-image: url('../../assets/images/splash-shine.png');
      animation: splashShine .8s ease-in-out infinite;
      animation-direction: alternate;
    }
  }

  @keyframes splashShine {
    0% {
      opacity: .8;
    }
    100% {
      opacity: .5;
    }
  }
}

.parallax {
  position: absolute;
  bottom: 0;
  width: 100%;

  &__plx01 {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 190px;
    background-image: url('../../assets/images/splash-bush-2.png');
    background-repeat: repeat-x;
  }

  &__plx02 {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 148px;
    background-image: url('../../assets/images/splash-bush-1.png');
    background-repeat: repeat-x;
  }

  &__plx03 {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 308px;
    background-image: url('../../assets/images/splash-hills.png');
    background-repeat: repeat-x;
  }

  &__plx04 {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 442px;
    background-image: url('../../assets/images/splash-clouds.png');
    background-repeat: repeat-x;
  }
}
</style>
