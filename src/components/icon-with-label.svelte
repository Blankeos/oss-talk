<script lang="ts">
	import type { Snippet, SvelteComponent } from 'svelte'

	type Props = {
		// icon: Snippet<[any]>
		Icon: any
		iconProps?: Record<string, unknown>
		text: string
	}

	let { Icon, iconProps, text }: Props = $props()
</script>

<div class="flex flex-col items-center gap-y-2">
	<!-- {@render icon(iconProps)} -->
	<span class="transition hover:rotate-6 hover:scale-110">
		<Icon {...iconProps} />
	</span>

	<p class="text-sm">{text}</p>
</div>
