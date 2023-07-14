import { memo } from 'react'

import styles from './PatreonEntry.module.css'

const PatreonEntry = ({ data: d }) => {
	return (
		<a className={styles.entryRow} href={d.link} target="_blank" rel="noopener noreferrer">
			<i className={`fa-brands fa-patreon ${styles.icon}`} />
			<div className={styles.entryData}>
				<div className={styles.entryTitle}>{d.title}</div>
				<div className={styles.entryDate}>{new Date(d.pubDate).toLocaleDateString()}</div>
			</div>
		</a>
	)
}

export default memo(PatreonEntry)
