import { tasks } from "$utils/async";
import { xhr } from "$utils/xhr";
import { firstInIter } from "$utils/array";
import { fallback, noop } from "$utils/fn";
import { deleteKeys, entries } from "$utils/object";
import { EMPTYSTRING } from "$utils/string";
import { Node, Meta, Module, Package } from "./umd_module_protocol";
import test_package from "./test_package";
import test_element_package from "./test_element_package";
import moment from "moment";
import react from "react";
import reactDOM from "react-dom";
import vue from "vue";
import { Base64 } from "js-base64";
import { isNotEmpty, isEmpty } from "$utils/asserts";

let _host;
let ready = false;

/**
 * type Node like Map{ Package.name: Package }
 */

const package_name_host_m = new Map(); // { Package.name: Set<Node.host> }
const node_host_m = new Map(); // { Node.host: Node }
const package_meta_m = new Map();
const exports_package_m = new Map(); // { Export.name: Set<Package> }
const dom_module_style_m = new Map(); // { Package.name: { Module.name: style_dom } }
const export_module = new Map(); // { Component.name: Map< [ Package.name ], [ Module.name ] > }

const fetching_process = {}; // { Package.name: bool isFetching }
const resolved_package = {}; // { Package.name: bool isResolved }

export async function load(package_name, host) {
	if (!ready) throw Error("It's not ready yet.");

	const package_process = fetching_process[package_name];

	if (!!package_process) {
		return await package_process;
	} else {
		const package_process = fetchPackage(package_name, host);
		fetching_process[package_name] = package_process;
		return await package_process;
	}
}

async function fetchPackage(package_name, host) {
	const url = [host, "module", package_name].join("/");
	const { response, getResponseHeader } = await xhr.post(url);

	const pkg_raw = getResponseHeader("Package-Meta");
	const pkg_decoded = Base64.decode(pkg_raw);
	const pkg_info = JSON.parse(pkg_decoded);

	const meta = { package_info: pkg_info, host };

	const style_task = async () => {
		const style_url = `${host}/assets/${package_name}/index.css`;
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
		// const module_style_map = fallback(new Map())(
		// 	dom_module_style_m.get(package_path)
		// );
		// dom_module_style_m.set(package_path, module_style_map);
		// module_style_map.set(module_path, link);
		try {
			await install();
		} catch (err) {
			console.log(err, "++++++++++");
		}
	};

	const script_task = async () => {
		function install() {
			return new Promise((rv, rj) => {
				const script = document.createElement("script");
				const segment = `define(${JSON.stringify(
					meta
				)},function (exports,require,module){\n`;
				const footer = `\n})`;
				const blob = new Blob([segment, response, footer], {
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

		const pkg = node_host_m.get(package_path);
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
			const pkg = node_host_m.get(package_path_found);
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
			const pkg = node_host_m.get(package_path);
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
	const pkg = node_host_m.get(package_path);

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

	node_host_m.delete(package_path);
	package_meta_m.delete(package_path);

	for (const [_, module_style_map] of dom_module_style_m) {
		for (const [_, style] of module_style_map) {
			style.remove();
		}
	}
	dom_module_style_m.delete(package_path);
}

export function getExports(package_name = "", host = "") {
	if (host === "") {
		if (package_name_host_m.has(package_name)) {
			const hosts = package_name_host_m.get(package_name);
			if (hosts.size === 1) {
				host = hosts.values().next().value;
			}
		} else {
			// node not found
		}
	}

	return node_host_m
		.get(host)
		.packages.get(package_name)
		.modules.get("default");
}

function define(inject_meta, module_def = noop) {
	const { package_info, host } = inject_meta;

	const package_name = package_info.name;

	const exports = {};
	const require = (module_name) => {
		console.log(module_name, "requring...");
	};
	module_def(exports, require, {});

	const node = fallback(new Node(host))(node_host_m.get(host));
	const module = {};
	const pkg = new Package(package_info);
	const hosts = fallback(new Set())(package_name_host_m.get(package_name));

	pkg.modules.set("default", module);
	node_host_m.set(host, node);
	node.packages.set(package_name, pkg);

	hosts.add(host);
	package_name_host_m.set(package_name, hosts);

	entries({
		...exports.__moduleExports,
		default: exports.default,
	})(([name, exported]) => {
		if (isEmpty(exported)) return;
		module[name] = exported;

		if (name === "default") return;
		const packages = fallback(new Set())(exports_package_m.get(name));
		packages.add(pkg);
		exports_package_m.set(name, packages);
	});
}

function getGlobal() {
	return window || global || {};
}
