import parseURL from "parse-url";

export const DEFAULT_PACKAGE_META = {};

/*
	PATTERN:
		(((http(s):)/)/)ADDRESS/(@SCOPE/)PACKAGE/(MODULE(,...))
*/
export function resolvePackageFiles(url, meta = DEFAULT_PACKAGE_META) {
	// const { protocol, href } = parseURL(url);
	// const { main } = meta;
	// if (protocol === "file") {

	// } else if (protocol === "http" || protocol === "https") {
	// }

	return {
		entry: `${url}/index.js`,
		style: `${url}/index.css`,
	};
}

export class Package {
	name = "";
	modules = new Map(); // { Module.name: Module }
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
