import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
	extensions: [".md"],
    layout: path.resolve(__dirname, "./src/lib/components/docs/mdsvex/mdsvex.svelte"),
	smartypants: {
		quotes: false,
		ellipses: false,
		backticks: false,
		dashes: false
	},
};

