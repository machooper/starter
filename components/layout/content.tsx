import styled from "styled-components"

export interface ContentProps {
	// * Define the maxwidth of the page for tablet and larger
	maxWidth?: string
}

const PageContent = styled.div<ContentProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1 0 auto;

	@media (min-width: 760px) {
		max-width: ${p => p.maxWidth};
		margin: 0 auto;
	}

	@media (min-width: 2500px) {
		max-width: 80vw;
	}
`
export const Content: React.FC<ContentProps> = ({maxWidth, children}) => {
	return <PageContent maxWidth={maxWidth}>{children}</PageContent>
}
