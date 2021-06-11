import Link from "next/link"
import styled from "styled-components"

export interface LogoProps {
	// * Define whether a text or image logo
	logoType: "text" | "image" | "both"
	// * Size of text in rem
	textSize?: number
	// * Color of text
	textColor?: string
	// * Color of text on hover
	textHoverColor?: string
	// * Weight of text
	textWeight?: string
	// * Contents of text
	textContents?: string
	// * Source of image
	imageSource?: string
	// * Width of image in rem
	imageWidth?: number
	// * Height of image in rem
	imageHeight?: number
	// * Space between text and image in rem
	marginSpace?: number
}

const LogoContainer = styled.div<LogoProps>`
	display: flex;
	align-items: center;
	justify-content: center;
`
const LogoImage = styled.img<LogoProps>`
	display: ${p => {
		if (p.logoType === "text") return `none;`
	}};
	max-width: ${p => p.imageWidth}rem;
	max-height: ${p => p.imageHeight}rem;
	background: ${p => p.imageSource} center center;
	margin-left: ${p => p.marginSpace}rem;
`
const LogoText = styled.h1<LogoProps>`
	display: ${p => {
		if (p.logoType === "image") return `none;`
	}};
	font-size: ${p => p.textSize}rem;
	color: ${p => p.textColor};
	weight: ${p => p.textWeight};
	:hover {
		color: ${p => p.textHoverColor};
	}
`

export const Logo: React.FC<LogoProps> = ({
	logoType,
	textSize,
	textColor,
	textHoverColor,
	textWeight,
	textContents,
	imageSource,
	imageWidth,
	imageHeight,
	marginSpace
}) => {
	return (
		<LogoContainer>
			<LogoImage
				logoType={logoType}
				imageWidth={imageWidth}
				imageHeight={imageHeight}
				marginSpace={marginSpace}
				src={imageSource}
				alt={textContents}
			/>
			<LogoText
				textSize={textSize}
				textColor={textColor}
				textHoverColor={textHoverColor}
				textWeight={textWeight}>
				{textContents}
			</LogoText>
		</LogoContainer>
	)
}
