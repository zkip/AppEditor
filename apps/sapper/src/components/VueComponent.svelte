<script>
	import vue from "vue";
	import {
		beforeUpdate,
		onDestroy,
		onMount,
		afterUpdate,
		getContext,
	} from "svelte";
	import { get_current_component } from "svelte/internal";
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

	let self = get_current_component();

	function isServer() {
		try {
			window;
			return false;
		} catch (err) {
			return true;
		}
	}

	let slots = $$props.$$slots;
	// let children = slots && accessChildren();
	const scope = $$props.$$scope;

	// function accessChildren() {
	// 	return Object.entries(slots).reduce((r, [slot_name, slots_setup]) => {
	// 		slots_setup.map((_) => {
	// 			const { fragment, ctx, dirty } = self.$$;
	// 			console.log(fragment, "==");

	// 			r.push({
	// 				instance: fragment.c(ctx, dirty),
	// 				slot: slot_name,
	// 			});
	// 		});
	// 		return r;
	// 	}, []);
	// }

	if (!is_server) {
		vue.component("special-transfer", {
			name: "special-transfer",
			props: {
				element: {},
			},
			mounted() {
				this.$el.replaceWith(this.$props.element);
			},
			beoforeDestroy() {
				// console.log("-----------");
			},
			render(h) {
				return h("span");
			},
		});

		const host = document.querySelector("head");
		setup(host);
		load_process = load("element-ui", "http://localhost:3006").then(() => {
			getExported();
		});
	}

	beforeUpdate(async () => {
		// console.log(get_current_component(), "++++");

		// console.log(slots, $$slots, self.$$, "=======================");

		// console.log(scope, ")_)_)_)_)_)_)_");

		// children.map(({ instance }) => {
		// 	if ("p" in instance) {
		// 		instance.p(scope.ctx, true);
		// 	}
		// 	console.log(instance, "---");
		// });
		if (instance) {
			instance.$data.props = props;
			// instance.$data.children = children;
			// console.log(instance);
			// instance.$forceUpdate();
		}
	});

	afterUpdate(async () => {
		// console.log(
		// 	root,
		// 	slots,
		// 	children,
		// 	"++++++++afterUpdate+++++++",
		// 	is_server
		// );
	});

	function getExported() {
		const module = getExports(module_name);
		component = module[exported];
	}

	async function start() {
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
				const children_processed = Object.entries(slots).map(
					([name, setup]) => {
						const { ctx, dirty } = self.$$;
						const instance = setup.map((f) => f(scope.ctx));
						const slot = name;
						const fragment = instance[0];
						fragment.c();
						const frag = document.createDocumentFragment();
						fragment.m(frag);
						const vnode = h("special-transfer", {
							props: {
								element: frag,
							},
							slot,
						});

						// vnode.elm = frag.firstChild;

						return vnode;
					}
				);
				console.log(this, self, "@@@@@@@@@@@;", $$props);
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

	onMount(async () => {
		await load_process;
		await start();
	});
</script>

<style>
	.FFF {
		/* height: 50px; */
	}
</style>

<span>{JSON.stringify(props)}</span>
<div class="FFF" bind:this={root} />
<!-- <slot bind:this={default_slot} /> -->
