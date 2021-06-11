import styled from "styled-components"
import Button from "@/ui/button"

const Table = styled.table`
	width: 40vw;
	tr {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	th,
	td {
		height: 60px;
		display: grid;
		place-items: center;
		text-align: left;
	}

	td {
		height: 60px;
		padding-bottom: 20px;
	}

	td img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}

	th,
	tr,
	td {
		text-align: left;
		padding: 0.4rem 0;
	}
`
interface AgentProps {
	agentId: string
	agentImageSource: string
	agentName: string
}

export const Agent: React.FC<AgentProps> = ({
	agentId,
	agentImageSource,
	agentName
}) => (
	<tr key={agentId}>
		<td>
			<img src={agentImageSource} alt={agentName} />
		</td>
		<td>{agentName}</td>
		<td>
			<Button
				primary
				border='2px solid #0075db'
				borderRadius='.5rem'
				backgroundColor='#0075db'
				hoverBackgroundColor='#0068c2'
				textColor='#fff'
				hoverTextColor='#fff'
				hoverTransition='.3s ease'
				label='View'
				size='medium'
				weight={400}
				margin='0'
			/>
		</td>
	</tr>
)

export const AgentList = () => {
	return (
		<Table>
			<tbody>
				<Agent
					agentId='1234'
					agentImageSource='data:image/png;base64,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'
					agentName='test name'
				/>
			</tbody>
		</Table>
	)
}

interface CenterProps {
	centerId: string
	centerName: string
}

export const Center: React.FC<CenterProps> = ({centerId, centerName}) => (
	<tr key={centerId}>
		<td>{centerName}</td>
		<td>
			<Button
				primary
				border='2px solid #0075db'
				borderRadius='.5rem'
				backgroundColor='#0075db'
				hoverBackgroundColor='#0068c2'
				textColor='#fff'
				hoverTextColor='#fff'
				hoverTransition='.3s ease'
				label='View'
				size='medium'
				weight={400}
				margin='0'
			/>
		</td>
	</tr>
)

export const CenterList = () => {
	return (
		<Table>
			<tbody>
				<Center centerId='1234' centerName='Center Name Test' />
			</tbody>
		</Table>
	)
}
