import Outline from "@/components/Outline";
import { node_map, dom_payload_map } from "@/components/Outline";
import { useOutlineReducer } from "@/components/Outline/Outline";
import { makeOutlineState } from "@/components/Outline/Outline";
import { useMapTo } from "@/components/Outline/Outline";
import { listen } from "@/utils/fn";
import { inBound } from "public/workspace/Box/utils/array";
import { useEffect, useRef, useState } from "react";

const Item = ({ name }) => {
	return <div className="Item">{name}</div>;
};

const instances = [
	{ level: 0, Child: Item, payload: { id: "001", name: "Jackie" } },
	{ level: 1, Child: Item, payload: { id: "002", name: "Tom" } },
	{ level: 2, Child: Item, payload: { id: "003", name: "Tee" } },
	{ level: 2, Child: Item, payload: { id: "005", name: "Juice" } },
	{ level: 2, Child: Item, payload: { id: "008", name: "Alice" } },
	{ level: 2, Child: Item, payload: { id: "007", name: "Bob" } },
	{ level: 2, Child: Item, payload: { id: "090", name: "Jip" } },
	{ level: 2, Child: Item, payload: { id: "022", name: "Thor" } },
	{ level: 2, Child: Item, payload: { id: "055", name: "Iss" } },
	{ level: 2, Child: Item, payload: { id: "004", name: "Hufed" } },
	{ level: 3, Child: Item, payload: { id: "014", name: "Jud" } },
];

function getDOMBound(dom) {
	const styles = getComputedStyle(dom);
	const { marginTop, marginLeft } = styles;
	const offset = { x: parseFloat(marginLeft), y: parseFloat(marginTop) };
	const bound = dom.getBoundingClientRect();
	return new DOMRect(
		bound.x - offset.x,
		bound.y - offset.y,
		bound.width,
		bound.height
	);
}

const ThumbDragger = ({
	bound = { x: 0, y: 0, width: 0, height: 0 },
	outline_props,
	...rest
}) => {
	return (
		<div
			style={{
				left: bound.x + "px",
				top: bound.y + "px",
				width: bound.width + "px",
				height: bound.height + "px",
			}}
			className="thumb"
		>
			<Outline {...outline_props} />
		</div>
	);
};

function getOutlineBound(payload) {
	const { top } = payload;
	const { dom } = node_map[top.id];
	return dom.getBoundingClientRect();
}

const indent = 20;
const lineHeight = 20;

export default () => {
	const [ins, setIns] = useState(instances);
	const [DragComponent, setDragComponent] = useState(() => ThumbDragger);
	const [thumbDraggerProps, setThumbDraggerProps] = useState({});
	const outlineReducer = useOutlineReducer(makeOutlineState(instances));
	// console.log(outlineReducer[0], "---");

	// const outline_ref = useRef();

	// const [OutlineMapped, mappers] = useMapTo(Outline);
	// console.log(OutlineMapped, mappers);
	return (
		<div>
			<div className="DragLayer">
				<DragComponent {...thumbDraggerProps} />
			</div>
			<div>
				<Outline reducer={outlineReducer} />
			</div>
			<pre>{""}</pre>
		</div>
	);
};
