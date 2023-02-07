<script>
	import { base } from '$app/paths'
	export let fullheight = false
</script>

<div class="hero" class:hero-fullwidth={fullheight}>
	<div class="hero__contents">
		<slot></slot>
		<img class="hero-backdrop" src="{base}/bg-50p.jpg" srcset="{base}/bg-50p.jpg 800w, {base}/bg.jpg 1200w" alt="" aria-hidden="true">
	</div>
</div>