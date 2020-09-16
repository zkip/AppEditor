import { rollup } from "rollup";

import config from "./unit.rollup.config";
import { argv } from "yargs";

console.log("Transpiling...", rollup, config, argv, process.cwd());
