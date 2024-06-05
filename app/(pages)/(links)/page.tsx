import { Suspense } from 'react'

import LinkCard from '@/components/core/LinkCard'
import RatingsApple from '@/components/core/RatingsApple'
import RatingsSpotify from '@/components/core/RatingsSpotify'
import Reviews from '@/components/Reviews'

import items from './links'

export default async function Home() {
	return (
		<>
			<div className={'pageDescription'}>
				A Star Wars podcast hosted by two long-time friends, Hawes Burkhardt and Will Whitten. Check out the Patreon for even more exclusive
				content or hop on Twitch to join the fun.
			</div>
			<div className="ratingsWrapper">
				<Suspense>
					<RatingsApple />
					<RatingsSpotify />
				</Suspense>
			</div>
			<div className={'pageRow'}>
				{items.map((item, i) => {
					return (
						<LinkCard
							key={item.title}
							title={item.title}
							link={item.href}
							icon={item.icon}
							bg={item.background}
							color={item.color}
						></LinkCard>
					)
				})}
			</div>

			<div className={'pageRow'}>
				<Suspense>
					<Reviews />
				</Suspense>
			</div>
		</>
	)
}
