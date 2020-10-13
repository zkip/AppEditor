import { ArrayMapper } from "@/types/ArrayMapper";
import { writable } from "svelte/store";

export function config({ item_type, payloads = [] } = {}) {
	return writable({ item_type, payloads: ArrayMapper(payloads) });
}
