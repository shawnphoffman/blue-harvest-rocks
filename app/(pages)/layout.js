import { memo } from 'react'
import Image from 'next/image'

import styles from 'app/Global.module.css'
import NavBar from 'components/NavBar/NavBar'

import titleLogo from './title.png'

const PageLayout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.page}>
				<div className={styles.header}>
					<Image className={styles.headerLogo} alt="Blue Harvest" src={titleLogo} width={500} priority />
					<NavBar />
				</div>
				<div className={styles.pageDetails}>{children}</div>
			</div>
		</div>
	)
}

export default memo(PageLayout)
