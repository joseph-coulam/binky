<template>
    <div :class="['button', 'button__'+buttonType]">
        {{ buttonText }}
    </div>
</template>

<script>
    export default {
        props: ['buttonText', 'buttonType'],
    }
</script>

<style lang="scss">
    .button{
        display: inline-block;
        padding: .8rem 2rem 1rem;
        min-width: 200px;
        line-height: 0;
        text-transform: capitalize;
        
        &__primary {
            border: 10px solid;
            border-image: url('../assets/images/ui-button-primary.png') 10;
            background-color: #f9c054;
            color: black;
            border-radius: 10px;
        }
        &__secondary {
            border: 10px solid;
            border-image: url('../assets/images/ui-button-secondary.png') 10;
            background-color: #102133;
        }
        &__kickstarter{
            border: 10px solid;
            border-image: url('../assets/images/ui-button-secondary.png') 10;
            background-color: #102133;
        }
        &__alert{

        }
    }
</style>
