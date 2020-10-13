import { fallback } from "@/utils/fn";

const isPositive = function (n) {
	return 1 / n > 0;
};

export function TimingIndex(source) {
	function constructor({ source = [], change_process = [] } = {}) {
		const init_timing = source.map((_, idx) => onInserted(idx));

		// id string, p uint
		function onInserted(index) {
			change_process.push(index);
			return change_process.length;
		}

		function onRemoved(index) {
			change_process.push(-index);
			// console.log(change_process, "@@@@@@@@");
		}

		function has(index, timing) {}

		function get(index, timing) {
			let position = index;
			for (let i = timing; i < change_process.length; i++) {
				const cp = change_process[i];
				if (isPositive(cp)) {
					if (position >= cp) {
						position++;
					}
				} else {
					if (position > -cp) {
						position--;
					}
				}
			}

			return position;
		}

		function getInitTiming() {
			return init_timing;
		}

		function clone() {
			return constructor({ source, change_process: [...change_process] });
		}

		return {
			clone,
			onInserted,
			onRemoved,
			get,
			getInitTiming,
		};
	}

	return constructor({ source });
}

export default function proxy(source) {
	function constructor(source) {
		const host = [...source];
		const indexer = TimingIndex(host);

		function splice(start_position, delete_count = 0, ...append_items) {
			const timing_items = new Array(append_items.length);
			for (let i = 0; i < delete_count; i++) {
				indexer.onRemoved(start_position + i);
			}
			for (let i = 0; i < append_items.length; i++) {
				const index = start_position + i;
				const timing = indexer.onInserted(index);
				timing_items[i] = [index, timing];
			}
			const effected_items = Array.prototype.splice.call(
				host,
				start_position,
				delete_count,
				...append_items
			);

			return Object.assign(effected_items, {
				timing: timing_items,
			});
		}

		function clone() {
			return constructor(host);
		}

		function get(index, timing) {
			return indexer.get(index, timing);
		}

		return Object.assign(host, {
			splice,
			clone,
			get,
		});
	}

	return constructor(source);
}
