import { joinBySpace } from "@/utils/array";
import { listen } from "@/utils/fn";
import { useRef, useEffect, forwardRef, useState, useReducer } from "react";
import "./Outline.css";

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
export const node_map = {};
export const dom_payload_map = new Map();

const indexWeight = (a, b) => {
	return a.index - b.index;
};

const Node = ({ data, top_payload }) => {
	const { name = "", id, level, children = [] } = data;
	const top_node = useRef();
	useEffect(() => {
		const payload = {
			name,
			id,
			children,
			dom: top_node.current,
			raw: data,
			top: top_payload,
		};
		node_map[id] = payload;
		dom_payload_map.set(top_node.current, payload);
		return () => {
			dom_payload_map.delete(top_node.current);
			delete node_map[id];
		};
	}, [top_node.current, data]);
	return (
		<div ref={top_node} className="node">
			<div className="title" style={{ paddingLeft: `${level * 20}px` }}>
				{name}
			</div>
			{children.length > 0 && (
				<div className="children">
					{children.map((data) => (
						<Node
							key={data.id}
							data={data}
							top_payload={top_payload}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export function getPayload() {}

const FlatNode = forwardRef(({ Child, level, payload, ...rest }, ref) => {
	return (
		<div className="node" ref={ref}>
			<div className="title" style={{ paddingLeft: `${level * 20}px` }}>
				<Child {...payload} />
			</div>
		</div>
	);
});

const lineHeight = 20;

export const makeOutlineState = (data = []) => {
	return {
		data,
		records: new Map(),
	};
};

export const useOutlineReducer = (initState = makeOutlineState()) => {
	const reducer = useReducer((state, action) => {
		if (action.type === "delete") {
			const { index } = action;
			const { data } = state;
			state.data.splice(index, 1);
			return { ...state, data };
		} else if (action.type === "save") {
			const { id } = action;
			const { records, data } = state;
			records.set(id, data.slice());
			return { ...state, records };
		} else if (action.type === "restore") {
			const { id } = action;
			const { records } = state;
			records.delete(id);
			return { ...state, records };
		} else if (action.type === "setBasedOn") {
			const { id, affect } = action;
			const data = affect(state.records.get(id).slice());
			return { ...state, data };
		} else {
			return state;
		}
	}, initState);
	return reducer;
};

export default ({
	reducer = useOutlineReducer(),
	className,
	style,
	...rest
}) => {
	const ref = useRef();
	const cls = joinBySpace(className, "Outline");
	const [path_index, setPahtIndex] = useState(0);
	const [Node, mapper] = useNodeIndexer();
	const [state, dispatch] = reducer;

	useEffect(() => {
		if (!ref) return;
		const top_node_dom = ref.current;
		const top_bound = top_node_dom.getBoundingClientRect();
		return listen("mousedown", top_node_dom, { capture: false })((e) => {
			const { path, clientY } = e;
			const item_dom = path[path.length - path_index - 3];
			const payload = mapper.get(item_dom);

			const local_offset = (clientY - top_bound.y) % lineHeight;
			const init_index =
				(clientY - top_bound.y - local_offset) / lineHeight;

			const id = Symbol();

			dispatch({ type: "save", id });

			const clean_move = listen("mousemove")(({ clientY }) => {
				const local_offset = (clientY - top_bound.y) % lineHeight;
				const live_index =
					(clientY - top_bound.y - local_offset) / lineHeight;

				dispatch({
					type: "setBasedOn",
					id,
					affect(data) {
						const [payload] = data.splice(init_index, 1);
						data.splice(live_index, 0, payload);
						return data;
					},
				});
			});

			const clean_up = listen("mouseup")(() => {
				clean_move();
				clean_up();
				dispatch({ type: "restore", id });
			});
		});
	}, [path_index, ref.current, dispatch]);

	useEffect(() => {
		if (!ref) return;
		const top_node_dom = ref.current;

		let index = 0,
			parent_node = top_node_dom.parentNode;
		while ((index++, !!(parent_node = parent_node.parentNode)));

		setPahtIndex(index);
	}, [ref && ref.current]);

	return (
		<div className={cls} ref={ref}>
			{state.data.map(({ Child, level, payload }) => (
				<Node key={payload.id} {...{ Child, level, payload }} />
			))}
		</div>
	);
};

const useNodeIndexer = () => {
	const dom_payload_map = new Map();
	const FlatNodeMapped = useMapTo(FlatNode, (dom, { payload }) => {
		dom_payload_map.set(dom, payload);
		return () => {
			dom_payload_map.delete(dom);
		};
	});
	return [FlatNodeMapped, dom_payload_map];
};

export function useMapTo(Component, indexer) {
	return ({ ...props }) => {
		const ref = useRef();
		useEffect(() => {
			return indexer(ref.current, props);
		}, ref.current);
		return <Component {...props} ref={ref} />;
	};
}
