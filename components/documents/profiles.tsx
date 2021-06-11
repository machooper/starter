import styled from "styled-components"
import {flexCenter, flexColHorizCenter} from "@/styles/mixins"

interface ProfileProps {
	id: string
	image: string
	name: string
	url: string
	ext: string
	state: string
	center: string
	admin: boolean
}

const Profile = styled.div<ProfileProps>`
	${flexColHorizCenter}
	justify-content: space-evenly;

	header {
		${flexColHorizCenter}
		text-align: center;
		margin-bottom: 1rem;
	}

	header img {
		border-radius: 50%;
	}

	header span {
		font-size: 0.8rem;
		font-style: italic;
	}
`

interface StatsProps {
	inbound: number
	outbound: number
	missed: number
	abandoned: number
	acd: number
	ind: number
	dur: number
	totals: {}
}

const ProfileStats = styled.div<StatsProps>`
	width: 50vw;
	display: flex;
	justify-content: space-between;
	text-align: left;
	margin-top: 1rem;
`
const ProfileNav = styled.nav`
	${flexCenter}

	a {
		margin: 0 1rem;
	}
`
const StatsTitle = styled.h2``
const StatsTotal = styled.div``
const StatsGraph = styled.div``

