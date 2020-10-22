import { useRef, useEffect } from "react";

export const useMapTo = (Component, indexer) => {
	return ({ ...props }) => {
		const ref = useRef();
		useEffect(() => {
			return indexer(ref.current, props);
		}, ref.current);
		return <Component {...props} ref={ref} />;
	};
};

export const useComponentIndexer = (Component) => {
	const dom_payload_map = new Map();
	const ComponentMapped = useMapTo(Component, (dom, payload) => {
		dom_payload_map.set(dom, payload);
		return () => {
			dom_payload_map.delete(dom);
		};
	});
	return [ComponentMapped, dom_payload_map];
};
