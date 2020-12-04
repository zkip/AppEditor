import {
	create_ssr_component,
	is_client,
	safe_not_equal,
	SvelteComponent,
	SvelteComponentDev,
	init,
	validate_slots,
	noop,
	text,
	claim_text,
	create_slot,
	insert,
	detach,
	element,
	claim_element,
	attr,
} from "svelte/internal";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Empty", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach((key) => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$")
			console.warn(`<Empty> was created with unknown prop '${key}'`);
	});

	$$self.$$set = ($$props) => {
		if ("$$scope" in $$props) $$invalidate(0, ($$scope = $$props.$$scope));
	};

	return [$$scope, slots];
}

function create_fragment(ctx) {
	const default_slot_template = ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);

	let root;
	const block = {
		c: function create() {
			root = element("div");
			console.log(root, "@@@@@@");
			if (default_slot) default_slot.c();
		},
		l: function claim(nodes) {
			root = claim_element(nodes, "DIV", { class: true });
			console.log("claim", nodes, root);
			// root = claim_text(nodes, "XXV");
			this.h();
		},
		m: function mount(target, anchor) {
			console.log("@@@@@@", target, anchor, root);
			if (default_slot) {
				default_slot.m(target, anchor);
			}
		},
		h: function hydrate() {
			attr(root, "class", "SLDFJKL");
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & 1) {
					update_slot(
						default_slot,
						default_slot_template,
						ctx,
						ctx[0],
						dirty,
						null,
						null
					);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach(root);
		},
	};

	return block;
}

class SimpleComponent extends SvelteComponent {
	constructor(options) {
		super(options);
		console.log(options, "=======<<<<");
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default () =>
	!is_client
		? create_ssr_component(() => {
				return ``;
		  })
		: SimpleComponent;
