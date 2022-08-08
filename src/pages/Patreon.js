import { memo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { styled } from 'linaria/react'

import GenericError from 'components/GenericError/GenericError'
import Header from 'components/Header/Header'
import NavBar from 'components/NavBar/NavBar'
import PatreonEntry from 'components/PatreonEntry/PatreonEntry'

const dataUrl = 'https://gist.githubusercontent.com/shawnphoffman/79c2299232a71cfb7a2dc8768e651857/raw'

const Patreon = () => {
	const { isLoading, data, error } = useQuery(['patreon-data'], () => fetch(dataUrl).then(res => res.json()), {
		cacheTime: 30 * 60 * 1000,
	})

	return (
		<Container>
			<Details>
				<Header />
				<NavBar />
				{isLoading && <Loader className="fa-solid fa-space-station-moon-construction fa-beat-fade" />}
				{error && <GenericError />}
				{!!data && (
					<>
						<Description>
							Here is a preview of some of the most recent amazing Blue Harvest Patreon content. <strong>This</strong> is the content you're
							looking for.
						</Description>
						<Entries>
							{data.map(d => (
								<PatreonEntry key={d.guid} data={d} />
							))}
						</Entries>
					</>
				)}
			</Details>
		</Container>
	)
}

// TODO Refactor this to common layout
const smallBreakpoint = '420px'
const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 900px;
	width: 100%;
`
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
export default memo(Patreon)
