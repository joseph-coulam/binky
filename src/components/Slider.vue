<template>
    <div class="slider w-100 my-14 rounded-xl">
        <vue-glide type="slider" :perView="1" :gap="0">
            <vue-glide-slide v-for="(image, index) in images" :key="index">
                <img class="slider__image w-full object-cover" :src="image.url">
            </vue-glide-slide>
        <template class="test" slot="control">
            <button class="absolute top-0 bottom-0 -left-12 my-auto" data-glide-dir="<">
                <img src="@/assets/images/control-left.png" width="22" height="40" alt="Left">
            </button>
            <button class="absolute top-0 bottom-0 -right-12 my-auto" data-glide-dir=">">
                <img src="@/assets/images/control-right.png" width="22" height="40" alt="Right">
            </button>
        </template>
        </vue-glide>
    </div>
</template>

<script>
    import 'vue-glide-js/dist/vue-glide.css';
    import { Glide, GlideSlide } from 'vue-glide-js';

    export default {
        // This will be a query TODO
        data() {
            return {
                images: [
                    { name: 'Image 1', url: 'https://via.placeholder.com/150' },
                    { name: 'Image 2', url: 'https://via.placeholder.com/150' },
                    { name: 'Image 3', url: 'https://via.placeholder.com/150' },
                ]
            }
        },
        components: {
            [Glide.name]: Glide,
            [GlideSlide.name]: GlideSlide
        }
    }
</script>

<style lang="scss">
    .slider{
        border: 10px solid;
        border-image: url('../assets/images/ui-outline-purple.png') 10;
        background-color: #9a51d9;

        &__image {
            max-height: 500px;
        }
    }
</style>
