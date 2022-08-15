import { memo, useCallback } from 'react'
import * as Panelbear from '@panelbear/panelbear-js'
import { m } from 'framer-motion'
import { styled } from 'linaria/react'

const variants = {
	visible: i => ({
		opacity: 0.85,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: 'easeIn',
			type: 'spring',
			stiffness: 50,
		},
	}),
	hidden: { opacity: 0, y: 200 },
}

const LinkCard = ({ i, link, bg, icon, title, subtitle }) => {
	const logClickEvent = useCallback(() => {
		Panelbear.track(`LinkClick-${title.replace(/[^A-Za-z]+/g, '')}`)
	}, [title])

	return (
		<Card
			initial="hidden"
			animate="visible"
			custom={i}
			whileHover={{ opacity: 1, scale: 1.05, skewY: -2 }}
			whileTap={{ scale: 0.9 }}
			variants={variants}
			onClick={logClickEvent}
		>
			<a href={link} target="_blank" rel="noopener noreferrer">
				<Cover style={{ background: bg }}>
					<i className={icon} aria-hidden="true"></i>
				</Cover>
				<Data>
					<Title>{title}</Title>
					{!!subtitle && <Subtitle>{subtitle}</Subtitle>}
				</Data>
			</a>
		</Card>
	)
}

const Card = styled(m.div)`
	padding: 8px;
	border-radius: 8px;
	min-height: 155px;
	min-width: 250px;
	flex: 1 1 300px;
	max-width: 350px;

	@media (min-width: 750px) {
		margin-bottom: 8px;
	}
`
const Cover = styled.div`
	width: 100%;
	object-fit: cover;
	border-radius: 8px;
	height: 94px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 48px;
	color: var(--white);
`
const Data = styled.div`
	margin-top: 5px;
	text-align: center;
`
const Title = styled.h2`
	margin: 0;
	font-weight: 700;
`
const Subtitle = styled.p`
	color: var(--linkAlt);
	margin: 8px 0;
`

export default memo(LinkCard)
