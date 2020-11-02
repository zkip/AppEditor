import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import zResolve from "@zrlps/rollup-plugin-resolve";
import json from "@rollup/plugin-json";

import pkg from "./package.json";
import debug from "./plugin-debug";

export default {
	input: "src/index.js",
	output: [
		{
			intro: `const process = { env: { NODE_ENV: "production" } };`,
			exports: "named",
			file: pkg.main,
			name: "elementxxx",
			format: "umd",
		},
	],
	plugins: [
		commonjs({
			include: "node_modules/**",
		}),
		debug(),
		zResolve(),
		resolve({ jsnext: true, browser: true }),
		json(),
	],
};
