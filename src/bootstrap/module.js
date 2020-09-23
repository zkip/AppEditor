import react from "react";
import { first, firstInSet } from "../utils/array";
import { isEmpty, isNotEmpty } from "../utils/asserts";
import { noop } from "../utils/fn";
import { entries } from "../utils/object";
import { EMPTYSTRING } from "../utils/string";

let _host;
let ready = false;

const module_m = new Map();
const module_meta = new Map();
const dom_module_style_m = new Map();
const dom_module_script_m = new Map();
const component_module = new Map(); // { Component.name: Set<Module.name> }

export function load(url) {
	if (!ready) return Promise.reject("It's not ready yet.");

	const script = document.createElement("script");
	script.src = url;

	return new Promise((rv, rj) => {
		script.onload = rv;
		script.onerror = rj;
		if (_host) {
			_host.appendChild(script);
		}
	});
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
	const module_name_list = component_module.get(name);
	if (module_name !== EMPTYSTRING) {
		const module = module_m.get(module_name);
		if (name !== EMPTYSTRING) {
			return module[name];
		} else {
			// TODO: Error handling
		}
	} else {
		if (isNotEmpty(module_name)) {
			if (module_name_list.size > 1) {
				console.error(
					`This component named ${name} was found in multiple modules, Please specify package name.`
				);
			} else {
				module_name = firstInSet(module_name_list);
				if (isNotEmpty(module_name)) {
					const module = module_m.get(module_name);
					if (name in module) {
					} else {
						if (name === module_name) {
							return module["default"];
						} else {
							return module[name];
						}
					}
				}
			}
		} else {
			component_module.set(name, new Set());
			// console.log("---");
		}
	}
	// return component_module_m[name] = module_name
}

export const DefaultComponent = () => <div>Default Component</div>;

function getModuleByComponentName() {}

function define(module = noop, pkg = { name: "" }) {
	const exports = {};
	const require = (module_name) => {
		if (module_name === "react") {
			return react;
		}
	};
	module(exports, require);
	module_m.set(pkg.name, exports);
	module_meta.set(pkg.name, pkg);

	// map component and module
	Object.entries(exports).map(([key, value]) => {
		if (key === "default") {
			key = pkg.name;
		}
		let module_name_list = component_module.get(key);
		if (isEmpty(module_name_list)) {
			module_name_list = new Set();
		}
		module_name_list.add(key);
		component_module.set(key, module_name_list);
	});
}

function getGlobal() {
	return window || global || {};
}
