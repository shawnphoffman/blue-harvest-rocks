import { memo } from 'react'
import { styled } from 'linaria/react'

const ListenNow = () => {
	return (
		<Details>
			<Row>
				<IFrame
					title="Blue Harvest Podcast Preview"
					src="https://embed.podcasts.apple.com/us/podcast/blue-harvest-a-star-wars-podcast/id1009917662?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
					height="450px"
					frameborder="0"
					sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
					allow="autoplay *; encrypted-media *; clipboard-write"
				></IFrame>
			</Row>
		</Details>
	)
}

// TODO Refactor this to common layout
const smallBreakpoint = '420px'
const Details = styled.div`
	text-align: center;
	margin-bottom: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: ${smallBreakpoint}) {
		margin-bottom: 16px;
	}
`
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
`
const IFrame = styled.iframe`
	width: 100%;
	max-width: 660px;
	overflow: hidden;
	border-radius: 10px;
	background: transparent;
	border: none;
`

export default memo(ListenNow)
