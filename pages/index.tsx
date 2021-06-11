import {useAuth0} from "@auth0/auth0-react"
import Layout from "@/layout/layout"
import {SignInContainer} from "@/comps/layout/auth"
import Overview from "@/docs/overview"
import {fetchtool} from "@/lib/fetch"

export default function Home() {
	const {isAuthenticated} = useAuth0()
	var res = fetchtool("https://jsonplaceholder.typicode.com/todos/1")
	console.log(res)

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
