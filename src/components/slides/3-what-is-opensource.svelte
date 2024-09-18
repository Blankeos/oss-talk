<script>
	import { Slide, Transition } from '@animotion/core'
	import H1Title from '../h1-title.svelte'
	import FlickeringGrid from '../flickering-grid.svelte'
	import LayoutCenter from '../layouts/layout-center.svelte'
	import { IconGit, IconGNU, IconLinux, IconPrinter } from '@/assets/icons'
	import { Action } from '@animotion/core'

	import {
		ImageFreeSoftwareFoundation,
		ImageLinusTorvald,
		ImageRichardStallman
	} from '@/assets/images'

	let h1Visible = $state(false)

	let sumupVisible = $state([false, false, false])
</script>

<Slide
	animate
	class="h-full w-full"
	in={() => {
		h1Visible = true
	}}
>
	<LayoutCenter>
		<H1Title
			id="title-h1"
			text="What is Open Source Software?"
			visible={h1Visible}
			class="absolute top-20"
		/>
		<FlickeringGrid
			class=""
			squareSize={8}
			gridGap={6}
			color="#4ade80"
			maxOpacity={0.5}
			flickerChance={0.1}
			height={300}
			width={800}
		/>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter class="flex flex-row gap-x-2">
		<div class="flex flex-col items-center gap-y-2">
			<img
				src="https://media1.tenor.com/m/2nKSTDDekOgAAAAC/coding-kira.gif"
				alt="gif1"
				class="h-64 rounded-md"
			/>
			<p class="text-lg">Source code is <b>publicly</b> available</p>
		</div>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter class="flex flex-row gap-x-2">
		<div class="flex flex-col items-center gap-y-2">
			<img src="https://media1.tenor.com/m/2nKSTDDekOgAAAAC/coding-kira.gif" alt="gif1" />
			<p class="text-lg">Source code is <b>publicly</b> available</p>
		</div>

		<div class="flex flex-col items-center gap-y-2">
			<img
				src="https://media1.tenor.com/m/LdtNWzSTZcYAAAAC/real-estate-its-free-real-estate.gif"
				alt="gif1"
				class="h-64 rounded-md"
			/>
			<p class="text-lg">Mostly <b>free</b></p>
		</div>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter class="flex flex-row gap-x-2">
		<div class="relative" id="icon-printer">
			<div class="pointer-events-none absolute inset-0 animate-ping rounded-full bg-white/10"></div>
			<IconPrinter
				id="icon-printer"
				width={200}
				height={200}
				class="cursor-not-allowed transition hover:scale-105 active:scale-95"
			/>
		</div>
		<Transition>
			<img
				src="https://media1.tenor.com/m/DUHB3rClTaUAAAAC/no-pernalonga.gif"
				alt="no bugs"
				class="select-none"
			/>
		</Transition>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter class="flex flex-row gap-x-2">
		<div class="relative" id="icon-printer">
			<div class="flex flex-col items-center gap-y-2">
				<img src={ImageRichardStallman} alt="richard stallman" class="h-72" />
				<p class="text-3xl">Richard Stallman</p>
			</div>
		</div>

		<Transition class="absolute right-40 top-40 ">
			<div class="flex flex-col items-center gap-y-2">
				<div class="rounded-md bg-white p-2 text-black">
					<IconGNU width="200px" height="200px" />
				</div>
				<p class="text-base">GNU</p>
			</div>
		</Transition>

		<Transition class="absolute bottom-40 right-40">
			<div class="flex flex-col items-center gap-y-2">
				<div class="rounded-md bg-white p-2 text-black">
					<img src={ImageFreeSoftwareFoundation} alt="free software foundation" class="h-12" />
				</div>
				<p class="text-base">Free Software Foundation</p>
			</div>
		</Transition>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter>
		<div class="flex flex-col items-center gap-y-2">
			<div class="h-64 w-64 overflow-hidden rounded-md object-cover object-center">
				<img src={ImageLinusTorvald} alt="linus torvald" />
			</div>
			<p class="text-3xl">Linus Torvald</p>
		</div>

		<Transition class="absolute right-40 top-40 ">
			<div class="flex flex-col items-center gap-y-2">
				<IconLinux width="150px" height="150px" />
				<p class="text-base">Linux</p>
			</div>
		</Transition>

		<Transition class="absolute bottom-40 right-40 ">
			<div class="flex flex-col items-center gap-y-2">
				<IconGit width="150px" height="150px" />
				<p class="text-base">Git</p>
			</div>
		</Transition>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter>
		<Action do={() => (sumupVisible[0] = true)} undo={() => (sumupVisible[0] = false)} />
		<!-- <Action do={() => (sumupVisible[1] = true)} undo={() => (sumupVisible[1] = false)} /> -->
		<H1Title text="✨Freedom✨" visible={sumupVisible[0]} />
		<!-- <H1Title text="" visible={sumupVisible[1]} /> -->
	</LayoutCenter>
</Slide>
<!-- <div class="pointer-events-none opacity-40">
		<DotPattern
			width={20}
			height={20}
			cx={1}
			cy={1}
			cr={1}
			class={cn('[mask-image:radial-gradient(circle,white,transparent,transparent)] ')}
		/>
	</div> -->

<!-- class={cn('[mask-image:radial-gradient(circle, rgba(2,0,36,1) 0%, white 100%)] ')} -->
<!-- replaced by radial graidnet. -->

<!-- <img src="https://media1.tenor.com/m/LdtNWzSTZcYAAAAC/real-estate-its-free-real-estate.gif" /> -->
