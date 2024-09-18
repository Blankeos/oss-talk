<script lang="ts">
	import { cn } from '@/utils/cn'
	import { spring, timeline } from 'motion'
	import { onMount, type Snippet } from 'svelte'

	type Props = {
		/** @defaultValue 25*/
		size?: number
		children?: Snippet
		class?: string
		floatDistance?: number
		delay?: number
		/** @defaultValue [1, 1.2] */
		scaleFromTo?: [number, number]
	}

	let {
		class: className,
		delay = 0,
		floatDistance = 50,
		scaleFromTo = [1, 1.2],
		size = 50,
		children
	}: Props = $props()

	let circleRef: HTMLDivElement

	onMount(() => {
		timeline(
			[
				[circleRef, { y: [0, floatDistance], scale: scaleFromTo }, { easing: spring() }],
				[
					circleRef,
					{ y: [floatDistance, 0], scale: [scaleFromTo[1], scaleFromTo[0]] },
					{ easing: spring() }
				]
			],
			{
				repeat: Infinity,
				delay: delay
			}
		)
	})
</script>

<div
	bind:this={circleRef}
	class={cn(
		'relative flex items-center justify-center overflow-hidden rounded-full bg-black',
		className
	)}
	style:width="{size}px"
	style:height="{size}px"
>
	{@render children?.()}
</div>
