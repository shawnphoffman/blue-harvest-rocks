import { memo } from 'react'
import { styled } from 'linaria/react'

import ActiveLink from 'components/ActiveLink/ActiveLink'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin-bottom: 8px;
`

const StyledLink = styled.div`
	margin: 0 8px;
	margin-bottom: 16px;
	font-weight: bold;
	white-space: nowrap;
	cursor: pointer;
	&:hover {
		color: var(--orange1) !important;
	}
	&.active {
		border-bottom: 1px solid var(--text);
	}
`

const NavBar = () => {
	return (
		<Container>
			<ActiveLink href="/" activeClassName="active">
				<StyledLink>Home</StyledLink>
			</ActiveLink>
			<ActiveLink href="/patreon-preview" activeClassName="active">
				<StyledLink>Patreon Preview</StyledLink>
			</ActiveLink>
			<ActiveLink href="/listen-now" activeClassName="active">
				<StyledLink>Listen Now</StyledLink>
			</ActiveLink>
			<ActiveLink href="/discord" activeClassName="active">
				<StyledLink>Discord Preview</StyledLink>
			</ActiveLink>
		</Container>
	)
}

export default memo(NavBar)
