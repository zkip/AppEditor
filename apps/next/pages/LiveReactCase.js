import { getExport, getExports, load, setup } from "@/bootstrap/module";
import { listen } from "@/utils/fn";
import React, { createElement, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

export default () => {
	const container_ref = useRef();

	const [Component, setComponent] = useState(() => null);

	useEffect(() => {
		const start = async () => {
			const host = document.querySelector("head");
			setup(host);

			await load("workspace/Box");
			const Box = getExport("Box");

			listen("mousemove")(({ clientX, clientY }) => {
				const BoxRC = createElement(Box, {
					width: clientX,
					height: clientY,
				});

				console.log(Box, "==");
				ReactDOM.render(BoxRC, container_ref.current);
			});
		};
		start();
	}, []);

	return (
		<div>
			<span>Load:</span>
			<div className="container" ref={container_ref}></div>
		</div>
	);
};
