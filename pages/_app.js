import 'styles/globals.css'

import { usePanelbear } from '@panelbear/panelbear-nextjs'
import { LazyMotion } from 'framer-motion'
import { styled } from 'linaria/react'
import Head from 'next/head'

import Header from 'components/Header/Header'
import NavBar from 'components/NavBar/NavBar'

const loadMotion = () => import('config/motion.js').then(res => res.default)

function App({ Component, pageProps }) {
	usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID)

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Meta */}
				<title>Blue Harvest</title>
				<meta name="title" content="Blue Harvest: A Star Wars Podcast" />
				<meta name="description" content="Star Wars podcast hosted by Hawes Burkhardt and Will Whitten" />
				{/* <!-- Facebook Meta Tags --> */}
				<meta property="og:url" content="https://blueharvest.rocks/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Blue Harvest: A Star Wars Podcast" />
				<meta property="og:description" content="Star Wars podcast hosted by Hawes Burkhardt and Will Whitten" />
				{/* TODO Import this */}
				<meta property="og:image" content="https://blueharvest.rocks/images/fb1.png" />
				<meta property="og:image:width" content="841" />
				<meta property="og:image:height" content="442" />

				{/* <!-- Twitter Meta Tags --> */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@blueharvestpod" />
				<meta property="twitter:url" content="https://blueharvest.rocks/" />
				<meta name="twitter:title" content="Blue Harvest: A Star Wars Podcast" />
				<meta name="twitter:description" content="Star Wars podcast hosted by Hawes Burkhardt and Will Whitten" />
				{/* TODO Import this */}
				{/* NOTE This image should be 1:1. Min: 144x144. Max: 4096x4096 */}
				<meta name="twitter:image" content="https://blueharvest.rocks/images/cover.jpeg" />
				<meta name="twitter:image:alt" content="Hawes and Will drawn as Boba Fett and Fennec Shand on Jabba's throne" />

				{/* <!-- Icons --> */}
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%220.6em%22 font-size=%22150%22>🦝</text></svg>"
				></link>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
			</Head>
			<ThemeContainer>
				<LazyMotion features={loadMotion} strict>
					{/* <Layout> */}
					<Container>
						<Details>
							<Header />
							<NavBar />
						</Details>
						<Component {...pageProps} />
					</Container>
					{/* </Layout> */}
				</LazyMotion>
			</ThemeContainer>
		</>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 900px;
	width: 100%;
`
const Details = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const ThemeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default App
