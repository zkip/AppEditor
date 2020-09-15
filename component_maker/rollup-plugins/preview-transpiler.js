import { generate } from "escodegen";
import { isAbsolute } from "path";

function isExternal(filepath) {
	// The regex will matched: ., .., ./, ../
	if (isAbsolute(filepath) || /^\.\.?(?=\/)/.test(filepath)) {
		return false;
	}
	return true;
}

export default ({ meta }) => {
	const m = new Map();
	return {
		resolveId(importee, importer) {
			if (isExternal(importee)) {
				m.set(importer, importee);
				return {
					id: importee,
					external: true,
				};
			}
		},
		buildEnd() {
			console.log(m, "---------------", meta);
		},
		// transform(code, id) {
		// 	const ast = this.parse(code);
		// 	const transformed_ast = transform(ast);
		// 	const code_transpiled = generate(ast);
		// 	console.log(ast, "-----", transformed_ast);
		// 	console.log("--------------------------------");
		// 	console.log(code_transpiled);
		// 	return {
		// 		id,
		// 		code: code_transpiled,
		// 		moduleSideEffects: true,
		// 	};
		// },
	};
};

// function transform(ast) {
// 	let { body } = ast;
// 	body = body.filter(({ type }) => type !== "ImportDeclaration");
// 	ast.body = body;
// 	return ast;
// }
