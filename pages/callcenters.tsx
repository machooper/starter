import {useAuth0} from "@auth0/auth0-react"
import Layout from "@/layout/layout"
import {SignInContainer} from "@/comps/layout/auth"
import {CenterList} from "@/comps/documents/lists"

export default function Home() {
	const {isAuthenticated} = useAuth0()

	return (
		<>
			{isAuthenticated && (
				<Layout
					title='Callcenters'
					description='The full list of callcenters currently active under Profit Expansion Group'>
					<h1>Callcenters</h1>
					<CenterList />
				</Layout>
			)}
			{!isAuthenticated && <SignInContainer />}
		</>
	)
}
