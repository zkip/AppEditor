import { babel } from "@rollup/plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import styles from "./rollup-plugins/styles";

const babelOptions = {
	babelHelpers: "bundled",
	presets: ["@babel/preset-env", "@babel/preset-react"],
};

export default [
	[
		styles({
			mode: "extract",
			// ... or with relative to output dir/output file's basedir (but not outside of it)
			// less: ["less"],
		}),
		babel(babelOptions),
	],
	[uglify()],
];
