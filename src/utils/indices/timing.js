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
	const indexer = TimingIndex(source);

	return Object.assign([...source], {
		splice()
	})
}
