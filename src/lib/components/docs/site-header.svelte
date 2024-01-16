<script lang="ts">
	import { Icons, ModeToggle, MainNav, MobileNav, CommandMenu } from "$lib/components/docs";
	import { buttonVariants } from "$lib/components/ui/button";
	import { siteConfig } from "$lib/config/site";
	import { cn } from "$lib/utils";
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center">
		<MainNav />
		<MobileNav />
		<div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
			<div class="w-full flex-1 md:w-auto md:flex-none">
				<CommandMenu />
			</div>
			<nav class="flex items-center">
				{#each siteConfig.links as link}
					<a href={link.href} target="_blank" rel="noopener noreferrer">
						<div
							class={cn(
								buttonVariants({
									size: "sm",
									variant: "ghost"
								}),
								"w-9 px-0"
							)}
						>
							<svelte:component this={link.icon} class="h-5 w-5" />
							<span class="sr-only">{link.title}</span>
						</div>
					</a>
				{/each}
				<ModeToggle />
			</nav>
		</div>
	</div>
</header>
