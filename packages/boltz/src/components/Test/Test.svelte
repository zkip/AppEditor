<script>
	import { onMount } from "svelte";

	export let i = 0;

	onMount(() => {
		setInterval(() => {
			i++;
		}, 1000);
	});
</script>

<div>count: {i}.</div>
<div>ddd</div>
