<script>
	// import { compile, VERSION } from "svelte/compiler";
	// import example from "./example";
	// const source = example;
	// const result = compile(source);
	// console.log(result, "@@@", VERSION);
	// console.log(result.js.code);
	import SimpleComponent from "./SimpleComponent_v2";
	import { bind, get_current_component, is_client } from "svelte/internal";

	const title = "Simple title.";
	let timestamp = Date.now();

	setInterval(() => {
		timestamp = Date.now();
	}, 1000);
</script>

<span>{timestamp}</span>
<SimpleComponent>
	<div slot="title">{timestamp}</div>
	<div slot="jump">{timestamp + 'jump'}</div>
</SimpleComponent>
