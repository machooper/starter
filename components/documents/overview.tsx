import styled, {keyframes} from "styled-components"
import theme from "@/styles/theme"

interface DivProps {
	small?: boolean
	divTitle?: string
}

const GridContainer = styled.div`
	width: 60vw;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	grid-tempalte-rows: 1fr 1fr 1fr;
	gap: 15px;
	grid-template-areas:
		"one one one two two two"
		"three three three three four four"
		"five five six six seven seven";

	.one {
		grid-area: one;
	}
	.two {
		grid-area: two;
	}
	.three {
		grid-area: three;
	}
	.four {
		grid-area: four;
	}
	.five {
		grid-area: five;
	}
	.six {
		grid-area: six;
	}
	.seven {
		grid-area: seven;
	}
`

const shine = keyframes`
  100% {
    transform: translateX(100%);
  }
`

const GridDiv = styled.div<DivProps>`
  max-height: ${p => (p.small ? "300px" : "auto")};
  min-height: 270px;
  padding: 2rem;
  border-radius: .8rem
  
  :empty {
    display: inline-block;
    position: relative;
    overflow: hidden;
    background: ${theme.colors.grey[0]};
  }
  :empty::after {
    position: absolute;
    top: 0; right: 0; left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(90deg, rgba(255,255,255,0) 0, rgba(255,255,255,.2) 20%, rgba(255,255,255,0) 60%, rgba(255,255,255,0));
    animation: ${shine} 2s infinite;
    content: '';
  }
`

const DivHeader = styled.header``
const DivTitle = styled.h3``

const Overview: React.FC<DivProps> = ({small = false, divTitle}) => {
	return (
		<GridContainer>
			<GridDiv className='one'>
				<DivTitle>Placeholder</DivTitle>
			</GridDiv>
			<GridDiv className='two'>
				<DivHeader>
					<DivTitle>Placeholder</DivTitle>
				</DivHeader>
			</GridDiv>
			<GridDiv className='three'>
				<DivHeader>
					<DivTitle>Placeholder</DivTitle>
				</DivHeader>
			</GridDiv>
			<GridDiv className='four'>
				<DivHeader>
					<DivTitle>Placeholder</DivTitle>
				</DivHeader>
			</GridDiv>
			<GridDiv className='five' small>
				<DivHeader>
					<DivTitle>Placeholder</DivTitle>
				</DivHeader>
			</GridDiv>
			<GridDiv className='six' small>
				<DivHeader>
					<DivTitle>Placeholder</DivTitle>
				</DivHeader>
			</GridDiv>
			<GridDiv className='seven' small>
				<DivHeader>
					<DivTitle>Placeholder</DivTitle>
				</DivHeader>
			</GridDiv>
		</GridContainer>
	)
}

export default Overview
