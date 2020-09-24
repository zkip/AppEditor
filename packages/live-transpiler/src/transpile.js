import { rollup } from "rollup";
import previewTransipler from "./rollup-plugins/preview-transpiler";

import pkgResolve from "resolve";

import plugins from "./plugins";
import { argv, option } from "yargs";

import path, { resolve, dirname, join } from "path";

import { existsSync, statSync, readFileSync } from "fs";

const args = option("", {}).argv;

const { _ } = args;
const package_location = _.length > 0 ? _[0] : ".";
const cwd = process.cwd();
start();

async function start() {
	const { location } = getMeta(package_location);
	const module_location = dirname(location);
	const { pkg, entry } = await resolveModule(module_location);

	const default_entry_identity = "index";
	const output_option = {
		exports: "named",
		file: join(module_location, `live.prod/${default_entry_identity}.js`),
		format: "cjs",
		assetFileNames: `${default_entry_identity}.css`,
	};

	const [plugins_before, plugins_after] = plugins;

	const bundle = await rollup({
		input: entry,
		plugins: [
			...plugins_before,
			previewTransipler({ meta: pkg }),
			...plugins_after,
		],
	});

	await bundle.write(output_option);
}
async function resolveModule(start_location) {
	return new Promise((rv, rj) => {
		const abs_path = resolve(cwd, start_location);
		pkgResolve(abs_path, (err, entry, pkg) => {
			if (err) {
				rj(err);
			} else {
				rv({ pkg, entry });
			}
		});
	});
}

function getMeta() {
	if (package_location) {
		const abs_path = resolve(cwd, package_location);
		const meta_file_location = findMetaLocation(abs_path);

		if (meta_file_location) {
			const meta_buffer = readFileSync(meta_file_location);
			const meta = JSON.parse(meta_buffer);
			return { meta, location: meta_file_location };
		}
	} else {
		console.error("Cannot access the package location.");
	}
}

function findMetaLocation(start_location) {
	const find = (path) => {
		let is_found = false;
		const will_pkg_location = resolve(path, "package.json");
		const is_existed = existsSync(will_pkg_location);

		if (is_existed) {
			const stats = statSync(will_pkg_location);
			const is_file = stats.isFile();
			if (is_file) {
				is_found = true;
			}
		}

		if (is_found) {
			return will_pkg_location;
		} else {
			const parent_dir = parentDir(path);
			if (parent_dir !== path) {
				return findMetaLocation(parent_dir);
			} else {
				console.error("Cannot found meta file.");
			}
		}
	};
	return find(start_location);
}

function parentDir(path) {
	return resolve(path, "../");
}
