import {
	copyFileSync,
	createReadStream,
	createWriteStream,
	existsSync,
	mkdirSync,
	readFileSync,
} from "fs";
import { rollup } from "rollup";
import package_rollup_confjg from "../workspace/rollup.config.js";
import execa from "execa";
import { resolve } from "path";
import merge2 from "merge2";
import { BSON } from "bsonfy";
import { Readable } from "stream";

export async function install(module_name) {
	const yarn_process = execa(`yarn`, ["add", module_name]);
	const target_position = `workspace/package/${module_name}`;
	if (!existsSync(target_position)) {
		mkdirSync(target_position, { recursive: true });
	}
	const logFile = createWriteStream(`${module_name}/package.log`, {
		flags: "a",
	});
	yarn_process.stdout.pipe(logFile);
	await yarn_process;
}

export async function dropModule(module_name) {
	const target_position = `./${module_name}`;
	if (existsSync(target_position)) {
		const yarn_process = execa(`yarn`, ["remove", module_name]);
		const logFile = createWriteStream(`./${module_name}/package.log`, {
			flags: "a",
		});
		yarn_process.stdout.pipe(logFile);
		await yarn_process;
	}
}

export async function transpile(module_name) {
	const config = package_rollup_confjg({ module_name });
	const bundle = await rollup({ ...config });
	await bundle.write(config.output);
	copyFileSync(
		`./node_modules/${module_name}/package.json`,
		`./packages/${module_name}/package.json`
	);
}

export async function loadModule(module_name) {
	return await new Promise((rv, rj) => {
		const package_base = `workspace/packages/${module_name}`;
		const module = createReadStream(resolve(package_base, "index.js"));
		module.on("error", rj);
		module.on("ready", () => {
			const package_meta = readFileSync(
				resolve(package_base, "package.json")
			);

			// const meta = createReadStream(,);

			const dependices = resolveExternals(package_meta);
			// const dependence_streams = dependices.map((v) => v);

			const parts = [meta, ...dependices, module].filter(Boolean);
			const part_size_sequence = new Array(parts.length);

			for (let i = 0; i < dependices.length; i++) {
				const dep = dependices[i];
				part_size_sequence[i] = getDepSize(dep);
			}

			rv({
				chunk: merge2(...parts),
				parts: part_size_sequence,
			});
		});
	});
}

function getDepSize(stream) {
	return stream.readableLength;
}

function resolveExternals(meta) {
	const { name } = meta;
	return [];
}
