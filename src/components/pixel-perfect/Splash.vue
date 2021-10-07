<template>
	<div class="splash relative overflow-hidden min-h-screen flex justify-center items-center">
		<div class="w-100 max-w-2xl mx-auto center grid gap-8">
			<h1>
				<a href="/pixel-perfect">
					<img class="mx-auto" src="@/assets/images/header.gif" width="314" height="234" alt="Pixel Perfect">
				</a>
			</h1>

			<p class="text-2xl text-center leading-relaxed text-white">
				In Pixel Perfect you take on the role of a God overlooking the universe of Pixia. As you expand a civilization through different ages you’ll meet challenges along the way; from building up an empire to fighting off hordes of enemies - how long do you think you can succeed as a God?
			</p>

			<div class="max-w-md mx-auto grid grid-cols-2 gap-4">
				<Button button-text="Support Us" button-type="primary" />
				<Button button-text="Updates" button-type="secondary" />
			</div>
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
import Button from '~/components/Button'

export default {
	components: {
    Button
  },
	props: ['showTitle']
}
</script>

<style lang="scss">

.splash {
	background: rgb(2,0,36);
	background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(36,23,51,1) 35%, rgba(34,19,74,1) 60%, rgba(59,160,254,1) 100%);
	&::after{
		@apply absolute w-full bottom-0;
		content: "";
		height: 28px;
    	background-image: url('../../assets/images/divider-grass.png');
	}
}

</style>
