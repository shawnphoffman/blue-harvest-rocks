import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html>
			<Head>
				{/* Normalize */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
					integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>

				{/* <!-- Google Fonts --> */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					// rel="preload"
					rel="stylesheet"
					as="style"
					// onLoad="this.onload=null;this.rel='stylesheet'"
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890%26&display=swap"
				/>
				<link
					// rel="preload"
					rel="stylesheet"
					as="style"
					// onLoad="this.onload=null;this.rel='stylesheet'"
					href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@900&text=BLUE%20HARVEST&display=swap"
				/>
				{/* <!-- FontAwesome Icons --> */}
				{/* <script src="https://kit.fontawesome.com/d7ccc5bb1a.js" crossOrigin="anonymous" defer></script> */}
				<Script src="https://kit.fontawesome.com/d7ccc5bb1a.js" strategy="afterInteractive" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
