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
		<html lang="en" className={`${openSans.className} bg-black h-full p-0 m-0 overflow-x-hidden w-dvw`}>
			<head>
				<meta name="apple-itunes-app" content="app-id=1009917662" />
			</head>
			<body className="p-4 mx-auto my-0 text-white min-h-dvh w-dvw">
				<Background />
				{/* WRAPPER */}
				<div className="flex flex-col items-center w-full max-w-screen-xl mx-auto">
					<div className="flex flex-col w-full max-w-4xl min-h-dvh gap-4">
						{/* HEADER */}
						<div className="flex flex-col items-center text-center gap-4">
							{/* IMAGE */}
							<h1 className="sr-only">{metadata.title}</h1>
							<Image className="w-full max-w-md" alt="" src={titleLogo} width={448} priority />

							{/* NAV */}
							<nav className="flex flex-row flex-wrap justify-center gap-4 border-4 border-boba-border px-4 py-3 bg-black/50 rounded-xl">
								<ActiveLink href="/" label="Links" />
								<ActiveLink href="/episodes" label="Episodes" />
								{!process.env.VERCEL_ENV && <ActiveLink href="/updates" label="Updates" fuzzy />}
								<ActiveLink href="/patreon-preview" label="Patreon Preview" />
								<ActiveLink href="/listen-now" label="Listen Now" />
							</nav>
						</div>
						{/* PAGE CONTENT */}
						<main className="flex flex-col items-center flex-1 gap-4 text-center">{children}</main>
					</div>
				</div>
				{/* EXTRAS */}
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
