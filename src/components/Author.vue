<template>
	<div class="author">

		<h1 v-if="showTitle" class="author__site-title">
			{{ $static.metadata.siteName }}
		</h1>

		<div class="buttons__wrapper">
			<Button button-text="Support Us" button-type="primary" />
			<Button button-text="Updates" button-type="secondary" />
		</div>
		<p class="author__intro">
			A simple, hackable & minimalistic starter for Gridsome that uses Netlify CMS for content.
		</p>

		<p class="author__links">
			<a href="//twitter.com/suits_at">Follow on Twitter</a>
			<a href="https://github.com/suits-at/netlifycms-gridsome">GitHub</a>
		</p>

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

.buttons__wrapper{
	margin: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.author {
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
	padding-bottom: calc(var(--space) / 2);

	&__image {
		border-radius: 100%;
		width: 90px;
		height: 90px;
		margin-bottom: 1em;
	}

	&__intro {
		opacity: .8;
	}

	&__site-title {
		margin: 0 auto;
		font-size: 1.5em;
		max-width: 400px;
	}

	&__links {
		margin-top: -.5em;
		a {
			margin: 0 .5em;
		}
	}
}
</style>
