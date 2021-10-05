<template>
    <div>
        <div :class="['button', 'button__'+buttonType]">{{ buttonText }}</div>
    </div>
</template>

<script>
    export default {
        props: ['buttonText', 'buttonType'],
    }
</script>

<style lang="scss">
    .button{
        @apply flex items-center justify-center text-xl rounded-xl text-white py-2 px-8;
        
        &__primary {
            @apply text-black;
            border: 10px solid;
            border-image: url('../assets/images/ui-button-primary.png') 10;
            background-color: #f9c054;
        }
        &__secondary {
            border: 10px solid;
            border-image: url('../assets/images/ui-button-secondary.png') 10;
            background-color: #102133;
        }
        &__kickstarter{
            @apply text-black font-bold py-1 px-6 text-xl;
            border: 10px solid;
            border-image: url('../assets/images/ui-button-ks.png') 10;
            background-color: #05ce78;
        }

        &__alert{

        }
    }
</style>
