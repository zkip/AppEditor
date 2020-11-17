export default `
<script>
	let i = 0;
	setInterval(() => {
		i++;
	}, 100);
	setInterval(()=>{
		i+=Math.random();
	})
</script>

<Csf>
	<div slot="title">
		<span>Title</span>
		<p>{i}</p>
	</div>
	<div slot="title">
		<span>Title^2</span>
		<p>{i*i}</p>
	</div>
</Csf>
`;
