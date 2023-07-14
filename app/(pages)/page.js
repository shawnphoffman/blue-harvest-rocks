import { memo } from 'react'

import LinkCard from 'components/LinkCard/LinkCard'
import Ratings from 'components/Ratings/Ratings'
import Reviews from 'components/Reviews/Reviews'
import items from 'config/links'

import styles from './Global.module.css'

const Home = ({}) => {
	return (
		<>
			<div className={styles.pageDescription}>
				A Star Wars podcast hosted by two long-time friends, Hawes Burkhardt and Will Whitten. Check out the Patreon for even more exclusive
				content or hop on Twitch to join the fun.
			</div>
			<Ratings />
			<div className={styles.pageRow}>
				{items.map((item, i) => {
					return (
						<LinkCard
							i={i}
							key={item.title}
							title={item.title}
							subtitle={item.subtitle}
							link={item.href}
							icon={item.icon}
							cover={item.image}
							bg={item.background}
							color={item.color}
						></LinkCard>
					)
				})}
			</div>

			<div className={styles.pageRow}>
				<Reviews />
			</div>
		</>
	)
}

export default memo(Home)
