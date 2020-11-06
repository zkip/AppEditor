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
import http2 from "http2";
import stream, { Duplex, Readable, Writable } from "stream";
import { stdout } from "process";
import zlib from "zlib";
import { createDepleteStream } from "./streams";
import { Base64 } from "js-base64";

// async function start() {
// 	try {
// 		// await install("element-ui");
// 		await transpile("element-ui");
// 	} catch (err) {
// 		// throw Error(err.stderr);
// 		console.error(err);
// 	}
// 	console.log("compeleted.");
// }

// start();

function push(stream, filepath) {
	// stream.push
}

// const server = http2.createSecureServer({
// 	key: fs.readFileSync("localhost.key"),
// 	cert: fs.readFileSync("localhost.crt"),
// });

const server = http.createServer();

polka({ server })
	.use((req, res, next) => {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader(
			"Access-Control-Expose-Headers",
			"Package-Part, Package-Meta"
		);
		next();
	})
	.get("/assets/*", async (req, res) => {
		const path = req.path.replace(/\/assets\//, "");
		console.log(path, "-----------");
		const stream = fs.createReadStream(`workspace/packages/${path}`);
		stream.pipe(res);
	})
	.post("/module/:name", async (req, res) => {
		const { name = "" } = req.params;
		console.log(name, "requiring...");
		try {
			const { meta, module, assets } = await loadModule(name);
			res.setHeader("Package-Meta", Base64.encode(meta));
			module.pipe(res);
		} catch (err) {
			res.statusCode = 243;
			res.end();
		}
	})
	.delete("/module/:name", async (req, res) => {
		const { name = "" } = req.params;
		try {
			await dropModule(name);
		} catch (err) {
			res.statusCode = 243;
			res.end();
		}
	})
	.listen(3006, (err) => {
		if (err) throw err;
		console.error("Server has started.");
	});
