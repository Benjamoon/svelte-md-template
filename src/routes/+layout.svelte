<script lang="ts">
	import { Metadata, SiteFooter, SiteHeader } from "$lib/components/docs";
	import { ModeWatcher } from "mode-watcher";
	import { Toaster } from "$lib/components/ui/sonner";

	import "/src/styles/globals.pcss";
</script>

<ModeWatcher />
<Metadata />
<Toaster />

<div class="relative flex min-h-screen flex-col bg-background" id="page" data-vaul-drawer-wrapper>
	<SiteHeader />
	<div class="flex-1">
		<slot />
	</div>
	<SiteFooter />
</div>
