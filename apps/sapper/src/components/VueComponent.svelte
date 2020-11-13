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

	let default_slot;

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

	let slots = $$props.$$slots;
	let children = slots && accessChildren();

	function accessChildren() {
		return Object.entries(slots).reduce((r, [slot_name, slots_setup]) => {
			slots_setup.map((setup) => {
				r.push({ instance: setup($$props.$$scope), slot: slot_name });
			});
			return r;
		}, []);
	}

	if (!is_server) {
		const host = document.querySelector("head");
		setup(host);
		load_process = load("element-ui", "http://localhost:3006").then(() => {
			getExported();
		});
	}

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
				console.log("----------", slots, children);
				const children_processed = children.map(
					({ instance, slot }) => {
						instance.c();
						// const frag = document.createDocumentFragment();
						instance.m(null, frag);
						// console.log(frag, "--");
						// console.log(frag, slot, "=============");
						// const s = instance.m();
						// console.log(instance, slot, "@@@@@@@", s);
						// return {};
						// return h(() => document.createElement("h1"), {
						// 	slot,
						// });
						// return frag;
						return instance;
					}
				);
				console.log(children_processed, "@@@@@@@@@@@;");
				return h(
					name,
					{
						props: { ...this.$data.props },
					},
					[...children_processed]
				);
			},
		});

		instance.$mount(root);

		// setInterval(() => {
		// 	instance.$data.data.time++;
		// }, 100);
	}
	console.log($$props, "===============");

	onMount(async () => {
		await load_process;
		await start();
	});
</script>

<div bind:this={root} />

<!-- <slot bind:this={default_slot} /> -->
