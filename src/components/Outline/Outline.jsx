import { joinBySpace, inBound, inArrayBound } from "@/utils/array";
import { fallback, listen } from "@/utils/fn";
import {
	useRef,
	useEffect,
	forwardRef,
	useState,
	useReducer,
	useCallback,
	useMemo,
} from "react";
import "./Outline.css";
import { useComponentIndexer } from "@/utils/uses/mapper";
import { TimingIndex } from "@/utils/indices/timing";
import { isEmpty, isNotEmpty } from "@/utils/asserts";
import next from "next";
import { last } from "public/workspace/Box/utils/array";

export const node_map = {};
export const dom_payload_map = new Map();

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

const FlatNode = forwardRef(({ item_type, level, props, ...rest }, ref) => {
	const Item = item_type;
	return (
		<div className="node" ref={ref}>
			<div className="title" style={{ paddingLeft: `${level * 20}px` }}>
				<Item {...props} />
			</div>
		</div>
	);
});

const lineHeight = 20;

// type Payload { id, level, can_expand, type_self, props }
// type PayloadList []Payload
export const makeOutlineState = ({
	item_type = null,
	payloads = [],
	relayed = new Set(["id", "level"]),
} = {}) => {
	return {
		hierarchy_map: {},
		item_type,
		payloads,
		relayed,
		records: new Map(),
	};
};

function Relation(id, { ...props }) {
	return Object.assign(
		{
			id,
			next_sibling: undefined,
			prev_sibling: undefined,
			parent: undefined,
			child: undefined,
		},
		props
	);
}

function genHierarchyAnalyzer({} = {}) {
	function constructor({ hierarchy_map = { relation: {}, size: {} } } = {}) {
		let {
			relation: live_relation_map,
			size: live_size_map,
		} = hierarchy_map;

		console.log(live_size_map);

		// type HierarchyNode Payload
		function onInserted({ level, id }, index, payloads) {
			const is_first = index === 0;
			const is_top = level === 0;
			const is_last = index === payloads.length - 1;
			const prev_index = index - 1;
			const next_index = index + 1;
			const prev_id = is_first ? undefined : payloads[prev_index].id;
			const next_id = is_last ? undefined : payloads[next_index].id;
			const prev_payload = payloads[prev_index];
			const prev_level = !is_first && prev_payload.level;
			const diff_level = !is_first && level - prev_level;

			const prev_relation = fallback(Relation(id))(
				live_relation_map[prev_id]
			);
			const next_relation = fallback(Relation(id))(
				live_relation_map[next_id]
			);
			const relation = fallback(Relation(id))(live_relation_map[id]);

			if (diff_level > 0) {
				prev_relation.child = id;
				relation.parent = is_first || is_top ? undefined : prev_id;

				if (!is_last && relation.parent === next_relation.parent) {
					next_relation.prev_sibling = id;
				}
			} else if (diff_level === 0) {
				relation.prev_sibling = prev_id;
				relation.parent =
					is_first || is_top ? undefined : prev_relation.parent;
				prev_relation.next_sibling = id;

				if (!is_last && next_relation.parent === relation.parent) {
					relation.next_sibling = next_id;
					next_relation.prev_sibling = id;
				}
			} else {
				const prev_sibling_id = getRecursiveParent(
					prev_id,
					-diff_level
				);

				const parent_relation = fallback(Relation(id))(
					live_relation_map[prev_sibling_id]
				);
				const prev_sibling_relation =
					live_relation_map[prev_sibling_id];

				relation.parent =
					is_first || is_top ? undefined : parent_relation.parent;
				relation.prev_sibling = is_last ? undefined : prev_sibling_id;

				if (!is_first) {
					prev_sibling_relation.next_sibling = id;
				}

				if (!is_last && relation.parent === next_relation.parent) {
					parent_relation.next_sibling = id;
					next_relation.prev_sibling = id;
				}

				if (!is_first) {
					live_relation_map[prev_sibling_id] = parent_relation;
				}
			}

			if (!is_top) {
				const size = fallback(0)(live_size_map[relation.parent]);
				live_size_map[relation.parent] = size + 1;
			}

			if (!is_first) {
				live_relation_map[prev_id] = prev_relation;
			}
			live_relation_map[id] = relation;
		}

		function getRecursiveParent(id, count = 0) {
			const parent_id =
				live_relation_map[id] && live_relation_map[id].parent;
			if (count > 1 && parent_id) {
				return getRecursiveParent(parent_id, count - 1);
			} else {
				return parent_id;
			}
		}

		function onRemoved({ id }, index, payloads) {
			const is_first = index === 0;
			const is_last = index === payloads.length;
			const prev_index = index - 1;
			const next_index = index;
			const prev_id = is_first ? undefined : payloads[prev_index].id;
			const next_id = is_last ? undefined : payloads[next_index].id;

			const prev_relation = live_relation_map[prev_id];
			const next_relation = live_relation_map[next_id];
			const relation = live_relation_map[id];

			const { prev_sibling, next_sibling, parent } = relation;

			const prev_sibling_relation = isNotEmpty(prev_sibling)
				? live_relation_map[prev_sibling]
				: undefined;
			const next_sibling_relation = isNotEmpty(next_sibling)
				? live_relation_map[next_sibling]
				: undefined;
			const parent_relation = isNotEmpty(parent)
				? live_relation_map[parent]
				: undefined;

			if (isNotEmpty(prev_sibling_relation)) {
				prev_relation.next_sibling = next_sibling;
			}
			if (isNotEmpty(next_sibling_relation)) {
				next_relation.prev_sibling = prev_sibling;
			}
			if (isNotEmpty(parent_relation) && parent_relation.child === id) {
				parent_relation.child = next_sibling;
			}

			delete live_relation_map[id];

			live_size_map[relation.parent]--;
		}

		function getShouldLevel({ id }) {}

		function clone() {
			return constructor({
				hierarchy_map: {
					relation: { ...live_relation_map },
					size: { ...live_size_map },
				},
			});
		}

		function apply({ hierarchy_map }) {
			live_relation_map = hierarchy_map.relation;
			live_size_map = hierarchy_map.size;
		}

		function get({ id }, index) {}

		const exports = {
			clone,
			apply,
			get,
			onInserted,
			onRemoved,
		};

		return Object.assign([exports], exports);
	}

	return constructor({});
}

export const useOutlineReducer = ({
	state = makeOutlineState(),
	hierarchy_analyzer = genHierarchyAnalyzer(),
} = {}) => {
	state.hierarchy_analyzer = hierarchy_analyzer;

	useMemo(() => {
		state.payloads.map(hierarchy_analyzer.onInserted);
	}, [...state.payloads]);

	const reducer = useReducer((state, action) => {
		if (action.type === "delete") {
			const { index } = action;
			const { payloads } = state;
			state.payloads.splice(index, 1);
			return { ...state, payloads };
		} else if (action.type === "save") {
			const { id, extra = () => ({}) } = action;
			const { records, payloads } = state;
			const extra_data = extra(state);

			records.set(id, payloads.slice());
			Object.getOwnPropertySymbols(extra_data).map((sym) => {
				records.set(sym, extra_data[sym]);
			});

			return { ...state, records };
		} else if (action.type === "restore") {
			const { id = [], extra = [] } = action;
			const { records } = state;

			records.delete(id);
			extra.map((id) => records.delete(id));

			return { ...state, records };
		} else if (action.type === "setBasedOn") {
			const { id, affect } = action;
			const payloads = affect(state.records.get(id).slice(), state);
			return { ...state, payloads };
		} else if (action.type === "set") {
			const { affect } = action;
			return { ...state, ...affect(state) };
		} else {
			return state;
		}
	}, state);
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
	const [Node, mapper] = useComponentIndexer(FlatNode);
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
			const init_payload_level_id = Symbol();
			const init_hierarchy_analyzer_id = Symbol();

			dispatch({
				type: "save",
				id,
				extra: ({ payloads, hierarchy_analyzer }) => ({
					[init_payload_level_id]: payloads[init_index].level,
					[init_hierarchy_analyzer_id]: hierarchy_analyzer.clone(),
				}),
			});

			const clean_move = listen("mousemove")(({ clientY }) => {
				const local_offset = (clientY - top_bound.y) % lineHeight;
				const live_index =
					(clientY - top_bound.y - local_offset) / lineHeight;
				dispatch({
					type: "set",
					affect({ records }) {
						const payloads = records.get(id).slice();
						const hierarchy_analyzer = records
							.get(init_hierarchy_analyzer_id)
							.clone();
						const init_payload = payloads[init_index];

						const prev_index = inArrayBound(payloads)(
							live_index - 1
						);
						const next_index = inArrayBound(payloads)(live_index);
						const prev_payload = payloads[prev_index];
						const next_payload = payloads[next_index];

						const live_is_parent = false;

						payloads.splice(init_index, 1);
						hierarchy_analyzer.onRemoved(
							init_payload,
							init_index,
							payloads
						);

						// payloads.splice(live_index, 0, init_payload);
						// hierarchy_analyzer.onInserted(
						// 	init_payload,
						// 	live_index,
						// 	payloads
						// );

						if (live_is_parent) {
						} else {
						}
						return {
							payloads: payloads,
							hierarchy_analyzer,
						};
					},
				});
			});

			const clean_up = listen("mouseup")(() => {
				clean_move();
				clean_up();
				dispatch({
					type: "restore",
					id,
					extra: [init_payload_level_id],
				});
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
			{state.payloads.map((payload) => (
				<Node key={payload.id} {...getNodeProps(payload, state)} />
			))}
		</div>
	);
};

function getNodeProps(payload, state) {
	const reducer = (relayed, [key, value]) => {
		if (state.relayed.has(key)) {
			relayed[key] = value;
		}
		return relayed;
	};
	const relayed_props = Object.entries(payload).reduce(reducer, {});
	const payload_props = payload.props;
	const meta_props = {
		id: payload.id,
		level: payload.level,
		can_expand: payload.can_expand,
	};

	if ("type_self" in payload) {
		meta_props.item_type = payload.type_self;
	} else {
		meta_props.item_type = state.item_type;
	}

	return {
		props: { ...payload_props, ...relayed_props },
		...meta_props,
	};
}
