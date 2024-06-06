import '@/app/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/app/(pages)/icons'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'

import Background from '@/components/Background'
import ActiveLink from '@/components/core/ActiveLink'

import titleLogo from './title-opt.png'

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
		<html lang="en" className={`${openSans.className} bg-black`}>
			<head>
				{/* <script src="https://kit.fontawesome.com/d7ccc5bb1a.js" crossOrigin="anonymous" defer></script> */}
				<meta name="apple-itunes-app" content="app-id=1009917662" />
			</head>
			<body>
				<Background />
				<div className="scroller">
					<div className={'wrapper'}>
						<div className={'page'}>
							<div className={'header'}>
								<Image className={'headerLogo'} alt="Blue Harvest" src={titleLogo} width={500} priority />
								{/* <nav className="navContainer border-4 border-brand-bh2/50 px-4 py-3 bg-brand-bh1/75 rounded-xl"> */}
								<nav className="navContainer border-4 border-brand-bh2/50 px-4 py-3 bg-black/50 rounded-xl">
									<ActiveLink href="/" label="Links" />
									{!process.env.VERCEL_ENV && <ActiveLink href="/episodes" label="Episodes" />}
									{!process.env.VERCEL_ENV && <ActiveLink href="/updates" label="Updates" fuzzy />}
									<ActiveLink href="/patreon-preview" label="Patreon Preview" />
									<ActiveLink href="/listen-now" label="Listen Now" />
									{/* <ActiveLink href="/discord" label="Discord" /> */}
								</nav>
							</div>
							<div className={'pageDetails'}>{children}</div>
						</div>
					</div>
				</div>
				{process.env.VERCEL_ENV && (
					<>
						<Analytics />
						<SpeedInsights />
					</>
				)}
			</body>
		</html>
	)
}
