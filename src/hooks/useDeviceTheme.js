import { useCallback, useEffect, useRef, useState } from 'react'

// NOTE This is overriden
export const useDeviceTheme = () => {
	const mediaQuery = useRef(window?.matchMedia('(prefers-color-scheme: dark)'))

	const [deviceTheme, setDeviceTheme] = useState(mediaQuery.current?.matches ? 'dark' : 'dark')

	const mediaListenerHandler = useCallback(matches => (matches ? setDeviceTheme('dark') : setDeviceTheme('dark')), [setDeviceTheme])

	useEffect(() => {
		const rootBgColor = deviceTheme === 'dark' ? '#111' : '#ccc'
		document.documentElement.setAttribute('style', `background: ${rootBgColor}`)
	}, [deviceTheme])

	useEffect(() => {
		const listener = ({ matches }) => mediaListenerHandler(matches)

		const currentMediaQuery = mediaQuery.current
		currentMediaQuery?.addEventListener('change', listener)

		return () => {
			currentMediaQuery?.removeEventListener('change', listener)
		}
	}, [mediaListenerHandler])

	return deviceTheme
}
