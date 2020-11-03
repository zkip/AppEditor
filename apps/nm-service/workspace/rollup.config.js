import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import zResolve from "@zrlps/rollup-plugin-resolve";

import debug from "./plugin-debug";

const bootstrap = (module_name) => {
	const template = `
		export * from "${module_name}";
		// export { default } from "${module_name}";
	`;
	return {
		name: "bootstrap",
		resolveId(source) {
			if (source === "#") {
				return source;
			}
			return null;
		},
		load(id) {
			if (id === "#") {
				return template;
			}
			return null;
		},
	};
};

export default ({ module_name }) => ({
	input: "#",
	output: {
		intro: `const process = { env: { NODE_ENV: "production" } };`,
		exports: "named",
		file: `./packages/${module_name}/index.js`,
		name: "bundle1",
		format: "umd",
	},

	plugins: [
		bootstrap(module_name),
		commonjs({
			include: "node_modules/**",
		}),
		debug(),
		// zResolve(),
		resolve({ jsnext: true, browser: true, preferBuiltins: false }),
	],
});

// const module_name = "antd";

// export default {
// 	input: "#",
// 	output: {
// 		intro: `const process = { env: { NODE_ENV: "production" } };`,
// 		exports: "named",
// 		file: `./packages/${module_name}/index.js`,
// 		name: "bundle1",
// 		format: "umd",
// 	},

// 	plugins: [
// 		bootstrap(module_name),
// 		commonjs({
// 			include: "node_modules/**",
// 		}),
// 		debug(),
// 		// zResolve(),
// 		resolve({ jsnext: true, browser: true }),
// 	],
// };
