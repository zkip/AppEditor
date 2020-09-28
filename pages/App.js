import Outline from "@/components/Outline";
import { node_map, dom_payload_map } from "@/components/Outline";
import { listen } from "@/utils/fn";
import { useEffect, useState } from "react";

const instances = {
	id: "001",
	name: "Jackie",
	children: [
		{
			id: "002",
			name: "Tom",
			children: [
				{ id: "003", name: "Tee" },
				{
					id: "004",
					name: "Hufed",
					children: [{ id: "007", name: "Jud" }],
				},
			],
		},
	],
};

const instances_2 = {
	id: "004",
	name: "Jackie",
	children: [
		{
			id: "005",
			name: "Tom",
			children: [{ id: "006", name: "Tee" }],
		},
		{ id: "002", name: "Hufed" },
		{ id: "025", name: "Iop" },
		{ id: "017", name: "Fup" },
	],
};

export default () => {
	const [ins, setIns] = useState(instances);
	const [payload, setPayload] = useState();
	const [actived_payload, setActivePayload] = useState({
		dom: null,
		name: "",
		raw: {},
	});
	useEffect(() => {
		let last_dom, last_dom_parent;
		return listen("mousemove")((e) => {
			const { path, target } = e;
			const { parentNode } = target;
			// if (last_dom) {
			// 	last_dom.removeAttribute("style");
			// }
			// if (last_dom_parent) {
			// 	last_dom_parent.removeAttribute("style");
			// }
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

			if (is_found && should_node.children[0] === path[found_index - 1]) {
				// console.log("title");
			} else {
				// console.log(payload);
			}
			if (is_found) {
				const payload = dom_payload_map.get(should_node);
				if (actived_payload.dom !== should_node) {
					setActivePayload(payload);
				}
				// last_dom = should_node;
				// last_dom_parent =
				// 	should_node.parentNode && should_node.parentNode.parentNode;
				// should_node.setAttribute("style", `background: red;`);
				// last_dom_parent.setAttribute("style", `border-style: dashed;`);

				if (should_node.children[0] !== path[found_index - 1]) {
					// console.log(payload);
				}
				// console.log(found_index, target, path);
				// setPayload(.toString());
			} else {
				// Not found.
			}
			// setIns(instances_2);
		});
	}, [setIns, actived_payload.dom]);

	useEffect(() => {
		return listen("mousedown")(() => {
			if (actived_payload.dom) {
				if (!actived_payload.raw.children) {
					actived_payload.raw.children = [];
				}
				// actived_payload.raw.children.push({
				// 	id: Math.random().toString(),
				// 	name: "SDF",
				// 	children: [],
				// });
				const { raw: payload, dom } = actived_payload;

				// console.log();
				document.body.appendChild(dom.cloneNode(true));

				// payload.name = Math.random().toString();

				// payload.children.push({
				// 	id: Math.random().toString(),
				// 	name: "SDF",
				// 	children: [],
				// });
				setIns({ ...ins });
				console.log(actived_payload.raw, ins);
			}
		});
	}, [actived_payload.dom, ins, setIns]);
	return (
		<div>
			<div>
				<Outline data={ins} />
			</div>
			<pre>{actived_payload.name.toString()}</pre>
		</div>
	);
};
