import styled from "styled-components"

export interface WrapperProps {
	// * Choose between column and row
	flexDirection?: "row" | "column"
}

const PageWrapper = styled.div<WrapperProps>`
	min-height: 100vh;
	display: flex;
	flex-direction: ${p => p.flexDirection};
	align-items: center;
`

export const Wrapper: React.FC<WrapperProps> = ({
	flexDirection = "column",
	children
}) => {
	return <PageWrapper flexDirection={flexDirection}>{children}</PageWrapper>
}
