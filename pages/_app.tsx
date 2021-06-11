import {ThemeProvider} from "styled-components"
import {Auth0Provider} from "@auth0/auth0-react"

import GlobalStyles from "@/styles/global"
import theme from "@/styles/theme"

export default function App({Component, pageProps}) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Auth0Provider
					domain={"dev-wjerfr5t.us.auth0.com"}
					clientId={"qxRvvfuad6nHo5YsMRdZxXbRksWwMdVo"}
					redirectUri={"http://localhost:3000"}
				/>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
