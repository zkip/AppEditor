webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/App.js":
/*!**********************!*\
  !*** ./pages/App.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Outline */ "./src/components/Outline/index.js");
/* harmony import */ var _components_Outline_Outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Outline/Outline */ "./src/components/Outline/Outline.jsx");
/* harmony import */ var _utils_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/fn */ "./src/utils/fn.js");
/* harmony import */ var public_workspace_Box_utils_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! public/workspace/Box/utils/array */ "./workspace/Box/utils/array.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\v_zhtaozhou\\projects\\AppEditor\\pages\\App.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Item = function Item(_ref) {
  var name = _ref.name;
  return __jsx("div", {
    className: "Item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, name);
};

_c = Item;
var config = {
  item_type: Item,
  payloads: [{
    id: "001",
    level: 0,
    props: {
      name: "Jackie"
    },
    can_expand: true
  }, {
    id: "002",
    level: 1,
    props: {
      name: "Tom"
    },
    can_expand: true
  }, {
    id: "003",
    level: 2,
    props: {
      name: "Tee"
    }
  }, {
    id: "005",
    level: 2,
    props: {
      name: "Juice"
    }
  }, {
    id: "008",
    level: 2,
    props: {
      name: "Alice"
    }
  }, {
    id: "007",
    level: 2,
    props: {
      name: "Bob"
    }
  }, {
    id: "090",
    level: 2,
    props: {
      name: "Jip"
    }
  }, {
    id: "022",
    level: 2,
    props: {
      name: "Thor"
    }
  }, {
    id: "055",
    level: 2,
    props: {
      name: "Iss"
    }
  }, {
    id: "004",
    level: 2,
    props: {
      name: "Hufed"
    },
    can_expand: true
  }, {
    id: "014",
    level: 3,
    props: {
      name: "Jud"
    }
  }, {
    id: "032",
    level: 3,
    props: {
      name: "Fck"
    }
  }, {
    id: "018",
    level: 1,
    props: {
      name: "Fip"
    }
  }, {
    id: "043",
    level: 2,
    props: {
      name: "Ioo"
    }
  }, {
    id: "102",
    level: 1,
    props: {
      name: "Liop"
    }
  }, {
    id: "103",
    level: 2,
    props: {
      name: "Lison"
    }
  }, {
    id: "104",
    level: 3,
    props: {
      name: "Lumien"
    }
  }, {
    id: "105",
    level: 3,
    props: {
      name: "Poplim"
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();

  var reducer = Object(_components_Outline_Outline__WEBPACK_IMPORTED_MODULE_2__["useOutlineReducer"])({
    state: Object(_components_Outline_Outline__WEBPACK_IMPORTED_MODULE_2__["makeOutlineState"])(config)
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "DragLayer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }, __jsx(_components_Outline__WEBPACK_IMPORTED_MODULE_1__["default"], {
    reducer: reducer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  })), __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }
  }, ""));
}, "Z3b+cbiYXiCxC4rIN8Q6qsFcXFY=", false, function () {
  return [_components_Outline_Outline__WEBPACK_IMPORTED_MODULE_2__["useOutlineReducer"]];
}));

var _c;

$RefreshReg$(_c, "Item");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQXBwLmpzIl0sIm5hbWVzIjpbIkl0ZW0iLCJuYW1lIiwiY29uZmlnIiwiaXRlbV90eXBlIiwicGF5bG9hZHMiLCJpZCIsImxldmVsIiwicHJvcHMiLCJjYW5fZXhwYW5kIiwicmVkdWNlciIsInVzZU91dGxpbmVSZWR1Y2VyIiwic3RhdGUiLCJtYWtlT3V0bGluZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMxQixTQUFPO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QkEsSUFBdkIsQ0FBUDtBQUNBLENBRkQ7O0tBQU1ELEk7QUFJTixJQUFNRSxNQUFNLEdBQUc7QUFDZEMsV0FBUyxFQUFFSCxJQURHO0FBRWRJLFVBQVEsRUFBRSxDQUNUO0FBQUVDLE1BQUUsRUFBRSxLQUFOO0FBQWFDLFNBQUssRUFBRSxDQUFwQjtBQUF1QkMsU0FBSyxFQUFFO0FBQUVOLFVBQUksRUFBRTtBQUFSLEtBQTlCO0FBQWtETyxjQUFVLEVBQUU7QUFBOUQsR0FEUyxFQUVUO0FBQUVILE1BQUUsRUFBRSxLQUFOO0FBQWFDLFNBQUssRUFBRSxDQUFwQjtBQUF1QkMsU0FBSyxFQUFFO0FBQUVOLFVBQUksRUFBRTtBQUFSLEtBQTlCO0FBQStDTyxjQUFVLEVBQUU7QUFBM0QsR0FGUyxFQUdUO0FBQUVILE1BQUUsRUFBRSxLQUFOO0FBQWFDLFNBQUssRUFBRSxDQUFwQjtBQUF1QkMsU0FBSyxFQUFFO0FBQUVOLFVBQUksRUFBRTtBQUFSO0FBQTlCLEdBSFMsRUFJVDtBQUFFSSxNQUFFLEVBQUUsS0FBTjtBQUFhQyxTQUFLLEVBQUUsQ0FBcEI7QUFBdUJDLFNB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QUFBQTtBQUFBO0FBQUEsS0FBTSxFQUFOLENBTEQsQ0FERDtBQVNBLENBZEQ7QUFBQSxVQUNpQkMsNkVBRGpCO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTE1MzRiNjU0OTlmZGYzNjhmOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPdXRsaW5lIGZyb20gXCJAL2NvbXBvbmVudHMvT3V0bGluZVwiO1xyXG5pbXBvcnQgeyBub2RlX21hcCwgZG9tX3BheWxvYWRfbWFwIH0gZnJvbSBcIkAvY29tcG9uZW50cy9PdXRsaW5lXCI7XHJcbmltcG9ydCB7IHVzZU91dGxpbmVSZWR1Y2VyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9PdXRsaW5lL091dGxpbmVcIjtcclxuaW1wb3J0IHsgbWFrZU91dGxpbmVTdGF0ZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvT3V0bGluZS9PdXRsaW5lXCI7XHJcbmltcG9ydCB7IHVzZU1hcFRvIH0gZnJvbSBcIkAvY29tcG9uZW50cy9PdXRsaW5lL091dGxpbmVcIjtcclxuaW1wb3J0IHsgbGlzdGVuIH0gZnJvbSBcIkAvdXRpbHMvZm5cIjtcclxuaW1wb3J0IHsgaW5Cb3VuZCB9IGZyb20gXCJwdWJsaWMvd29ya3NwYWNlL0JveC91dGlscy9hcnJheVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUsIHVzZVJlZHVjZXIsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSXRlbSA9ICh7IG5hbWUgfSkgPT4ge1xyXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIkl0ZW1cIj57bmFtZX08L2Rpdj47XHJcbn07XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcblx0aXRlbV90eXBlOiBJdGVtLFxyXG5cdHBheWxvYWRzOiBbXHJcblx0XHR7IGlkOiBcIjAwMVwiLCBsZXZlbDogMCwgcHJvcHM6IHsgbmFtZTogXCJKYWNraWVcIiB9LCBjYW5fZXhwYW5kOiB0cnVlIH0sXHJcblx0XHR7IGlkOiBcIjAwMlwiLCBsZXZlbDogMSwgcHJvcHM6IHsgbmFtZTogXCJUb21cIiB9LCBjYW5fZXhwYW5kOiB0cnVlIH0sXHJcblx0XHR7IGlkOiBcIjAwM1wiLCBsZXZlbDogMiwgcHJvcHM6IHsgbmFtZTogXCJUZWVcIiB9IH0sXHJcblx0XHR7IGlkOiBcIjAwNVwiLCBsZXZlbDogMiwgcHJvcHM6IHsgbmFtZTogXCJKdWljZVwiIH0gfSxcclxuXHRcdHsgaWQ6IFwiMDA4XCIsIGxldmVsOiAyLCBwcm9wczogeyBuYW1lOiBcIkFsaWNlXCIgfSB9LFxyXG5cdFx0eyBpZDogXCIwMDdcIiwgbGV2ZWw6IDIsIHByb3BzOiB7IG5hbWU6IFwiQm9iXCIgfSB9LFxyXG5cdFx0eyBpZDogXCIwOTBcIiwgbGV2ZWw6IDIsIHByb3BzOiB7IG5hbWU6IFwiSmlwXCIgfSB9LFxyXG5cdFx0eyBpZDogXCIwMjJcIiwgbGV2ZWw6IDIsIHByb3BzOiB7IG5hbWU6IFwiVGhvclwiIH0gfSxcclxuXHRcdHsgaWQ6IFwiMDU1XCIsIGxldmVsOiAyLCBwcm9wczogeyBuYW1lOiBcIklzc1wiIH0gfSxcclxuXHRcdHsgaWQ6IFwiMDA0XCIsIGxldmVsOiAyLCBwcm9wczogeyBuYW1lOiBcIkh1ZmVkXCIgfSwgY2FuX2V4cGFuZDogdHJ1ZSB9LFxyXG5cdFx0eyBpZDogXCIwMTRcIiwgbGV2ZWw6IDMsIHByb3BzOiB7IG5hbWU6IFwiSnVkXCIgfSB9LFxyXG5cdFx0eyBpZDogXCIwMzJcIiwgbGV2ZWw6IDMsIHByb3BzOiB7IG5hbWU6IFwiRmNrXCIgfSB9LFxyXG5cdFx0eyBpZDogXCIwMThcIiwgbGV2ZWw6IDEsIHByb3BzOiB7IG5hbWU6IFwiRmlwXCIgfSB9LFxyXG5cdFx0eyBpZDogXCIwNDNcIiwgbGV2ZWw6IDIsIHByb3BzOiB7IG5hbWU6IFwiSW9vXCIgfSB9LFxyXG5cdFx0eyBpZDogXCIxMDJcIiwgbGV2ZWw6IDEsIHByb3BzOiB7IG5hbWU6IFwiTGlvcFwiIH0gfSxcclxuXHRcdHsgaWQ6IFwiMTAzXCIsIGxldmVsOiAyLCBwcm9wczogeyBuYW1lOiBcIkxpc29uXCIgfSB9LFxyXG5cdFx0eyBpZDogXCIxMDRcIiwgbGV2ZWw6IDMsIHByb3BzOiB7IG5hbWU6IFwiTHVtaWVuXCIgfSB9LFxyXG5cdFx0eyBpZDogXCIxMDVcIiwgbGV2ZWw6IDMsIHByb3BzOiB7IG5hbWU6IFwiUG9wbGltXCIgfSB9LFxyXG5cdF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblx0Y29uc3QgcmVkdWNlciA9IHVzZU91dGxpbmVSZWR1Y2VyKHtcclxuXHRcdHN0YXRlOiBtYWtlT3V0bGluZVN0YXRlKGNvbmZpZyksXHJcblx0fSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkRyYWdMYXllclwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxPdXRsaW5lIHJlZHVjZXI9e3JlZHVjZXJ9IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8cHJlPntcIlwifTwvcHJlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==