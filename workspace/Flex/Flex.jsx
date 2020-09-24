import "./Flex.less";
import { joinBySpace } from "./utils/array";

export default function Flex({ direction = "row", chidlren, ...rest }) {
	const className = joinBySpace("Flex", direction);
	return (
		<div className={className} {...rest}>
			{children}
		</div>
	);
}
