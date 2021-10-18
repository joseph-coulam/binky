<template>
    <div :data-heading="heading" :class="[`heading relative mx-auto w-full ${textDirection ? 'text-'+textDirection : ''} ${textSize==='large' ? 'text-4xl' : 'text-2xl'}`]">
        <span>{{heading}}</span>
    </div>
</template>

<script>
    export default {
        props: ['heading', 'textDirection', 'textSize'],
    }
</script>

<style lang="scss">
    .heading {
            @apply relative inline-block mb-4 text-white uppercase font-display;
            $stroke-size: 2px;

        &:before {
            @apply absolute w-full top-0 left-0 font-display;
            content: attr(data-heading);
            left: 0;
            z-index: 1;
            text-shadow: 0px -4px 0 black, 0px 5px 0 black, 2px 2px 0 black, 2px -2px 0 black, 2px 0px 0 black, 2px 5px 0 black, 2px -4px 0 black, 2px 2px 0 black, -2px -2px 0 black, -2px 0px 0 black, -2px 5px 0 black, -2px -4px 0 black,  -2px 2px 0 black;
        }

        span {
            position: relative;
            z-index: 3;
            color: #f9c054;
            text-shadow: 0px -2px 0px #ffe9b7;
        }

        &:after{
            @apply absolute w-full top-0 left-0 font-display;
            content: attr(data-heading);
            color: #f9c054;
            text-shadow: 0px 3px 0px #cb5b2c;
            z-index: 2;
        }
    }


@-webkit-keyframes shine {
	0%, 10% {
		background-position: -1000px;
	}
	20% {
		background-position: top left;
	}
	90% {
		background-position: top right;
	}
	100% {
		background-position: 1000px;
	}
}
</style>
