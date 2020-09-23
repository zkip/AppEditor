export function entries(obj) {
	return (fn) => Object.entries(obj).map(fn);
}
