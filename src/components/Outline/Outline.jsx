import { joinBySpace, inBound, inArrayBound } from "@/utils/array";
import { listen } from "@/utils/fn";
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

function genHierarchyAnalyzer({ indexer = TimingIndex([]) } = {}) {
	function constructor({
		hierarchy_map = { relation: [], size: [] },
		timings = {},
		indexer,
	} = {}) {
		let {
			relation: live_relation_map,
			size: live_size_map,
		} = hierarchy_map;

		// type HierarchyNode Payload
		function onInserted({ level }, index, flat_tree) {
			const prev_index = inArrayBound(flat_tree)(index - 1);
			const prev_level = flat_tree[prev_index].level;
			const diff_level = level - prev_level;

			const timing = indexer.onInserted(index);
			timings[index] = timing;

			if (diff_level > 0) {
				if (index - live_relation_map.length > 0) {
					live_relation_map[index] = prev_index;
				} else {
					live_relation_map.splice(index, 0, prev_index);
				}
				if (prev_index - live_size_map.length > 0) {
					live_size_map[prev_index] = 1;
				} else {
					live_size_map.splice(prev_index, 0, 1);
				}
				// console.log(index, "---", prev_index);
				// live_size_map.splice(prev_index, 0, 1);
			} else if (diff_level === 0) {
				const parent_id = live_relation_map[prev_index];
				if (parent_id) {
					// live_relation_map[index] = parent_id;
					// live_size_map[parent_id]++;
					live_relation_map.splice(index, 0, parent_id);
					live_size_map[parent_id]++;
				}
			} else {
				const parent_index = getRecursiveIndex(prev_index, -diff_level);
				live_relation_map[index] = parent_index;
				live_size_map[parent_index]++;
			}
		}

		function getRecursiveIndex(index, count = 0) {
			const parent_index = live_relation_map[index];
			if (count > 0) {
				return getRecursiveIndex(parent_index, count - 1);
			} else {
				return parent_index;
			}
		}

		function onRemoved(_, index) {
			const parent_index = live_relation_map[index];
			live_relation_map.splice(index, 1);
			// live_relation_map[index] = undefined;
			live_size_map[parent_index]--;
			// live_size_map.splice(index, 1);
			indexer.onRemoved(index);
			const live_index = get(index);
			delete timings[live_index];
		}

		function getHierarchyMap() {
			return hierarchy_map;
		}

		function clone() {
			return constructor({
				hierarchy_map: {
					relation: [...live_relation_map],
					size: [...live_size_map],
				},
				timings: { ...timings },
				indexer: indexer.clone(),
			});
		}

		function apply({ hierarchy_map }) {
			live_relation_map = hierarchy_map.relation;
			live_size_map = hierarchy_map.size;
		}

		function get(index) {
			// console.log(timings, index, timings[index], "@@@@");
			return indexer.get(index, timings[index]);
		}

		const exports = {
			clone,
			apply,
			get,
			onInserted,
			onRemoved,
			getHierarchyMap,
		};

		return Object.assign([getHierarchyMap, exports], exports);
	}

	return constructor({ indexer });
}

export const useOutlineReducer = ({
	state = makeOutlineState(),
	hierarchy_analyzer = genHierarchyAnalyzer(),
} = {}) => {
	state.payloads.map(hierarchy_analyzer.onInserted);
	state.hierarchy_map = hierarchy_analyzer.getHierarchyMap();
	state.hierarchy_analyzer = hierarchy_analyzer;

	console.log(state.hierarchy_map);

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

			dispatch({
				type: "set",
				affect({ hierarchy_map }) {
					const { relation, size } = hierarchy_map;
					const parent_index = relation[init_index];
					// console.log(parent_index, "--");
				},
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
						const hierarchy_map = hierarchy_analyzer.getHierarchyMap();
						const init_payload = payloads[init_index];

						const prev_index = inArrayBound(payloads)(
							live_index - 1
						);
						const next_index = inArrayBound(payloads)(live_index);
						const prev_payload = payloads[prev_index];
						const next_payload = payloads[next_index];

						const {
							can_expand: can_expand_prev = false,
						} = prev_payload;
						const {
							can_expand: can_expand_next = false,
						} = next_payload;

						const { size, relation } = hierarchy_map;
						const live_parent_index = relation[live_index];
						const live_is_parent = isNotEmpty(size[live_index]);

						payloads.splice(init_index, 1);
						hierarchy_analyzer.onRemoved({}, init_index);

						payloads.splice(live_index, 0, init_payload);
						hierarchy_analyzer.onInserted(
							init_payload,
							live_index,
							payloads
						);
						const live_parent_index_fixed = hierarchy_analyzer.get(
							live_parent_index
						);
						console.log(
							init_payload ===
								payloads[hierarchy_analyzer.get(live_index)],
							live_parent_index_fixed,
							relation,
							size,
							"____________"
						);
						// console.log(live_parent_index_fixed, live_is_parent);

						// const should_level =
						// 	payloads[live_parent_index].level + 1;

						// const prev_level = prev_payload.level;
						// const live_level = records.get(init_payload_level_id);

						// const diff_level = live_level - prev_level;

						const payload = payloads[live_parent_index_fixed];
						// console.log(
						// 	payload,
						// 	live_parent_index_fixed,
						// 	payloads,
						// 	"888888"
						// );
						let should_level = payload.level + 1;
						if (live_is_parent) {
							should_level += 1;
							// if (live_index < init_index) {
							// 	init_payload.level = should_level;
							// } else {
							// 	init_payload.level = should_level + 1;
							// }
						} else {
							// const payload = payloads[live_parent_index_fixed];
							// const should_level = payload.level + 1;
							// init_payload.level = should_level;
							// if (live_index < init_index) {
							// 	init_payload.level = should_level;
							// } else if (live_index > init_index) {
							// 	init_payload.level =
							// 		payloads[live_parent_index - 1].level + 1;
							// }
						}

						init_payload.level = should_level;

						// console.log(payloads, "===", live_parent_index_fixed);

						if (live_is_parent) {
						} else {
							// init_payload.level = live_level;
						}

						// console.log(live_parent_index, live_is_parent);
						if (live_parent_index) {
							// is direction node
							// console.log(
							// 	live_parent_index,
							// 	relation,
							// 	live_index
							// );
							// const prev_index = inArrayBound(payloads)(
							// 	live_index - 1
							// );
							// const prev_payload = payloads[prev_index];
							// const prev_level = prev_payload.level;
							// const live_level = records.get(
							// 	init_payload_level_id
							// );
							// const diff_level = live_level - prev_level;
							// init_payload.level = should_level;
							// if (diff_level > 0) {
							// } else {
							// 	init_payload.level = live_level;
							// }
						}

						// if (can_expand_next) {
						// } else {
						// 	payloads.splice(init_index, 1);
						// 	payloads.splice(live_index, 0, init_payload);

						// 	const prev_index = inArrayBound(payloads)(
						// 		live_index - 1
						// 	);
						// 	const prev_payload = payloads[prev_index];
						// 	const prev_level = prev_payload.level;
						// 	const live_level = records.get(
						// 		init_payload_level_id
						// 	);

						// 	const diff_level = live_level - prev_level;

						// 	if (diff_level > 0) {
						// 		init_payload.level = prev_level + diff_level;
						// 	} else {
						// 		init_payload.level = live_level;
						// 	}
						// }

						return {
							payloads: payloads,
							hierarchy_map,
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
