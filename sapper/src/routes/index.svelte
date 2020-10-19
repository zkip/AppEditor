<script>
	import Outline from "@/components/Outline";
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import { data } from "@/store/outline";

	onMount(() => {
		// data.set([2, 3, 4, 4, 5, 8]);
	});
</script>

<style>
	.box {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: auto 1fr;
	}
	.rule {
		display: grid;
		gap: 8px;
		grid-template-columns: 16px;
		grid-auto-rows: 16px;
		margin: 4px;
		font-size: 12px;
	}
	.unit {
		border: 1px solid rebeccapurple;
		box-sizing: border-box;
		display: grid;
		place-content: center;
	}
</style>

<div class="box">
	<div class="rule">
		{#each $data.state.payloads.list as payload, idx}
			<div class="unit">{idx}</div>
		{/each}
	</div>
	<Outline {data} class="SDF" />
</div>

<!-- <span>{$data.state.payloads.list.length}</span> -->
