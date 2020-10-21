import { genHierarchyAnalyzer } from "./types";
const payloads = [
	{
		id: "001",
		level: 0,
		props: { name: "Jackie" },
		can_expand: true,
	},
	{ id: "002", level: 1, props: { name: "Tom" }, can_expand: true },
	// { id: "003", level: 2, props: { name: "Tee" } },
	// { id: "005", level: 2, props: { name: "Juice" } },
	// { id: "008", level: 2, props: { name: "Alice" } },
	// { id: "007", level: 2, props: { name: "Bob" } },
	// { id: "090", level: 2, props: { name: "Jip" } },
	// { id: "022", level: 2, props: { name: "Thor" } },
	// { id: "055", level: 2, props: { name: "Iss" } },
	{ id: "004", level: 2, props: { name: "Hufed" }, can_expand: true },
	{ id: "014", level: 3, props: { name: "Jud" } },
	{ id: "032", level: 3, props: { name: "Fck" } },
	{ id: "037", level: 4, props: { name: "Iuc" } },
	{ id: "038", level: 5, props: { name: "coop" } },
	{ id: "039", level: 5, props: { name: "Monk" } },
	{ id: "018", level: 1, props: { name: "Fip" } },
	{ id: "043", level: 2, props: { name: "Ioo" } },
	{ id: "102", level: 1, props: { name: "Liop" } },
	{ id: "103", level: 2, props: { name: "Lison" } },
	{ id: "104", level: 3, props: { name: "Lumien" } },
	{ id: "105", level: 3, props: { name: "Poplim" } },
];
export default () => {
	const hierarchy_analyzer = genHierarchyAnalyzer();

	const results = hierarchy_analyzer.onInserted(
		[0, payloads.length],
		payloads
	);

	const ha2 = hierarchy_analyzer.clone();
	const payloads_locked = payloads.slice();

	// const Jip = { id: "090", level: 5, props: { name: "Jip" } };
	// payloads_locked.splice(8, 0, Jip);
	// const result = hierarchy_analyzer.onInserted([8], payloads_locked);

	// const Hufed = payloads_locked[2];
	// console.log(Hufed, "===");

	const index = 1;
	const volume = hierarchy_analyzer.getVolume(index, payloads_locked);
	const culled = payloads_locked.splice(index, volume);
	hierarchy_analyzer.onRemoved(culled);

	const insert_index = 3;
	payloads_locked.splice(insert_index, 0, ...culled);
	const insert_results = hierarchy_analyzer.onInserted(
		[insert_index, culled.length],
		payloads_locked,
		2
	);

	// console.log("####", result);
	console.log("---------", results);
	console.log("--insert results--", insert_results);
	console.log(
		// result,
		// index,
		// volume,
		// hierarchy_analyzer.getVolume(2, payloads_locked),
		hierarchy_analyzer.getHierarchyMap().relation
		// ha2.getHierarchyMap().relation
	);

	return false;
};
