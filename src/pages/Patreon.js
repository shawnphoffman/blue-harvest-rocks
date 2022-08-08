import { memo } from 'react'
import { motion } from 'framer-motion'
import { styled } from 'linaria/react'

// https://gist.githubusercontent.com/shawnphoffman/79c2299232a71cfb7a2dc8768e651857/raw/2e93b08cc51a0bf11222deb25e741a4b6836754b/bh-patreon.json

const Patreon = () => {
	return (
		<Container>
			<Details>
				<Heading whileHover={{ scale: 1.3, skewX: -15, rotateY: -5, rotateX: 18 }}>Blue Harvest</Heading>
				<Description>Patreon content preview.</Description>
				<Row></Row>
			</Details>
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
export default memo(Patreon)
