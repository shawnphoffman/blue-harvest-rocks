import { memo } from 'react'
import { styled } from 'linaria/react'

import PatreonEntry from 'components/PatreonEntry/PatreonEntry'

const dataUrl = 'https://gist.githubusercontent.com/shawnphoffman/79c2299232a71cfb7a2dc8768e651857/raw'

// Server data fetch
export async function getServerSideProps(context) {
	const res = await fetch(dataUrl)
	const data = await res.json()

	context.res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=300')

	return {
		props: {
			data,
		},
	}
}

const PatreonPreview = ({ data }) => {
	return (
		<Details>
			<Description>
				Here is a preview of some of the most recent amazing Blue Harvest Patreon content. <strong>This</strong> is the content you're
				looking for.
			</Description>
			<Entries>
				{data.map(d => (
					<PatreonEntry key={d.guid} data={d} />
				))}
			</Entries>
		</Details>
	)
}

// TODO Refactor this to common layout
const smallBreakpoint = '420px'
const Details = styled.div`
	text-align: center;
	margin-bottom: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: ${smallBreakpoint}) {
		margin-bottom: 16px;
	}
`
const Description = styled.div`
	font-size: 18px;
	max-width: 85%;
	line-height: 1.5;

	@media (max-width: ${smallBreakpoint}) {
		font-size: 16px;
	}
`
const Loader = styled.i`
	font-size: 64px;
`
const Entries = styled.div`
	margin: 32px 0px;
`

export default memo(PatreonPreview)
