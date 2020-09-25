// Array Generator
export const repeat = (count, fn) => {
	return Array.prototype.map.call(" ".repeat(count), (_, idx) => fn(idx));
};

export const joinBySpace = (...cls) => cls.filter(Boolean).join(" ");

export const add = (a, b) => a.map((a, i) => b[i] + a);

export const last = (arraylike) => arraylike[arraylike.length - 1];

export const first = (arraylike) => arraylike[0];

export const inBound = (min, max) => (v) => Math.max(min, Math.min(v, max));

export const inArrayBound = ({ length }) => inBound(0, length - 1);

export const firstInIter = (set) => set.entries().next().value;
