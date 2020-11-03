import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import zResolve from "@zrlps/rollup-plugin-resolve";
import json from "@rollup/plugin-json";
import builtins from "builtin-modules";

import pkg from "./package.json";

const pkg_externals = Object.keys(pkg.dependencies);

export default {
	input: "src/index.js",
	output: {
		exports: "named",
		file: pkg.main,
		format: "cjs",
	},
	external: [...builtins, ...pkg_externals],
	plugins: [
		commonjs({
			transformMixedEsModules: true,
			// ignore: ["@yarnpkg/cli"],
		}),
		// zResolve({
		// 	variables: {
		// 		workspace: "workspace",
		// 	},
		// }),
		resolve({ preferBuiltins: true }),
		json(),
	],
};
