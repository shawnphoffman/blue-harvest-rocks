import { memo } from 'react'

import PatreonEntry from 'components/PatreonEntry/PatreonEntry'

import styles from '../Global.module.css'

const dataUrl = 'https://api.shawn.party/api/blue-harvest/patreon-preview'

async function getData() {
	try {
		const res = await fetch(dataUrl, { next: { revalidate: 60 * 60 * 12 } })
		const data = await res.json()

		return {
			data: data.slice(0, 10),
		}
	} catch {
		return {}
	}
}

const PatreonPreview = async () => {
	const { data } = await getData()
	return (
		<>
			<div className={styles.pageDescription}>
				Here is a preview of the 10 most recent episodes released on the Blue Harvest Patreon. <strong>This</strong> is the content
				you&apos;re looking for.
			</div>
			<div className={styles.patreonWrapper}>
				{data.map(d => (
					<PatreonEntry key={d.guid} data={d} />
				))}
			</div>
		</>
	)
}

export default memo(PatreonPreview)
