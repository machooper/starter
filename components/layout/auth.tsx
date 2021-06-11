import {useAuth0} from "@auth0/auth0-react"
import {Button} from "@/ui/button"
import Loader from "react-loader-spinner"
import styled from "styled-components"
import theme from "@/styles/theme"
import {flexColVertCenter, flexVertCenter} from "@/styles/mixins"

export const LoginButton = () => {
	const {loginWithRedirect, isAuthenticated} = useAuth0()

	return (
		!isAuthenticated && (
			<Button
				primary
				backgroundColor='#0082F3'
				border='2px solid #0075db'
				borderRadius='.5rem'
				hoverBackgroundColor='#0075db'
				hoverTextColor='#fff'
				hoverTransition='.3s ease'
				label='Login'
				size='medium'
				weight={400}
				onClick={() => loginWithRedirect()}
			/>
		)
	)
}

export const LogoutButton = () => {
	const {logout} = useAuth0()
	return <a onClick={() => logout({returnTo: process.env.AUTH_URL})}>Logout</a>
}

const UserProfile = styled.div`
	${flexColVertCenter}
	align-items: flex-start;
	margin: 1rem 0;
	img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: ${theme.colors.grey[0]};
		margin-right: 0.3rem;
	}
	h2 {
		font-size: 1rem;
	}
`
const ProfileDetails = styled.div`
	${flexVertCenter};
	justify-content: space-around;
`
export const Profile = () => {
	const {user, isAuthenticated, isLoading} = useAuth0()

	if (isLoading) {
		return <Loader type='Puff' color='#58e020' height={10} width={10} />
	}

	return (
		isAuthenticated && (
			<UserProfile>
				<ProfileDetails>
					<img src={user.picture} />
					<h2>{user.name}</h2>
				</ProfileDetails>
			</UserProfile>
		)
	)
}
