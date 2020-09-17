import { useEffect } from "react";

import { genLiveLoader } from "@/utils/live";

export default () => {
	useEffect(() => {
		const { load, setHost } = genLiveLoader();
		const head = document.querySelector("html>head");
		setHost(head);
	}, []);

	return (
		<div>
			<input type="text" />
			<button>load</button>
		</div>
	);
};
