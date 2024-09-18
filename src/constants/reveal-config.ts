export const revealConfig: Reveal.Options = {
	// bring your own layout
	disableLayout: true,
	history: true,
	transition: 'slide',
	controls: false,
	progress: true,
	// center slides on the screen
	center: true,
	hideInactiveCursor: true,

	/*
		Shows current slide number in the URL and
		pushes the slide change to the browser history
		for listening to the `hashchange` event used
		to update the store values.
	*/
	slideNumber: true
}
