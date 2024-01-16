export type FrontMatter = {
	title: string;
	description: string;
	component: boolean;
	source: string;
};

export type DocFile = {
	default: import("svelte").SvelteComponent;
	metadata: FrontMatter;
};

export type DocResolver = () => Promise<DocFile>;

export type TableOfContentsItem = {
	title: string;
	url: string;
	items?: TableOfContentsItem[];
};

export type TableOfContents = {
	items: TableOfContentsItem[];
};
