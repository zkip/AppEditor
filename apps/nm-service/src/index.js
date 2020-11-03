import { install, loadModule, transpile } from "./module_transpiler";
import polka from "polka";

async function start() {
	process.chdir("workspace");
	try {
		await install("element-ui");
		await transpile("element-ui");
	} catch (err) {
		// throw Error(err.stderr);
		console.error(err);
	}
	console.log("compeleted.");
}

polka()
	.get("/module/:name", async (req, res) => {
		const { name = "" } = req.params;
		if (name !== "") {
			try {
				const module = await loadModule(name);
				module.pipe(res);
			} catch (err) {
				res.end("HH");
			}
		}
	})
	.listen(3006, (err) => {
		if (err) throw err;
		console.error("Server has started.");
	});
