<script lang="ts">
	import { Slide, Transition } from '@animotion/core'
	import LayoutCenter from '../layouts/layout-center.svelte'
	import H1Title from '../h1-title.svelte'
	import {
		ImageGitHubIssues,
		ImageGitHubPRs,
		ImageIsagiTheresSomethingWrong
	} from '@/assets/images'
	import FlickeringGrid from '../flickering-grid.svelte'

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
		<FlickeringGrid
			class=""
			squareSize={12}
			gridGap={6}
			color="#4ade80"
			maxOpacity={0.5}
			flickerChance={0.1}
			height={100}
			width={800}
		/>
		<H1Title visible={h1Visibility[0]} text="How you can Contribute to Open Source" class="" />
		<p class="relative top-10 text-center text-sm text-neutral-400">Open Source 101</p>
	</LayoutCenter>
</Slide>

<Slide>
	<LayoutCenter>
		<div class="flex flex-row gap-x-10">
			<Transition>
				<div class="flex flex-col items-center gap-y-5 transition hover:scale-105">
					<img
						src={ImageGitHubIssues}
						alt="github issues"
						class="h-96 overflow-hidden rounded-2xl shadow"
					/>
					<p class="text-2xl font-bold">Issues</p>
					<p class="text-lg text-neutral-400">Describe issues/bugs/feature requests</p>
				</div>
			</Transition>

			<div class="h-[500px] w-[1px] bg-white/20"></div>

			<Transition>
				<div class="flex flex-col items-center gap-y-5 transition hover:scale-105">
					<img
						src={ImageGitHubPRs}
						alt="github prs"
						class="h-96 overflow-hidden rounded-2xl shadow"
					/>
					<p class="text-2xl font-bold">Pull Requests</p>

					<p class="text-lg text-neutral-400">Write code.</p>
				</div>
			</Transition>
		</div>

		<div class="h-20"></div>
		<FlickeringGrid
			class=""
			squareSize={12}
			gridGap={6}
			color="#4ade80"
			maxOpacity={0.5}
			flickerChance={0.1}
			height={100}
			width={800}
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
>
	<div class="flex flex-col items-start justify-start p-16">
		<H1Title visible={h1Visibility[1]} text="Writing Issues" />

		<div class="h-16"></div>

		<div class="flex flex-col items-start gap-y-10 text-neutral-400">
			<p class="text-2xl">📝 Issues become "tasks" for the maintainers.</p>
			<p class="text-2xl">🔍 It helps <b>search engine coverage</b> on the issue.</p>
			<p class="text-2xl">✏️ Minimal Reproduction Link (nice-to-have).</p>
			<p class="text-2xl">
				💡 Everyone should write be able to write issues. It's the bare minimum.
			</p>

			<p class="text-lg">
				Demo: <a
					href="https://github.com/wobsoriano/solid-sonner/issues"
					class=" text-blue-500 hover:underline"
					target="_blank">https://github.com/wobsoriano/solid-sonner/issues</a
				>
			</p>
		</div>

		<img
			src={ImageIsagiTheresSomethingWrong}
			alt=""
			class="absolute right-32 top-20 h-96 rounded-xl"
		/>
	</div>
</Slide>

<Slide
	in={() => {
		h1Visibility[2] = true
	}}
	out={() => {
		h1Visibility[2] = false
	}}
>
	<div class="flex flex-col items-start justify-start p-16">
		<H1Title visible={h1Visibility[2]} text="Writing Pull Requests" />

		<div class="h-16"></div>

		<div class="flex flex-col items-start gap-y-10 text-neutral-400">
			<p class="text-2xl">🔧 Address the issues with actual code.</p>
			<p class="text-2xl">🔍 It helps people know that an issue is being worked on.</p>
			<p class="text-2xl">🤌 Just make sure your changes are small</p>
			<p class="text-2xl">📃 Check `CONTRIBUTING.md` if possible.</p>

			<p class="text-lg">
				Demo 1: <a
					href="https://github.com/wobsoriano/solid-sonner/pull/16"
					class=" text-blue-500 hover:underline"
					target="_blank">https://github.com/wobsoriano/solid-sonner/pull/16</a
				>
			</p>
			<p class="text-lg">
				Demo 2: <a
					href="https://github.com/solidjs-community/solid-primitives/pull/629"
					class=" text-blue-500 hover:underline"
					target="_blank">https://github.com/solidjs-community/solid-primitives/pull/629</a
				>
			</p>
		</div>

		<img
			src="https://media1.tenor.com/m/y2JXkY1pXkwAAAAC/cat-computer.gif"
			alt=""
			class="absolute right-32 top-20 h-96 rounded-xl"
		/>
	</div>
</Slide>
