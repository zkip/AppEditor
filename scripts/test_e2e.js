#!/usr/bin/env node

const path = require("path");
const cypress = require("cypress");
const { exit } = require("process");

cypress
	.run({
		project: path.resolve(process.cwd()),
		quiet: true,
		configFile: false,
		config: {
			video: false,
		},
	})
	.then(() => {
		exit();
	});
