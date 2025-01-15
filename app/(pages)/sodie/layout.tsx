import Image from 'next/image'

import { siteTitle } from '@/app/data/meta'
import titleLogo from '@/app/images/title.png'

export default function SodieLayout({ children }) {
	return (
		<>
			{/* WRAPPER */}
			<div className="flex flex-col items-center w-full max-w-screen-xl mx-auto">
				<div className="flex flex-col w-full max-w-4xl gap-4">
					{/* HEADER */}
					<div className="flex flex-col items-center gap-4 text-center">
						{/* IMAGE */}
						<h1 className="sr-only">{siteTitle}</h1>
						<Image className="w-full max-w-md" alt="" src={titleLogo} width={448} priority />
					</div>
					{/* PAGE CONTENT */}
					<main className="flex flex-col items-center flex-1 gap-4 text-center">{children}</main>
				</div>
			</div>
		</>
	)
}
