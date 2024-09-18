<!-- Svelte component tsdoc
Hello 
-->

<script lang="ts">
	import { animate, spring, stagger } from 'motion'
	import { type HTMLAttributes } from 'svelte/elements'

	type Props = {
		text: string
		visible: boolean
		staggerDelay?: number
		/** In seconds.*/
		delay?: number
	} & HTMLAttributes<HTMLHeadingElement>
	let { text, visible, staggerDelay = 0.02, delay = 0, ...restProps }: Props = $props()

	let h1LettersRef: HTMLSpanElement[] = []

	let timeout: ReturnType<typeof setTimeout>

	function entry() {
		timeout = setTimeout(() => {
			animate(
				h1LettersRef,
				{ y: [20, 0, 5, 0], opacity: [0, 0.5, 1] },
				{ delay: stagger(staggerDelay), easing: spring({ damping: 2 }) }
			)
		}, delay * 1000)
	}

	$effect(() => {
		if (visible) {
			entry()
		} else {
			animate(h1LettersRef, { opacity: 0 })
			timeout && clearTimeout(timeout)
		}
	})
</script>

<h1 {...restProps}>
	{#each text.split('') as letter, i (i)}
		{#if letter === ' '}
			<i class="p-1" bind:this={h1LettersRef[i]}></i>
		{:else}
			<span bind:this={h1LettersRef[i]} class="inline-block opacity-0">{letter}</span>
		{/if}
	{/each}
</h1>
