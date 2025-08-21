import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(), 
		mdsvex(
			{
				layout: {'post': dirname(fileURLToPath(import.meta.url)) + '/src/lib/post-layout.svelte'}, // Verify this path is correct
			}
		)
	],
	extensions: ['.svelte', '.svx', '.md'],
};

export default config;
