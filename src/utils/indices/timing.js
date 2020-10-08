import { fallback } from "@/utils/fn";

const isPositive = function (n) {
	return 1 / n > 0;
};

export function TimingIndex(source) {
	function constructor(source = []) {
		const change_process = [];

		source.map((_, idx) => onInserted(idx));

		// id string, p uint
		function onInserted(index) {
			change_process.push(index);
			return change_process.length;
		}

		function onRemoved(index) {
			change_process.push(-index);
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

		return {
			onInserted,
			onRemoved,
			get,
		};
	}

	return constructor(source);
}

export default function proxy(source) {
	function constructor(source) {
		const host = [...source];
		const indexer = TimingIndex(host);

		function splice(start_position, delete_count = 0, ...append_items) {
			for (let i = 0; i < delete_count; i++) {
				indexer.onRemoved(start_position + i);
			}
			for (let i = 0; i < append_items.length; i++) {
				indexer.onInserted(start_position + i);
			}
			return Array.prototype.splice.call(
				host,
				start_position,
				delete_count,
				...append_items
			);
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
