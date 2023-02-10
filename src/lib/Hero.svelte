<script>
	import { base } from '$app/paths'
    import { onMount } from 'svelte'
	export let fullheight = false

	let heroContentsElem
	let mousePos = {x: 0, y: 0}

	function onMouseMove(e) {
		mousePos = {
			x: e.clientX,
			y: e.clientY
		}
	}

	function transform() {
		let translateCurrent = [
			parseFloat((heroContentsElem.style.getPropertyValue('--translate-x')||'0%').replace('%', '')),
			parseFloat((heroContentsElem.style.getPropertyValue('--translate-y')||'0%').replace('%', ''))
		]
		let transform = {x: translateCurrent[0], y: translateCurrent[1]}
		let newTransform = {
			x: (Math.min(mousePos.x, window.innerWidth)/window.innerWidth-0.5)*-2,
			y: (Math.min(mousePos.y, window.innerHeight)/window.innerHeight-0.5)*-2
		}
		transform = {
			x: transform.x+(newTransform.x-transform.x)/8,
			y: transform.y+(newTransform.y-transform.y)/8
		}
		heroContentsElem.style.setProperty('--translate-x', `${transform.x.toFixed(4)}%`)
		heroContentsElem.style.setProperty('--translate-y', `${transform.y.toFixed(4)}%`)
	}

	onMount(() => {
		let interval = setInterval(transform, 1000/30)
		document.body.addEventListener('mousemove', onMouseMove)
		window.addEventListener('resize', transform)
		return () => {
			document.body.removeEventListener('mousemove', onMouseMove)
			window.removeEventListener('resize', transform)
			clearInterval(interval)
		}
	})
</script>

<div class="hero" class:hero-fullwidth={fullheight}>
	<div class="hero__contents" bind:this={heroContentsElem}>
		<slot></slot>
		<div class="hero__backdrop-wrapper">
			<img class="hero__backdrop" src="{base}/bg-50p.jpg" srcset="{base}/bg-50p.jpg 800w, {base}/bg.jpg 1200w" alt="" aria-hidden="true">
		</div>
	</div>
</div>