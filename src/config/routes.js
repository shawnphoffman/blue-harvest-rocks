import { lazy } from 'react'

import Home from 'pages/Home'

const LazyPreload = importStatement => {
	const Component = lazy(importStatement)
	Component.preload = importStatement
	return Component
}

// const Home = LazyPreload(() => import('../pages/Home'))
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
}

export const RegisteredRoutes = [Routes.Patreon, Routes.Home]

export const NavRoutes = [Routes.Home, Routes.Patreon]

export const preloadRouteComponent = component => {
	if (component && component.preload) {
		component.preload()
	}
}

export default Routes
