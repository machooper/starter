import Link from "next/link"
import styled from "styled-components"
import theme from "@/styles/theme"
import {useState} from "react"
import {Logo} from "@/ui/logo"
import {LogoutButton, Profile} from "./auth"
import {flexVertCenter} from "@/styles/mixins"

export interface SidebarProps {
	pageTitle: string
	navLinks: []
	menuOpen: boolean
}

const Close = styled.div<SidebarProps>`
	position: absolute;
	top: 1rem;
	left: 5px;
	display: ${p => (p.menuOpen ? "block" : "none")};
	cursor: pointer;
`

const Aside = styled.aside<SidebarProps>`
	position: fixed;
	top: 0;
	left: ${p => (p.menuOpen ? "-100%" : "0")};
	z-index: 1;
	width: ${p => (p.menuOpen ? "-20%" : "15%")};
	max-width: 300px;
	height: 100vw;
	padding: 1rem 1rem;
	transition: 0.4s ease;
`

const Title = styled.h1<SidebarProps>`
	${flexVertCenter}
	font-size: 1.1rem;
	margin-bottom: 2rem;
	svg {
		cursor: pointer;
	}
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
	navLinks = ["Overview", "Logs", "Agents", "Callcenters"]
}) => {
	const [open, setOpen] = useState(false)
	return (
		<>
			<Close menuOpen={open}>
				<svg
					onClick={() => setOpen(!open)}
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='feather feather-chevron-right'>
					<polyline points='9 18 15 12 9 6'></polyline>
				</svg>
			</Close>
			<Aside menuOpen={open}>
				<Title>
					<Logo
						logoType='image'
						imageSource='https://global-uploads.webflow.com/5c5add9e3ef45750edad09e8/5c7a49255c2293da0b49aa8a_peg%20logo%20transperant%202-p-500.png'
						imageWidth={10}
						imageHeight={2}
					/>
					<svg
						onClick={() => setOpen(!open)}
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='feather feather-chevron-left'>
						<polyline points='15 18 9 12 15 6'></polyline>
					</svg>
				</Title>
				<Profile />
				<Nav>
					{navLinks.map(link => (
						<Link key={link} href={link.toLowerCase()}>
							{link}
						</Link>
					))}
					<LogoutButton />
				</Nav>
			</Aside>
		</>
	)
}
