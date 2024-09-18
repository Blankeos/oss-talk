<script>
	import { IconBlender, IconGithub, IconGitlab, IconGodot, IconSvelte } from '@/assets/icons'
	import { Action, Slide, Transition } from '@animotion/core'
	import FloatCircle from '../float-circle.svelte'
	import H1Title from '../h1-title.svelte'
	import LayoutCenter from '../layouts/layout-center.svelte'
	import Ripple from '../ripple.svelte'

	let visible = $state(false)
</script>

<Slide class="h-full w-full">
	<LayoutCenter>
		<Action
			do={() => {
				console.log('do1')
				visible = true
			}}
			undo={() => {
				console.log('undo1')
				visible = false
			}}
		/>
		<div class="h-16"></div>
		<H1Title text="Open Source Software" {visible} class="max-w-5xl text-6xl font-medium" />
		<div class="h-10"></div>
		<H1Title
			delay={0.2}
			text="Development and Contribution"
			{visible}
			class="max-w-5xl text-6xl font-medium"
		/>

		<div class="h-10"></div>

		<FloatCircle class="absolute left-20 top-40 z-10" size={100} scaleFromTo={[1.2, 1]}>
			<IconGithub width="60px" height="60px" />
		</FloatCircle>
		<FloatCircle
			delay={0.2}
			class="absolute left-[500px] top-[260px] z-10 bg-orange-900 bg-opacity-70"
			size={80}
		>
			<IconGitlab />
		</FloatCircle>
		<FloatCircle
			delay={0.4}
			class="absolute bottom-[260px] right-[400px] z-10 bg-blue-900 bg-opacity-80"
			size={60}
			scaleFromTo={[1.2, 1]}
		>
			<IconGodot width="40px" height="40px" />
		</FloatCircle>
		<FloatCircle
			delay={0.1}
			class="absolute bottom-[180px] left-[400px] z-10 bg-white bg-opacity-80"
			size={70}
		>
			<IconBlender width="40px" height="40px" />
		</FloatCircle>
		<FloatCircle
			delay={0.5}
			class="absolute right-[400px] top-[180px] z-10 bg-orange-800 bg-opacity-50"
			size={70}
		>
			<IconSvelte width="40px" height="40px" />
		</FloatCircle>
		<Transition>
			<p class="text-2xl">By Carlo 🤓👆</p>
		</Transition>
		<Transition>
			<p class="mt-2 flex items-center gap-x-1 text-base text-opacity-80">
				<span>⭐️ Fun Fact: This presentation was built with </span>
				<span> </span>
				<IconSvelte />
				<span> </span>
				<span>Svelte</span>
			</p>
		</Transition>
		<Ripple mainCircleSize={800} />
	</LayoutCenter>
</Slide>
