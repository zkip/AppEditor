import {
	DefaultComponent,
	dropModule,
	getExport,
	getExports,
	load,
	setup,
} from "@/bootstrap/module";
import { useEffect, useState } from "react";
import ComponentManager from "./ComponentManager";

export default () => {
	const [Component, setComponent] = useState(() => DefaultComponent);
	useEffect(() => {
		setup(document.querySelector("html>head"));
	}, []);

	useEffect(() => {
		const task = async () => {
			await load("workspace/example");

			const component = getExport("Example");
			setComponent(() => component);

			const [path, module] = getExports("workspace/example");
		};

		task();
	}, []);

	return (
		<div>
			<div>component</div>
			<div>
				<Component />
			</div>
		</div>
	);
};
