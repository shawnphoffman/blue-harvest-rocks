import { memo } from 'react'
import { motion } from 'framer-motion'
import { styled } from 'linaria/react'

import LinkCard from 'components/LinkCard/LinkCard'
import items from 'config/links'

const Home = () => {
	return (
		<Container>
			<Details>
				<Heading whileHover={{ scale: 1.3, skewX: -15, rotateY: -5, rotateX: 18 }}>Blue Harvest</Heading>
				<Description>
					Star Wars podcast hosted by Hawes Burkhardt and Will Whitten. Available on iTunes, Spotify and Google Play. We've got Star Wars
					ants in our Star Wars pants.
				</Description>
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
							bg={item.background || 'white'}
						></LinkCard>
					)
				})}
			</Row>
		</Container>
	)
}
const smallBreakpoint = '420px'
const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 900px;
	width: 100%;
`
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
`
const Details = styled.div`
	text-align: center;
	margin-bottom: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: ${smallBreakpoint}) {
		margin-bottom: 16px;
	}
`
const Heading = styled(motion.h1)`
	font-family: 'Work Sans', sans-serif;
	text-transform: uppercase;
	font-size: 80px;
	margin: 24px 48px;
	color: rgb(235, 169, 60);
	transform-style: preserve-3d;

	/* @media (max-width: ${smallBreakpoint}) { */
	@media (max-width: 600px) {
		font-size: 60px;
		margin: 16px 48px;
	}
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
