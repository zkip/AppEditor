import { ArrayMapper } from "@/types/ArrayMapper";
import { isNotEmpty } from "@/utils/asserts";
import { fallback } from "@/utils/fn";
import { SvelteComponent } from "svelte";
import { writable } from "svelte/store";

import EmptyComponent from "./Empty";

export function config({
	state: { item_type = EmptyComponent, payloads = [] } = {},
	hierarchy_analyzer = genHierarchyAnalyzer(),
} = {}) {
	payloads.map(hierarchy_analyzer.onInserted);

	return writable({
		state: { item_type, payloads: ArrayMapper(payloads) },
		hierarchy_analyzer,
	});
}

export function Relation(id, { ...props } = {}) {
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

export function genHierarchyAnalyzer({} = {}) {
	function constructor({ hierarchy_map = { relation: {}, size: {} } } = {}) {
		let {
			relation: live_relation_map,
			size: live_size_map,
		} = hierarchy_map;

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

		function getHierarchyMap() {
			return hierarchy_map;
		}

		const exports = {
			clone,
			apply,
			onInserted,
			onRemoved,
			getHierarchyMap,
		};

		return Object.assign([exports], exports);
	}

	return constructor({});
}

export const DETAILD_BEFORE = 0;
export const DETAILD_In = 1;
export const DETAILD_AFTER = 2;

export const EMPTY_NUMBER = new Number();
