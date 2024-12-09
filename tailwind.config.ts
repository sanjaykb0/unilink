import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				prime: "#009C64",
				sunsetOrange: "#FF7D34",
			}
		}
	},

	plugins: [forms]
} satisfies Config;
