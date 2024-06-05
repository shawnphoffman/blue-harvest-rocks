import { faPatreon } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './PatreonEntry.module.css'

export default function PatreonEntry({ data: d }) {
	return (
		<a className={styles.entryRow} href={d.link} target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon icon={faPatreon} className={styles.icon} />
			<div className={styles.entryData}>
				<div className={styles.entryTitle}>{d.title}</div>
				<div className={styles.entryDate}>{new Date(d.pubDate).toLocaleDateString()}</div>
			</div>
		</a>
	)
}
