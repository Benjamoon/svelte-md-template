<script lang="ts">
	import { cn } from "$lib/utils";

	let className: string | undefined | null = undefined;
	export { className as class };

	console.log("Im a P!")
</script>

<p class={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...$$restProps}>
	<slot />
</p>
