define(function (e, t) {
	"use strict";
	function n(e) {
		return e && "object" == typeof e && "default" in e ? e : { default: e };
	}
	Object.defineProperty(e, "__esModule", { value: !0 });
	var r = n(t("react")),
		s = [],
		o = [];
	function a(e, a) {
		var d, t, i, n, r;
		function c() {
			var e = document.createElement("style");
			if ((e.setAttribute("type", "text/css"), a.attributes))
				for (
					var t = Object.keys(a.attributes), n = 0;
					n < t.length;
					n++
				)
					e.setAttribute(t[n], a.attributes[t[n]]);
			var r = "prepend" == d ? "afterbegin" : "beforeend";
			return i.insertAdjacentElement(r, e), e;
		}
		e &&
			"undefined" != typeof document &&
			((d = !0 === a.prepend ? "prepend" : "append"),
			(t = !0 === a.singleTag),
			(i =
				"string" == typeof a.container
					? document.querySelector(a.container)
					: document.getElementsByTagName("head")[0]),
			(r = t
				? (-1 === (n = s.indexOf(i)) &&
						((n = s.push(i) - 1), (o[n] = {})),
				  o[n] && o[n][d] ? o[n][d] : (o[n][d] = c()))
				: c()),
			65279 === e.charCodeAt(0) && (e = e.substring(1)),
			r.styleSheet
				? (r.styleSheet.cssText += e)
				: r.appendChild(document.createTextNode(e)));
	}
	a(".Example {\r\n\tborder: 1px solid rebeccapurple;\r\n}\r\n", {});
	a(
		".Example {\r\n\tfont-size: 34px;\r\n\tcolor: rebeccapurple;\r\n}\r\n",
		{}
	);
	e.default = function (e) {
		var t = e.age,
			n = void 0 === t ? 13 : t;
		return r.default.createElement(
			"div",
			{ className: "Example" },
			"Example,",
			n
		);
	};
}, {
	name: "Example",
	version: "1.0.0",
	module: "index.js",
	main: "index.js",
	license: "MIT",
	devDependencies: { resolve: "^1.17.0" },
});
