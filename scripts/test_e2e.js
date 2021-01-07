#!/usr/bin/env node

const path = require("path");
const cypress = require("cypress");
const { exit } = require("process");
const { existsSync } = require("fs");

const cwd = process.cwd();

function tryResolveConfigFile() {
	const will_file = "./cypress.json";
	if (existsSync(path.join(cwd, will_file))) {
		return will_file;
	} else {
		return false;
	}
}

function build() {}

cypress
	.run({
		project: path.resolve(cwd),
		quiet: true,
		configFile: tryResolveConfigFile(),
		config: {
			video: false,
		},
	})
	.then(() => {
		exit();
	});
