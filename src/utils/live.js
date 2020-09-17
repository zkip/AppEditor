export function genLiveLoader() {
	let host;

	const setHost = (host) => (host = host);
	const load = async (url) => {
		const script = document.createElement("script");
		script.src = url;
		return new Promise((rv, rj) => {
			script.onload = rv;
			script.onerror = rj;
			host.appendChild(script);
		});
	};

	return {
		setHost,
		load,
	};
}
