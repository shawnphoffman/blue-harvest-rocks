'use client'

export default function Discord() {
	return (
		<div className={'pageDescription'}>
			<iframe
				loading="lazy"
				title="Blue Harvest Discord"
				src="https://discord.com/widget?id=471428649200123915&theme=dark"
				width="350"
				height="500"
				allowtransparency="true"
				sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
				style={{ border: 0 }}
			></iframe>
		</div>
	)
}
