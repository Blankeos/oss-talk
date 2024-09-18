<script lang="ts" generics="T extends 'video' | 'image' | 'iframe'">
	import type { Snippet } from 'svelte'
	import { type HTMLAttributes } from 'svelte/elements'
	type Bool = boolean | null

	type HTMLElement = T extends 'video'
		? HTMLVideoElement
		: T extends 'image'
			? HTMLImageElement
			: HTMLIFrameElement

	type Props<T> = {
		type: T
		src: string
		autoplay?: Bool
		preload?: Bool
		children?: Snippet
	} & HTMLAttributes<HTMLElement>

	let { type, src, autoplay = null, preload = null, children, ...restProps }: Props<T> = $props()
</script>

<svelte:element this={type} data-src={src} data-autoplay={autoplay} data-prelod={preload}>
	{@render children?.()}
</svelte:element>
