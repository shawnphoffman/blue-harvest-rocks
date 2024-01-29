import { getPatreonPreview } from 'app/actions'
import PatreonEntry from 'components/PatreonEntry/PatreonEntry'

export const revalidate = 60 * 60 // 1 hour
export const dynamic = 'force-dynamic'

export default async function PatreonPreview() {
	const { data } = await getPatreonPreview()
	return (
		<>
			<div className={'pageDescription'}>
				Here is a preview of the most recent episodes released on the Blue Harvest Patreon. <strong>This</strong> is the content you&apos;re
				looking for.
			</div>
			<div className={'patreonWrapper'}>
				{data.map(d => (
					<PatreonEntry key={d.guid} data={d} />
				))}
			</div>
		</>
	)
}
