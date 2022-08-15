import { memo } from 'react'
import { styled } from 'linaria/react'

// import { NavLink } from 'react-router-dom'
import ActiveLink from 'components/ActiveLink/ActiveLink'

// import { NavRoutes, preloadRouteComponent } from 'config/routes'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin-bottom: 8px;
`

const StyledLink = styled.a`
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
			<ActiveLink href="/" activeClassName="active" passHref>
				<StyledLink>Home</StyledLink>
			</ActiveLink>
			<ActiveLink href="/patreon-preview" activeClassName="active" passHref>
				<StyledLink>Patreon Preview</StyledLink>
			</ActiveLink>
			<ActiveLink href="/listen-now" activeClassName="active" passHref>
				<StyledLink>Listen Now</StyledLink>
			</ActiveLink>
		</Container>
	)
}

export default memo(NavBar)
