import { memo, useCallback, useMemo } from 'react'
import * as Panelbear from '@panelbear/panelbear-js'
import { m } from 'framer-motion'
import { styled } from 'linaria/react'
import Image from 'next/image'

import Mole1 from 'public/images/monty1.png'
import Mole2 from 'public/images/monty2.png'
import Rac1 from 'public/images/raccoon1.png'
import Rac2 from 'public/images/raccoon6.png'
import Rac3 from 'public/images/raccoon7.png'

const variants = {
	visible: i => ({
		opacity: 1,
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

	const mod = useMemo(() => Math.floor(Math.random() * (4 - 0 + 1) + 0), [])
	// const ImgSrc = useMemo(() => {
	const ImgSrc = () => {
		if (mod === 0) return <Image src={Rac1} width="50" height="47" alt="" aria-hidden="true" />

		if (mod === 1) return <Image src={Rac2} width="50" height="36" alt="" aria-hidden="true" />

		if (mod === 2) return <Image src={Rac3} width="50" height="47" alt="" aria-hidden="true" />

		if (mod === 3) return <Image src={Mole1} width="50" height="34" alt="" aria-hidden="true" />

		return <Image src={Mole2} width="50" height="37" alt="" aria-hidden="true" />
	}
	// ), [mod]}

	return (
		<SuperContainer initial="hidden" animate="visible" custom={i} variants={variants}>
			<SneakyContainer>
				<ImgSrc />
			</SneakyContainer>
			<Card whileHover={{ opacity: 1, scale: 1.05, skewY: -2 }} whileTap={{ scale: 0.9 }} onClick={logClickEvent}>
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
		</SuperContainer>
	)
}

const SuperContainer = styled(m.div)`
	min-width: 250px;
	flex: 1 1 300px;
	max-width: 350px;
`

const Card = styled(m.div)`
	padding: 8px;
	border-radius: 8px;
	min-height: 155px;

	@media (min-width: 750px) {
		margin-bottom: 8px;
	}
`

const SneakyContainer = styled.div`
	width: 50px;
	position: relative;
	top: 8px;
	height: 0px;
	right: -22px;
	transition: top 200ms ease;
	z-index: -1;

	${SuperContainer}:hover & {
		top: -21px;
		opacity: 1;
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
	margin: 0 0 8px 0;
`

export default memo(LinkCard)
