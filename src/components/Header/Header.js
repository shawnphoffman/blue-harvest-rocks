import { memo } from 'react'
import { m } from 'framer-motion'
import { styled } from 'linaria/react'

const Header = () => {
	return <Heading whileHover={{ scale: 1.3, skewX: -15, rotateY: -5, rotateX: 18 }}>Blue Harvest</Heading>
}
const Heading = styled(m.h1)`
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
export default memo(Header)
