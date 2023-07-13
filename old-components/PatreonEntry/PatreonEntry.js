import { memo } from 'react'
import { styled } from 'linaria/react'

const PatreonEntry = ({ data: d }) => {
	return (
		<EntryRow href={d.link} target="_blank" rel="noopener noreferrer">
			<Icon className="fa-brands fa-patreon" />
			<EntryData>
				<EntryTitle>{d.title}</EntryTitle>
				<EntryDate>{new Date(d.pubDate).toLocaleDateString()}</EntryDate>
			</EntryData>
		</EntryRow>
	)
}

const EntryDate = styled.div`
	color: var(--linkAlt);
	font-size: 12px;
`

const EntryTitle = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin: 0 16px 8px 16px;
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

export default memo(PatreonEntry)
