<script>
	import { base } from '$app/paths'
	import { onMount } from 'svelte'

	let heroBackdropElem
	let mousePos = { x: 0, y: 0 }

	function onMouseMove(e) {
		mousePos = {
			x: e.clientX,
			y: e.clientY
		}
		transform()
	}

	function transform() {
		const newTransform = {
			x: Math.min(Math.max(mousePos.x / window.innerWidth, 0), 1) - 0.5,
			y: Math.min(Math.max(mousePos.y / window.innerHeight, 0), 1) - 0.5
		}
		heroBackdropElem.animate(
			[
				{
					transform: `scale(1.05) translate(${newTransform.x * -5}%, ${
						newTransform.y * -5
					}%)`
				}
			],
			{
				duration: 4000,
				easing: 'ease',
				fill: 'forwards'
			}
		)
	}

	onMount(() => {
		const isReduced =
			window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
		if (isReduced) return
		document.body.addEventListener('mousemove', onMouseMove)
		window.addEventListener('resize', transform)
		return () => {
			document.body.removeEventListener('mousemove', onMouseMove)
			window.removeEventListener('resize', transform)
		}
	})
</script>

<div class="hero">
	<div class="hero__contents">
		<img class="hero-icon" src="{base}/pfp.webp" alt="" aria-hidden="true" />
		<div class="hero-name">
			<h1>hazy<wbr />cora</h1>
		</div>
		<div class="hero__main">
			<slot />
		</div>
		<div class="hero__backdrop-wrapper">
			<img
				draggable="false"
				class="hero__backdrop"
				src="{base}/bg-50p.jpg"
				srcset="{base}/bg-50p.jpg 800w, {base}/bg.jpg 1200w"
				alt=""
				aria-hidden="true"
				bind:this={heroBackdropElem}
			/>
		</div>
		<div class="hero__backdrop-glass" />
	</div>
</div>

<style lang="postcss">
	.hero {
		isolation: isolate;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 28rem;
		padding: 1rem 4rem;
		background-color: var(--black-400);
		color: #b0b5ff;
		box-shadow: inset 0 0 6rem 1rem rgb(0 0 0 / 0.1);
		overflow: hidden;
		isolation: isolate;
		min-height: 100vh;
		min-height: 100svh;
	}
	.hero__backdrop-wrapper {
		user-select: none;
		display: block;
		z-index: 0;
		content: '';
		position: absolute;
		z-index: -2;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: #1e0b46;
		overflow: hidden;
		pointer-events: none;
	}
	.hero__backdrop {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: left center;
		transform: scale(1.05) translate(var(--translate-x), var(--translate-y));
	}
	.hero__backdrop-glass {
		user-select: none;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: calc(50% - 8rem);
		min-width: 26rem;
		background-color: rgb(0 0 0 / 0.5);
		clip-path: polygon(100% 0px, calc(100% - 20rem) 100%, 0% 100%, 0% 0%);
		z-index: -1;
		backdrop-filter: blur(4px);
	}
	.hero__contents {
		width: 100%;
		min-width: calc(100vw - 4rem);
		max-width: 60rem;
		z-index: 1;
		grid-row: 1;
		grid-column: 1;
		display: flex;
		gap: 1rem;
		flex-direction: column;
		justify-content: center;
		display: grid;
		--translate-x: 0%;
		--translate-y: 0%;
		grid-template-columns: 3.5rem 1fr;
		grid-template-rows: min-content 1fr;
	}
	.hero__main {
		grid-column: 1 / -1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		min-width: 0;
	}
	.hero-name {
		display: block;
		mix-blend-mode: plus-lighter;
		min-width: 0;
	}
	.hero-name h1 {
		margin: 0;
	}
	.hero-icon {
		width: 100%;
		align-self: center;
		border-radius: 100%;
		vertical-align: bottom;
	}
	@media (min-width: 400px) {
		.hero__contents {
			min-width: 0;
		}
	}
</style>
