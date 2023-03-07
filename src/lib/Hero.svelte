<script>
	import { base } from '$app/paths'
	import { onMount } from 'svelte'
	export let fullheight = false

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
			x: (mousePos.x/window.innerWidth)-0.5,
			y: (mousePos.y/window.innerHeight)-0.5
		}
		heroBackdropElem.animate([
			{
				transform: `scale(1.05) translate(${newTransform.x*5}%, ${newTransform.y*5}%)`
			}
		], {
			duration: 1000,
			easing: 'ease-in',
			fill: 'forwards'
		})
	}

	onMount(() => {
		const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true
		if (isReduced) return
		document.body.addEventListener('mousemove', onMouseMove)
		window.addEventListener('resize', transform)
		return () => {
			document.body.removeEventListener('mousemove', onMouseMove)
			window.removeEventListener('resize', transform)
		}
	})
</script>

<div class="hero" class:hero-fullwidth={fullheight}>
	<div class="hero__contents">
		<slot />
		<div class="hero__backdrop-wrapper">
			<img
				class="hero__backdrop"
				src="{base}/bg-50p.jpg"
				srcset="{base}/bg-50p.jpg 800w, {base}/bg.jpg 1200w"
				alt=""
				aria-hidden="true"
				bind:this={heroBackdropElem}
			/>
		</div>
	</div>
</div>
