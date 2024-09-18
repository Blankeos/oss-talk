<script lang="ts">
	import { Slide, Transition } from '@animotion/core'
	import DotPattern from '../dot-pattern.svelte'
	import { cn } from '@/utils/cn'
	import { Confetti } from 'svelte-confetti'
	import LayoutCenter from '../layouts/layout-center.svelte'
	import H1Title from '../h1-title.svelte'
	import { onMount } from 'svelte'
	import { IconGit, IconSolidJSDark, IconSolidJSLight } from '@/assets/icons'

	let h1Visibility = $state<boolean[]>([])

	let winners = $state<string[]>([])

	// Load.
	onMount(() => {
		const storedWinners = localStorage.getItem('winners')
		try {
			if (storedWinners) {
				const _winners: string[] = JSON.parse(storedWinners)

				winners = _winners
			}
		} catch (e) {
			console.log(e)
		}
	})

	// Save.
	$effect(() => {
		if (winners) {
			localStorage.setItem('winners', JSON.stringify(winners))
		}
	})
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
		<H1Title text="Quiz Time!" visible={h1Visibility[0]} class="text-6xl" />
		<DotPattern
			width={20}
			height={20}
			cx={1}
			cy={1}
			cr={1}
			class={cn(
				'absolute inset-0 [mask-image:radial-gradient(circle,white,transparent,transparent)]'
			)}
		/>
	</LayoutCenter>
</Slide>

<Slide
	in={() => {
		h1Visibility[1] = true
	}}
	out={() => {
		h1Visibility[1] = false
	}}
	animate
>
	<LayoutCenter>
		<H1Title text="Question 1" visible={h1Visibility[1]} class="" />
		<div class="h-10"></div>
		<p class="text-neutral-300">What is the Open-Source Alternative to Firebase? 🔥</p>

		<div class="h-10"></div>

		<input
			class="rounded-md border p-2 text-center text-xl text-orange-500"
			bind:value={winners[0]}
			placeholder="Winner"
		/>

		<DotPattern
			width={20}
			height={20}
			cx={1}
			cy={1}
			cr={1}
			class={cn(
				'absolute inset-0 -z-10 [mask-image:radial-gradient(circle,white,transparent,transparent)]'
			)}
		/>

		<Transition class="h-20 py-8">Supabase</Transition>
	</LayoutCenter>
</Slide>

<Slide
	in={() => {
		h1Visibility[2] = true
	}}
	out={() => {
		h1Visibility[2] = false
	}}
	animate
>
	<LayoutCenter>
		<H1Title text="Question 2" visible={h1Visibility[2]} class="" />
		<div class="h-10"></div>
		<p class="text-neutral-300">A contribution to a repository in the form of written code.</p>

		<div class="h-10"></div>

		<input
			class="rounded-md border p-2 text-center text-xl text-orange-500"
			bind:value={winners[1]}
			placeholder="Winner"
		/>

		<DotPattern
			width={20}
			height={20}
			cx={1}
			cy={1}
			cr={1}
			class={cn(
				'absolute inset-0 -z-10 [mask-image:radial-gradient(circle,white,transparent,transparent)]'
			)}
		/>

		<Transition class="h-20 py-8">Pull Requests</Transition>
	</LayoutCenter>
</Slide>

<Slide
	in={() => {
		h1Visibility[3] = true
	}}
	out={() => {
		h1Visibility[3] = false
	}}
	animate
>
	<LayoutCenter>
		<H1Title text="Question 3" visible={h1Visibility[3]} class="" />
		<div class="h-10"></div>
		<p class="flex items-center gap-x-2 text-neutral-300">
			Who made "Git"? <IconGit width={64} height={64} />
		</p>

		<div class="h-10"></div>

		<input
			class="rounded-md border p-2 text-center text-xl text-orange-500"
			bind:value={winners[2]}
			placeholder="Winner"
		/>

		<DotPattern
			width={20}
			height={20}
			cx={1}
			cy={1}
			cr={1}
			class={cn(
				'absolute inset-0 -z-10 [mask-image:radial-gradient(circle,white,transparent,transparent)]'
			)}
		/>

		<Transition class="flex  items-center gap-x-2 py-10">Linus Torvalds</Transition>
	</LayoutCenter>
</Slide>


<Slide
	in={() => {
		h1Visibility[4] = true
	}}
	out={() => {
		h1Visibility[4] = false
	}}
	animate
>
	<LayoutCenter>
		<H1Title text="Question 4" visible={h1Visibility[4]} class="" />
		<div class="h-10"></div>
		<p class="text-neutral-300">What is my Favorite JavaScript Framework?</p>

		<div class="h-10"></div>

		<input
			class="rounded-md border p-2 text-center text-xl text-orange-500"
			bind:value={winners[3]}
			placeholder="Winner"
		/>

		<DotPattern
			width={20}
			height={20}
			cx={1}
			cy={1}
			cr={1}
			class={cn(
				'absolute inset-0 -z-10 [mask-image:radial-gradient(circle,white,transparent,transparent)]'
			)}
		/>

		<Transition class="flex  items-center gap-x-2 py-10">
			<IconSolidJSDark width={64} height={64} />
			<span class="">SolidJS</span>
		</Transition>
	</LayoutCenter>
</Slide>


<Slide>
	<div
		style="
 position: fixed;
 top: -50px;
 left: 0;
 height: 100vh;
 width: 100vw;
 display: flex;
 justify-content: center;
 overflow: hidden;
 pointer-events: none;"
	>
		<Confetti
			x={[-5, 5]}
			y={[0, 0.1]}
			delay={[500, 2000]}
			infinite
			duration={5000}
			amount={200}
			fallDistance="100vh"
		/>
	</div>

	<LayoutCenter>
		<div>Congratulations</div>

		<div class="h-10"></div>

		<div class="flex flex-col gap-y-2 text-xl text-orange-500">
			{#each winners as winner, i (winner)}
				<div>
					{winner}
				</div>
			{/each}
		</div>
	</LayoutCenter>
	<DotPattern
		width={20}
		height={20}
		cx={1}
		cy={1}
		cr={1}
		class={cn(
			'absolute inset-0 -z-10 [mask-image:radial-gradient(circle,white,transparent,transparent)]'
		)}
	/>
</Slide>
