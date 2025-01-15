import PatreonRow from '@/components/core/PatreonRow'

async function getPatreonPreview() {
	try {
		const res = await fetch('https://api.shawn.party/api/patreon/blue-harvest', {
			next: { tags: ['patreon'] },
		})
		const data = await res.json()
		return {
			data: data.slice(0, 25),
		}
	} catch {
		return {}
	}
}

export default async function PatreonPreview() {
	const { data } = await getPatreonPreview()
	return (
		<div className="flex flex-col w-full max-w-3xl gap-4">
			<div className="w-full text-base leading-normal sm:text-lg">
				Here is a preview of the most recent episodes released on the Blue Harvest Patreon. <strong>This</strong> is the content you&apos;re
				looking for.
			</div>
			<div className="w-full border-4 rounded-xl border-boba-border bg-black/50">
				{data.map(d => (
					<PatreonRow key={d.link} data={d} />
				))}
			</div>
		</div>
	)
}
