// package.json
export class Meta {
	name = "";
}

export class Package {
	meta = new Meta();
	modules = new Map(); // { Module.name: Module }
	constructor(meta) {
		this.meta = meta;
	}
}

export class Module extends Map {
	name = "";
}

export class Node {
	name = "";
	host = "";
	packages = new Map(); // { Package.name: Package }
	constructor(host) {
		this.host = host;
	}
}
