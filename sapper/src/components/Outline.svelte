<script>
	import { onMount } from "svelte";
	import { each } from "svelte/internal";
	import { get, writable } from "svelte/store";

	export let data = writable(config());

	let item = {};
	let items = [];

	let payloads;

	$: payloads = $data.payloads;

	onMount(() => {
		console.log(items.length, "---");
	});

	export function config({ type, payloads = [] } = {}) {
		return { type, payloads };
	}
</script>

{#each payloads as { props: { name } }, index}
	<div bind:this={items[index]}>{name},--{index}</div>
{/each}
