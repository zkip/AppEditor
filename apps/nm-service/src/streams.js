import { Readable } from "stream";
export function createFullyStream(buffers, options) {
	return new FullyStream(buffers, options);
}

export class FullyStream extends Readable {
	constructor(buffers, options) {
		super(options);
		this.count = buffers.length;
		this.buffers = buffers;
	}

	_read(size) {
		console.log(this.buffers.length, size, "----------------");
		// if (this.count > 0) {
		this.push(this.buffers.slice(0, 1000000));
		// this.count -= this.buffers.length;
		// } else {
		// 	this.push(null);
		// }
	}
}
