export { default } from "./Outline";
export * from "./types";

import test_types from "./types.test";
const result = test_types();
console.log(result, "test_types");
