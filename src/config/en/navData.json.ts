/**
 * * This file is used to define the navigation links for the site.
 * Notes:
 * 1 level of dropdown is supported
 * Mega menus look best with 3-5 columns, but supports anything > 2 columns
 * If using icons, the icon should be saved in the src/icons folder. If filename is "tabler/icon.svg" then input "tabler/icon"
 * Recommend getting icons from https://tabler.io/icons
 */

// types
import { type navItem } from "../types/configDataTypes";

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Why opendata.studio?",
		link: "/why",
	},
	{
		text: "Services",
		link: "/services",
	},
	{
		text: "About",
		link: "/about",
	},
	/*

	// mega menu
	// {
	// 	text: "Pages",
	// 	megaMenuColumns: [
	// 		{
	// 			title: "Landing Pages",
	// 			items: [
	// 				{
	// 					text: "Landing 1",
	// 					link: "/",
	// 					icon: "tabler/star",
	// 				},
	// 				{
	// 					text: "Landing 2",
	// 					link: "/examples/landing2",
	// 					icon: "tabler/diamonds",
	// 				},
	// 				{
	// 					text: "Landing 3",
	// 					link: "/examples/landing3",
	// 					icon: "tabler/circle",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			title: "Blog",
	// 			items: [
	// 				{
	// 					text: "Blog Index 1",
	// 					link: "/blog",
	// 					icon: "tabler/pencil",
	// 				},
	// 				{
	// 					text: "Blog Index 2",
	// 					link: "/examples/blogIndex2",
	// 					icon: "tabler/pencil",
	// 				},
	// 				{
	// 					text: "Categories",
	// 					link: "/categories",
	// 					icon: "tabler/category",
	// 				},
	// 				{
	// 					text: "Blog Post",
	// 					link: "/blog/tsconfig-paths-setup",
	// 					icon: "tabler/edit-circle",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			title: "Elements & Forms",
	// 			items: [
	// 				{
	// 					text: "MDX Pages",
	// 					link: "/elements",
	// 					icon: "tabler/wand",
	// 				},
	// 				{
	// 					text: "Contact",
	// 					link: "/contact",
	// 					icon: "tabler/address-book",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			title: "Other Pages",
	// 			items: [
	// 				{
	// 					text: "About",
	// 					link: "/a-propos",
	// 					icon: "tabler/user",
	// 				},
	// 				{
	// 					text: "Privacy Policy",
	// 					link: "/privacy-policy",
	// 					icon: "tabler/lock-square",
	// 				},
	// 				{
	// 					text: "Terms of Use",
	// 					link: "/terms",
	// 					icon: "tabler/script",
	// 				},
	// 				{
	// 					text: "Page not found",
	// 					link: "/not-a-link",
	// 					icon: "tabler/error-404",
	// 				},
	// 				{
	// 					text: "RSS Feed",
	// 					link: "/rss.xml",
	// 					newTab: true,
	// 					icon: "tabler/rss",
	// 				},
	// 			],
	// 		},
	// 	],
	// },

	// dropdown
	{
		text: "Landing Pages",
		dropdown: [
			{
				text: "SaaS Landing",
				link: "/examples/landing-saas",
			},
			{
				text: "Portfolio Landing",
				link: "/examples/landing-portfolio",
			},
			{
				text: "Services Landing",
				link: "/examples/landing-services",
			},
		],
	},

	// dropdown
	{
		text: "Core Pages",
		dropdown: [
			{
				text: "Projects",
				link: "/projects",
			},
			{
				text: "Project Page",
				link: "/projects/ai-content-platform",
			},
			{
				text: "Resume",
				link: "/resume",
			},
			{
				text: "Careers",
				link: "/careers",
			},
			{
				text: "Career Page",
				link: "/careers/ux-designer",
			},
			{
				text: "Services",
				link: "/services",
			},
			{
				text: "Service Page",
				link: "/services/pediatrics",
			},
			{
				text: "Blog",
				link: "/blog",
			},
			{
				text: "Blog Post One",
				link: "/blog/tsconfig-paths-setup",
			},
			{
				text: "Blog Post Two",
				link: "/examples/blog-post-2",
			},
			{
				text: "Authors",
				link: "/authors/main-author",
			},
			{
				text: "Categories",
				link: "/categories",
			},
			{
				text: "Tags",
				link: "/tags",
			},
			{
				text: "About",
				link: "/about",
			},
			{
				text: "Elements",
				link: "/elements",
			},
			// {
			// 	text: "404",
			// 	link: "/not-a-link",
			// },
			// {
			// 	text: "RSS Feed",
			// 	link: "/rss.xml",
			// },
		],
	},

	// dropdown
	{
		text: "Forms",
		dropdown: [
			{
				text: "Sign Up",
				link: "/sign-up",
			},
			{
				text: "Sign In",
				link: "/sign-in",
			},
			{
				text: "Password Reset",
				link: "/password-reset",
			},
			{
				text: "Contact",
				link: "/services/pediatrics/#contact",
			},
		],
	},
	*/
];

export default navConfig;
