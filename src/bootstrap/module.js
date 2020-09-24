import { tasks } from "@/utils/async";
import { xhr } from "@/utils/xhr";
import react from "react";
import { firstInIter } from "../utils/array";
import { fallback, noop } from "../utils/fn";
import { deleteKeys, entries } from "../utils/object";
import { EMPTYSTRING } from "../utils/string";
import {
	getLivePackageModulePath,
	isValidLivePackageURL,
	Module,
	Package,
	resolveLivePackageFiles,
} from "./live_module_protocol";

let _host;
let ready = false;

const package_m = new Map();
const package_meta_m = new Map();
const dom_module_style_m = new Map(); // { Package.name: { Module.name: style_dom } }
const export_module = new Map(); // { Component.name: Map< [ Package.name ], [ Module.name ] > }

export async function load(module_url) {
	if (!ready) throw Error("It's not ready yet.");

	if (!isValidLivePackageURL(module_url)) {
		throw Error(`"${module_url}" is a invalid live-package-url.`);
	}

	let { entry: entry_url, style: style_url } = resolveLivePackageFiles(
		module_url
	);

	const [package_path, module_path] = splitLivePackagePath(module_url);

	const meta = { url: module_url };

	const style_task = async () => {
		const link = document.createElement("link");
		function install() {
			return new Promise((rv, rj) => {
				link.href = style_url;
				link.setAttribute("rel", "stylesheet");
				link.onload = rv;
				link.onerror = rj;
				_host.appendChild(link);
			});
		}

		const module_style_map = fallback(new Map())(
			dom_module_style_m.get(package_path)
		);
		dom_module_style_m.set(package_path, module_style_map);
		module_style_map.set(module_path, link);

		await install();
	};

	const script_task = async () => {
		const { response } = await xhr.get(entry_url);

		function install() {
			return new Promise((rv, rj) => {
				const script = document.createElement("script");
				const segment = `define(${JSON.stringify(meta)}`;
				const blob = new Blob([segment, response.slice(26)], {
					type: "text/javascript",
				});
				const blob_url = URL.createObjectURL(blob);
				script.src = blob_url;
				script.onload = () => {
					script.remove();
					rv();
				};

				_host.appendChild(script);
			});
		}

		await install();
	};

	return await tasks([script_task(), style_task()]);
}

export function setup(host) {
	if (getGlobal().define !== define) {
		Object.assign(getGlobal(), {
			define,
		});
	} else {
		console.log("define function has exsited.");
	}
	if (!ready) {
		_host = host;
		ready = true;
	}
}

function splitLivePackagePath(path) {
	const [package_path, module_path = "default"] = path
		.split("#")
		.map((v, i) => (i === 1 ? v.trim() || "default" : v.trim()));
	return [package_path, module_path];
}

// module_path: PackageNoHashURL # ModuleNoHashURL
export function getExport(name = EMPTYSTRING, module_url = EMPTYSTRING) {
	if (module_url !== EMPTYSTRING) {
		const [package_path, module_path] = splitLivePackagePath(module_path);

		const pkg = package_m.get(package_path);
		const module = pkg.modules.get(module_path);
		if (name !== EMPTYSTRING) {
			if (module.has(name)) {
				return module.get(name);
			} else {
				// TODO: Error handling, Export Not Found.
			}
		} else {
			// TODO: Error handling
		}
	} else {
		let package_module_map_list,
			maybe_is_default = false;
		let is_default_export, package_path_found, module_path_found;
		if (export_module.has(name)) {
			package_module_map_list = export_module.get(name);
		} else if (export_module.has("default")) {
			package_module_map_list = export_module.get("default");
			maybe_is_default = true;
		} else {
			// TODO: Not Found.
			throw Error(`${name} Not Found.`);
		}

		if (maybe_is_default) {
			entries(package_module_map_list)(([package_path, module_path]) => {
				if (!is_default_export) {
					const meta = package_meta_m.get(package_path);
					if (meta.name === name) {
						package_path_found = package_path;
						module_path_found = module_path;
						is_default_export = true;
					}
				}
			});
		}

		if (is_default_export) {
			const pkg = package_m.get(package_path_found);
			const module = pkg.modules.get(module_path_found);
			if (module.has("default")) {
				return module.get("default");
			} else {
				// TODO: default has be without exported.
			}
		}

		if (package_module_map_list.size > 1) {
			console.error(
				`This component named ${name} was found in multiple modules, Please specify package name.`
			);
		} else if (package_module_map_list.size > 0) {
			const [package_path, module_path] = firstInIter(
				package_module_map_list
			);
			const pkg = package_m.get(package_path);
			const module = pkg.modules.get(module_path);
			if (module.has(name)) {
				return module.get(name);
			} else {
				// TODO: Error handling, Export Not Found.
			}
		} else {
			// TODO: Not Found.
		}
	}
}

export function dropModule(module_url = EMPTYSTRING) {
	const [package_path, _] = splitLivePackagePath(module_url);
	const pkg = package_m.get(package_path);

	for (const [_, module] of pkg.modules) {
		for (const [export_name] of module) {
			const package_module_map_list = export_module.get(export_name);
			if (package_module_map_list.size < 2) {
				export_module.delete(export_name);
			} else {
				package_module_map_list.delete(package_path);
			}
		}
	}

	package_m.delete(package_path);
	package_meta_m.delete(package_path);

	for (const [_, module_style_map] of dom_module_style_m) {
		for (const [_, style] of module_style_map) {
			style.remove();
		}
	}
	dom_module_style_m.delete(package_path);
}

export function getExports(module_url = EMPTYSTRING) {
	const [package_path, module_path] = splitLivePackagePath(module_url);
	const pkg = package_m.get(package_path);
	return [module_path, pkg.modules.get(module_path)];
}

export const DefaultComponent = () => <div>Default Component</div>;

function define(inject_meta, module_def = noop, package_meta = { name: "" }) {
	const exports = {};
	const require = (module_name) => {
		if (module_name === "react") {
			return react;
		}
	};
	module_def(exports, require);

	const [package_path, module_path] = getLivePackageModulePath(
		inject_meta.url
	);
	const module = new Module();
	const pkg = new Package();
	package_m.set(package_path, pkg);
	pkg.modules.set(module_path, module);

	// map exports and module
	entries(exports)(([key, value]) => {
		if (key === "default") {
			key = package_meta.name;
		}
		const module_package_map_list = fallback(new Map())(
			export_module.get(key)
		);
		export_module.set(key, module_package_map_list);
		module_package_map_list.set(package_path, module_path);
		module.set(key, value);
	});

	package_meta_m.set(package_path, package_meta);
}

function getGlobal() {
	return window || global || {};
}
