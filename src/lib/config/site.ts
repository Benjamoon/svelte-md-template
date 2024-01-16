import {Icons} from "$lib/components/docs/icons";
import type { NavItem } from "$lib/types/nav";

import { ExternalLink } from "radix-icons-svelte"
import type { ComponentConstructorOptions, SvelteComponent } from "svelte";

interface SiteConfigLinkItem {
	title: string;
	href: string;
	icon?: any;
	newTab?: boolean;
}

interface SiteLandingPageAnnouncement {
	title: string;
	href: string;
}

interface SiteLandingPageConfig {
	title: string;
	subtitle: string;
	links: SiteConfigLinkItem[];
	announcement?: SiteLandingPageAnnouncement;
}

interface SiteConfigType {
	name: string;
	url: string;
	description: string;
	links: SiteConfigLinkItem[];
	keywords: string;
	mainNav: NavItem[];
	searchPlaceholder: string;
	searchPlaceholderShort: string;
	landingPage: SiteLandingPageConfig;
	footer: string | SvelteComponentConstructor<SvelteComponent, ComponentConstructorOptions>;
}

export const siteConfig: SiteConfigType = {
	name: "svelte-md-template",
	url: "https://svelte-md-template.h0st.uk",
	description: "A quick, dirty template for SvelteKit and Markdown",
	links: [
		{
			title: "GitHub",
			href: "https://github.com/Benjamoon/svelte-md-template",
			icon: Icons.gitHub
		}
	],
	keywords: `shadcn,Svelte,SvelteKit,Svelte Components,TailwindCSS,Melt UI,Bit UI`,
	mainNav: [
		{
			title: "Documentation",
			href: "/docs"
		},
		{
			title: "GitHub",
			href: "https://github.com/Benjamoon/svelte-md-template",
			external: true
		},
	],
	searchPlaceholder: "Search docs...",
	searchPlaceholderShort: "Search...",
	landingPage: {
		title: "svelte-md-template",
		subtitle: "A quick, dirty template for SvelteKit and Markdown",
		links: [
			{
				title: "Docs",
				href: "/docs",
				icon: ExternalLink,
				newTab: false
			},
			{
				title: "GitHub",
				href: "https://github.com/Benjamoon/svelte-md-template",
				icon: Icons.gitHub,
				newTab: true
			}
		],
		announcement: {
			title: "This is an announcement!",
			href: "/docs"
		}
	},
	footer: "Basically a copy of <a class='underline' href='https://www.shadcn-svelte.com/' target='_blank'>shadcn-svelte</a> docs website with all the content removed and made a little more configurable."
};

export type SiteConfig = SiteConfigType;