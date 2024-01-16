import type { NavItem, SidebarNavItem } from "$lib/types/nav";

interface DocsConfig {
	sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs",
					items: []
				}
			]
		},
		{
			title: "Docs",
			items: [
				{
					title: "config/site.ts",
					href: "/docs/siteconfig",
					items: []
				},
				{
					title: "config/docs.ts",
					href: "/docs/docsconfig",
					items: []
				},
			]
		}
	]
};