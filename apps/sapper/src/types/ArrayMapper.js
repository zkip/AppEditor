export function ArrayMapper(array = []) {
	function constructor({ list, map = {} }) {
		list.map((item) => (map[item.id] = item));

		function clone() {
			return constructor({ list: list.slice(), map: {} });
		}

		function remove(id) {
			delete map[id];
		}

		function splice(start_position, delete_count, ...append_items) {
			const be_culled = list.splice(
				start_position,
				delete_count,
				...append_items
			);

			be_culled.map(({ id }) => remove(id));

			return be_culled;
		}

		function map(...args) {
			return list.map(...args);
		}

		function get(id) {
			return map[id];
		}

		return {
			get,
			clone,
			remove,
			splice,
			list,
			map,
		};
	}

	return constructor({ list: array });
}
