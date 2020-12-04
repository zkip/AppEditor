import VueComponent from "@/components/VueComponent";
import { useState } from "react";

export default () => {
	const [shadow, setShadow] = useState("always");
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>increase</button>
			<select
				value={shadow}
				onChange={(e) => {
					setShadow(e.target.value);
				}}
			>
				<option value="hover">hover</option>
				<option value="always">always</option>
				<option value="never">never</option>
			</select>
			<VueComponent
				name="Card"
				props={{
					shadow,
				}}
				slots={{
					header: [<div key={1}>Welcome.</div>, <h1 key={2}>X</h1>],
					default: [<div key={1}>Hello V.{count}</div>],
				}}
			/>
		</div>
	);
};
