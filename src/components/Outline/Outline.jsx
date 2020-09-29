import { joinBySpace } from "@/utils/array";
import { useRef, useEffect, forwardRef } from "react";
import "./Outline.css";

export const node_map = {};
export const dom_payload_map = new Map();

const indexWeight = (a, b) => {
	return a.index - b.index;
};

const Node = ({ data, top_payload }) => {
	const { name = "", id, level, children = [] } = data;
	const top_node = useRef();
	useEffect(() => {
		const payload = {
			name,
			id,
			children,
			dom: top_node.current,
			raw: data,
			top: top_payload,
		};
		node_map[id] = payload;
		dom_payload_map.set(top_node.current, payload);
		return () => {
			dom_payload_map.delete(top_node.current);
			delete node_map[id];
		};
	}, [top_node.current, data]);
	return (
		<div ref={top_node} className="node">
			<div className="title" style={{ paddingLeft: `${level * 20}px` }}>
				{name}
			</div>
			{children.length > 0 && (
				<div className="children">
					{children.map((data) => (
						<Node
							key={data.id}
							data={data}
							top_payload={top_payload}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default forwardRef(
	({ data = { name: "", children: [] }, className, style, ...rest }, ref) => {
		const cls = joinBySpace(className, "Outline");

		return (
			<div className={cls} ref={ref}>
				<Node data={data} top_payload={data} />
			</div>
		);
	}
);
