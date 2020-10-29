<script>
	import { onMount } from "svelte";
	import { getExport, getExports, load, setup } from "@/bootstrap/module_es";
	import react from "react";
	import reactDOM from "react-dom";
	import { listen } from "$utils/fn";

	let container, container_ant;

	const case1 = async function start() {
		await load("packages/antd");
		const antd = getExport("antd");
		console.log(antd);

		const { Button, DatePicker } = antd;

		const DatePickerRC = react.createElement(DatePicker);
		reactDOM.render(DatePickerRC, container_ant);

		listen("mousemove")(({ clientX, clientY }) => {
			// const BoxRC = react.createElement(Box, {
			// 	width: clientX,
			// 	height: clientY,
			// });
			// reactDOM.render(BoxRC, container);
			const ButtonRC = react.createElement(Button, {
				children: [clientX, clientY].join("-"),
				onClick: () => {
					console.log("Yah.");
				},
			});
			reactDOM.render(ButtonRC, container_ant);
		});
	};

	const case2 = async function start() {
		await load("packages/element-ui");
		const element = getExports("packages/element-ui");
		console.log(element, "===");
	};

	onMount(() => {
		const host = document.querySelector("head");
		setup(host);

		case2();
		// case1();
	});
</script>

<style>
	.box {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: auto 1fr;
		border: 1px solid rebeccapurple;
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
