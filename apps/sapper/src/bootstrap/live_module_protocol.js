import parseURL from "parse-url";

export function isValidLivePackageURL(url) {
	return true;
}

const SHOULD_BE_ENTRY_FILE = "index.js";
const SHOULD_BE_STYLE_FILE = "index.css";
const MODULE_IDENTITY_SEGMENT = "live.prod";

/*
	The url must be refers to Module or Package-In-Module, it's forbid for file directly.

	Package-In-Module: eg.
		http://a.b.c/package/live.prod/module
		/package/live.prod/module
		package/live.prod/module
		@package/live.prod/module
*/
export function resolveLivePackageFiles(url) {
	const { protocol, href } = parseURL(url);

	if (protocol === "file") {
		// refers to this web server, its protocol is http.
		if (/(live.prod\/.+)$/.test(href)) {
			// refers to package-in-module
		} else {
			// refers to default module.
			const before = [href, MODULE_IDENTITY_SEGMENT];

			const entry = [...before, SHOULD_BE_ENTRY_FILE].join("/");
			const style = [...before, SHOULD_BE_STYLE_FILE].join("/");
			return { entry, style, raw: [] };
		}
		// console.log(href, pathname, resource);
	} else if (protocol === "http" && protocol === "https") {
		// any web server, include itself.
	}
}

export function getLivePackageModulePath(url) {
	const {
		protocols,
		protocol,
		href,
		pathname,
		port,
		query,
		hash,
		resource,
		search,
		user,
	} = parseURL(url);

	if (protocol === "file") {
		// refers to this web server, its protocol is http.
		if (/(live.prod\/.+)$/.test(href)) {
			// refers to package-in-module
			const [package_path, module_path] = href.split("live.prod/");
			return [package_path, module_path];
		} else {
			// refers to default module.
			return [url, "default"];
		}
	} else if (protocol === "http" && protocol === "https") {
		// any web server, include itself.
	}
}

export class Package {
	modules = new Map();
}

export class Module extends Map {
	name = "";
}
