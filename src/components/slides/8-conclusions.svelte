<script lang="ts">
	import { Slide } from '@animotion/core'
	import H1Title from '../h1-title.svelte'
	import LayoutCenter from '../layouts/layout-center.svelte'
	import { IconNextJSLight, IconReactLight, IconSolidJSDark, IconVike } from '@/assets/icons'
	import { ImageNestedLayoutsThanking } from '@/assets/images'

	let h1Visibility = $state<boolean[]>([])
</script>

<Slide
	in={() => {
		h1Visibility[0] = true
	}}
	out={() => {
		h1Visibility[0] = false
	}}
	animate
>
	<LayoutCenter>
		<H1Title text="How I personally got into Open Source" visible={h1Visibility[0]} />

		<div class="h-10"></div>

		<div class="flex flex-col items-center gap-y-2 text-xl text-neutral-400">
			<p class="flex items-center gap-x-2">
				Hated <IconNextJSLight width={40} height={40} /> NextJS and <IconReactLight
					width={40}
					height={40}
				/> React
			</p>
		</div>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter>
		<h1>How I personally got into Open Source</h1>

		<div class="h-10"></div>

		<div class="flex flex-col items-center gap-y-2 text-xl text-neutral-400">
			<p class="flex items-center gap-x-2">
				Hated <IconNextJSLight width={40} height={40} /> NextJS and <IconReactLight
					width={40}
					height={40}
				/> React
			</p>
			<p class="flex items-center gap-x-2">
				I looked for alternatives and found <IconVike width={40} height={40} /> Vike and <IconSolidJSDark
					width={40}
					height={40}
				/> SolidJS
			</p>
		</div>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter>
		<h1>How I personally got into Open Source</h1>

		<div class="h-10"></div>

		<div class="flex flex-col items-center gap-y-2 text-xl text-neutral-400">
			<p class="flex items-center gap-x-2">
				Hated <IconNextJSLight width={40} height={40} /> NextJS and <IconReactLight
					width={40}
					height={40}
				/> React
			</p>
			<p class="flex items-center gap-x-2">
				I looked for alternatives and found <IconVike width={40} height={40} /> Vike and <IconSolidJSDark
					width={40}
					height={40}
				/> SolidJS
			</p>
			<p class="flex items-center gap-x-2">
				It was <b>⚡️ fast</b> and the devx was almost perfect.
			</p>

			<img
				src="https://i.ytimg.com/vi/l0kHyQBs69M/maxresdefault.jpg"
				alt=""
				class="h-48 overflow-hidden rounded-md"
			/>
		</div>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter>
		<h1>How I personally got into Open Source</h1>

		<div class="h-10"></div>

		<div class="flex flex-col items-center gap-y-2 text-xl text-neutral-400">
			<p class="flex items-center gap-x-2">
				Hated <IconNextJSLight width={40} height={40} /> NextJS and <IconReactLight
					width={40}
					height={40}
				/> React
			</p>
			<p class="flex items-center gap-x-2">
				I looked for alternatives and found <IconVike width={40} height={40} /> Vike and <IconSolidJSDark
					width={40}
					height={40}
				/> SolidJS
			</p>
			<p class="flex items-center gap-x-2">
				It was <b>⚡️ fast</b> and the devx was almost perfect.
			</p>
			<p class="flex items-center gap-x-2">
				I went to the GitHub issues, discussed it with the maintainer. And he got me to implement it
				for `vike-solid` so I made a pull request.
			</p>

			<img
				src={ImageNestedLayoutsThanking}
				alt="nested layouts thank twitter"
				class="h-96 overflow-hidden rounded-xl"
			/>
		</div>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter>
		<h1>How I personally got into Open Source</h1>

		<div class="h-10"></div>

		<div class="flex flex-col items-center gap-y-2 text-xl text-neutral-400">
			<p class="flex items-center gap-x-2">
				Hated <IconNextJSLight width={40} height={40} /> NextJS and <IconReactLight
					width={40}
					height={40}
				/> React
			</p>
			<p class="flex items-center gap-x-2">
				I looked for alternatives and found <IconVike width={40} height={40} /> Vike and <IconSolidJSDark
					width={40}
					height={40}
				/> SolidJS
			</p>
			<p class="flex items-center gap-x-2">
				It was <b>⚡️ fast</b> and the devx was almost perfect.
			</p>
			<p class="flex items-center gap-x-2">
				I went to the GitHub issues, discussed it with the maintainer. And he got me to implement it
				for `vike-solid` so I made a pull request.
			</p>
			<p class="flex items-center gap-x-2">
				I loved Vike so much, I started my own open source project: <a
					target="_blank"
					href="https://github.com/Blankeos/solid-launch"
					class="text-blue-500 underline">solid-launch</a
				>
			</p>
		</div>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter>
		<h1>How I personally got into Open Source</h1>

		<div class="h-10"></div>

		<div class="flex flex-col items-center gap-y-2 text-xl text-neutral-400">
			<p class="flex items-center gap-x-2">
				Hated <IconNextJSLight width={40} height={40} /> NextJS and <IconReactLight
					width={40}
					height={40}
				/> React
			</p>
			<p class="flex items-center gap-x-2">
				I looked for alternatives and found <IconVike width={40} height={40} /> Vike and <IconSolidJSDark
					width={40}
					height={40}
				/> SolidJS
			</p>
			<p class="flex items-center gap-x-2">
				It was <b>⚡️ fast</b> and the devx was almost perfect.
			</p>
			<p class="flex items-center gap-x-2">
				I went to the GitHub issues, discussed it with the maintainer. And he got me to implement it
				for `vike-solid` so I made a pull request.
			</p>
			<p class="flex items-center gap-x-2">
				After that Vike was perfect, I started my own open source project: <a
					target="_blank"
					href="https://github.com/Blankeos/solid-launch"
					class="text-blue-500 underline">solid-launch</a
				>
			</p>

			<p>
				As for <b>spring-solid</b>, I actually just got stuck trying to build
				<a
					target="_blank"
					href="https://spend-snap.carlotaleon.net/collations/svkev6jst2og8u6dnbvqs4u0"
					class="text-blue-500 underline">this</a
				>.
			</p>
		</div>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter>
		<img
			src="https://c8.alamy.com/comp/D01K4H/horse-with-old-fashioned-cart-in-the-countryside-from-portugal-D01K4H.jpg"
			alt=""
			class="h-96 overflow-hidden rounded-xl"
		/>

		<div class="h-10"></div>
		<div class="mt-2 text-2xl">Contribute to Open Source before building</div>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter>
		<img
			src="https://c8.alamy.com/comp/D01K4H/horse-with-old-fashioned-cart-in-the-countryside-from-portugal-D01K4H.jpg"
			alt=""
			class="h-96 overflow-hidden rounded-xl"
		/>

		<div class="h-10"></div>

		<div class="mt-2 text-2xl line-through">Contribute to Open Source before building</div>
		<div class="mt-2 text-2xl">Build first, then contribute to open source.</div>
	</LayoutCenter>
</Slide>

<Slide animate>
	<LayoutCenter>
		After this talk, I want you to.
		<div class="h-10"></div>
		<img src="https://media1.tenor.com/m/y2JXkY1pXkwAAAAC/cat-computer.gif" alt="" />

		<div class="h-10"></div>

		<div class="text-2xl">Build build build</div>
	</LayoutCenter>
</Slide>
