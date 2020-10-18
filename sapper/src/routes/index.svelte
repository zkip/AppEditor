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
</style>

<!-- <Outline {data} /> -->

<span>{$data.state.payloads.list.length}</span>
