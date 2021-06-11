import {useAuth0} from "@auth0/auth0-react"
import styled from "styled-components"
import {flexColVertCenter} from "@/styles/mixins"
import Layout from "@/layout/layout"
import {LoginButton} from "@/comps/layout/auth"
import Button from "@/ui/button"
import Overview from "@/docs/overview"

export default function Home() {
	const {isAuthenticated} = useAuth0()
	const Container = styled.div`
		height: 90vh;
		display: grid;
		place-items: center;
		text-align: center;
	`
	const LoginContainer = styled.div`
		${flexColVertCenter}
	`
	const Logo = styled.img``
	const PageTitle = styled.h1`
		max-width: 400px;
		text-align: center;
		margin: 1rem auto;
	`
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
			{!isAuthenticated && (
				<Container>
					<LoginContainer>
						<Logo src='https://global-uploads.webflow.com/5c5add9e3ef45750edad09e8/5c7a49255c2293da0b49aa8a_peg%20logo%20transperant%202-p-500.png' />
						<PageTitle>Welcome to the Data Dashboard</PageTitle>
						<LoginButton />
						<Button
							border='2px solid #0075db'
							borderRadius='.5rem'
							hoverBackgroundColor='#0075db'
							textColor='#1c1c1c'
							hoverTextColor='#fff'
							hoverTransition='.3s ease'
							label='Support'
							size='medium'
							weight={400}
							margin='0'
							onClick={() => loginWithRedirect()}
						/>
					</LoginContainer>
				</Container>
			)}
		</>
	)
}
