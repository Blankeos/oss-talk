<script lang="ts">
	import { Slide, Transition } from '@animotion/core'
	import LayoutCenter from '../layouts/layout-center.svelte'
	import H1Title from '../h1-title.svelte'
	import {
		IconArrowRightOutline,
		IconFirebase,
		IconPostHog,
		IconSupabase,
		IconSupabaseDark
	} from '@/assets/icons'
	import IconWithLabel from '../icon-with-label.svelte'
	import MacWindow from '../mac-window.svelte'
	// import Media from '../media.svelte'

	let slideH1Visibility = $state<boolean[]>([])
</script>

<Slide
	animate
	class="h-full w-full"
	in={() => {
		slideH1Visibility[0] = true
	}}
	out={() => {
		slideH1Visibility[0] = false
	}}
>
	<LayoutCenter>
		<H1Title id="slide-5-h1" text="Impact of Open Source" visible={slideH1Visibility[0]} class="" />
	</LayoutCenter>
</Slide>

<Slide
	class="h-full w-full"
	in={() => {
		slideH1Visibility[1] = true
	}}
	animate
>
	<LayoutCenter>
		<H1Title
			id="slide-5-h1"
			text="Healthy Competition"
			visible={slideH1Visibility[1]}
			class="absolute top-16"
		/>

		<div class="flex gap-x-4">
			<div class="flex flex-col items-center gap-y-2">
				<img
					src="https://miro.medium.com/v2/resize:fit:1400/1*uN09T2NkQFtpUUKD0TWprQ.jpeg"
					alt="autodesk maya"
					class="h-64"
				/>
				<p class="text-xl">Autodesk Maya</p>
				<p class="text-base opacity-50">$1,245/year for 1 user</p>
			</div>
		</div>
	</LayoutCenter>
</Slide>

<Slide class="h-full w-full" animate>
	<LayoutCenter>
		<H1Title id="slide-5-h1" text="Healthy Competition" visible={true} class="absolute top-16" />

		<div class="flex gap-x-4">
			<div class="flex flex-col items-center gap-y-2">
				<img
					src="https://miro.medium.com/v2/resize:fit:1400/1*uN09T2NkQFtpUUKD0TWprQ.jpeg"
					alt="autodesk maya"
					class="h-64"
				/>
				<p class="text-xl">Autodesk Maya</p>
				<p class="text-base opacity-50">$1,245/year for 1 user</p>
			</div>
			<div class="flex flex-col items-center gap-y-2">
				<img
					src="https://imag.malavida.com/mvimgbig/download-fs/cinema-4d-studio-11354-1.jpg"
					alt="cinema 4d"
					class="h-64"
				/>
				<p class="text-xl">Cinema 4D</p>
				<p class="text-base opacity-50">$859.68/year</p>
			</div>
		</div>
	</LayoutCenter>
</Slide>

<Slide class="h-full w-full" animate>
	<LayoutCenter>
		<H1Title id="slide-5-h1" text="Healthy Competition" visible={true} class="absolute top-16" />

		<div class="flex gap-x-4">
			<div class="flex flex-col items-center gap-y-2">
				<img
					src="https://miro.medium.com/v2/resize:fit:1400/1*uN09T2NkQFtpUUKD0TWprQ.jpeg"
					alt="autodesk maya"
					class="h-64"
				/>
				<p class="text-xl">Autodesk Maya</p>
				<p class="text-base opacity-50">$1,245/year for 1 user</p>
			</div>
			<div class="flex flex-col items-center gap-y-2">
				<img
					src="https://imag.malavida.com/mvimgbig/download-fs/cinema-4d-studio-11354-1.jpg"
					alt="cinema 4d"
					class="h-64"
				/>
				<p class="text-xl">Cinema 4D</p>
				<p class="text-base opacity-50">$859.68/year</p>
			</div>
			<div class="flex flex-col items-center gap-y-2">
				<img
					src="https://www.blender.org/wp-content/uploads/2019/07/vse_custom_grade-1280x720.jpg?x12104"
					alt="blender"
					class="h-64"
				/>
				<p class="text-xl">Blender</p>
				<p class="text-base opacity-50">FREE forever</p>
			</div>
		</div>
	</LayoutCenter>
</Slide>

<Slide
	class="h-full w-full"
	in={() => {
		slideH1Visibility[2] = true
	}}
	animate
>
	<LayoutCenter>
		<H1Title
			id="slide-5-h1"
			text="No Vendor-lock"
			visible={slideH1Visibility[2]}
			class="absolute top-16"
		/>

		<div class="flex flex-col gap-y-5">
			<div class="flex items-center gap-x-8">
				<div class="flex flex-col items-center gap-y-2 opacity-30">
					<IconFirebase width={64} height={64} />
					<p class="text-xl">Firebase</p>
				</div>
				<IconArrowRightOutline />
				<div class="flex flex-col items-center gap-y-2">
					<IconSupabaseDark width={64} height={64} />
					<p class="text-xl">Supabase</p>
				</div>
			</div>
		</div>

		<div class="h-10"></div>

		<MacWindow class="h-[600px] w-full max-w-5xl">
			<iframe
				src="https://turso.tech/"
				title="W3Schools Free Online Web Tutorials"
				class="h-full w-full"
			>
			</iframe>
		</MacWindow>
	</LayoutCenter>
</Slide>
