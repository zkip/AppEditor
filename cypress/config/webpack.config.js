const path = require("path");

module.exports = {
	resolve: {
		alias: {
			"@": path.resolve(process.cwd(), "src"),
			"%": path.resolve(process.cwd(), "cypress"),
		},
	},
};
