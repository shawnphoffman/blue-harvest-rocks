import { memo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { styled } from 'linaria/react'

import Header from 'components/Header/Header'
import NavBar from 'components/NavBar/NavBar'

const dataUrl = 'https://gist.githubusercontent.com/shawnphoffman/79c2299232a71cfb7a2dc8768e651857/raw'

const Patreon = () => {
	const { isLoading, data, error } = useQuery(['patreon-data'], () => fetch(dataUrl).then(res => res.json()), {
		cacheTime: 30 * 60 * 1000,
	})

	// if (isLoading) return 'Loading...'

	// if (error) return 'An error has occurred: ' + error.message

	return (
		<Container>
			<Details>
				<Header />
				<NavBar />
				{isLoading && <Loader className="fa-solid fa-space-station-moon-construction fa-beat-fade" />}
				{error && (
					<div>
						<ErrorHeading>Uh-Oh!</ErrorHeading>
						<ErrorDesc>Something went wrong...</ErrorDesc>
						<Loader className="fa-solid fa-skull fa-beat-fade" />
					</div>
				)}
				{!!data && (
					<>
						<Description>
							Here is a preview of some of the most recent amazing Blue Harvest Patreon content. <strong>This</strong> is the content you're
							looking for.
						</Description>
						<Entries>
							{data.map(d => (
								<EntryRow key={d.guid} href={d.link} target="_blank" rel="noopener noreferrer">
									<Icon className="fa-brands fa-patreon" />
									<EntryData>
										<EntryTitle>{d.title}</EntryTitle>
										<EntryDate>{new Date(d.pubDate).toLocaleDateString()}</EntryDate>
									</EntryData>
								</EntryRow>
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

const ErrorDesc = styled.div`
	margin: 16px;
`

const ErrorHeading = styled.div`
	font-size: 48px;
	font-weight: bold;
`

const Loader = styled.i`
	font-size: 64px;
`

const EntryDate = styled.div`
	color: var(--linkAlt);
	font-size: 12px;
`

const EntryTitle = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin: 0 16px 8px 16px;
`

const Entries = styled.div`
	margin: 32px;
`

const EntryData = styled.div`
	flex: 1;
`

const Icon = styled.i`
	flex: 0;
	font-size: 24px;
	color: var(--patreon);
`

const EntryRow = styled.a`
	display: flex;
	flex-direction: row;
	padding: 16px;
	border: 1px solid var(--outline);
	justify-content: space-between;
	align-items: center;

	&:hover {
		background: var(--outline);
	}
`
export default memo(Patreon)
