<template>
    <div :class="['gameplay-section grid gap-20 my-20 items-center', 'gameplay-section--'+direction]" data-aos="fade-up">
        <div class="gameplay-section__text text-white">
            <p class="text-xl leading-relaxed">
                <slot />
            </p>
        </div>
        <div class="gameplay-section__image relative mt-4 w-full object-cover rounded-xl">
            <div class="gameplay-section__icon absolute left-6 -top-8 rounded-xl inline-block py-2 w-24">
                <img class="mx-auto" :src="require(`@/assets/images/${icon}.png`)" />
            </div>
            <img class="w-full h-64 object-cover" :src="image">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['direction','icon','image'],
    }
</script>

<style lang="scss">
    .gameplay-section{
        grid-template-columns: 3fr 2fr;
        grid-template-areas: "gridText gridImage";

        &--reverse {
            grid-template-columns: 2fr 3fr;
            grid-template-areas: "gridImage gridText";
        }

        &__image{
            grid-area: gridImage;
            border: 6px solid;
            border-image: url('../../assets/images/ui-outline.png') 6;
            background-color: #152032;
        }

        &__text{
            grid-area: gridText;
        }

        &__icon{
            border: 6px solid;
            border-image: url('../../assets/images/ui-outline-icons.png') 6;
            background-color: #9a51d9;
        }
    }
</style>
