import "./Box.less";
import React from "react";
import { joinBySpace } from "./utils/array";

export default function Box({ width, height, background, children, ...rest }) {
	const className = joinBySpace("Box");
	return (
		<div
			className={className}
			{...rest}
			style={{ width: width + "px", height: height + "px", background }}
		>
			{children}
		</div>
	);
}
