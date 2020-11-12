<script>
	import vue from "vue";
	import { beforeUpdate, onMount } from "svelte";
	import * as app from "@sapper/app";
	import { getExport, getExports, load, setup } from "@/bootstrap/module_umd";
	import { sleep } from "$utils/async";

	export let props = {};
	export let host = "http://localhost:3006";
	export let module_name = "element-ui";
	export let exported = "Card";

	let component;
	let instance;

	let root;
	let load_process;
	let is_server = isServer();

	function isServer() {
		try {
			window;
			return false;
		} catch (err) {
			return true;
		}
	}

	if (!is_server) {
		const host = document.querySelector("head");
		setup(host);
		load_process = load("element-ui", "http://localhost:3006").then(() => {
			getExported();
		});
	}

	console.log($$slots);

	beforeUpdate(async () => {
		console.log(root, "+++++++++++++++", is_server);
		if (instance) {
			instance.$data.props = props;
		}
	});

	function getExported() {
		const module = getExports(module_name);
		component = module[exported];
	}

	async function start() {
		console.log("=======");
		const { name } = component;

		instance = new vue({
			components: {
				[name]: component,
			},
			data: {
				props: {
					...props,
				},
				data: {
					time: 0,
				},
			},
			render(h) {
				return h(
					name,
					{
						props: { ...this.$data.props },
					},
					["SDF", this.$data.data.time]
				);
			},
		});

		instance.$mount(root);

		// setInterval(() => {
		// 	instance.$data.data.time++;
		// }, 100);
	}

	onMount(async () => {
		await load_process;
		await start();
	});
</script>

<div bind:this={root} />
