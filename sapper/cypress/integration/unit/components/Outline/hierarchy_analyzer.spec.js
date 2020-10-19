/// <reference types="cypress" />

import { genHierarchyAnalyzer } from "@/components/Outline/hierarchy_analyzer";
import will_success from "%/fixtures/payloads/will_success.json";
import will_fail from "%/fixtures/payloads/will_fail.json";

context("Outline", () => {
	it("Insert single subtree, will success.", () => {
		const hierarchy_analyzer = genHierarchyAnalyzer();

		const result = hierarchy_analyzer.onInserted(
			[0, will_success.length],
			will_success
		);

		expect(result).to.be.true;
	});

	it("Insert single subtree, will fail.", () => {
		const hierarchy_analyzer = genHierarchyAnalyzer();

		const result = hierarchy_analyzer.onInserted(
			[0, will_fail.length],
			will_fail
		);

		expect(result).to.be.false;
	});

	// it("Insert multi subtree.", () => {
	// 	const hierarchy_analyzer = genHierarchyAnalyzer();

	// 	const results = hierarchy_analyzer.onInserted(
	// 		[0, payloads.length],
	// 		payloads
	// 	);

	// 	console.log(results, "==", hierarchy_analyzer.getHierarchyMap());
	// });
});
