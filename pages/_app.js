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
				<meta property="og:image" content="/images/bh512.jpg" />
				{/* <meta property="og:image" content="https://blueharvest.rocks/images/bh512.jpg" /> */}
				<meta property="og:image:width" content="512" />
				<meta property="og:image:height" content="512" />

				{/* <!-- Twitter Meta Tags --> */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@blueharvestpod" />
				<meta property="twitter:url" content="https://blueharvest.rocks/" />
				<meta name="twitter:title" content="Blue Harvest: A Star Wars Podcast" />
				<meta name="twitter:description" content="Star Wars podcast hosted by Hawes Burkhardt and Will Whitten" />
				{/* TODO Import this */}
				<meta name="twitter:image" content="https://blueharvest.rocks/images/bh512.jpg" />

				{/* <!-- Icons --> */}
				{/* <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/icon-apple-touch-icon.png">
				<link rel="icon" type="image/png" sizes="192x192" href="%PUBLIC_URL%/192.png">
				<link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/32.png">
				<link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/16.png">
				<link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}
				{/* TODO Replace */}
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%220.6em%22 font-size=%22150%22>🦝</text></svg>"
				></link>
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
