<script lang="ts">
	import { type HTMLAttributes } from 'svelte/elements'
	import { cn } from '@/utils/cn'
	import { nanoid } from 'nanoid'

	type Props = {
		class?: string
		width?: any
		height?: any
		x?: any
		y?: any
		cx?: any
		cy?: any
		cr?: any
	} & HTMLAttributes<SVGSVGElement>

	let {
		class: className,
		width = 16,
		height = 16,
		x = 0,
		y = 0,
		cx = 1,
		cy = 1,
		cr = 1,
		...props
	}: Props = $props()

	let id = nanoid()
</script>

<svg
	aria-hidden="true"
	class={cn('pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80', className)}
	{...props}
>
	<defs>
		<pattern
			{id}
			{width}
			{height}
			patternUnits="userSpaceOnUse"
			patternContentUnits="userSpaceOnUse"
			{x}
			{y}
		>
			<circle id="pattern-circle" {cx} {cy} r={cr} />
		</pattern>
	</defs>
	<rect width="100%" height="100%" stroke-width={0} fill={`url(#${id})`} />
</svg>
