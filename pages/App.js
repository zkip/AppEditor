import { genLiveLoader } from "@/utils/live";
import React, { useEffect, useState } from "react";
import ComponentManager from "./ComponentManager";

// const components =

const M = new Map();

const InvalidComponent = ({ message = "invalid component." } = {}) => {
	return <div>{message}</div>;
};

function getComponent(name = "") {
	if (M.has(name)) {
		return M.get(name);
	}
	return InvalidComponent;
}

export default () => {
	const [load, setLoader] = useState(() => () => {});
	const [current_component_name, setCurrenComponentName] = useState(
		"Example"
	);
	const [Component, setComponent] = useState(() =>
		getComponent(current_component_name)
	);

	useEffect(() => {
		window.define = (module, pkg) => {
			const exports = {};
			const require = (module_name) => {
				if (module_name === "react") {
					return React;
				}
			};
			module(exports, require);
			M.set(pkg.name, exports.default);
		};
		const { setHost, load } = genLiveLoader();
		setHost(document.querySelector("html>head"));
		setLoader(() => load);
	}, []);

	const loadComponent = async () => {
		await load("workspace/example/live.prod/Example.js");
	};

	const update = () => {
		const component = getComponent(current_component_name);
		setComponent(() => component);
	};

	const [prop, setProp] = useState(3);

	const updateProps = (v) => {
		setProp(v);
	};

	return (
		<div>
			<div className="operation">
				<input
					defaultValue={current_component_name}
					onInput={(e) => setCurrenComponentName(e.target.value)}
				/>
				<button onClick={loadComponent}>load</button>
				<button onClick={update}>update</button>
				<br />
				<div>
					props:{" "}
					<input
						defaultValue={prop}
						onInput={(e) => updateProps(e.target.value)}
					/>
				</div>
			</div>
			<div className="preview">
				<Component age={prop} />
			</div>
		</div>
	);
};
