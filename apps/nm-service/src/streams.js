import { Readable } from "stream";
export class StepedStream extends Readable {
	constructor(buffers, { step = 1, ...options } = {}) {
		super(options);
		this.position = 0;
		this.buffers = buffers;
		this.step = step;
	}

	_read() {
		if (this.position++ < 10) {
			this.push("Xx");
		}

		// // const end = this.position + this.step;
		// if (end <= this.buffers.length) {
		// 	this.push(this.buffers.slice(this.position, end));
		// 	this.position = end;
		// } else {
		// 	this.push(null);
		// }
	}
}
export class DepleteStream extends StepedStream {
	constructor(buffers, options) {
		super(buffers, { step: buffers.length, ...options });
	}
}

export function createDepleteStream(buffers, options) {
	return new DepleteStream(buffers, options);
}

export function createStepedStream(buffers, options) {
	return new StepedStream(buffers, options);
}
