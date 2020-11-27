import { create_ssr_component, SvelteComponent } from "svelte/internal";

export default class SimpleComponent extends SvelteComponent {
	constructor() {
		create_ssr_component(() => {
			console.log("---");
		});
	}
}
