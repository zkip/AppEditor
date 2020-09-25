import {
	DefaultComponent,
	dropModule,
	getExport,
	getExports,
	load,
	setup,
} from "@/bootstrap/module";
import { forwardRef, useEffect, useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import Toolbar from "@/components/Toolbar";
import { listen } from "public/workspace/Flex/utils/fn";
import { joinBySpace, repeat } from "@/utils/array";

class Config {
	Component = "";
	children = [];
	props = {};
	ref = { current: null };
	constructor(props) {
		Object.assign(this, props);
	}
}

const Fixture = forwardRef(({ children, className, ...props }, ref) => (
	<div ref={ref} className={joinBySpace("fixture", className)}>
		{children}
	</div>
));

const Renderer = ({ config }) => {
	return (
		<Fixture ref={config.ref}>
			<config.Component {...config.props}>
				{config.children.map((config) => (
					<Renderer config={config} />
				))}
			</config.Component>
		</Fixture>
	);
};

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
			await load("workspace/InputCase");

			const component = getExport("InputCase");
			setComponent(() => component);

			// const newLayout = new Config({ Component: component });

			// setLayout(newLayout);

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
		return listen("keydown", undefined, { passive: false })((e) => {
			const { key } = e;
			if (key === " ") {
				e.preventDefault();
				const component = getExport("Box");
				const config = genRandomConfig(component);
				setLayout(config);
				console.log(config);
			}
		});
	}, [setLayout]);

	return (
		<div>
			<Component />
			{/* <Toolbar />
			<div>
				<Renderer config={layout} />
			</div> */}
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

function genRandomConfig(component) {
	const step = 4;
	const genProps = () => {
		return {
			width: (((Math.random() * 200) / step + 20 / step) >> 0) * step,
			height: (((Math.random() * 200) / step + 20 / step) >> 0) * step,
			background: getRandomColor(),
		};
	};
	const gen = (props, hierarchy = 0) => {
		const config = new Config({ Component: component, props });
		if (hierarchy < 5) {
			config.children = repeat((Math.random() * 5) >> 0)(() =>
				gen(genProps(), hierarchy + 1)
			);
		}
		return config;
	};
	return gen(genProps());
}
