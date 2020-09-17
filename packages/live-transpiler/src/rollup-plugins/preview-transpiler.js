import { generate } from "escodegen";
import { isAbsolute, resolve } from "path";

function isExternal(filepath) {
	// The regex will matched: ., .., ./, ../
	if (isAbsolute(filepath) || /^\.\.?(?=\/)/.test(filepath)) {
		return false;
	}
	return true;
}

export default ({ meta } = {}) => {
	return {
		banner() {
			return "define(function (exports,require){";
		},
		footer() {
			return `},${JSON.stringify(meta)})`;
		},
		resolveId(importee) {
			if (isExternal(importee)) {
				return {
					id: importee,
					external: true,
				};
			}
		},
		// renderChunk(code, chunk, options) {
		// 	return code.replace(
		// 		/exports\.([^\=\s]*)\s*=\s*([^\;]*);/g,
		// 		"exports.$1 = { meta, raw: $2 };"
		// 	);
		// },
	};
};
