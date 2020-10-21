const path = require("path");

// console.log("################", path.resolve(process.cwd(), "src/utils"));

module.exports = {
	resolve: {
		alias: {
			"@": path.resolve(process.cwd(), "src"),
			"%": path.resolve(process.cwd(), "cypress"),
		},
	},
};
