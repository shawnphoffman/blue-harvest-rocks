import { memo, Suspense } from 'react'
import { Route, Routes as RouterRoutes } from 'react-router-dom'
import * as Sentry from '@sentry/react'

import { RegisteredRoutes } from 'config/routes'

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(RouterRoutes)

const AppRoutes = () => {
	return (
		<SentryRoutes>
			{RegisteredRoutes.map(l => {
				const path = l.path === '' ? '*' : l.path
				const Comp = l.component
				return (
					<Route
						key={path}
						path={path}
						element={
							<Suspense fallback={l.fallback}>
								<Comp />
							</Suspense>
						}
					/>
				)
			})}
		</SentryRoutes>
	)
}

export default memo(AppRoutes)
