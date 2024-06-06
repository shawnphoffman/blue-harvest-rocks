'use client'

export default function ListenNow() {
	return (
		<div className="max-w-2xl w-full text-base leading-normal sm:text-lg mx-auto border-4 rounded-xl border-boba-border">
			<iframe
				className={'iframe'}
				loading="lazy"
				title="Blue Harvest Podcast Preview"
				src="https://embed.podcasts.apple.com/us/podcast/blue-harvest-a-star-wars-podcast/id1009917662?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
				height="450px"
				width={'100%'}
				sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
				allow="autoplay *; encrypted-media *; clipboard-write"
			></iframe>
		</div>
	)
}
