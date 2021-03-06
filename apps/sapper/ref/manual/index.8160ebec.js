import {
	S as SvelteComponentDev,
	i as init,
	s as safe_not_equal,
	d as dispatch_dev,
	c as create_slot,
	v as validate_slots,
	a as is_client,
	g as get_current_component,
	o as onMount,
	b as beforeUpdate,
	e as assign,
	f as exclude_internal_props,
	u as update_slot,
	h as element,
	j as space,
	k as claim_element,
	l as children,
	m as detach_dev,
	n as claim_space,
	p as attr_dev,
	q as add_location,
	r as insert_dev,
	t as append_dev,
	w as transition_in,
	x as transition_out,
	y as binding_callbacks,
	z as text,
	A as create_component,
	B as claim_text,
	C as claim_component,
	D as mount_component,
	E as set_data_dev,
	F as destroy_component,
	G as noop,
} from "./client.cceec099.js";

/* src\cases\adapter\SimpleComponent.svelte generated by Svelte v3.29.0 */

const file = "src\\cases\\adapter\\SimpleComponent.svelte";
const get_jump_slot_changes = (dirty) => ({});
const get_jump_slot_context = (ctx) => ({});

function create_fragment(ctx) {
	let div1;
	let div0;
	let t;
	let current;
	const jump_slot_template = /*#slots*/ ctx[2].jump;
	const jump_slot = create_slot(
		jump_slot_template,
		ctx,
		/*$$scope*/ ctx[1],
		get_jump_slot_context
	);

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			t = space();
			if (jump_slot) jump_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t = claim_space(div1_nodes);
			if (jump_slot) jump_slot.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "title");
			add_location(div0, file, 56, 1, 1035);
			add_location(div1, file, 55, 0, 1027);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			/*div0_binding*/ ctx[3](div0);
			append_dev(div1, t);

			if (jump_slot) {
				jump_slot.m(div1, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (jump_slot) {
				if (jump_slot.p && dirty & /*$$scope*/ 2) {
					update_slot(
						jump_slot,
						jump_slot_template,
						ctx,
						/*$$scope*/ ctx[1],
						dirty,
						get_jump_slot_changes,
						get_jump_slot_context
					);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(jump_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(jump_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			/*div0_binding*/ ctx[3](null);
			if (jump_slot) jump_slot.d(detaching);
		},
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx,
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("SimpleComponent", slots, ["jump"]);
	const title_slot_template = is_client ? $$props.$$slots.title : undefined;
	const props = $$props;

	if (is_client) {
		console.log($$props, get_current_component().$$, "@@@");
	}

	const title_slot = is_client
		? create_slot(
				title_slot_template,
				$$props,
				$$props.$$scope,
				(ctx) => ({})
		  )
		: undefined;

	let title_ref;

	onMount(() => {
		if (title_slot) title_slot.c();
		if (title_slot) title_slot.m(title_ref, null);
	});

	beforeUpdate(() => {
		const current = get_current_component();
		const dirty = -1;

		if (title_slot) {
			console.log(current.$$, "-------<<<<<<<");

			if (title_slot.p && 1 & dirty) {
				update_slot(
					title_slot,
					title_slot_template,
					current.$$.ctx,
					current.$$.ctx[1],
					dirty,
					(dirty) => ({}),
					(ctx) => ({})
				);
			}
		}
	});

	function div0_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			title_ref = $$value;
			$$invalidate(0, title_ref);
		});
	}

	$$self.$$set = ($$new_props) => {
		$$invalidate(
			7,
			($$props = assign(
				assign({}, $$props),
				exclude_internal_props($$new_props)
			))
		);
		if ("$$scope" in $$new_props)
			$$invalidate(1, ($$scope = $$new_props.$$scope));
	};

	$$self.$capture_state = () => ({
		beforeUpdate,
		create_slot,
		get_current_component,
		is_client,
		onMount,
		update_slot,
		title_slot_template,
		props,
		title_slot,
		title_ref,
	});

	$$self.$inject_state = ($$new_props) => {
		$$invalidate(7, ($$props = assign(assign({}, $$props), $$new_props)));
		if ("title_ref" in $$props)
			$$invalidate(0, (title_ref = $$new_props.title_ref));
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$props = exclude_internal_props($$props);
	return [title_ref, $$scope, slots, div0_binding];
}

class SimpleComponent extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SimpleComponent",
			options,
			id: create_fragment.name,
		});
	}
}

/* src\cases\adapter\to_react.svelte generated by Svelte v3.29.0 */
const file$1 = "src\\cases\\adapter\\to_react.svelte";

// (22:1) <div slot="title">
function create_title_slot(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text(/*timestamp*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { slot: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, /*timestamp*/ ctx[0]);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "slot", "title");
			add_location(div, file$1, 21, 1, 519);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*timestamp*/ 1) set_data_dev(t, /*timestamp*/ ctx[0]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		},
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_title_slot.name,
		type: "slot",
		source: '(22:1) <div slot=\\"title\\">',
		ctx,
	});

	return block;
}

// (23:1) <div slot="jump">
function create_jump_slot(ctx) {
	let div;
	let t_value = /*timestamp*/ ctx[0] + "jump" + "";
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { slot: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, t_value);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "slot", "jump");
			add_location(div, file$1, 22, 1, 557);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		p: function update(ctx, dirty) {
			if (
				dirty & /*timestamp*/ 1 &&
				t_value !== (t_value = /*timestamp*/ ctx[0] + "jump" + "")
			)
				set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		},
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_jump_slot.name,
		type: "slot",
		source: '(23:1) <div slot=\\"jump\\">',
		ctx,
	});

	return block;
}

// (21:0) <SimpleComponent>
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = space();
		},
		l: function claim(nodes) {
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		},
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(21:0) <SimpleComponent>",
		ctx,
	});

	return block;
}

function create_fragment$1(ctx) {
	let span;
	let t0;
	let t1;
	let simplecomponent;
	let current;

	simplecomponent = new SimpleComponent({
		props: {
			$$slots: {
				default: [create_default_slot],
				jump: [create_jump_slot],
				title: [create_title_slot],
			},
			$$scope: { ctx },
		},
		$$inline: true,
	});

	const block = {
		c: function create() {
			span = element("span");
			t0 = text(/*timestamp*/ ctx[0]);
			t1 = space();
			create_component(simplecomponent.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", {});
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, /*timestamp*/ ctx[0]);
			span_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			claim_component(simplecomponent.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(span, file$1, 19, 0, 473);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t0);
			insert_dev(target, t1, anchor);
			mount_component(simplecomponent, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*timestamp*/ 1)
				set_data_dev(t0, /*timestamp*/ ctx[0]);
			const simplecomponent_changes = {};

			if (dirty & /*$$scope, timestamp*/ 5) {
				simplecomponent_changes.$$scope = { dirty, ctx };
			}

			simplecomponent.$set(simplecomponent_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(simplecomponent.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(simplecomponent.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			if (detaching) detach_dev(t1);
			destroy_component(simplecomponent, detaching);
		},
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx,
	});

	return block;
}

const title = "Simple title.";

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("To_react", slots, []);
	let timestamp = Date.now();
	console.log($$props, "@@@@");

	setInterval(() => {
		$$invalidate(0, (timestamp = Date.now()));
	}, 1000);

	$$self.$$set = ($$new_props) => {
		$$invalidate(
			1,
			($$props = assign(
				assign({}, $$props),
				exclude_internal_props($$new_props)
			))
		);
	};

	$$self.$capture_state = () => ({ SimpleComponent, title, timestamp });

	$$self.$inject_state = ($$new_props) => {
		$$invalidate(1, ($$props = assign(assign({}, $$props), $$new_props)));
		if ("timestamp" in $$props)
			$$invalidate(0, (timestamp = $$new_props.timestamp));
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$props = exclude_internal_props($$props);
	return [timestamp];
}

class To_react extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "To_react",
			options,
			id: create_fragment$1.name,
		});
	}
}

/* src\routes\index.svelte generated by Svelte v3.29.0 */

function create_fragment$2(ctx) {
	let adapter;
	let current;
	adapter = new To_react({ $$inline: true });

	const block = {
		c: function create() {
			create_component(adapter.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(adapter.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(adapter, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(adapter.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(adapter.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(adapter, detaching);
		},
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx,
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach((key) => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$")
			console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Adapter: To_react });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$2.name,
		});
	}
}

export default Routes;
