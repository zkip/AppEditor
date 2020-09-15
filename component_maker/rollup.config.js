import path from "path";
import { babel } from "@rollup/plugin-babel";
import previewTranspiler from "./rollup-plugins/preview-transpiler";
import meta from "./workspace/example/package.json";

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
		exports: "named",
		file: resolve("dist/example/index.js"),
		format: "cjs",
	},
	plugins: [babel(babelOptions), previewTranspiler({ meta })],
	// external: ["react"],
};
