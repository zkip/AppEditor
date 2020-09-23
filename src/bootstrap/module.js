import { tasks } from "@/utils/async";
import { xhr } from "@/utils/xhr";
import react from "react";
import { first, firstInSet } from "../utils/array";
import { isEmpty, isNotEmpty } from "../utils/asserts";
import { noop } from "../utils/fn";
import { entries } from "../utils/object";
import { EMPTYSTRING } from "../utils/string";

let _host;
let ready = false;

const module_m = new Map();
const module_pkg = new Map();
const dom_module_style_m = new Map();
const dom_module_script_m = new Map();
const component_module = new Map(); // { Component.name: Set<Module.name> }

export async function load(url) {
	if (!ready) return Promise.reject("It's not ready yet.");

	const meta = { url };

	const style_url = url.replace(/\.js$/g, ".css");

	const link = document.createElement("link");

	const link_task = new Promise((rv, rj) => {
		link.href = style_url;
		link.setAttribute("rel", "stylesheet");
		link.onload = rv;
		link.onerror = rj;
		_host.appendChild(link);
	});

	const script_task = async () => {
		const { response } = await xhr.get(url);

		function install() {
			return new Promise((rv, rj) => {
				const script = document.createElement("script");
				const prefix = `define(${JSON.stringify(meta)}`;
				const blob = new Blob([prefix, response.slice(26)], {
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

	return await tasks([script_task(), link_task]);
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

export function getComponent(name = EMPTYSTRING, module_name = EMPTYSTRING) {
	if (module_name !== EMPTYSTRING) {
		const module = module_m.get(module_name);
		if (name !== EMPTYSTRING) {
			return module[name];
		} else {
			// TODO: Error handling
		}
	} else {
		const module_name_list = component_module.get(name);
		if (module_name_list > 1) {
			console.error(
				`This component named ${name} was found in multiple modules, Please specify package name.`
			);
		} else if (module_name_list.size > 0) {
			module_name = firstInSet(module_name_list);
			if (isNotEmpty(module_name)) {
				const module = module_m.get(module_name);
				const pkg = module_pkg.get(module_name);
				if (pkg.name === name) {
					name = "default";
				}
				if (name in module) {
					return module[name];
				} else {
					// TODO: Error handling
				}
			}
		} else {
			// TODO: Error handling
		}
	}
}

export const DefaultComponent = () => <div>Default Component</div>;

function getModuleByComponentName() {}

function define(meta, module = noop, pkg = { name: "" }) {
	const exports = {};
	const require = (module_name) => {
		if (module_name === "react") {
			return react;
		}
	};
	module(exports, require);

	module_m.set(meta.url, exports);
	module_pkg.set(meta.url, pkg);

	// map component and module
	entries(exports)(([key, value]) => {
		if (key === "default") {
			key = pkg.name;
		}
		let module_name_list = component_module.get(key);
		if (isEmpty(module_name_list)) {
			module_name_list = new Set();
		}
		module_name_list.add(meta.url);
		component_module.set(key, module_name_list);
	});
}

function getGlobal() {
	return window || global || {};
}
