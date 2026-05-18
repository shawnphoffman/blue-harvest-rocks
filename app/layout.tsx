import '@/app/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { Open_Sans } from 'next/font/google'
import { VisualEditing } from 'next-sanity/visual-editing'

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

export default async function RootLayout({ children }) {
	const { isEnabled: isDraftMode } = await draftMode()
	return (
		<html lang="en" className={`${openSans.className} bg-black h-full p-0 m-0 overflow-x-hidden w-dvw`}>
			<body className="p-0 mx-auto my-0 text-white min-h-dvh w-dvw">
				{children}
				{isDraftMode && <VisualEditing />}
			</body>
		</html>
	)
}
