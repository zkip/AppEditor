export const xhr = {
	async get(url) {
		const xhr = new XMLHttpRequest();
		return new Promise((resolve, reject) => {
			xhr.open("get", url);
			xhr.onreadystatechange = (e) => {
				if (xhr.readyState === 4) {
					resolve(xhr);
				} else {
					// reject(xhr);
				}
			};
			xhr.onerror = reject;
			xhr.send();
		});
	},
};
