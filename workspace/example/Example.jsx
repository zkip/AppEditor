import React, { useState } from "react";
import "./Example.less";

export default ({ age = 13 }) => {
	const [value, setValue] = useState(0);
	return (
		<div className="Example">
			Example,{age}:{age}
		</div>
	);
};

export const People = () => {
	return <div className="People">People</div>;
};
