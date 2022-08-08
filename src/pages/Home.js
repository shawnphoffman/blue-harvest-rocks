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
					A Star Wars podcast hosted by two long time friends, Hawes Burkhardt and Will Whitten. Check out the Patreon for even more
					exclusive content.
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
							bg={item.background}
						></LinkCard>
					)
				})}
			</Row>
			<Row>
				<IFrame
					title="Blue Harvest Podcast Preview"
					src="https://embed.podcasts.apple.com/us/podcast/blue-harvest-a-star-wars-podcast/id1009917662?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
					height="450px"
					frameborder="0"
					sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
					allow="autoplay *; encrypted-media *; clipboard-write"
				></IFrame>
			</Row>
			{/* <Row>
				<img
					alt=""
					src="https://tools-qr-production.s3.amazonaws.com/output/apple-toolbox/1891d0e4f5ab3454f84d74ab2bd4029d/0675ff8fdc8f48a833769e7688cb64a1.png"
				/>
			</Row> */}
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
	background: -webkit-linear-gradient(var(--orange1), var(--orange2));
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

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

const IFrame = styled.iframe`
	width: 100%;
	max-width: 660px;
	overflow: hidden;
	border-radius: 10px;
	background: transparent;
	border: none;
`
export default memo(Home)
