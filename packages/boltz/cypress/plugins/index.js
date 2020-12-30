/// <reference types="cypress" />
// ***********************************************************

// import zResolve from "@zrlps/rollup-plugin-resolve";

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
	const filePreprocessor = require("@bahmutov/cy-rollup");
	on("file:preprocessor", filePreprocessor());
};
