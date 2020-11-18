<script>
	// import { compile, VERSION } from "svelte/compiler";
	// import example from "./example";
	// const source = example;
	// const result = compile(source);
	// console.log(result, "@@@", VERSION);
	// console.log(result.js.code);
	import SimpleComponent from "./SimpleComponent";

	const title = "Simple title.";
	let timestamp = Date.now();

	console.log($$props, "@@@@");

	setInterval(() => {
		timestamp = Date.now();
	}, 1000);
</script>

<span>{timestamp}</span>
<SimpleComponent>
	<div slot="title">{timestamp}</div>
	<div slot="jump">{timestamp}</div>
</SimpleComponent>
