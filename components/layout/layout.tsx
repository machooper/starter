import {Head} from "./head"
import {Wrapper} from "./wrapper"
import {Sidebar} from "./sidebar"
import {Content} from "./content"

export default function Layout({title, description, children}) {
	return (
		<>
			<Head
				pageTitle={title}
				pageDescription={description}
				socialImage='https://global-uploads.webflow.com/5c5add9e3ef45750edad09e8/5c7a49255c2293da0b49aa8a_peg%20logo%20transperant%202-p-500.png'
				socialImageText='A data dashboard and crm for Profit Expansion Group'
				siteIcon='h'
				touchIcon='h'
				siteLocale='en_US'
				siteType='website'
				siteUrl='https://pdash.vercel.app'
				themeColor='#58e020'
			/>
			<Wrapper flexDirection='row'>
				<Sidebar pageTitle='PEG Dashboard' />
				<Content maxWidth='960px' children={children} />
			</Wrapper>
		</>
	)
}
