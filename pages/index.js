import { memo } from 'react'
import { styled } from 'linaria/react'

import LinkCard from 'components/LinkCard/LinkCard'
import Ratings from 'components/Ratings/Ratings'
import items from 'config/links'

const dataUrl = 'https://gist.githubusercontent.com/shawnphoffman/c55f43ff44ab0fee42b85cf816c07ec5/raw'

// Server data fetch
export async function getServerSideProps(context) {
	const res = await fetch(dataUrl)
	const data = await res.json()

	context.res.setHeader('Cache-Control', 'public, s-maxage=6000, stale-while-revalidate=3000')

	return {
		props: {
			appleRating: data.appleRating,
			appleRatingUrl: data.appleRatingUrl,
		},
	}
}

const Home = ({ appleRating, appleRatingUrl }) => {
	return (
		<>
			<Details>
				<Description>
					A Star Wars podcast hosted by two long-time friends, Hawes Burkhardt and Will Whitten. Check out the Patreon for even more
					exclusive content.
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
							icon={item.icon}
							bg={item.background}
						></LinkCard>
					)
				})}
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
