module.exports = {
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	async redirects() {
		return [
			{
				source: '/patreon',
				destination: 'https://www.patreon.com/blueharvestpodcast',
				permanent: false,
				basePath: false,
			},
		]
	},
}
