import { faFaceHandPeeking } from '@awesome.me/kit-d7ccc5bb1a/icons/duotone/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

import { siteTitle } from '@/app/data/meta'
import titleLogo from '@/app/images/title.png'
import ActiveLink from '@/components/core/ActiveLink'
import Background from '@/components/core/Background'

export default function ClassicLayout({ children }) {
	return (
		<>
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
		</>
	)
}
