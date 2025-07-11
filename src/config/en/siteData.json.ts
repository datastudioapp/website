import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "opendata.studio",
	// Your website's title and description (meta fields)
	title:
		"opendata.studio - Improving research outcomes",
	description:
		"Lorem ipsum",

	// Your information for blog post purposes
	author: {
		name: "opendata.studio",
		email: "hello@opendata.studio",
		twitter: "",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;