import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getSpotifyReviews } from '@/app/actions'

// http://localhost:3001/api/podcast-data/goodpods?url=https://goodpods.com/podcasts/dinner-with-the-heelers-a-bluey-podcast-277737
export default async function RatingsGoodpods() {
	const spotifyData = await getSpotifyReviews()

	if (!spotifyData || !spotifyData.rating) return null

	return (
		<a
			className="flex flex-row items-center px-2 py-1 text-sm font-bold leading-normal text-black rounded-lg whitespace-nowrap bg-goodpods"
			href={spotifyData.url || ''}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div>{spotifyData.rating.toFixed(1)}</div>
			<FontAwesomeIcon icon={'fa-solid fa-star-sharp' as IconProp} className="text-[0.85em] mx-0.5" />
			<div>on Goodpods</div>
		</a>
	)
}
