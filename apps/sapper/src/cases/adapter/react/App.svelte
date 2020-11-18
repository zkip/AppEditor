<script>
	import react from "react";
	import ReactDom from "react-dom";
	import { is_client, onMount } from "svelte/internal";

	onMount(() => {
		ReactDom.render(
			react.createElement("div", null, "Hello"),
			document.querySelector("#react-root")
		);
	});
</script>

<div id="react-root">react root</div>
