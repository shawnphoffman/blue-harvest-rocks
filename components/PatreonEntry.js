import styles from './PatreonEntry.module.css'

export default function PatreonEntry({ data: d }) {
	return (
		<a className={styles.entryRow} href={d.link} target="_blank" rel="noopener noreferrer">
			<i className={`fa-brands fa-patreon ${styles.icon}`} aria-hidden />
			<div className={styles.entryData}>
				<div className={styles.entryTitle}>{d.title}</div>
				<div className={styles.entryDate}>{new Date(d.pubDate).toLocaleDateString()}</div>
			</div>
		</a>
	)
}
