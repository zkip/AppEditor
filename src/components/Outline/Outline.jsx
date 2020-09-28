import { joinBySpace } from "@/utils/array";
import { useRef, useEffect } from "react";
import "./Outline.css";

export const node_map = {};
export const dom_payload_map = new Map();

const Node = ({ data }) => {
	const { name = "", id, children = [] } = data;
	const top_node = useRef();
	useEffect(() => {
		const payload = {
			name,
			id,
			children,
			dom: top_node.current,
			raw: data,
		};
		node_map[id] = payload;
		dom_payload_map.set(top_node.current, payload);
		return () => {
			delete dom_payload_map.delete(top_node.current);
			delete node_map[id];
		};
	}, [top_node.current, data]);
	return (
		<div ref={top_node} className="node">
			<div>{name}</div>
			{children.length > 0 && (
				<div className="children">
					{children.map((data) => (
						<Node key={data.id} data={data} />
					))}
				</div>
			)}
		</div>
	);
};

export default ({
	data = { name: "", children: [] },
	className,
	style,
	...rest
}) => {
	const cls = joinBySpace(className, "Outline");

	return (
		<div className={cls}>
			<Node data={data} />
		</div>
	);
};
