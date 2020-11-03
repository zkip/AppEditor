import {
	copyFileSync,
	createReadStream,
	createWriteStream,
	existsSync,
	mkdirSync,
} from "fs";
import { rollup } from "rollup";
import package_rollup_confjg from "../workspace/rollup.config.js";
import execa from "execa";

export async function install(module_name) {
	const yarn_process = execa(`yarn`, ["add", module_name]);
	const target_position = `./${module_name}`;
	if (!existsSync(target_position)) {
		mkdirSync(target_position, { recursive: true });
	}
	const logFile = createWriteStream(`./${module_name}/package.log`, {
		flags: "a",
	});
	yarn_process.stdout.pipe(logFile);
	await yarn_process;
}

export async function drop(module_name) {
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
		const stream = createReadStream(
			`workspace/packages/${module_name}/index.js`
		);
		stream.on("error", rj);
		stream.on("ready", () => rv(stream));
	});
}
