<template>
  <div
    :class="['aliased gameplay-section', 'gameplay-section--' + direction]"
    data-aos="fade-up"
  >
    <div class="gameplay-section__text lg:mb-0 mb-14 text-white">
      <p class="text-xl leading-relaxed">
        <slot />
      </p>
    </div>
    <div
      class="gameplay-section__image relative mt-4 w-full object-cover rounded-xl"
    >
      <div
        class="gameplay-section__icon absolute left-auto sm:left-6 right-6 sm:right-auto -top-8 rounded-xl inline-block py-2 w-24"
      >
        <img class="mx-auto" :src="require(`@/assets/images/${icon}.png`)" />
      </div>
      <img
        class="w-full h-64 object-cover"
        :src="require(`@/assets/images/${image}.png`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['direction', 'icon', 'image']
}
</script>

<style lang="scss">
.gameplay-section {
  @apply my-10;

  @screen sm {
    @apply grid gap-10 my-20 text-left items-center;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'gridImage gridText';
  }

  &--reverse {
    grid-template-areas: 'gridText gridImage';
  }

  &__image {
    grid-area: gridImage;
    border: 6px solid;
    border-image: url('../../assets/images/ui-outline.png') 6;
    background-color: #152032;
  }

  &__text {
    grid-area: gridText;
  }

  &__icon {
    border: 6px solid;
    border-image: url('../../assets/images/ui-outline-icons.png') 6;
    background-color: #9a51d9;
  }
}
</style>
