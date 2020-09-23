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
			return "define({}.__MUSTBEREPLACED,function (exports,require){";
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
	};
};
