import { sveltekit } from '@sveltejs/kit/vite'
import svelteSVG from 'vite-plugin-svelte-svg'

const config = {
	plugins: [
		svelteSVG({
			svgoConfig: {
				plugins: [
					{
						name: 'preset-default',
						params: {
							overrides: {
								removeViewBox: false,
								cleanupIds: false
							}
						}
					}
				]
			},
			requireSuffix: false
		}),
		sveltekit()
	]
}

export default config
