import Outline from "@/components/Outline";
import { node_map, dom_payload_map } from "@/components/Outline";
import { useOutlineReducer } from "@/components/Outline/Outline";
import { makeOutlineState } from "@/components/Outline/Outline";
import { useMapTo } from "@/components/Outline/Outline";
import { listen } from "@/utils/fn";
import { inBound } from "public/workspace/Box/utils/array";
import { useEffect, useRef, useState } from "react";

import TimingIndex from "@/utils/indices/timing";

const rand = (min, max) => Math.random() * (max - min) + min;

const sym = Symbol();

const source = [1, 3, sym, 4];
const source_lazy = TimingIndex(source);
const timing = source_lazy.length;

// source_lazy.splice(0, 0, 12);

for (let i = 0; i < rand(0, 100) >> 0; i++) {
	const idx = rand(0, source_lazy.length) >> 0;
	let isAdd =
		rand(0, 1) > 0.5 && source_lazy.length > 1 && source_lazy[idx] !== sym;
	if (isAdd) {
		source_lazy.splice(idx, 1);
	} else {
		source_lazy.splice(idx, 0, rand(0, 100) >> 0);
	}
}

const finaly_index = source_lazy.get(2, timing);
console.log(
	source_lazy[finaly_index] === sym,
	finaly_index,
	source_lazy,
	timing
);

const Item = ({ name }) => {
	return <div className="Item">{name}</div>;
};

const config = {
	item_type: Item,
	payloads: [
		{ id: "001", level: 0, props: { name: "Jackie" }, can_expand: true },
		{ id: "002", level: 1, props: { name: "Tom" }, can_expand: true },
		{ id: "003", level: 2, props: { name: "Tee" } },
		{ id: "005", level: 2, props: { name: "Juice" } },
		{ id: "008", level: 2, props: { name: "Alice" } },
		{ id: "007", level: 2, props: { name: "Bob" } },
		{ id: "090", level: 2, props: { name: "Jip" } },
		{ id: "022", level: 2, props: { name: "Thor" } },
		{ id: "055", level: 2, props: { name: "Iss" } },
		{ id: "004", level: 2, props: { name: "Hufed" }, can_expand: true },
		{ id: "014", level: 3, props: { name: "Jud" } },
		{ id: "032", level: 3, props: { name: "Fck" } },
		{ id: "018", level: 1, props: { name: "Fip" } },
		{ id: "043", level: 2, props: { name: "Ioo" } },
	],
};

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
	const [DragComponent, setDragComponent] = useState(() => ThumbDragger);
	const [thumbDraggerProps, setThumbDraggerProps] = useState({});
	const outlineReducer = useOutlineReducer({
		state: makeOutlineState(config),
	});
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
