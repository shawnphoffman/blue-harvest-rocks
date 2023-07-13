import { memo } from 'react'

import styles from '../Global.module.css'

const dataUrl = 'https://api.shawn.party/api/blue-harvest/patreon-preview'

async function getData() {
	try {
		const res = await fetch(dataUrl, { next: { revalidate: 60 * 60 } })
		const data = await res.json()

		return {
			data: data.slice(0, 20),
		}
	} catch {
		return {}
	}
}

const PatreonPreview = async () => {
	const data = await getData()
	console.log(data)
	return (
		<div className={styles.pageDescription}>
			<h1>Patreon Preview</h1>
			<pre>
				<code>{JSON.stringify(data, null, 2)}</code>
			</pre>
		</div>
	)
}

export default memo(PatreonPreview)
