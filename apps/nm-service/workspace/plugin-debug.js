export default function debug() {
	return {
		resolveId(importer, importee) {
			if (importer.includes("mutationobserver-shim")) {
				console.log(importer, importee);
			}
		},
	};
}
