useEffect(
	() => {
		console.log("@@@@");
		return listen("mousedown")(({ path, clientX, clientY }) => {
			const { payload, parentPayload } = getNodePayload(path);
			console.log(parentPayload, "@@@@@@@@s");
			if (payload) {
				const { dom } = payload;
				const bound = getDOMBound(dom.children[0]);
				const node_self_payload = {
					...payload.raw,
					children: [],
				};

				const ix = clientX,
					iy = clientY;

				const putThumb = () => {
					setDragComponent(() => ThumbDragger);
					setThumbDraggerProps({
						...thumbDraggerProps,
						bound,
						outline_props: { data: node_self_payload },
					});
				};

				const init_index = payload.raw.index;
				const parentPayloadChildren = parentPayload.children;

				let created = false;

				const outline_bound = outline_ref.current.getBoundingClientRect();

				const clean_move = listen("mousemove")(
					({ path, clientX, clientY }) => {
						const { payload } = getNodePayload(path);

						const livePayloadChildren = parentPayloadChildren.slice();

						if (!created) {
							created = true;
							putThumb();
						}

						if (payload) {
						}

						const local_offset =
							(iy - outline_bound.y) % lineHeight;

						const absolute_index =
							(clientY - outline_bound.y - local_offset) /
							lineHeight;

						const live_payload =
							livePayloadChildren[init_index - 1];

						console.log(absolute_index, "@@@@@@");

						// const [_payload] = livePayloadChildren.splice(
						// 	init_index - 1,
						// 	1
						// );
						// livePayloadChildren.splice(
						// 	absolute_index - 2,
						// 	0,
						// 	_payload
						// );

						console.log(
							livePayloadChildren,
							"----",
							absolute_index
						);

						const dx = clientX - ix,
							dy = clientY - iy;

						const live_bound = {
							...bound,
							x: bound.x,
							y: bound.y + dy,
						};

						const max_level_current = 10;

						const level = inBound(
							0,
							max_level_current + 1
						)(node_self_payload.level + dx / indent);

						setThumbDraggerProps({
							...thumbDraggerProps,
							bound: live_bound,
							outline_props: {
								data: { ...node_self_payload, level },
							},
						});

						parentPayload.raw.children = livePayloadChildren;

						// setIns({ ...ins });
					}
				);

				const clean_up = listen("mouseup")(() => {
					// parentPayload.children = parentPayload.raw.children;
					clean_move();
					clean_up();
					setDragComponent(() => () => null);
				});
			}
		});
	},
	[
		// actived_payload.dom,
		// ins,
		// setIns,
		// thumbDraggerProps,
		// setThumbDraggerProps,
	]
);

function getNodePayload(path) {
	let should_node,
		is_found = false,
		found_index = 0;

	for (let i = 0; i < 2; i++) {
		should_node = path[i];
		if (dom_payload_map.has(should_node)) {
			// Found.
			is_found = true;
			found_index = i;
			break;
		}
	}

	console.log(dom_payload_map, path, is_found);
	if (is_found) {
		// current payload
		const payload = dom_payload_map.get(should_node);
		const parentPayload_dom =
			should_node.parentNode && should_node.parentNode.parentNode;
		// parent payload
		const parentPayload = dom_payload_map.get(parentPayload_dom);

		if (should_node.children[0] === path[found_index - 1]) {
			// title parts
		} else {
			// children parts
		}

		return {
			payload,
			parentPayload,
		};
	} else {
		// Not found.
	}
	return {};
}
