import { lazy } from 'react'

import Home from 'pages/Home'

const LazyPreload = importStatement => {
	const Component = lazy(importStatement)
	Component.preload = importStatement
	return Component
}

const Listen = LazyPreload(() => import('../pages/Listen'))
const Patreon = LazyPreload(() => import('../pages/Patreon'))

// Change to conform to API?
// https://reactrouter.com/docs/en/v6/hooks/use-routes

const Routes = {
	Home: {
		path: '/',
		component: Home,
		// icon: 'fa-calendar-days',
		title: 'Home',
	},
	Patreon: {
		path: '/patreon',
		component: Patreon,
		title: 'Patreon Preview',
	},
	Listen: {
		path: '/listen',
		component: Listen,
		title: 'Listen Now',
	},
}

export const RegisteredRoutes = [Routes.Patreon, Routes.Listen, Routes.Home]

export const NavRoutes = [Routes.Home, Routes.Patreon, Routes.Listen]

export const preloadRouteComponent = component => {
	if (component && component.preload) {
		component.preload()
	}
}

export default Routes
