<script lang="ts">
	import { Slide, Transition } from '@animotion/core'
	import H1Title from '../h1-title.svelte'
	import LayoutCenter from '../layouts/layout-center.svelte'
	import GridPattern from '../grid-pattern.svelte'
	import { cn } from '@/utils/cn'

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
	<GridPattern
		width={20}
		height={20}
		x={-1}
		y={-1}
		class={cn(
			'absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]'
		)}
	/>
	<LayoutCenter>
		<img src="https://media1.tenor.com/m/syzrbyAwJGwAAAAC/why-pastor.gif" alt="" />
		<div class="h-10"></div>
		<H1Title visible text="Why Contribute to Open Source" class="" />

		<div class="h-10"></div>
		<div class="flex flex-col gap-y-5">
			<Transition>
				<p class="text-lg text-neutral-300">
					It makes you better engineers (code reviews, describing issues and PRs).
				</p>
			</Transition>
			<Transition>
				<p class="text-lg text-neutral-300">It adds to your credibility when you apply for jobs.</p>
			</Transition>

			<Transition class="absolute bottom-60 right-10 flex flex-col items-center">
				<div class="h-20 w-20 overflow-hidden rounded-full">
					<img src="https://dhh.dk/images/headshot-2017-full.jpg" alt="dhh" />
				</div>
				<p class="text-sm">"Open-Source is a cheatcode" - DHH</p>
			</Transition>

			<Transition>
				<p class="text-lg text-neutral-300">
					It's the closest thing you have to a <b>real world</b> project.
				</p>
			</Transition>
		</div>
	</LayoutCenter>
</Slide>
