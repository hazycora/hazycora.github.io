import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build'
		}),
		paths: {
			base: ''
		}
	},
	extensions: ['.svelte', '.svx'],
	preprocess: [
		preprocess({
			postcss: true
		})
	]
}

export default config
