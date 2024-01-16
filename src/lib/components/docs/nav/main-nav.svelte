<script lang="ts">
	import { page } from "$app/stores";
	import { siteConfig } from "$lib/config/site";
	import { cn } from "$lib/utils";
	import { Icons } from "$lib/components/docs/icons";

</script>

<div class="mr-4 hidden md:flex">
	<a href="/" class="mr-6 flex items-center space-x-2">
		<Icons.logo class="h-6 w-6" />
		<span class="hidden font-bold sm:inline-block">
			{siteConfig.name}
		</span>
	</a>
	<nav class="flex items-center gap-6 text-sm">
		{#each siteConfig.mainNav as navItem}
			<a
				href={navItem.href}
				class={cn(
					"transition-colors hover:text-foreground/80",
					$page.url.pathname === navItem.href ? "text-foreground" : "text-foreground/60"
				)}
			>
				{navItem.title}
			</a>
		{/each}
	</nav>
</div>
