import { siteTitle } from '@/app/data/meta'

export default function SodieLayout({ children }) {
	return (
		<div className="flex flex-col items-center w-full max-w-screen-xl px-4 py-8 mx-auto sm:py-12">
			<h1 className="sr-only">{siteTitle} — Sodie</h1>
			<main className="flex flex-col items-center w-full gap-4">{children}</main>
		</div>
	)
}
