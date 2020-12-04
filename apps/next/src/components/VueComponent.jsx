import { getExport, getExports, load, setup } from "@/bootstrap/module_umd";
import { useRef } from "react";
import { useEffect } from "react";
import vue from "vue";
import react from "react";
import reactDOM from "react-dom";
import { useCallback } from "react";

const isClient = () => !!process.browser;

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

export default function VueComponent({
	name,
	props = {},
	slots = {},
	...rest
}) {
	const root_ref = useRef();
	const refs = useRef();
	useEffect(() => {
		const root = root_ref.current;
		if (isClient && root) {
			let component;
			let instance;
			const host = document.querySelector("head");

			setup(host);

			load("element-ui", "http://localhost:3006").then(() => {
				const exported = getExports("element-ui");
				component = exported[name];
				start();
			});

			async function start() {
				const { name } = component;

				if (refs.current) return;

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
							([name, component]) => {
								const frag = document.createDocumentFragment();
								reactDOM.render(component, frag);

								const vnode = h("special-transfer", {
									props: {
										element: frag,
									},
									slot: name,
								});

								return vnode;
							}
						);
						return h(
							name,
							{
								props: { ...this.$data.props },
							},
							[...children_processed]
						);
					},
				});
				refs.current = instance;

				instance.$mount(root);

				// setInterval(() => {
				// 	instance.$data.data.time++;
				// }, 100);
			}
		}
	}, [root_ref.current]);

	useEffect(() => {
		if (refs.current) {
			refs.current.$data.data.time++;

			console.log(
				refs.current.$data.data.time,
				refs.current,
				"=========="
			);
		}
		// setInterval(() => {
		// 	if (refs.current) {
		// 		refs.current.$data.data.time++;
		// 	}
		// 	// instance.$data.data.time++;
		// }, 100);
	}, [props]);

	return <div ref={root_ref}></div>;
}
