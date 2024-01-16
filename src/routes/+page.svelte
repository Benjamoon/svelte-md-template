<script lang="ts">
	import * as PageHeader from '$lib/components/docs/page-header';
	import { Announcement } from '$lib/components/docs';
	import { buttonVariants } from '$lib/components/ui/button';
	import { siteConfig } from '$lib/config/site';
	import { cn } from '$lib/utils';
</script>

<div class="container relative">
	<PageHeader.Root class="pb-8">
		{#if siteConfig.landingPage?.announcement}
			<Announcement
				text= {siteConfig.landingPage.announcement.title}
				href= {siteConfig.landingPage.announcement.href}
			/>
		{/if}
		<PageHeader.Heading>{siteConfig.landingPage?.title}</PageHeader.Heading>
		<PageHeader.Description>
			{siteConfig.landingPage?.subtitle}
		</PageHeader.Description>
		<!-- <p class="text-sm text-center text-orange-700 dark:text-orange-400">
			This is an unofficial port of <a
				href={siteConfig.links.shadGithub}
				target="_blank"
				rel="noreferrer"
				class="font-medium underline underline-offset-4">shadcn/ui</a
			>
			to Svelte, and is not affiliated with
			<a
				href={siteConfig.links.shadTwitter}
				target="_blank"
				rel="noreferrer"
				class="font-medium underline underline-offset-4">@shadcn</a
			>.
		</p> -->
		<div class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
			<!-- <a href="/docs" class={cn(buttonVariants())}> Docs </a>
			<a
				target="_blank"
				rel="noreferrer"
				href={siteConfig.links.github}
				class={cn(buttonVariants({ variant: "outline" }))}
			>
				<Icons.gitHub class="mr-2 h-4 w-4" /> 
				GitHub
			</a> -->
			{#each siteConfig.landingPage.links as link}
				<a
					target={link.newTab ? '_blank' : undefined}
					rel="noreferrer"
					href={link.href}
					class={cn(buttonVariants({ variant: 'outline' }))}
				>
                    <svelte:component this={link.icon} class="mr-2 h-4 w-4" />
					{link.title}
				</a>
			{/each}
		</div>
	</PageHeader.Root>
</div>
