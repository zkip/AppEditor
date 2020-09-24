import {
	DefaultComponent,
	dropModule,
	getExport,
	getExports,
	load,
	setup,
} from "@/bootstrap/module";
import { useEffect, useState } from "react";
import Toolbar from "@/components/Toolbar";
import { listen } from "public/workspace/Flex/utils/fn";

class Config {
	Component = "";
	children = [];
	props = {};
	constructor(props) {
		Object.assign(this, props);
	}
}

const Renderer = ({ config }) => (
	<config.Component {...config.props}>
		{config.children.map((config) => (
			<Renderer config={config} />
		))}
	</config.Component>
);

export default () => {
	const [Component, setComponent] = useState(() => DefaultComponent);
	const [props, setProps] = useState({});
	const [layout, setLayout] = useState(
		new Config({ Component: DefaultComponent })
	);
	useEffect(() => {
		setup(document.querySelector("html>head"));
	}, []);

	useEffect(() => {
		const task = async () => {
			await load("workspace/Box");

			const component = getExport("Box");
			// setComponent(() => component);

			const newLayout = new Config({ Component: component });

			setLayout(newLayout);

			// setTimeout(() => {
			// 	setProps({
			// 		width: 200,
			// 		height: 200,
			// 		background: "pink",
			// 		children: <Component background="yellow" />,
			// 	});
			// }, 1000);

			// const [path, module] = getExports("workspace/example");
		};

		task();
	}, []);

	useEffect(() => {
		return listen("mousedown")(() => {
			const component = getExport("Box");
			const newConfig = new Config({
				Component: layout.Component,
				children: layout.children,
				props: layout.props,
			});

			if (Math.random() > 0.45) {
				newConfig.children.push(
					new Config({
						Component: component,
						props: { background: getRandomColor() },
					})
				);
			} else {
				newConfig.children.pop();
			}
			setLayout(newConfig);
		});
	}, [layout]);

	return (
		<div>
			<Toolbar />
			<div>
				<Renderer config={layout} />
			</div>
		</div>
	);
};

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
