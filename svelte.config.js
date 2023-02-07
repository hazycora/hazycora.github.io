import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
    }),
    paths: {
      base: dev ? '' : '',
    },
  },
  extensions: [
    '.svelte',
    '.svx'
  ],
  preprocess: [
    preprocess({
      postcss: true,
    })
  ],
};

export default config;
