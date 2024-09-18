<script lang="ts">
	import { cn } from '@/utils/cn'
	import type { Snippet } from 'svelte'
	import type { HTMLAttributes } from 'svelte/elements'

	type Props = {
		class?: string
		children?: Snippet
	} & HTMLAttributes<HTMLDivElement>

	let { class: className, children, ...restProps }: Props = $props()
</script>

<div class={cn('flex h-screen flex-col items-center justify-center', className)} {...restProps}>
	{@render children?.()}
</div>
