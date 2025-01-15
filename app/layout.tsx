import '@/app/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import { applePodcastId } from './data/links'
import { siteDescription, siteTitle, siteUrl } from './data/meta'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
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
	itunes: {
		appId: applePodcastId,
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${openSans.className} bg-black h-full p-0 m-0 overflow-x-hidden w-dvw`}>
			<body className="p-4 mx-auto my-0 text-white min-h-dvh w-dvw">{children}</body>
		</html>
	)
}
