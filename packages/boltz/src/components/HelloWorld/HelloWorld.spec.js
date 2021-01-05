/// <reference types="cypress" />

import HelloWorld from "./HelloWorld.svelte";
import { mount } from "cypress-svelte-unit-test";

describe("Component with welcome", () => {
	it("shows greeting", () => {
		mount(HelloWorld);
		cy.contains("h1", "Hello World!");
	});
});
