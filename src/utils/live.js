export function genLiveLoader() {
	let _host = 2;

	function setHost(host) {
		_host = host;
	}

	function load(url) {
		const script = document.createElement("script");
		script.src = url;

		return new Promise((rv, rj) => {
			script.onload = rv;
			script.onerror = rj;
			if (_host) {
				_host.appendChild(script);
			}
		});
	}

	return {
		setHost,
		load,
	};
}
