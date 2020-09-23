import {
	DefaultComponent,
	getComponent,
	load,
	setup,
} from "@/bootstrap/module";
import { useEffect, useState } from "react";
import ComponentManager from "./ComponentManager";

const loadComponent = async () => {};

export default () => {
	const [Component, setComponent] = useState(() => DefaultComponent);
	useEffect(() => {
		setup(document.querySelector("html>head"));
	}, []);

	useEffect(() => {
		const task = async () => {
			await load("workspace/example/live.prod/Example.js");
			const component = getComponent("Example");
			// console.log(component, "@@@");
			setComponent(() => component);
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
