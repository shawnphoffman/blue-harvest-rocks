import './Background.css'

import Image from 'next/image'

import bg from 'app/raccoon-trans-opt.png'

export default function Background() {
	return (
		<div className={'background-wrap'}>
			<Image
				alt="Samurai Raccoon"
				src={bg}
				placeholder="blur"
				width={700}
				style={{
					objectFit: 'cover',
				}}
				priority
			/>
		</div>
	)
}
