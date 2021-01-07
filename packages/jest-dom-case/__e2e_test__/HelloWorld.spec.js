/**
 * @jest-environment jsdom
 */

// import HelloWorld from "~/components/";
import { render, fireEvent } from "@testing-library/svelte";
import { queryHelpers, screen } from "@testing-library/dom";

const queryAllByAttribute = (...args) =>
	queryHelpers.queryAllByAttribute.bind(null, ...args);

const timeout = async (ms) => await new Promise((rv) => setTimeout(rv, ms));

// test("Just a test", async () => {
// 	const { container } = render(HelloWorld);
// 	expect(container.querySelectorAll("[flag]")).toHaveLength(1);
// 	await timeout(1500);
// 	expect(container.querySelectorAll("[flag]")).toHaveLength(2);
// });

test("Input case", async () => {
	// const { getByText } = render(HelloWorld);
	// await fireEvent.input()
});
