import {useAuth0} from "@auth0/auth0-react"
import Layout from "@/layout/layout"
import {SignInContainer} from "@/comps/layout/auth"
import {AgentList} from "@/comps/documents/lists"

export default function Home() {
	const {isAuthenticated} = useAuth0()

	return (
		<>
			{isAuthenticated && (
				<Layout
					title='Agents'
					description='The full list of agents working for Profit Expansion Group'>
					<h1>Agents</h1>
					<AgentList />
				</Layout>
			)}
			{!isAuthenticated && <SignInContainer />}
		</>
	)
}
