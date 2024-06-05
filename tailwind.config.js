import tailwindColors from '@shawnphoffman/pod-sites-common/tailwind'
// import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./sanity/**/*.{js,ts,jsx,tsx,mdx}',
		'./utils/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				brand: {
					bh1: 'rgb(27, 14, 8)',
					bh2: 'rgb(96, 120, 101)',
					bh3: 'rgb(106, 161, 143)',
					bh4: 'rgb(162, 197, 183)',
					bh5: 'rgb(138, 0, 16)',
					bhBg: 'rgba(27, 14, 8, 0.5)',
					bhHover: 'rgba(106, 161, 143, 0.15)',
					// red: colors.red['600'],
					// blue: colors.sky['400'],
					// yellow: colors.yellow['400'],
				},
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: 0 },
					'100%': { transform: 1 },
				},
			},
			animation: {
				fadeInUp: '0.5s fadeInUp',
			},
		},
	},
	plugins: [tailwindColors.default],
}
