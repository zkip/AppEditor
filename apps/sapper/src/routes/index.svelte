<script>
	import { onMount } from "svelte";
	import { getExport, load, setup } from "@/bootstrap/module";
	import react from "react";
	import reactDOM from "react-dom";
	import { listen } from "$utils/fn";
	import { Button } from "antd";
	import { children } from "svelte/internal";

	let container, container_ant;

	onMount(() => {
		const host = document.querySelector("head");
		setup(host);

		console.log(Button, "=========");
		async function start() {
			await load("workspace/Box");
			const Box = getExport("Box");

			listen("mousemove")(({ clientX, clientY }) => {
				const BoxRC = react.createElement(Box, {
					width: clientX,
					height: clientY,
				});
				reactDOM.render(BoxRC, container);

				const ButtonRC = react.createElement(Button, {
					children: [clientX, clientY].join("-"),
					onClick: () => {
						console.log("Yah.");
					},
				});
				reactDOM.render(ButtonRC, container_ant);
			});
		}
		start();
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
	<div class="rule" />
	<div class="ant" bind:this={container_ant} />
	<div class="container" bind:this={container} />
</div>

<!-- <span>{$data.state.payloads.list.length}</span> -->
