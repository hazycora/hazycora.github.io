<svelte:options accessors />

<script>
	export let buttonElem
	let classList = ''
	export let href
	export { classList as class }
	export { buttonElem as this }
</script>

<a class="button {classList}" {href} bind:this={buttonElem}
	><span class="button-text"><slot /></span></a
>
