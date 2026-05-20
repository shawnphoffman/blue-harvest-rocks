import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Image from 'next/image'

import items from '@/app/data/links'
import footImg from '@/app/images/foot.png'

import styles from './sodie.module.css'

export const metadata: Metadata = {
	title: 'Sodie',
	robots: { index: false, follow: false },
}

// Map a link title → brand color hex (mirrors tailwind.config.js podSitesColors)
const brandColor: Record<string, { c: string; text?: string }> = {
	'Apple Podcasts': { c: '#872ec4' },
	Spotify: { c: '#16883e' },
	Twitch: { c: '#9146ff' },
	'Voicemails & Emails': { c: '#52565e' },
	Patreon: { c: '#d93b26' },
	Bluesky: { c: '#0560ff' },
	Overcast: { c: '#be5a01' },
	Goodpods: { c: '#fcdb00', text: '#000' },
	PodBean: { c: '#5f7e1b' },
	YouTube: { c: '#ee0000' },
	Instagram: { c: '#c13584' },
	Threads: { c: '#222' },
	RSS: { c: '#ce4a0c' },
	'Merch Store': { c: '#374ecd' },
	Discord: { c: '#5865F2' },
	'High Potion': { c: '#65a30d' },
	'Stoned Cobra': { c: '#365314' },
}

// Short label for the dispenser swatch (real titles are too long to read at this size)
const shortName: Record<string, string> = {
	'Apple Podcasts': 'Apple',
	'Voicemails & Emails': 'Email',
	'Merch Store': 'Merch',
}

export default function Sodie() {
	// At widest (>1100px) the CSS grid places ICE explicitly in column 5 and dense
	// auto-flow fills the surrounding cells. At the 5-col flex breakpoint, ICE sits
	// naturally as the 3rd of 5 items in the first row. At narrower widths CSS
	// hides ICE entirely.
	const left = items.slice(0, 2)
	const right = items.slice(2)

	const renderTap = (item: (typeof items)[number]) => {
		const brand = brandColor[item.title] ?? { c: '#888' }
		const name = shortName[item.title] ?? item.title
		const styleVars = {
			'--c': brand.c,
			...(brand.text ? { '--text': brand.text } : {}),
		} as React.CSSProperties

		return (
			<a
				key={item.title}
				className={styles.tap}
				href={item.href}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={item.title}
				style={styleVars}
			>
				<span className={styles.label}>
					<span className={styles.swatch}>
						<FontAwesomeIcon icon={item.icon} className={styles.swatchIcon} />
						<span className={styles.swatchName}>{name}</span>
					</span>
				</span>
				<span className={styles.nozzle} />
				<span className={styles.pour}>
					<span className={styles.grill} />
					<span className={styles.stream} />
					<span className={styles.puddle} />
				</span>
			</a>
		)
	}

	return (
		<div className={styles.machine}>
			<div className={styles.header}>
				<div className={styles.logo}>
					Blue Harvest
					<small className={styles.logoSub}>Classic</small>
				</div>
			</div>
			<div className={styles.dispensers}>
				{left.map(renderTap)}
				<div className={styles.ice} aria-hidden="true">
					<span className={styles.iceLabel}>
						<span>FUCK</span>
						<span>ICE</span>
					</span>
					<span className={styles.iceNozzle} />
					<span className={styles.pour}>
						<span className={styles.grill} />
						<Image src={footImg} alt="" className={styles.foot} width={80} height={80} />
					</span>
				</div>
				{right.map(renderTap)}
			</div>
			<div className={styles.basin} />
		</div>
	)
}
