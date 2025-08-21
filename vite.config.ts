import { sveltekit } from '@sveltejs/kit/vite';
import { preprocess } from 'svelte/compiler';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
});
