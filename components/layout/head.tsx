import {default as NextHead} from "next/head"

export interface HeadProps {
	// * Define page title
	pageTitle: string
	// * Describe the content of the page
	pageDescription: string
	// * Select social image displayed when page is shared
	socialImage: string
	// * Text to accompany social image
	socialImageText: string
	// * Define the websites favicon (shown in browser tabs)
	siteIcon: string
	// * Touch icon for phone and tables
	touchIcon: string
	// * Website locale
	siteLocale: string
	// * Select content type
	siteType: "website" | "app"
	// * Set the sites domain url
	siteUrl: string
	// * Define the theme color
	themeColor: string
}

export const Head: React.FC<HeadProps> = ({
	pageTitle,
	pageDescription,
	socialImage,
	socialImageText,
	siteIcon,
	touchIcon,
	siteLocale,
	siteType,
	siteUrl,
	themeColor
}) => {
	return (
		<NextHead>
			<meta charSet='UTF-8'></meta>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'></meta>
			<title>{pageTitle}</title>
			<meta name='description' content={pageDescription}></meta>
			<meta property='og:title' content={pageTitle}></meta>
			<meta property='og:description' content={pageDescription}></meta>
			<meta property='og:image' content={socialImage}></meta>
			<meta property='og:image:alt' content={socialImageText}></meta>
			<meta property='og:locale' content={siteLocale}></meta>
			<meta property='og:type' content={siteType}></meta>
			<meta property='og:url' content={siteUrl}></meta>
			<meta name='twitter:card' content={socialImage}></meta>
			<link rel='canonical' href={siteUrl}></link>
			<link rel='icon' href={siteIcon} type='image/svg+xml'></link>
			<link rel='apple-touch-icon' href={touchIcon}></link>
			<link rel='manifest' href='my.webmanifest'></link>
			<meta name='theme-color' content={themeColor}></meta>
		</NextHead>
	)
}
