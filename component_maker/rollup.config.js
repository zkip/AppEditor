import path from "path";
import { babel } from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

const babelOptions = {
	presets: ["@babel/preset-env", "@babel/preset-react"],
};

const resolve = function (file_path) {
	return path.join(__dirname, file_path);
};

process.chdir("component_maker");

export default {
	input: resolve("workspace/example/index.js"),
	output: {
		file: resolve("dist/example/index.js"),
		format: "cjs",
	},
	plugins: [
		nodeResolve(),
		babel(babelOptions),
		commonjs(),
		replace({
			"process.env.NODE_ENV": JSON.stringify("production"),
		}),
	],
	external: ["react"],
};
