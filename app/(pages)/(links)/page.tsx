import { Suspense } from 'react'

import items from '@/app/data/links'
import LinkCard from '@/components/core/LinkCard'
import Loading from '@/components/core/Loading'
import RatingsApple from '@/components/core/RatingsApple'
import RatingsGoodpods from '@/components/core/RatingsGoodpods'
import RatingsSpotify from '@/components/core/RatingsSpotify'
import Reviews from '@/components/core/Reviews'

export default async function Home() {
	return (
		<>
			<div className="w-full max-w-3xl text-base leading-normal sm:text-lg">
				A Star Wars podcast hosted by two long-time friends, Hawes Burkhardt and Will Whitten. Check out the Patreon for even more exclusive
				content or hop on Twitch to join the fun.
			</div>

			<div className="flex flex-row flex-wrap items-center justify-center gap-2 mb-2">
				<Suspense fallback="">
					<RatingsApple />
					<RatingsGoodpods />
					<RatingsSpotify />
				</Suspense>
			</div>

			<div className="flex flex-row flex-wrap justify-center w-full gap-4">
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

			<Suspense fallback={<Loading />}>
				<Reviews />
			</Suspense>
		</>
	)
}
