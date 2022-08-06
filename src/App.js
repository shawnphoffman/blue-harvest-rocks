import { memo, Suspense } from 'react'
import * as Sentry from '@sentry/react'
import { styled } from 'linaria/react'

import ThemeProvider from 'context/ThemeContext'
// import { useDeviceTheme } from 'hooks/useDeviceTheme'
import themeConditional from 'hooks/useThemeConditional'

import AppRoutes from './AppRoutes'

function App() {
	// Theme
	// const theme = useDeviceTheme()
	const theme = 'dark'
	const themeClass = themeConditional(theme)

	return (
		<Sentry.ErrorBoundary fallback={<div>Uh Oh!</div>}>
			<ThemeProvider>
				<ThemeContainer className={themeClass}>
					<Suspense fallback={<div>Loading...</div>}>
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
