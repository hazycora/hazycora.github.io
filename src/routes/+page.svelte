<script>
	import { base } from '$app/paths'
	import Hero from '$lib/Hero.svelte'
	import Twitter from '$lib/Icons/Twitter.svelte'
	import Mastodon from '$lib/Icons/Mastodon.svelte'
	import Email from '$lib/Icons/Email.svelte'
	import Matrix from '$lib/Icons/Matrix.svelte'
	import Discord from '$lib/Icons/Discord.svelte'
</script>

<svelte:head>
	<title>hazy.gay</title>
</svelte:head>

<Hero fullheight={true}>
	<img class="hero-icon" src="{base}/pfp.webp" alt="" aria-hidden="true" />
	<div class="hero-name">
		<h1>hazycora</h1>
	</div>
	<div class="hero__main">
		<p>webdev sometimes</p>
		<div class="socials">
			<a class="hover-slide" href="https://twitter.com/hazycora">
				<span class="sr-only">Twitter</span>
				<Twitter />
			</a>
			<a class="hover-slide" href="https://fuckgov.org/@h">
				<span class="sr-only">Mastodon</span>
				<Mastodon />
			</a>
			<a class="hover-slide" href="mailto:h@besties.house">
				<span class="sr-only">Email</span>
				<Email />
			</a>
			<a class="hover-slide" href="https://matrix.to/#/@h:besties.house">
				<span class="sr-only">Matrix</span>
				<Matrix />
			</a>
			<a
				class="hover-slide"
				href="https://discord.com/users/728131016392441916"
			>
				<span class="sr-only">Discord</span>
				<Discord />
			</a>
		</div>
	</div>
</Hero>
