import React from "react";
import moment, { mo } from "moment";
import { joinBySpace } from "./lib/arr";
import Other from "./Other.jsx";

export default () => {
	console.log(joinBySpace("X", "A", "B"));
	return (
		<div>
			This is a exmaple.<Other>sdef</Other>
		</div>
	);
};

function HellO() {}
