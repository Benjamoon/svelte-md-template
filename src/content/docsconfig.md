---
title: Docs config
description: What's in config/docs.ts?
---

Todo, but for now, heres the relevant types.

```typescript
interface DocsConfig {
	sidebarNav: SidebarNavItem[];
}

export type SidebarNavItem = NavItem & {
	items: SidebarNavItem[];
};

export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	icon?: keyof typeof Icons;
	label?: string;
};


```