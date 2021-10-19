<template>
  <Layout>
  </Layout>
</template>


<script>
import Heading from '~/components/global/Heading.vue'
import Splash from '~/components/pixel-perfect/Splash.vue'
import GameplaySection from '~/components/pixel-perfect/GameplaySection.vue'
import Slider from '~/components/global/Slider.vue'
import PostCard from '~/components/global/PostCard.vue'
import Layout from '~/layouts/Doc.vue'

export default {
  components: {
    Heading,
    Splash,
    Slider,
    PostCard,
    GameplaySection,
    Layout
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style lang="scss">
.anchor{
  @apply relative block h-0 w-0 -top-32;
}

.outlined {
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.gameplay {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(31, 15, 31, 1) 0%,
    rgba(32, 25, 64, 1) 100%
  );

  &::after {
    @apply absolute w-full left-0 z-20;
    content: '';
    height: 38px;
    bottom: -10px;
    background-image: url('../../assets/images/divider-wood.png');
  }

  &:before{
    @apply absolute top-0 left-0 w-full;
    height: 38px;
    content: "";
    background-image: url('../../assets/images/background-rocks.png');
  }
}

.updates {
  
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(31, 15, 31, 1) 0%,
    rgba(32, 25, 64, 1) 100%
  );

  &:after{
    @apply absolute top-0 left-0 opacity-10 w-full h-full pointer-events-none;
    content: "";
    background-image: url('../../assets/images/background-bricks.png');
  }

}
</style>
