<template>
    <div class="toast fixed z-50 mx-auto left-0 right-0 max-w-2xl bottom-8 px-6 py-4 rounded-xl animate-fadeUp">
        <div class="absolute top-2 right-2">
            <img src="@/assets/images/button-close.png" width="34" height="34" alt="Accessibility Toggle">
        </div>
        <div class="toast__content flex items-center justify-center text-xl rounded-xl text-white w-11/12">
            <div class="toast__icon flex-shrink-0 mr-6">
                <img src="@/assets/images/accessibility.png" width="44" height="42" alt="Accessibility Toggle">
            </div>
            <div class="toast__text">
                <p class="text-2xl">Accessibility</p>
                <p>This site uses pixel art, but you can change the font by using the 'Aa' button in the top left corner</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
    .toast{
        border: 10px solid;
        border-image: url('../assets/images/ui-outline-purple.png') 10;
        background-color: #9a51d9;
    }
    
</style>
