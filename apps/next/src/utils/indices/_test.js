import TimingIndex from "./timing";

const rand = (min, max) => Math.random() * (max - min) + min;

const sym = Symbol();

const source = [1, 3, sym, 4];
const source_lazy = TimingIndex(source);
const timing = source_lazy.length;

// source_lazy.splice(0, 0, 12);

for (let i = 0; i < rand(0, 100) >> 0; i++) {
	const idx = rand(0, source_lazy.length) >> 0;
	let isAdd =
		rand(0, 1) > 0.5 && source_lazy.length > 1 && source_lazy[idx] !== sym;
	if (isAdd) {
		source_lazy.splice(idx, 1);
	} else {
		source_lazy.splice(idx, 0, rand(0, 100) >> 0);
	}
}

const finaly_index = source_lazy.get(2, timing);
console.log(
	source_lazy[finaly_index] === sym,
	finaly_index,
	source_lazy,
	timing
);
