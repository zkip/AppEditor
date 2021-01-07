<script>
	import { onMount } from "svelte";

	let is_show = false;

	onMount(() => {
		setTimeout(() => {
			is_show = true;
		}, 1000);
	});
</script>

<h1>Hello World!</h1>
<h1 flag="Jpx">B1</h1>
{#if is_show}
	<h2 flag="Cxn">B2</h2>
{/if}
<h3>B3</h3>
<label> <span>username</span> <input type="text" /> </label>
