import Outline from "@/components/Outline";
import { node_map, dom_payload_map } from "@/components/Outline";
import { useOutlineReducer } from "@/components/Outline/Outline";
import { makeOutlineState } from "@/components/Outline/Outline";
import { useMapTo } from "@/components/Outline/Outline";
import { listen } from "@/utils/fn";
import { inBound } from "public/workspace/Box/utils/array";
import { useEffect, useRef, useState, useReducer, Component } from "react";

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
		{ id: "102", level: 1, props: { name: "Liop" } },
		{ id: "103", level: 2, props: { name: "Lison" } },
		{ id: "104", level: 3, props: { name: "Lumien" } },
		{ id: "105", level: 3, props: { name: "Poplim" } },
	],
};

export default () => {
	const reducer = useOutlineReducer({
		state: makeOutlineState(config),
	});

	return (
		<div>
			<div className="DragLayer"></div>
			<div>
				<Outline reducer={reducer} />
			</div>
			<pre>{""}</pre>
		</div>
	);
};
