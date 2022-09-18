import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	vitePlugin: {
		experimental: {
			inspector: {
				showToggleButton: "always",
				holdMode: false,
			}
		}
	}
};

export default config;
