import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import zResolve from "@zrlps/rollup-plugin-resolve";
import vue from "rollup-plugin-vue";

import pkg from "./package.json";

export default {
	input: "src/index.js",
	output: [
		{
			intro: `const process = { env: { NODE_ENV: "production" } };`,
			exports: "named",
			file: pkg.main,
			format: "umd",
		},
		// {
		// 	intro: `const process = { env: { NODE_ENV: "production" } };`,
		// 	exports: "named",
		// 	file: "dist/element_rollup_compiled.js",
		// 	format: "umd",
		// },
		{
			intro: `const process = { env: { NODE_ENV: "production" } };`,
			exports: "named",
			name: "element",
			file: "dist/element_rollup_compiled.js",
			format: "umd",
		},
	],
	plugins: [
		commonjs({
			include: "node_modules/**",
		}),
		zResolve(),
		resolve({ jsnext: true, browser: true }),
		vue({ css: true }),
	],
};
