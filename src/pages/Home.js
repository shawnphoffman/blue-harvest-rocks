// import '../css/skeleton.css'
import '../css/normalize.css'

import { memo } from 'react'

import items from '../assets/items'
import LinkCard from '../components/LinkCard/LinkCard'

const Home = () => {
	return (
		<div>
			<h1>Blue Harvest</h1>
			<div>
				{items.map((item, i) => {
					return (
						<LinkCard
							i={i}
							key={item.title}
							title={item.title}
							subtitle={item.subtitle}
							link={item.link}
							cover={item.image}
							icon={item.icon}
						></LinkCard>
					)
				})}
			</div>
		</div>
	)
}

export default memo(Home)
