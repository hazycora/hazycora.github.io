<script>
	import FancyPage from '$lib/FancyPage.svelte'
	import TwitterIcon from '$lib/Icons/twitter.svg'
	import MastodonIcon from '$lib/Icons/mastodon.svg'
	import EmailIcon from '$lib/Icons/email.svg'
	import MatrixIcon from '$lib/Icons/matrix.svg'
	import DiscordIcon from '$lib/Icons/discord.svg'
</script>

<svelte:head>
	<title>hazy.gay</title>
</svelte:head>

<FancyPage>
	<h2>webdev sometimes</h2>
	<div class="socials">
		<a class="hover-slide" href="https://twitter.com/hazycora">
			<span class="sr-only">Twitter</span>
			<TwitterIcon />
		</a>
		<a class="hover-slide" rel="me" href="https://fuckgov.org/@h">
			<span class="sr-only">Mastodon</span>
			<MastodonIcon />
		</a>
		<a class="hover-slide" href="mailto:hazycora@riseup.net">
			<span class="sr-only">Email</span>
			<EmailIcon />
		</a>
		<a class="hover-slide" href="https://matrix.to/#/@h:besties.house">
			<span class="sr-only">Matrix</span>
			<MatrixIcon />
		</a>
		<a class="hover-slide" href="https://discord.com/users/728131016392441916">
			<span class="sr-only">Discord</span>
			<DiscordIcon />
		</a>
	</div>
	<div class="things-list">
		<a href="https://besties.house" class="thing">
			<p class="title">besties</p>
			<p class="description">collective + friend cloud</p>
		</a>
		<a href="https://hazy.gay/blahaj" class="thing">
			<p class="title">blåhaj radar</p>
			<p class="description">see blåhaj stock around the globe</p>
		</a>
	</div>
</FancyPage>

<style lang="postcss">
	.socials {
		display: flex;
		gap: 1rem;
		isolation: isolate;
		flex-wrap: wrap;
	}

	.socials a {
		position: relative;
		padding: 0.2rem;
		overflow: hidden;
		display: grid;
		place-items: center;
		color: inherit;
		width: 3rem;
		height: 3rem;
	}

	.things-list {
		display: grid;
		gap: 0.25rem;
		grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
	}
	.thing,
	.socials a {
		user-select: none;
		text-decoration: none;
		padding: 0.5rem;
		isolation: isolate;
		position: relative;
		color: inherit;
		font-size: 1rem;
		transition: color 100ms;
	}
	.thing::before,
	.socials a::before {
		z-index: -1;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgb(0 0 0 / 0.25);
		backdrop-filter: blur(2px);
		opacity: 0;
		transition: opacity 100ms;
	}
	.thing:hover,
	.socials a:hover {
		color: #d1d4ff;
		text-decoration: none;
	}
	.thing:hover::before,
	.socials a:hover::before {
		opacity: 1;
	}
	.thing .title {
		font-weight: 500;
		font-size: 1.2em;
	}
</style>
