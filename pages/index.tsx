import {useAuth0} from "@auth0/auth0-react"
import Layout from "@/layout/layout"
import {SignInContainer} from "@/comps/layout/auth"
import Overview from "@/docs/overview"

export default function Home() {
	const {isAuthenticated} = useAuth0()

	return (
		<>
			{isAuthenticated && (
				<Layout
					title='Overview'
					description='An overview page, containing various data'>
					<h1>Overview</h1>
					<Overview />
				</Layout>
			)}
			{!isAuthenticated && <SignInContainer />}
		</>
	)
}
