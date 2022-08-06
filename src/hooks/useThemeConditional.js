import { css } from '@linaria/core'

const dark = css`
	--bg: #111;
	--text: #fff;
	--link: #fff;
	--linkAlt: #a0a8d9;
	--orange1: #fbb33e;
	--orange2: #b97507;
	--white: #fff;

	color: var(--text);

	a {
		color: var(--text);
		text-decoration: none;
		&:hover {
			color: var(--text);
		}
	}
`

const light = css`
	--bg: #ccc;
	--text: #000;
	--link: #333;
	--linkAlt: #3e498c;
	--orange1: #4556e9;
	--orange2: #05116f;
	--white: #fff;

	color: var(--text);

	a {
		color: var(--text);
		text-decoration: none;
		&:hover {
			color: var(--text);
		}
	}
`

const themeConditional = theme => {
	if (theme === 'light') return light
	return dark
}

export default themeConditional
