import { useEffect } from "react";

export default () => {
	useEffect(() => {
		window.exports = new Proxy(
			{},
			{
				set(target, prop, value) {
					console.log(target, prop, value, "@@@@@");
				},
			}
		);
	}, []);
	return <div>SDF</div>;
};
