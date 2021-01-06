/**
 * @jest-environment jsdom
 */

import HelloWorld from "./HelloWorld.svelte";
import { render } from "@testing-library/svelte";
import { queryHelpers, screen } from "@testing-library/dom";

const queryAllByAttribute = (...args) =>
	queryHelpers.queryAllByAttribute.bind(null, ...args);

const timeout = async (ms) => await new Promise((rv) => setTimeout(rv, ms));

describe("Component with welcome", () => {
	it("shows greeting", async () => {
		const { container } = render(HelloWorld);
		// expect(getByText("Hello World!")).toBeInTheDocument();

		const results = container.querySelectorAll("*[flag]");

		expect(results).toHaveLength(1);

		await timeout(1500);
		console.log(
			container.querySelectorAll("*[flag]"),
			container.querySelectorAll("*")
		);
		// expect(container.querySelectorAll("*[flag]")).toHaveLength(2);
	});
});
