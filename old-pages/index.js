import { memo } from 'react'
import { styled } from 'linaria/react'

import LinkCard from 'components/LinkCard/LinkCard'
import Ratings from 'components/Ratings/Ratings'
import Reviews from 'components/Reviews/Reviews'
import items from 'config/links'

const dataUrl = 'https://api.shawn.party/api/blue-harvest/reviews'

// Server data fetch
export async function getServerSideProps(context) {
	try {
		const res = await fetch(dataUrl)
		const data = await res.json()
		const { rating, ratingsUrl, reviews } = data

		context.res.setHeader('Cache-Control', 'public, s-maxage=6000, stale-while-revalidate=3000')

		return {
			props: {
				appleRating: rating,
				appleRatingUrl: ratingsUrl,
				reviews,
			},
		}
	} catch {
		return {
			props: {},
		}
	}
}

const Home = ({ appleRating, appleRatingUrl, reviews }) => {
	const isFootSite = process.env.NEXT_PUBLIC_FOOT === 'true'

	return (
		<>
			<Details>
				<Description>
					A Star Wars podcast hosted by two long-time friends, Hawes Burkhardt and Will Whitten. Check out the Patreon for even more
					exclusive content or hop on Twitch to join the fun.
				</Description>
				<Ratings appleRating={appleRating} appleRatingUrl={appleRatingUrl} />
			</Details>
			<Row>
				{items.map((item, i) => {
					return (
						<LinkCard
							i={i}
							key={item.title}
							title={item.title}
							subtitle={item.subtitle}
							link={item.href}
							cover={item.image}
							icon={!isFootSite ? item.icon : 'fak fa-foot'}
							bg={item.background}
							color={item.color}
							alert={item.alert}
						></LinkCard>
					)
				})}
			</Row>
			<Row>
				<Reviews reviews={reviews} />
			</Row>
		</>
	)
}

const smallBreakpoint = '420px'
const Details = styled.div`
	text-align: center;
	margin-bottom: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: ${smallBreakpoint}) {
		margin-bottom: 16px;
	}
`
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
`
const Description = styled.div`
	font-size: 18px;
	max-width: 85%;
	line-height: 1.5;

	@media (max-width: ${smallBreakpoint}) {
		font-size: 16px;
	}
`

export default memo(Home)
