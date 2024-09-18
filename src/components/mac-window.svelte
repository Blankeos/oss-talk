<script lang="ts">
	import { cn } from '@/utils/cn'
	import type { Snippet } from 'svelte'
	import { type HTMLAttributes } from 'svelte/elements'

	type Props = {
		variants?: 'light' | 'dark'
		id?: string
		headerText?: string
		onMouseEnter?: (e: MouseEvent) => void
		onMouseLeave?: (e: MouseEvent) => void
		class?: string
		macWindowHeaderDataId?: string
		children?: Snippet
	} & HTMLAttributes<HTMLDivElement>

	let {
		variants = 'light',
		id = undefined,
		class: className,
		macWindowHeaderDataId,
		headerText,
		onMouseEnter,
		onMouseLeave,
		children,
		...restProps
	}: Props = $props()
</script>

<!-- svelte-ignore legacy_code -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore event_directive_deprecated -->
<div
	{id}
	class={cn('flex flex-col', className)}
	{...restProps}
	onmouseenter={onMouseEnter}
	onmouseleave={onMouseLeave}
>
	<div
		class={cn(
			'flex h-10 items-center gap-x-2 rounded-t-2xl bg-white px-5',
			variants === 'dark' && 'bg-gray-700'
		)}
		data-id={macWindowHeaderDataId}
	>
		<div class="flex items-center gap-x-2">
			<div class="h-3 w-3 rounded-full bg-red-400"></div>
			<div class="h-3 w-3 rounded-full bg-green-400"></div>
			<div class="h-3 w-3 rounded-full bg-blue-400"></div>
		</div>
		{#if headerText}
			<span class={cn('text-xs text-gray-700', variants === 'dark' && 'text-white')}>
				{headerText}
			</span>
		{/if}
	</div>
	<div
		data-id={`${id}-body`}
		class={cn(
			'flex-1 overflow-hidden rounded-b-2xl bg-gray-200',
			variants === 'dark' && 'bg-gray-800'
		)}
	>
		{@render children?.()}
	</div>
</div>
