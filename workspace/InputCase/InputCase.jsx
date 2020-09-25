import "./InputCase.less";
import React, { useState } from "react";

export default function Box({ ...rest }) {
	const [text, setText] = useState("");
	const updateText = (e) => {
		setText(e.target.value);
	};
	return (
		<div>
			<input type="text" onInput={updateText} />
			<span>{text}</span>
		</div>
	);
}
