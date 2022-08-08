import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'linaria/react'

import { NavRoutes, preloadRouteComponent } from 'config/routes'

const Container = styled.div`
	margin-bottom: 16px;
`

const Link = styled(NavLink)`
	margin: 0 8px;
	font-weight: bold;
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
			{NavRoutes.map(r => (
				<Link to={r.path} title={r.title} key={r.title} onMouseEnter={() => preloadRouteComponent(r.component)}>
					{r.title}
				</Link>
			))}
		</Container>
	)
}

export default memo(NavBar)
