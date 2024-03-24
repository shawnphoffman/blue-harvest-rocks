import 'app/global.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'

import ActiveLink from 'components/ActiveLink'
import Background from 'components/Background'

import titleLogo from './title.png'

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
		<html lang="en" className={openSans.className}>
			<head>
				<script src="https://kit.fontawesome.com/d7ccc5bb1a.js" crossOrigin="anonymous" defer></script>
				<meta name="apple-itunes-app" content="app-id=1009917662" />
			</head>
			<body>
				<Background />
				<div className="scroller">
					<div className={'wrapper'}>
						<div className={'page'}>
							<div className={'header'}>
								<Image className={'headerLogo'} alt="Blue Harvest" src={titleLogo} width={500} priority />
								<div className="navContainer">
									<ActiveLink href="/" label="Links" />
									<ActiveLink href="/patreon-preview" label="Patreon Preview" />
									{/* <ActiveLink href="/episodes" label="Episodes" /> */}
									{/* <ActiveLink href="/friends" label="Friends" /> */}
									<ActiveLink href="/listen-now" label="Listen Now" />
									<ActiveLink href="/discord" label="Discord" />
								</div>
							</div>
							<div className={'pageDetails'}>{children}</div>
						</div>
					</div>
				</div>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
