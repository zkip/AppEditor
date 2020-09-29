import Outline from "@/components/Outline";
import { node_map, dom_payload_map } from "@/components/Outline";
import { listen } from "@/utils/fn";
import { inBound } from "public/workspace/Box/utils/array";
import { useEffect, useRef, useState } from "react";

const instances = {
	id: "001",
	name: "Jackie",
	index: 0,
	level: 0,
	children: [
		{
			id: "002",
			name: "Tom",
			index: 0,
			level: 1,
			children: [
				{ id: "003", name: "Tee", index: 1, level: 2 },
				{ id: "005", name: "Juice", index: 2, level: 2 },
				{ id: "008", name: "Alice", index: 3, level: 2 },
				{ id: "007", name: "Bob", index: 4, level: 2 },
				{ id: "090", name: "Jip", index: 5, level: 2 },
				{ id: "022", name: "Thor", index: 6, level: 2 },
				{ id: "055", name: "Iss", index: 7, level: 2 },
				{
					id: "004",
					name: "Hufed",
					index: 0,
					level: 2,
					children: [{ id: "007", name: "Jud", index: 0, level: 3 }],
				},
			],
		},
	],
};

const instances_2 = {
	id: "004",
	name: "Jackie",
	index: 0,
	children: [
		{
			id: "005",
			name: "Tom",
			index: 3,
			children: [{ id: "006", name: "Tee" }],
		},
		{ id: "002", name: "Hufed", index: 1 },
		{ id: "025", name: "Iop", index: 0 },
		{ id: "017", name: "Fup", index: 2 },
	],
};

function getNodePayload(path) {
	let should_node,
		is_found = false,
		found_index = 0;

	for (let i = 0; i < 2; i++) {
		should_node = path[i];
		if (dom_payload_map.has(should_node)) {
			// Found.
			is_found = true;
			found_index = i;
			break;
		}
	}

	if (is_found) {
		// current payload
		const payload = dom_payload_map.get(should_node);
		const parentPayload_dom =
			should_node.parentNode && should_node.parentNode.parentNode;
		// parent payload
		const parentPayload = dom_payload_map.get(parentPayload_dom);

		if (should_node.children[0] === path[found_index - 1]) {
			// title parts
		} else {
			// children parts
		}

		return {
			payload,
			parentPayload,
		};
	} else {
		// Not found.
	}
	return {};
}

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
	const [payload, setPayload] = useState();
	const [actived_payload, setActivePayload] = useState({
		dom: null,
		name: "",
		raw: {},
	});

	const [DragComponent, setDragComponent] = useState(() => ThumbDragger);
	const [thumbDraggerProps, setThumbDraggerProps] = useState({});

	const outline_ref = useRef();

	useEffect(
		() => {
			console.log("@@@@");
			return listen("mousedown")(({ path, clientX, clientY }) => {
				const { payload, parentPayload } = getNodePayload(path);
				console.log(parentPayload, "@@@@@@@@s");
				if (payload) {
					const { dom } = payload;
					const bound = getDOMBound(dom.children[0]);
					const node_self_payload = {
						...payload.raw,
						children: [],
					};

					const ix = clientX,
						iy = clientY;

					const putThumb = () => {
						setDragComponent(() => ThumbDragger);
						setThumbDraggerProps({
							...thumbDraggerProps,
							bound,
							outline_props: { data: node_self_payload },
						});
					};

					const init_index = payload.raw.index;
					const parentPayloadChildren = parentPayload.children;

					let created = false;

					const outline_bound = outline_ref.current.getBoundingClientRect();

					const clean_move = listen("mousemove")(
						({ path, clientX, clientY }) => {
							const { payload } = getNodePayload(path);

							const livePayloadChildren = parentPayloadChildren.slice();

							if (!created) {
								created = true;
								putThumb();
							}

							if (payload) {
							}

							const local_offset =
								(iy - outline_bound.y) % lineHeight;

							const absolute_index =
								(clientY - outline_bound.y - local_offset) /
								lineHeight;

							// console.log(local_offset, absolute_index);

							const live_payload =
								livePayloadChildren[init_index - 1];

							live_payload.index = absolute_index;

							// const [_payload] = livePayloadChildren.splice(
							// 	init_index,
							// 	1
							// );
							// _payload.index = absolute_index;
							// livePayloadChildren.splice(
							// 	absolute_index,
							// 	0,
							// 	_payload
							// );

							console.log(
								livePayloadChildren,
								"----",
								absolute_index
							);

							const dx = clientX - ix,
								dy = clientY - iy;

							const live_bound = {
								...bound,
								x: bound.x,
								y: bound.y + dy,
							};

							const max_level_current = 10;

							const level = inBound(
								0,
								max_level_current + 1
							)(node_self_payload.level + dx / indent);

							setThumbDraggerProps({
								...thumbDraggerProps,
								bound: live_bound,
								outline_props: {
									data: { ...node_self_payload, level },
								},
							});

							parentPayload.raw.children = livePayloadChildren;

							// setIns({ ...ins });
						}
					);

					const clean_up = listen("mouseup")(() => {
						// parentPayload.children = parentPayload.raw.children;
						clean_move();
						clean_up();
						setDragComponent(() => () => null);
					});
				}
			});
		},
		[
			// actived_payload.dom,
			// ins,
			// setIns,
			// thumbDraggerProps,
			// setThumbDraggerProps,
		]
	);
	return (
		<div>
			<div className="DragLayer">
				<DragComponent {...thumbDraggerProps} />
			</div>
			<div>
				<Outline data={ins} ref={outline_ref} />
			</div>
			<pre>{actived_payload.name.toString()}</pre>
		</div>
	);
};
