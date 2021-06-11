import {useAuth0} from "@auth0/auth0-react"
import {Button} from "@/ui/button"

const LoginButton = () => {
	const {loginWithRedirect} = useAuth0()

	return (
		<Button
			border='2px solid #0075db'
			borderRadius='.5rem'
			textColor='#1c1c1c'
			hoverBackgroundColor='#0075db'
			hoverTextColor='#fff'
			hoverTransition='.3s ease'
			label='Login'
			onClick={function noRefCheck() {}}
			size='medium'
			weight={400}
		/>
	)
}

export default LoginButton
