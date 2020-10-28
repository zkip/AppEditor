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
		entry: "packages/antd/index.js",
		style: "packages/antd/index.css",
	};
}
