import Link from "next/link"
import styled from "styled-components"
import theme from "@/styles/theme"
import LoginButton from "./auth"

export interface SidebarProps {
	pageTitle: string
	navLinks: []
}

const Aside = styled.aside<SidebarProps>`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	width: 10%;
	max-width: 300px;
	height: 100vw;
	flex-direction: column;
	text-align: center;
	align-items: center;
	padding: 1rem 1rem;
	transition: 0.3s ease;
`

const Title = styled.h1<SidebarProps>`
	font-size: 1.1rem;
`

const Nav = styled.nav`
	display: flex;
	flex-direction: column;

	a {
		padding: 0.4rem 0;
	}
	a:hover {
		color: ${theme.colors.secondary[1]};
	}
`
export const Sidebar: React.FC<SidebarProps> = ({
	pageTitle = "PEG Dashboard",
	navLinks = ["Overview", "Logs", "Agents", "Centers"]
}) => {
	return (
		<>
			<Aside>
				<Title>{pageTitle}</Title>
				<LoginButton />
				<Nav>
					{navLinks.map(link => (
						<Link href={link.toLowerCase()}>{link}</Link>
					))}
				</Nav>
			</Aside>
		</>
	)
}
