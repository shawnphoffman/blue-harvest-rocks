import { memo, Suspense } from 'react'
import * as Sentry from '@sentry/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion } from 'framer-motion'
import { styled } from 'linaria/react'

import Header from 'components/Header/Header'
import Loading from 'components/Loading/Loading'
import NavBar from 'components/NavBar/NavBar'
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

const App = () => {
	const theme = useDeviceTheme()
	const themeClass = themeConditional(theme)

	return (
		<Sentry.ErrorBoundary fallback={<div>Uh Oh!</div>}>
			<ThemeProvider>
				<ThemeContainer className={themeClass}>
					<Suspense fallback={<Loading />}>
						<QueryClientProvider client={queryClient}>
							<LazyMotion features={loadMotion} strict>
								<Container>
									<Details>
										<Header />
										<NavBar />
									</Details>
									<AppRoutes />
								</Container>
							</LazyMotion>
						</QueryClientProvider>
					</Suspense>
				</ThemeContainer>
			</ThemeProvider>
		</Sentry.ErrorBoundary>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 900px;
	width: 100%;
`
const Details = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const ThemeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export default memo(App)
