<script>
	import {
		beforeUpdate,
		create_slot,
		current_component,
		dirty_components,
		get_current_component,
		is_client,
		onMount,
		update_slot,
	} from "svelte/internal";

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
		console.log(props, "ccc", get_current_component().$$);
		const current = get_current_component();
		if (title_slot) {
			if (title_slot.p && 1 & 1) {
				update_slot(
					title_slot,
					title_slot_template,
					props,
					current.$$.ctx,
					1,
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
