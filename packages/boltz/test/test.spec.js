import Test from "../src/components/Test/Test.svelte";

import { render, fireEvent } from "@testing-library/svelte";

const sleep = (ms) => new Promise((rv) => setTimeout(rv, ms));

it("it workds.", async () => {
	const { get } = render(Test, { i: 100 });
	const element = getAllByRole("div");
	// console.log(
	// 	element.innerHTML,
	// 	// element.previousElementSibling.innerHTML,
	// 	"================================"
	// );
});
