<script lang="ts">
	import '@/styles/app.css'
	import { Toaster } from 'svelte-sonner'

	let { children } = $props()
</script>

<svelte:head>
	<title>My OSS Talk</title>
</svelte:head>

{@render children()}
<Toaster />
