/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		darkMode: 'media',
		extend: {
			colors: {
				primary:{
					'50': '#fcf5fe',
					'100': '#f7ebfc',
					'200': '#efd6f8',
					'300': '#e5b6f1',
					'400': '#d68ae8',
					'500': '#c15dd8',
					'600': '#b04ac4',
					'700': '#8c309b',
					'800': '#74297f',
					'900': '#612669',
					'950': '#3e0e44',
				}
			}
		},
	},
	plugins: [require('flowbite/plugin'),animations],
}
