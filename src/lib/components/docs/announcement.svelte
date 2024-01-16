<script lang="ts">
	import { Separator } from "$lib/components/ui/separator";
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };

    export let text: string = "";
    export let href: string = "";
</script>

<a
	href={href}
	class={cn(
		"inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium",
		className
	)}
	{...$$restProps}
>
	🎉 <Separator class="mx-2 h-4" orientation="vertical" />{" "}
	<span>{text}</span>
</a>
