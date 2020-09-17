import { babel } from "@rollup/plugin-babel";
import { uglify } from "rollup-plugin-uglify";

const babelOptions = {
	babelHelpers: "bundled",
	presets: ["@babel/preset-env", "@babel/preset-react"],
};

export default [[babel(babelOptions)], [uglify()]];
