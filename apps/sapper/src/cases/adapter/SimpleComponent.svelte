<script>
	import {
		afterUpdate,
		beforeUpdate,
		create_slot,
		get_current_component,
		is_client,
		onMount,
		update_slot,
		bind,
	} from "svelte/internal";

	const title_slot_template = is_client ? $$props.$$slots.title : undefined;

	const props = $$props;

	if (is_client) {
		const current = get_current_component();
		// console.log($$props, , "@@@");
		// get_current_component().$$.update = console.log;
		console.log(current, "@@@");
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

	afterUpdate(() => {
		// const current = get_current_component();
		// console.log(current.$$, "-------<<<<<<<");
	});

	beforeUpdate(() => {
		const current = get_current_component();
		const dirty = -1;
		if (title_slot) {
			// console.log(current.$$, "-------<<<<<<<");
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
</script>

<div>
	<div class="title" bind:this={title_ref} />
	<!-- <div class="title" /> -->
	<!-- <slot name="title" /> -->
	<!-- <slot name="jump" /> -->
</div>
