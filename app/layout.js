import 'styles/globals.css'

import { Open_Sans } from 'next/font/google'
import Script from 'next/script'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'Blue Harvest',
	description: 'A Star Wars podcast hosted by Hawes Burkhardt and Will Whitten',
	metadataBase: 'https://blueharvest.rocks/',
	openGraph: {
		title: 'Blue Harvest: A Star Wars Podcast',
		description: 'A Star Wars podcast hosted by Hawes Burkhardt and Will Whitten',
		url: 'https://blueharvest.rocks/',
		locale: 'en_US',
		type: 'website',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" style={{ fontFamily: openSans.style.fontFamily }}>
			<head>
				{/* <!-- FontAwesome Icons --> */}
				<Script src="https://kit.fontawesome.com/d7ccc5bb1a.js" strategy="afterInteractive" rel="preload" as="font" />
			</head>
			<body>
				<div className="scroller">{children}</div>
			</body>
		</html>
	)
}
