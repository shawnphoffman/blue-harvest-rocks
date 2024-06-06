'use server'

import { XMLParser } from 'fast-xml-parser'

import { appleRatingUrl, goodpodsUrl, rssFeedUrl, spotifyUrl } from './(pages)/(links)/links'

export async function getAppleReviews() {
	try {
		const res = await fetch(`https://api.shawn.party/api/pod-data/apple?url=${appleRatingUrl}`, {
			next: { revalidate: 60 * 60 * 6 },
		})
		const data = await res.json()
		const { rating, ratingsUrl, reviews } = data

		return {
			appleRating: rating,
			appleRatingUrl: ratingsUrl,
			reviews,
		}
	} catch {
		return {}
	}
}

export async function getSpotifyReviews() {
	try {
		const res = await fetch(`https://api.shawn.party/api/pod-data/spotify?url=${spotifyUrl}`, {
			next: { revalidate: 60 * 60 * 6 },
		})
		const data = await res.json()
		// console.log('getSpotifyReviews', data)
		return data
	} catch {
		return {}
	}
}

export async function getGoodpodsReviews() {
	try {
		const res = await fetch(`https://api.shawn.party/api/pod-data/goodpods?url=${goodpodsUrl}`, {
			next: { revalidate: 60 * 60 * 6 },
		})
		const data = await res.json()
		// console.log('getGoodpodsReviews', data)
		return data
	} catch {
		return {}
	}
}

export async function getEpisodes() {
	try {
		const res = await fetch(rssFeedUrl, {
			next: { tags: ['episodes'] },
		})
		const xml = await res.text()
		const parser = new XMLParser({
			ignoreAttributes: false,
			attributeNamePrefix: '@_',
		})
		const parsed = parser.parse(xml)
		const episodes = parsed.rss.channel.item.map(ep => {
			return {
				guid: ep.guid['#text'],
				title: ep.title,
				imgSrc: ep['itunes:image'] ? ep['itunes:image']['@_href'] : parsed.rss.channel['itunes:image']['@_href'],
				summary: cleanEpisodeSummary(ep['itunes:summary']),
				link: ep.link,
				pubDate: ep.pubDate,
			}
		})
		return {
			episodes,
		}
	} catch (error) {
		console.error('getEpisodes', error)
		return {}
	}
}

export async function getPatreonPreview() {
	try {
		const res = await fetch('https://api.shawn.party/api/patreon/blue-harvest', {
			// next: { revalidate: 60 * 60 * 1 },
			next: { tags: ['patreon'] },
		})
		const data = await res.json()
		return {
			data: data.slice(0, 25),
		}
	} catch {
		return {}
	}
}

function cleanEpisodeSummary(text: string) {
	const index = text.indexOf('Check out our website:')
	if (index !== -1) {
		text = text.substring(0, index).trim()
	}

	const i2 = text.indexOf('Support us on Patreon')
	if (i2 !== -1) {
		text = text.substring(0, i2).trim()
	}

	return text
}
