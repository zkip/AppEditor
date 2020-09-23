export const listen = (name, target = window, options = {}) => (fn) => {
	target.addEventListener(name, fn, options);
	return function clean() {
		target.removeEventListener(name, fn, options);
	};
};

export const noop = () => {};
