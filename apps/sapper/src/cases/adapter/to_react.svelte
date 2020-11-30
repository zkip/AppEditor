<script>
	import genSimpleComponent from "./SimpleComponent_v2";
	import Skeleton from "./Skeleton";

	const SimpleComponent = genSimpleComponent();

	let timestamp = Date.now();

	setInterval(() => {
		timestamp = Date.now();
	}, 1000);
</script>

<span>{timestamp}</span>

<SimpleComponent>
	<div slot="title">{timestamp}</div>
</SimpleComponent>

<Skeleton>Skeleton,{timestamp}</Skeleton>
