<script>
	export let fullheight = false
</script>

<div class="hero" class:hero-fullwidth={fullheight}>
	<div class="hero__contents">
		<slot></slot>
	</div>
</div>