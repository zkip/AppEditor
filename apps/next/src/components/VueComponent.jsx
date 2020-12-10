import { getExport, getExports, load, setup } from "@/bootstrap/module_umd";
import { useRef } from "react";
import { useEffect } from "react";
import vue from "vue";
import react from "react";
import reactDOM from "react-dom";
import { useCallback } from "react";

const isClient = () => !!process.browser;

const CONST_SYM = Symbol();

vue.component("special-transfer", {
	name: "special-transfer",
	props: {
		element: {},
		stamp: Symbol,
	},
	mounted() {
		this.host = [].slice.call(this.$props.element.children);
		this.frag = this.$props.element;
		this.$el.replaceWith(this.$props.element);
	},
	updated() {
		// 保留第一个DOM
		this.host.map((child, i) => i && this.frag.appendChild(child));

		const host = [].slice.call(this.$props.element.children);
		this.host[0].replaceWith(this.$props.element);
		this.frag = this.$props.element;
		this.host = host;
	},
	render(h) {
		this.$props.stamp;
	},
});

const slots_memorization = new Map();

const useMemorizedSlots = (slots, vue_ins) => {
	useEffect(() => {
		if (vue_ins) {
			const slots_momerized = slots_memorization.get(vue_ins);
			// updat check filter
			const need_changed = true;
			if (need_changed) {
				vue_ins.$data.slots.default = slots.default;
				// console.log(slots, "+====");
			}

			slots_memorization.set(vue_ins, slots);
		}
		return () => {
			slots_memorization.delete(vue_ins);
		};
	}, [slots, vue_ins]);
};

export default function VueComponent({
	name,
	props = {},
	slots = {},
	...rest
}) {
	const root_ref = useRef();
	const vue_ins_ref = useRef();

	useMemorizedSlots(slots, vue_ins_ref.current);

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

				if (vue_ins_ref.current) return;

				instance = new vue({
					components: {
						[name]: component,
					},
					data: {
						props: {
							...props,
						},
						data: {},
						slots,
					},
					render(h) {
						const children_processed = Object.entries(
							this.$data.slots
						).map(([name, components]) => {
							const frag = document.createDocumentFragment();
							reactDOM.render(components, frag);

							const need_change = name == "defaultx";

							const stamp = need_change ? Symbol() : CONST_SYM;

							const vnode = h("special-transfer", {
								props: {
									element: frag,
									stamp,
								},
								slot: name,
							});

							return vnode;
						});
						return h(
							name,
							{
								props: { ...this.$data.props },
							},
							[...children_processed]
						);
					},
				});
				vue_ins_ref.current = instance;

				instance.$mount(root);
			}
		}
	}, [root_ref.current]);

	return <div ref={root_ref}></div>;
}
