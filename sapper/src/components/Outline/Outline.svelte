<script>
	import { onDestroy, onMount } from "svelte";
	import { get, writable } from "svelte/store";
	import { listen } from "@/utils/fn";
	import { config } from "./types";

	export let data = config();
	let lineheight = 24;

	let item = {};
	let items = [];

	let payloads;
	let Item;
	let top_node;

	let cleaners = [];

	$: payloads = $data.payloads;
	$: Item = $data.item_type;

	onMount(() => {
		console.log($data, "@@@@@@");
		const clean_drag = listen(
			"mousedown",
			top_node
		)(({ clientX, clientY }) => {
			const bound = top_node.getBoundingClientRect();
			const ix = clientX;
			const iy = clientY;

			const init_index = ((iy - bound.y) / lineheight) >> 0;

			console.log(init_index, "--");

			const init_payload = payloads[init_index];

			payloads.splice(init_index, 1);
			data.set($data);

			const clean_move = listen("mousemove")(({ clientX, clientY }) => {
				const dx = clientX - ix;
				const dy = clientY - iy;
				console.log(dx, dy);
			});

			const clean_up = listen("mouseup")(() => {
				clean_move();
				clean_up();
			});
		});
		cleaners.push(clean_drag);
	});

	onDestroy(() => {
		cleaners.map((cleaner) => cleaner());
	});
</script>

<style scoped>
	.Outline {
		user-select: none;
	}
	.node .item {
		height: 24px;
		border: 1px solid pink;
		box-sizing: border-box;
	}
</style>

<div class="Outline" bind:this={top_node}>
	{#each payloads.list as { props, level }, index}
		<div class="node" bind:this={items[index]}>
			<div class="item" style="padding-left: {level * 20}px">
				<svelte:component this={Item} {...props} />
			</div>
		</div>
	{/each}
</div>
