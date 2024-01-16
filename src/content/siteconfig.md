---
title: Site config
description: What's in config/site.ts?
---

Todo, but for now, heres the relevant types.

## Usage

```typescript
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
```