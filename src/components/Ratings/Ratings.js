import { memo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { styled } from 'linaria/react'

const Container = styled.a`
	padding: 4px 8px;
	margin: 4px;
	background: var(--applePodcasts);
	color: var(--white);
	font-weight: bold;
	border-radius: 8px;
	font-size: 0.8rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	white-space: nowrap;
`
const Value = styled.div``
const Star = styled.i`
	font-size: 0.8em;
	margin-left: 2px;
	margin-right: 4px;
`
const Byline = styled.div``

const dataUrl = 'https://gist.githubusercontent.com/shawnphoffman/c55f43ff44ab0fee42b85cf816c07ec5/raw'
const Ratings = () => {
	const { isLoading, data, error } = useQuery(['ratings-data'], () => fetch(dataUrl).then(res => res.json()), {
		cacheTime: 30 * 60 * 1000,
	})

	if (isLoading || !!error) return null

	if (!data || !data.appleRating) return null

	return (
		<Container href={data.appleRatingUrl || ''} target="_blank" rel="noopener noreferrer">
			<Value>{data.appleRating}</Value>
			<Star className="fa-solid fa-star-sharp" title="Stars" />
			<Byline>on Apple Podcasts</Byline>
		</Container>
	)
}

export default memo(Ratings)
