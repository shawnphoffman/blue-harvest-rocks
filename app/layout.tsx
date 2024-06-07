import '@/app/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/app/(pages)/icons'

import { faFaceHandPeeking } from '@awesome.me/kit-d7ccc5bb1a/icons/duotone/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'

import titleLogo from '@/app/images/title.png'
import ActiveLink from '@/components/core/ActiveLink'
import Background from '@/components/core/Background'

import { siteDescription, siteTitle, siteUrl } from './data/meta'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: {
		template: `%s | ${siteTitle}`,
		default: siteTitle,
	},
	description: siteDescription,
	metadataBase: siteUrl,
	openGraph: {
		title: {
			template: `%s | ${siteTitle}`,
			default: siteTitle,
		},
		description: siteDescription,
		siteName: siteTitle,
		url: siteUrl,
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
					<div className="flex flex-col w-full max-w-4xl gap-4">
						{/* HEADER */}
						<div className="flex flex-col items-center gap-4 text-center">
							{/* IMAGE */}
							<h1 className="sr-only">{siteTitle}</h1>
							<Image className="w-full max-w-md" alt="" src={titleLogo} width={448} priority />

							{/* NAV */}
							<nav className="flex flex-row flex-wrap justify-center px-4 py-1 border-4 sm:py-3 gap-y-1 gap-x-4 border-boba-border bg-black/50 rounded-xl">
								<ActiveLink href="/">Links</ActiveLink>
								<ActiveLink href="/episodes">Episodes</ActiveLink>
								{!process.env.VERCEL_ENV && (
									<ActiveLink href="/updates" fuzzy>
										News
									</ActiveLink>
								)}
								<ActiveLink href="/patreon-preview">
									<span className="inline sm:hidden">
										Patreon <FontAwesomeIcon icon={faFaceHandPeeking} />
									</span>
									<span className="hidden sm:inline">Patreon Preview</span>
								</ActiveLink>
								<ActiveLink href="/listen-now" className="hidden sm:block">
									Listen Now
								</ActiveLink>
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
