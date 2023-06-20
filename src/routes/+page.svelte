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
	<p>webdev sometimes</p>
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
		border-radius: 0.2rem;
		overflow: hidden;
		padding: 0.2rem;
	}
	.socials :global(svg) {
		max-width: 100%;
		max-height: 2rem;
		mix-blend-mode: difference;
	}
	.socials a::before {
		content: '';
		background-color: currentColor;
		position: absolute;
		inset: 0;
		transform-origin: left center;
		transform: scaleX(0);
	}
	@media (prefers-reduced-motion: no-preference) {
		.socials a::before {
			transition: transform 200ms cubic-bezier(0.19, 1, 0.22, 1);
		}
	}
	.socials a:hover::before {
		transform: scaleX(1);
	}
</style>
