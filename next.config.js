module.exports = {
	// images: {
	// 	formats: ['image/avif', 'image/webp'],
	// },
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
			{
				protocol: 'https',
				hostname: 'pbcdn1.podbean.com',
			},
		],
	},
	async redirects() {
		return [
			{
				source: '/patreon',
				destination: 'https://www.patreon.com/blueharvestpodcast',
				permanent: false,
				basePath: false,
			},
			{
				source: '/twitch',
				destination: 'https://www.twitch.tv/blueharvestpod',
				permanent: false,
				basePath: false,
			},
			{
				source: '/studio',
				destination: 'https://pod-content-studio.vercel.app/studio',
				permanent: false,
			},
			{
				source: '/refresh',
				destination: '/api/revalidate/episodes',
				permanent: true,
			},
		]
	},
}
