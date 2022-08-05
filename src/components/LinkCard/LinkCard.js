// import '../../css/skeleton.css'
// import '../../css/normalize.css'
import '../../css/components.css'

import React from 'react'
import { motion } from 'framer-motion'

function LinkCard(props) {
	const variants = {
		visible: i => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.5,
				ease: 'easeIn',
				type: 'spring',
				stiffness: 50,
			},
		}),
		hidden: { opacity: 0, y: 200 },
	}

	return (
		<a href={props.link} target="_blank" rel="noopener noreferrer">
			<motion.div className="card four columns" initial="hidden" animate="visible" custom={props.i} variants={variants}>
				<div className="cover">
					<i className={`fa-solid fa-${props.icon}`}></i>
				</div>
				<div className="data">
					<h2>{props.title}</h2>
					<p>{props.subtitle}</p>
				</div>
			</motion.div>
		</a>
	)
}

export default LinkCard
