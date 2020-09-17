export default function genExportAnalyzer() {
	// filepath str: { isDefault exports }
	// The filepath is absolute or relative with cwd
	const cache_exports = new Map();

	async function getExports(id, ast) {
		if (cache_exports.has(id)) {
			return cache_exports.get(id);
		}

		const exports = {};
		let isDefault = false;

		for (const node of ast.body) {
			const { type, source } = node;

			if (type === "ExportAllDeclaration") {
				exports["*"] = source.value;
			} else if (type === "ExportDefaultDeclaration") {
				isDefault = true;
			} else if (type === "ExportNamedDeclaration") {
				if (node.declaration) {
					for (const declaration of node.declaration.declarations) {
						let { name } = declaration.id;
						exports[name] = "";
					}
				} else {
					for (const specifier of node.specifiers) {
						let { name } = specifier.exported;
						exports[name] = source ? source.value : "";
					}
				}
			}
		}

		const exportAnalysisResult = { isDefault, exports };

		cache_exports.set(id, exportAnalysisResult);

		return exportAnalysisResult;
	}

	return {
		getExports,
		clear() {
			cache_exports.clear();
		},
	};
}
