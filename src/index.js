import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoutesFromChildren, HashRouter as Router, matchRoutes, useLocation, useNavigationType } from 'react-router-dom'
import * as Panelbear from '@panelbear/panelbear-js'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

import App from './App'
import reportWebVitals from './reportWebVitals'

// Analytics
if (process.env.REACT_APP_PANELBEAR_SITE_ID) {
	Panelbear.load(process.env.REACT_APP_PANELBEAR_SITE_ID, {
		spaMode: 'history',
		includeURLFragment: true,
		debug: process.env.NODE_ENV === 'development',
	})
	Panelbear.trackPageview()
}

if (process.env.NODE_ENV === 'production') {
	Sentry.init({
		dsn: 'https://720c2cd59d0f4496b09db599832cfbd4@o508348.ingest.sentry.io/6632775',
		integrations: [
			new BrowserTracing({
				routingInstrumentation: Sentry.reactRouterV6Instrumentation(
					React.useEffect,
					useLocation,
					useNavigationType,
					createRoutesFromChildren,
					matchRoutes
				),
			}),
		],
		autoSessionTracking: true,
		environment: process.env.NODE_ENV,
		// We recommend adjusting this value in production
		tracesSampleRate: 1.0,
		beforeSend(event, hint) {
			// console.log({ event, hint })
			// Check if it is an exception, and if so, show the report dialog
			if (event.exception) {
				Sentry.showReportDialog({
					eventId: event.event_id,
					title: 'Uh oh! Looks like something went wrong.',
					subtitle: 'We have been notified about the issue.',
				})
			}
			return event
		},
	})
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
