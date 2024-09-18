<script lang="ts">
	import CarloImg from '@/assets/carlo-img.png'
	import { Slide, Transition, Action } from '@animotion/core'
	import { animate, spring, stagger } from 'motion'
	import { spring as svspring } from 'svelte/motion'
	import H1Title from '../h1-title.svelte'
	import GridPattern from '../grid-pattern.svelte'
	import { cn } from '@/utils/cn'

	import { toast, Toaster } from 'svelte-sonner'
	import { IconVike } from '@/assets/icons'
	import LayoutCenter from '../layouts/layout-center.svelte'

	let h1Visible = $state(false)

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

	let springValues = svspring(
		{
			x: 100,
			y: 100
		},
		{ damping: 0.1, stiffness: 0.1 }
	)
	let expanded = $state(false)

	let toastState = $state<'basic' | 'download' | 'description'>('basic')

	let lastSlidePointsVisible = $state([false, false, false])
</script>

<Slide
	in={() => {
		h1Visible = true
	}}
	out={() => {
		h1Visible = false
	}}
	transition="fade"
	animate
>
	<div class="flex gap-x-10 p-20">
		<img src={CarloImg} alt="" class="rounded-4xl h-72 w-72 transition-all" />
		<div class="flex flex-col items-start gap-y-8">
			<H1Title
				id="title-h1"
				text="Carlo Antonio Taleon"
				visible={h1Visible}
				class="text-6xl font-medium"
			/>
			<p class="text-lg opacity-50" id="subheading-intro">
				What makes me qualified to give this talk? Not a lot xD.
			</p>

			<!-- <div class="h-5"></div> -->

			<Transition class="w-full">
				<div class="w-full text-center text-lg">
					I just make contributions to <span class="font-bold">npm libraries</span>
				</div>

				<div class="flex w-full">
					<div class="flex flex-col gap-y-5">
						<div
							class="rounded-md border border-transparent p-2 transition hover:border-neutral-200 hover:bg-white/5"
						>
							<p class="mb-0 text-lg">solid-sonner</p>
							<button
								class="m-0 rounded-lg bg-white p-2 text-base text-neutral-800 transition active:scale-95"
								onclick={() => {
									if (toastState === 'basic') {
										toast.success('Hi there!')
										toastState = 'download'
									} else if (toastState === 'download') {
										toast.promise(
											new Promise((resolve, reject) => {
												setTimeout(() => {
													resolve(true)
												}, 1500)
											}),
											{
												loading: 'Downloading...',
												success: 'Downloaded!',
												error: 'Download failed!'
											}
										)
										toastState = 'description'
									} else if (toastState === 'description') {
										toast.message('Account has been created', {
											description: 'Monday, January 3rd at 6:00pm'
										})
										toastState = 'basic'
									}
								}}>🎉 Click Me</button
							>
						</div>

						<div
							class="rounded-md border border-transparent p-2 transition hover:border-neutral-200 hover:bg-white/5"
						>
							<p class="text-lg">spring-solid</p>
							<button
								class="select-none truncate rounded-md bg-blue-700 text-sm"
								style:width={$springValues.x + 'px'}
								style:height={$springValues.y + 'px'}
								onclick={() => {
									if (!expanded) {
										springValues.set({
											x: 200,
											y: 200
										})
										expanded = true
										return
									}
									springValues.set({
										x: 100,
										y: 100
									})
									expanded = false
								}}>x: {$springValues.x.toFixed(0)}<br />y: {$springValues.y.toFixed(0)}</button
							>
						</div>
					</div>

					<div
						class="flex flex-1 flex-col items-center justify-center gap-y-2 rounded-md border border-transparent transition hover:border-neutral-200 hover:bg-white/5"
					>
						<IconVike />
						<p class="text-lg">Vike</p>
					</div>
				</div>
			</Transition>

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
	</div></Slide
>

<Slide>
	<LayoutCenter>
		<Action
			do={() => (lastSlidePointsVisible[0] = true)}
			undo={() => (lastSlidePointsVisible[0] = false)}
		/>
		<Action
			do={() => (lastSlidePointsVisible[1] = true)}
			undo={() => (lastSlidePointsVisible[1] = false)}
		/>
		<Action
			do={() => (lastSlidePointsVisible[2] = true)}
			undo={() => (lastSlidePointsVisible[2] = false)}
		/>
		<Action
			do={() => (lastSlidePointsVisible[3] = true)}
			undo={() => (lastSlidePointsVisible[3] = false)}
		/>
		<Action
			do={() => (lastSlidePointsVisible[4] = true)}
			undo={() => (lastSlidePointsVisible[4] = false)}
		/>
		<div class="flex flex-col gap-y-10">
			<p class="text-xl opacity-50">Key Points for this Webinar</p>
			<H1Title text="What is OSS?" visible={lastSlidePointsVisible[0]} />
			<H1Title text="Impact" visible={lastSlidePointsVisible[1]} />
			<H1Title text="How you can Contribute" visible={lastSlidePointsVisible[2]} />
			<H1Title text="The Culture" visible={lastSlidePointsVisible[3]} />
			<H1Title
				text="⭐️ How it can make you better engineers ⭐️"
				visible={lastSlidePointsVisible[4]}
			/>
		</div>
	</LayoutCenter>
</Slide>
