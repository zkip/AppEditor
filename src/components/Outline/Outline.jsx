import { joinBySpace } from "@/utils/array";
import "./Outline.css";

export default ({ data, className, style, ...rest }) => {
	const cls = joinBySpace(className, "Outline");

	return <div className={cls}>sdfg</div>;
};
