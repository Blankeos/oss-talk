<script lang="ts">
	import CarloImg from '@/assets/carlo-img.png'
	import { Slide, Transition } from '@animotion/core'
	import { animate, spring, stagger } from 'motion'
	import H1Title from '../h1-title.svelte'
	import GridPattern from '../grid-pattern.svelte'
	import { cn } from '@/utils/cn'

	let h1Visible = $state(false)
	let educationTitleVisible = $state(false)
	let workTitleVisible = $state(false)

	let workCardsRefs: HTMLDivElement[] = []

	function enterWorkCards() {
		animate(
			workCardsRefs,
			{ x: [-50, 0], opacity: [0.5, 1] },
			{
				delay: stagger(0.2),
				easing: spring()
			}
		)
	}
</script>

<Slide
	in={() => {
		h1Visible = true
	}}
	out={() => {
		h1Visible = false
	}}
	animate
>
	<div class="flex gap-x-10 p-20">
		<img src={CarloImg} alt="" class="h-96 w-96 rounded-md" />
		<div class="flex flex-col items-start gap-y-8">
			<H1Title text="Carlo Antonio Taleon" visible={h1Visible} class="text-6xl font-medium" />
			<Transition>
				<p class="text-lg text-blue-200 opacity-90" id="subheading-intro">
					An <b>okay</b> software engineer from the Philippines 🇵🇭
				</p>
			</Transition>
			<Transition
				do={() => {
					educationTitleVisible = true
				}}
			>
				<div class="flex flex-col items-start gap-y-2">
					<H1Title text="Education" visible={educationTitleVisible} class="text-lg font-medium" />
					<p class="text-lg">🏫 West Visayas State University</p>
					<p class="text-lg">🎓 Computer Science (AI)</p>
					<p class="text-lg">🏆 Summa Cum Laude & 2nd Highest GWA in Batch 2022-2023</p>
				</div>
			</Transition>

			{#snippet workCard(
				emoji: string,
				title: string,
				years: string,
				location: string,
				countryEmoji: string,
				index: number
			)}
				<div
					bind:this={workCardsRefs[index]}
					class="flex w-full items-center gap-x-4 rounded-md border border-gray-50 border-opacity-5 bg-white bg-opacity-5 p-2 px-5"
				>
					<div>{emoji}</div>
					<div class="flex min-w-56 flex-1 flex-col items-start">
						<p class="text-lg">{title}</p>
						<p class="text-sm">{years}</p>
					</div>
					<div class="flex items-center gap-x-2 text-end">
						<div class="text-sm">{location}</div>
						<div class="text-lg">{countryEmoji}</div>
					</div>
				</div>
			{/snippet}

			<Transition
				do={() => {
					workTitleVisible = true
					enterWorkCards()
				}}
			>
				<div class="flex flex-col items-start gap-y-5">
					<H1Title text="Work" visible={workTitleVisible} class="text-lg font-medium" />
					{@render workCard('🧠', 'Bilby AI', '2024', 'Hongkong (Remote)', '🇭🇰', 0)}
					{@render workCard(
						'🧪',
						'The Pique Lab',
						'2023 - Present (1yr 3 mos)',
						'Singapore (Remote)',
						'🇸🇬',
						1
					)}
					{@render workCard('⛲️', 'Spring Valley', '2023 (5 mos)', 'Bago', '🇵🇭', 2)}
				</div>
			</Transition>
		</div>

		<GridPattern
			id="grid-pattern"
			width={20}
			height={20}
			x={-1}
			y={-1}
			class={cn(
				'absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]'
			)}
		/>
	</div>
</Slide>
