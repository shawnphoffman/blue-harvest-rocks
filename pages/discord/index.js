import { memo } from 'react'
import { styled } from 'linaria/react'

const ListenNow = () => {
	return (
		<Details>
			<Row>
				<IFrame
					src="https://discord.com/widget?id=471428649200123915&theme=dark"
					width="350"
					height="500"
					allowtransparency="true"
					frameborder="0"
					sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
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
	/* width: 100%; */
	/* max-width: 660px; */
	overflow: hidden;
	border-radius: 10px;
	background: transparent;
	border: none;
`

export default memo(ListenNow)
