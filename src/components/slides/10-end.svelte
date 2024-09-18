<script lang="ts">
	import { Slide } from '@animotion/core'
	import DotPattern from '../dot-pattern.svelte'
	import { cn } from '@/utils/cn'
	import LayoutCenter from '../layouts/layout-center.svelte'
	import H1Title from '../h1-title.svelte'

	let h1Visibility = $state<boolean[]>([])
</script>

<Slide
	in={() => {
		h1Visibility[0] = true
	}}
	out={() => {
		h1Visibility[0] = false
	}}
>
	<LayoutCenter>
		<H1Title text="Thank You!" visible={h1Visibility[0]} class="text-7xl" />
		<DotPattern
			width={20}
			height={20}
			cx={1}
			cy={1}
			cr={1}
			class={cn(
				'absolute inset-0 -z-10 [mask-image:radial-gradient(circle,white,transparent,transparent)] '
			)}
		/>

		<div class="texto-neutral-400 text-bluborder-e-red-200 mt-10 text-xl">
			Know more about me @ <a href="https://carlotaleon.net" class="text-blue-400 underline"
				>carlotaleon.net</a
			>
		</div>
	</LayoutCenter>
</Slide>
