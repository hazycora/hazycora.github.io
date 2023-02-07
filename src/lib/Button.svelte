<script>
	export let buttonElem
	let classList = ''
	export let href
	export {classList as class}
	export {buttonElem as this}
</script>
<svelte:options accessors/>
<a class="button {classList}" {href} bind:this={buttonElem}><span class="button-text"><slot></slot></span></a>