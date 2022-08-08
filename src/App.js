import { memo, Suspense } from 'react'
// import { NavLink } from 'react-router-dom'
import * as Sentry from '@sentry/react'
import { styled } from 'linaria/react'

// import { NavRoutes, preloadRouteComponent } from 'config/routes'
import ThemeProvider from 'context/ThemeContext'
import { useDeviceTheme } from 'hooks/useDeviceTheme'
import themeConditional from 'hooks/useThemeConditional'

import AppRoutes from './AppRoutes'

function App() {
	const theme = useDeviceTheme()
	const themeClass = themeConditional(theme)

	return (
		<Sentry.ErrorBoundary fallback={<div>Uh Oh!</div>}>
			<ThemeProvider>
				<ThemeContainer className={themeClass}>
					<Suspense fallback={<div>Loading...</div>}>
						{/* {NavRoutes.map(r => (
							<NavLink to={r.path} title={r.title} key={r.title} onMouseEnter={() => preloadRouteComponent(r.component)}>
								{r.title}
							</NavLink>
						))} */}
						<AppRoutes />
					</Suspense>
				</ThemeContainer>
			</ThemeProvider>
		</Sentry.ErrorBoundary>
	)
}

const ThemeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default memo(App)
