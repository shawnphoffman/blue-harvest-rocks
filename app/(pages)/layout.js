import { memo } from 'react'
import Image from 'next/image'

import NavBar from 'components/NavBar/NavBar'

import styles from './Global.module.css'
import titleLogo from './title.png'

export const metadata = {
	title: 'Blue Harvest',
	description: 'A Star Wars podcast hosted by Hawes Burkhardt and Will Whitten',
	openGraph: {
		title: 'Blue Harvest: A Star Wars Podcast',
		description: 'A Star Wars podcast hosted by Hawes Burkhardt and Will Whitten',
		url: 'https://blueharvest.rocks/',
		locale: 'en_US',
		type: 'website',
	},
}

const HighPotionLayout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.page}>
				<div className={styles.header}>
					<Image className={styles.headerLogo} alt="Blue Harvest" src={titleLogo} width={500} height={188} priority />
					<NavBar />
				</div>
				<div className={styles.pageDetails}>{children}</div>
			</div>
		</div>
	)
}

export default memo(HighPotionLayout)
