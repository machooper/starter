import {useAuth0} from "@auth0/auth0-react"
import styled from "styled-components"
import {flexColVertCenter} from "@/styles/mixins"
import {Sidebar} from "@/layout/sidebar"
import {LoginButton} from "@/comps/layout/auth"
export default function Home() {
	const {isAuthenticated} = useAuth0()
	const Container = styled.div`
		height: 90vh;
		display: grid;
		place-items: center;
		text-align: center;
	`
	const Logo = styled.img``
	const PageTitle = styled.h1`
		max-width: 400px;
		text-align: center;
		margin: 1rem auto;
	`
	return (
		<>
			{isAuthenticated && <Sidebar />}
			{!isAuthenticated && (
				<Container>
					<flexColVertCenter>
						<Logo src='https://global-uploads.webflow.com/5c5add9e3ef45750edad09e8/5c7a49255c2293da0b49aa8a_peg%20logo%20transperant%202-p-500.png' />
						<PageTitle>Welcome to the Data Dashboard</PageTitle>
						<LoginButton />
					</flexColVertCenter>
				</Container>
			)}
		</>
	)
}
