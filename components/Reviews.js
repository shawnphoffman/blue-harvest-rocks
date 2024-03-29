import { getReviews } from 'app/actions'

import styles from './Reviews.module.css'
import Stars from './Stars'

export default async function Reviews() {
	const [{ reviews }] = await Promise.all([getReviews()])

	if (!reviews) return null

	const filteredReviews = reviews.reduce((memo, acc) => {
		if (acc.stars !== '5') {
			return memo
		}
		memo.push(acc)
		return memo
	}, [])

	if (!filteredReviews) return null

	return (
		<>
			<div className={styles.heading}>Recent Reviews</div>
			{filteredReviews.map(r => (
				<div className={styles.container} key={r.title}>
					<div className={styles.header}>
						<div className={styles.byline}>
							<div className={styles.title}>{`"${r.title}"`}</div>
							<div className={styles.author}>{r.author}</div>
						</div>
						<Stars count={r.stars} />
					</div>
					<div className={styles.text}>{r.text}</div>
				</div>
			))}
		</>
	)
}
