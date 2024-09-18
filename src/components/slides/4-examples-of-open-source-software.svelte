<script lang="ts">
	import { Slide } from '@animotion/core'
	import LayoutCenter from '../layouts/layout-center.svelte'
	import H1Title from '../h1-title.svelte'
	import {
		IconBlender,
		IconBrave,
		IconChromium,
		IconFirefox,
		IconGimp,
		IconGodot,
		IconMySQL,
		IconNextJSLight,
		IconPostgreSQL,
		IconReactLight,
		IconSentry,
		IconSolidJSLight,
		IconSupabase,
		IconSvelte,
		IconVike
	} from '@/assets/icons'
	import IconWithLabel from '../icon-with-label.svelte'

	let h1Visible = $state(false)
</script>

<Slide
	class="h-full w-full"
	in={() => {
		h1Visible = true
	}}
	out={() => {
		h1Visible = false
	}}
>
	<LayoutCenter>
		<H1Title text="Examples of Open Source Software" visible={h1Visible}></H1Title>
	</LayoutCenter>
</Slide>

<Slide>
	<LayoutCenter>
		<div class="flex flex-col items-center gap-y-2">
			<!-- 1st circle -->
			<p class="text-lg">Open Source Software</p>
			<div class="aspect-square rounded-full border-2 border-white p-10">
				<!-- first inner circle -->
				<div class="flex flex-col items-center gap-y-2">
					<p class="text-lg">Software</p>
					<div class="flex gap-5 rounded-full border-2 border-white p-7">
						<IconWithLabel
							Icon={IconBlender}
							text="Blender"
							iconProps={{ width: 50, height: 50 }}
						/>
						<IconWithLabel Icon={IconGimp} text="Gimp" iconProps={{ width: 50, height: 50 }} />
						<IconWithLabel Icon={IconGodot} text="Godot" iconProps={{ width: 50, height: 50 }} />
						<IconWithLabel
							Icon={IconFirefox}
							iconProps={{ width: 50, height: 50 }}
							text="Firefox"
						/>
						<IconWithLabel
							Icon={IconChromium}
							text="Chromium"
							iconProps={{ width: 50, height: 50 }}
						/>
						<IconWithLabel Icon={IconBrave} text="Brave" iconProps={{ width: 50, height: 50 }} />
					</div>
				</div>

				<div class="h-10"></div>

				<!-- second inner circle -->
				<div class="flex flex-col items-center gap-y-2">
					<p class="text-lg">Dev Tools</p>
					<div class="flex gap-5 rounded-full border-2 border-white p-7">
						<IconWithLabel
							Icon={IconPostgreSQL}
							text="PostgreSQL"
							iconProps={{ width: 50, height: 50 }}
						/>
						<IconWithLabel Icon={IconMySQL} iconProps={{ width: 50, height: 50 }} text="MySQL" />
						<IconWithLabel
							Icon={IconSupabase}
							iconProps={{ width: 50, height: 50 }}
							text="Supabase"
						/>
						<IconWithLabel Icon={IconSentry} iconProps={{ width: 50, height: 50 }} text="Sentry" />
						<IconWithLabel
							Icon={IconReactLight}
							iconProps={{ width: 50, height: 50 }}
							text="React"
						/>
						<IconWithLabel
							Icon={IconNextJSLight}
							iconProps={{ width: 50, height: 50 }}
							text="NextJS"
						/>
						<IconWithLabel Icon={IconSvelte} iconProps={{ width: 50, height: 50 }} text="Svelte" />
						<IconWithLabel
							Icon={IconSolidJSLight}
							iconProps={{ width: 50, height: 50 }}
							text="SolidJS"
						/>
						<!-- <IconWithLabel Icon={IconGimp} text="Gimp" iconProps={{ width: 50, height: 50 }} /> -->
						<!-- <IconWithLabel Icon={IconGodot} text="Godot" iconProps={{ width: 50, height: 50 }} /> -->
					</div>
				</div>
			</div>
		</div>
	</LayoutCenter>
</Slide>
