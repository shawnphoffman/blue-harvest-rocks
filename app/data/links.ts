import {
	faBluesky,
	faDiscord,
	faInstagram,
	faPatreon,
	faSpotify,
	faThreads,
	faTwitch,
	// faXTwitter,
	faYoutube,
} from '@awesome.me/kit-d7ccc5bb1a/icons/classic/brands'
import { faAt, faCoffeeBeans, faRssSquare, faSnake } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { faPodcast } from '@awesome.me/kit-d7ccc5bb1a/icons/duotone/solid'
import { faGoodpods, faHighPotionBalls, faOvercast, faTeepublic } from '@awesome.me/kit-d7ccc5bb1a/icons/kit/custom'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export const spotifyId = '3Krn2ePCbILvzORISjh2PT'
export const spotifyUrl = `https://open.spotify.com/show/${spotifyId}`
export const applePodcastId = '1009917662'
export const applePodcastUrl = `https://podcasts.apple.com/us/podcast/id${applePodcastId}`
export const appleRatingUrl = `${applePodcastUrl}?see-all=reviews`
export const rssFeedUrl = 'https://feed.podbean.com/blueharvestpodcast/feed.xml'
export const goodpodsUrl = 'https://goodpods.com/podcasts/blue-harvest-a-star-wars-podcast-84967'

type Link = {
	title: string
	href: string
	icon: IconDefinition
	background: string
	color?: string
}

const items: Link[] = [
	// {
	// 	title: 'Twitter',
	// 	href: 'https://twitter.com/BlueHarvestPod',
	// 	icon: faXTwitter,
	// 	background: 'bg-twitter',
	// },
	{
		title: 'Apple Podcasts',
		href: applePodcastUrl,
		icon: faPodcast,
		background: 'bg-applepodcasts',
	},
	{
		title: 'Spotify',
		href: spotifyUrl,
		icon: faSpotify,
		background: 'bg-spotify',
	},
	{
		title: 'Twitch',
		href: 'https://www.twitch.tv/blueharvestpod',
		icon: faTwitch,
		background: 'bg-twitch',
	},
	{
		title: 'Voicemails & Emails',
		href: 'mailto:blueharvestpodcast@gmail.com',
		icon: faAt,
		background: 'bg-email',
	},
	{
		title: 'Patreon',
		href: 'https://www.patreon.com/blueharvestpodcast',
		icon: faPatreon,
		background: 'bg-patreon',
	},
	{
		title: 'Bluesky',
		href: 'https://bsky.app/profile/blueharvest.bsky.social',
		icon: faBluesky,
		background: 'bg-bluesky',
	},
	{
		title: 'Overcast',
		href: 'https://overcast.fm/itunes1009917662',
		icon: faOvercast,
		background: 'bg-overcast',
	},
	{
		title: 'Goodpods',
		href: goodpodsUrl,
		icon: faGoodpods,
		background: 'bg-goodpods',
		color: 'text-black',
	},
	{
		title: 'PodBean',
		href: 'https://blueharvestpodcast.podbean.com/',
		icon: faCoffeeBeans,
		background: 'bg-podbean',
	},
	{
		title: 'YouTube',
		href: 'https://www.youtube.com/BlueHarvestAStarWarsPodcast',
		icon: faYoutube,
		background: 'bg-youtube',
	},
	{
		title: 'Instagram',
		href: 'https://www.instagram.com/blueharvestpod',
		icon: faInstagram,
		background: 'bg-instagram',
	},
	{
		title: 'Threads',
		href: 'https://www.threads.net/@blueharvestpod',
		icon: faThreads,
		background: 'bg-threads',
	},
	{
		title: 'RSS',
		href: 'https://feed.podbean.com/blueharvestpodcast/feed.xml',
		icon: faRssSquare,
		background: 'bg-rss',
	},
	{
		title: 'Merch Store',
		href: 'https://www.teepublic.com/user/blueharvestpodcast',
		icon: faTeepublic,
		background: 'bg-teepublic',
	},
	{
		title: 'Discord',
		href: 'https://discord.gg/CZFSuSpmD8',
		icon: faDiscord,
		background: 'bg-discord',
	},
	{
		title: 'High Potion',
		href: 'https://myweirdfoot.com/home',
		icon: faHighPotionBalls,
		background: 'bg-lime-700',
	},
	{
		title: 'Stoned Cobra',
		href: 'https://stonedcobra.bandcamp.com/',
		icon: faSnake,
		background: 'bg-lime-900',
	},
]

export default items
