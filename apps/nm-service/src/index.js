import {
	install,
	loadModule,
	dropModule,
	transpile,
} from "./module_transpiler";
import polka from "polka";
import { BSON } from "bsonfy";
import fs, { createWriteStream, createReadStream } from "fs";
import http from "http";
import stream, { Duplex, Readable, Writable } from "stream";
import { stdout } from "process";
import zlib from "zlib";
import { createFullyStream } from "./streams";

// async function start() {
// 	process.chdir("workspace");
// 	try {
// 		await install("element-ui");
// 		await transpile("element-ui");
// 	} catch (err) {
// 		// throw Error(err.stderr);
// 		console.error(err);
// 	}
// 	console.log("compeleted.");
// }

// polka()
// 	.use((req, res, next) => {
// 		res.setHeader("Access-Control-Allow-Origin", "*");
// 		res.setHeader(
// 			"Access-Control-Expose-Headers",
// 			"Package-Part, Package-Meta"
// 		);
// 		next();
// 	})
// 	.post("/module/:name", async (req, res) => {
// 		const { name = "" } = req.params;
// 		console.log(name, "======");
// 		try {
// 			const { module, parts } = await loadModule(name);
// 			res.setHeader("Package-Parts", parts.join(","));
// 			module.pipe(res);
// 		} catch (err) {
// 			res.statusCode = 243;
// 			res.end();
// 		}
// 	})
// 	.delete("/module/:name", async (req, res) => {
// 		const { name = "" } = req.params;
// 		try {
// 			await dropModule(name);
// 		} catch (err) {
// 			res.statusCode = 243;
// 			res.end();
// 		}
// 	})
// 	.listen(3006, (err) => {
// 		if (err) throw err;
// 		console.error("Server has started.");
// 	});

// const fullyStream = createFullyStream(Buffer.from("Hello"));

// console.log(
// 	Buffer.from("Hello")
// 		.slice(0, 1)
// 		.toString(),
// 	"@@@@@@@"
// );
// fullyStream.pipe(stdout);

// console.log(fullyStream.read(2).toString());

// console.log(fullyStream, "===");

async function start() {
	const ff = createReadStream("./test.js");
	ff.resume();
	console.log(ff.read(2));
	// ff.on("data", (data) => {
	// 	console.log(data.toString());
	// });
}

start();

// ff.pipe(stdout);
