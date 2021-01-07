#!/usr/bin/env node

const path = require("path");
const cypress = require("cypress");
const { exit } = require("process");
const { rollup } = require("rollup");
const jest = require("jest");

function getConfigOption() {
	return {};
}

async function transpile(option) {
	const bundle = await rollup(option);

	await bundle.write(option);
}

async function test() {
	// const { destination_paths } = transpile(
	// 	getConfigOption({ cwd: getModuleRootDirector() })
	// );
	jest.run();
}

test();

// process.chdir(path.resolve("./scripts"));

// console.log(
// 	jest.run([], path.join(process.cwd(), "./packages/jest-dom-case")),
// 	"@@@@@@"
// );
