import { memo } from 'react'

import ActiveLink from 'components/ActiveLink/ActiveLink'

import styles from './NavBar.module.css'

const NavBar = () => {
	return (
		<div className={styles.container}>
			<ActiveLink href="/" activeClassName={styles.active}>
				<div className={styles.styledLink}>Home</div>
			</ActiveLink>
			<ActiveLink href="/patreon-preview" activeClassName={styles.active}>
				<div className={styles.styledLink}>Patreon Preview</div>
			</ActiveLink>
			<ActiveLink href="/listen-now" activeClassName={styles.active}>
				<div className={styles.styledLink}>Listen Now</div>
			</ActiveLink>
			<ActiveLink href="/discord" activeClassName={styles.active}>
				<div className={styles.styledLink}>Discord</div>
			</ActiveLink>
		</div>
	)
}

export default memo(NavBar)
