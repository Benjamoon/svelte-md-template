<script lang="ts">
	import { siteConfig } from "$lib/config/site";
</script>

<footer class="py-6 md:px-8 md:py-0">
	<div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
		<div class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
			<p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
				{#if typeof siteConfig.footer === "string"}
					{@html siteConfig.footer}
				{:else if typeof siteConfig.footer === "object"}
					<!-- Assuming its a component if its not a string -->
					<svelte:component this={siteConfig.footer} />
				{/if}
			</p>
		</div>
	</div>
</footer>
