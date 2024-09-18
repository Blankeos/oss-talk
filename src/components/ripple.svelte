<script lang="ts">
	type RippleProps = {
		mainCircleSize?: number
		mainCircleOpacity?: number
		numCircles?: number
	}

	let { mainCircleSize = 210, mainCircleOpacity = 0.24, numCircles = 8 }: RippleProps = $props()
</script>

<div
	class="absolute inset-0 flex items-center justify-center bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"
>
	{#each Array.from({ length: numCircles }) as _, i (i)}
		{@const size = mainCircleSize + i * 70}
		{@const opacity = mainCircleOpacity - i * 0.03}
		{@const animationDelay = `${i * 0.06}s`}
		{@const borderStyle = i === numCircles - 1 ? 'dashed' : 'solid'}
		{@const borderOpacity = 5 + i * 5}

		<div
			class={`absolute animate-ripple rounded-full border bg-white/25 shadow-xl [--i:${i}]`}
			style:width={`${size}px`}
			style:height="{size}px"
			style:opacity
			style:animationDelay
			style:borderStyle
			style:borderWidth="1px"
			style:borderColor="hsl(var(--foreground), {borderOpacity / 100})"
			style:top="50%"
			style:left="50%"
			style:transform="translate(-50%, -50%) scale(1)"
		></div>
	{/each}
	<!-- {Array.from({ length: numCircles }, (_, i) => {
      const size = mainCircleSize + i * 70;
      const opacity = mainCircleOpacity - i * 0.03;
      const animationDelay = `${i * 0.06}s`;
      const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
      const borderOpacity = 5 + i * 5;

      return (
        <div
          key={i}
          class={`absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:${i}]`}
          style={
            {
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay,
              borderStyle,
              borderWidth: "1px",
              borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)",
            } as CSSProperties
          }
        />
      );
    })} -->
</div>
