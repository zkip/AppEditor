<script>
	import { onMount } from "svelte";
	import { getExports, getExport, load, setup } from "$utils/module_umd";

	let root;

	onMount(() => {
		setup(root);

		async function start() {
			await load("element-ui", "http://localhost:3006");
			console.log(getExports("element-ui"));
		}

		start();
	});
</script>

<div bind:this={root} />
