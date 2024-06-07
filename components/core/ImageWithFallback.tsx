// 'use client'

// import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Image, { ImageProps } from 'next/image'

import fallbackImage from '@/public/icon.png'

interface ImageWithFallbackProps extends ImageProps {
	fallback?: ImageProps['src']
}

const ImageWithFallback = ({ fallback = fallbackImage, alt, src, ...props }: ImageWithFallbackProps) => {
	// const [invalidSrcError, setInvalidSrcError] = useState<React.SyntheticEvent<HTMLImageElement, Event> | null>(null)

	// const handleError = (e, i) => {
	// 	console.log('ImageWithFallback.error', e)
	// 	if (e.message.includes('Invalid src prop')) {
	// 		setInvalidSrcError(e)
	// 	}
	// }

	return (
		// eslint-disable-next-line @next/next/no-img-element
		<ErrorBoundary fallback={<img alt={alt} src={src as string} {...props} />}>
			<Image alt={alt} src={src} {...props} />
		</ErrorBoundary>
	)

	// // {/* <Image alt={alt} src={error ? fallbackImage : src} {...props} /> */}
	// return invalidSrcError ? (
	// 	// eslint-disable-next-line @next/next/no-img-element
	// 	<img alt={alt} src={src as string} {...props} />
	// ) : (
	// 	<ErrorBoundary fallback={null} onError={handleError}>
	// 		<Image alt={alt} src={src} {...props} />
	// 	</ErrorBoundary>
	// )
}

export default ImageWithFallback
