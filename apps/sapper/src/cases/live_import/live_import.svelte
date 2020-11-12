<script>
	import { onMount } from "svelte";
	import { getExport, getExports, load, setup } from "@/bootstrap/module_umd";
	import { listen } from "$utils/fn";
	import vue from "vue";
	import react from "react";
	import reactDOM from "react-dom";
	import { xhr } from "$utils/xhr";
	import { BSON } from "bsonfy";
	import { Base64 } from "js-base64";
	import VueComponent from "@/components/VueComponent";
	import { writable } from "svelte/store";

	let container, container_ant;

	let package_name = "";

	let shadow = "never";

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
		// console.log(element, "===");
		// const element = await import("element-ui");
		const { Button } = element;
		vue.component("Button", Button);
		// Object.entries(element).map(([name, component]) =>
		// 	vue.component(name, component)
		// );
		// const button = vue.createElement("Button");
		const ins = new vue({
			// propsData:
			render: (h) => h("Button", "sdfs"),
		});
		ins.$slots.default = ["Text"];
		console.log(ins, Button, "=====>");
		ins.$mount(container);
		// console.log({ vue }, "@@@@@@@@@@@@");
	};

	const case3 = async function () {
		await load("packages/antdv");
		const ant = getExports("packages/antdv");
		console.log(ant, "===");
		// const element = await import("element-ui");
		// const { Button } = ant;
		// vue.component("Button", Button);
		// Object.entries(element).map(([name, component]) =>
		// 	vue.component(name, component)
		// );
		// const button = vue.createElement("Button");
		// const ins = new vue({
		// 	// propsData:
		// 	render: (h) => h("Button", "sdfs"),
		// });
		// ins.$slots.default = ["Text"];
		// console.log(ins, Button, "=====>");
		// ins.$mount(container);
		// console.log({ vue }, "@@@@@@@@@@@@");
	};

	const case4 = async function () {
		console.log("case4 starting...");
		await load("element-ui", "http://localhost:3006");
		const { Card } = getExports("element-ui");

		vue.component("Card", Card);
		const ins = new vue({
			data: {
				props: {
					shadow: "always",
					j: 0,
				},
			},
			render(h) {
				const v = this.$data.props.j;
				return h(
					"Card",
					{
						props: {
							...this.$data.props,
						},
					},
					[
						`SDF${v}`,
						h("div", { slot: "header" }, "header"),
						"Jackie",
					]
				);
			},
		});
		ins.$mount(container);
		ins.$el.classList.add("container");
		ins.$data.props.j = 344;

		setInterval(() => {
			ins.$data.props.j++;
		}, 100);

		ins.$data.props.shadow = "hover";

		console.log(ins);
	};

	const case5 = async function () {
		console.log("case5 starting...");
	};

	onMount(() => {
		// const host = document.querySelector("head");
		// setup(host);

		// case5();
		// case4();
		// case3();
		// case2();
		// case1();

		addEventListener("click", () => {
			shadow = shadow === "always" ? "never" : "always";
		});
	});

	async function loadPackage() {
		console.log(package_name, "+++++");
		const pkg = await import(package_name);
		console.log(pkg, "@@");
	}
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

	:global(.container) {
		margin: 1em;
	}

	.VueComponent {
		padding: 1em;
	}
</style>

<div class="box">
	<div class="rule" />
	<div class="ant" bind:this={container_ant} />
	<div class="container" bind:this={container} />
	<input
		on:input={({ target }) => (package_name = target.value)}
		type="text" />
	<button on:click={loadPackage}>load</button>
</div>
<div class="VueComponent">
	<VueComponent props={{ shadow }}>
		<div slot="header">Header</div>
		<div>Body</div>
	</VueComponent>
</div>

<!-- <span>{$data.state.payloads.list.length}</span> -->
