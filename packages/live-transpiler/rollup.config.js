import cli from "rollup-plugin-cli";

export default {
	input: "src/transpile",
	output: {
		file: "cli/transpile",
		format: "cjs",
		banner: "#!/usr/bin/env node\n",
	},
	plugins: [cli()],
};
