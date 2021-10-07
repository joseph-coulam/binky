<template>
    <div :data-heading="heading" class="heading relative">
        <span>{{heading}}</span>
    </div>
</template>

<script>
    export default {
        props: ['heading'],
    }
</script>

<style lang="scss">
    .heading {
            @apply relative text-4xl font-bold text-white;
            $stroke-size: 3px;

        &:before {
            content: attr(data-heading);
            position: absolute;
            top: 0px;
            left: 0;
            z-index: 1;
            text-shadow: 0px -5px 0 blue, 0px 6px 0 blue, 3px 3px 0 yellow, 3px -3px 0 yellow, 3px -3px 0 yellow;
        }

        span {
            position: absolute;
            z-index: 3;
            color: #f9c054;
            text-shadow: 0px -2px 0px #ffe9b7;
            -webkit-background-clip: text;
                -moz-background-clip: text;
                    background-clip: text;
        }

        &:after{
            content: attr(data-heading);
            position: absolute;
            top: 0px;
            left: 0;
            color: #f9c054;
            text-shadow: 0px 3px 0px #cb5b2c;
            z-index: 2;
        }
    }
</style>
