import { memo } from 'react'
import Image from 'next/image'

import NavBar from 'components/NavBar/NavBar'

import styles from './Global.module.css'
import titleLogo from './title.png'

const PageLayout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.page}>
				<div className={styles.header}>
					<Image className={styles.headerLogo} alt="Blue Harvest" src={titleLogo} width={500} height={188} placeholder="blur" priority />
					<NavBar />
				</div>
				<div className={styles.pageDetails}>{children}</div>
			</div>
		</div>
	)
}

export default memo(PageLayout)
