import { memo } from 'react'
import Image from 'next/image'

import bg from 'app/raccoon-trans.png'

import styles from './Background.module.css'

const Background = () => {
	return (
		<div className={styles.bgWrap}>
			<Image
				alt="Samurai Raccoon"
				src={bg}
				placeholder="blur"
				width={700}
				style={{
					objectFit: 'cover',
				}}
			/>
		</div>
	)
}

export default memo(Background)
