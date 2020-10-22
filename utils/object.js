export function entries(obj) {
	if (obj instanceof Map) {
		return (fn) => {
			let count = 0,
				done,
				value;
			const iter = obj.entries();
			while ((({ done, value } = iter.next()), !done)) {
				fn(value, count++);
			}
		};
	}
	return (fn) => Object.entries(obj).map(fn);
}

export function deleteKeys(...keys) {
	return (object) => {
		keys.map((key) => Reflect.deleteProperty(object, key));
		return object;
	};
}
