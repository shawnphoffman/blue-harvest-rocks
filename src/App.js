import { memo, Suspense } from 'react'
import * as Sentry from '@sentry/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion } from 'framer-motion'
import { styled } from 'linaria/react'

import ThemeProvider from 'context/ThemeContext'
import { useDeviceTheme } from 'hooks/useDeviceTheme'
import themeConditional from 'hooks/useThemeConditional'

import AppRoutes from './AppRoutes'

const loadMotion = () => import('config/motion.js').then(res => res.default)

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			suspense: true,
			staleTime: 30000,
		},
	},
})

function App() {
	const theme = useDeviceTheme()
	const themeClass = themeConditional(theme)

	return (
		<Sentry.ErrorBoundary fallback={<div>Uh Oh!</div>}>
			<ThemeProvider>
				<ThemeContainer className={themeClass}>
					<Suspense fallback={<div>Loading...</div>}>
						<QueryClientProvider client={queryClient}>
							<LazyMotion features={loadMotion} strict>
								<AppRoutes />
							</LazyMotion>
						</QueryClientProvider>
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
