module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/App.js":
/*!**********************!*\
  !*** ./pages/App.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Outline */ "./src/components/Outline/index.js");
/* harmony import */ var _components_Outline_Outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Outline/Outline */ "./src/components/Outline/Outline.jsx");
/* harmony import */ var _utils_fn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/fn */ "./src/utils/fn.js");
/* harmony import */ var public_workspace_Box_utils_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! public/workspace/Box/utils/array */ "./workspace/Box/utils/array.js");
var _jsxFileName = "C:\\Users\\v_zhtaozhou\\projects\\AppEditor\\pages\\App.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Item = ({
  name
}) => {
  return __jsx("div", {
    className: "Item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, name);
};

const config = {
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
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const reducer = Object(_components_Outline_Outline__WEBPACK_IMPORTED_MODULE_2__["useOutlineReducer"])({
    state: Object(_components_Outline_Outline__WEBPACK_IMPORTED_MODULE_2__["makeOutlineState"])(config)
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "DragLayer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }, __jsx(_components_Outline__WEBPACK_IMPORTED_MODULE_1__["default"], {
    reducer: reducer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  })), __jsx("pre", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }
  }, ""));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./pages/App.js");
/* harmony import */ var _shared_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/global.css */ "./shared/global.css");
/* harmony import */ var _shared_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shared_global_css__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./shared/global.css":
/*!***************************!*\
  !*** ./shared/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Outline/Outline.css":
/*!********************************************!*\
  !*** ./src/components/Outline/Outline.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Outline/Outline.jsx":
/*!********************************************!*\
  !*** ./src/components/Outline/Outline.jsx ***!
  \********************************************/
/*! exports provided: node_map, dom_payload_map, getPayload, makeOutlineState, useOutlineReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "node_map", function() { return node_map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom_payload_map", function() { return dom_payload_map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayload", function() { return getPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeOutlineState", function() { return makeOutlineState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOutlineReducer", function() { return useOutlineReducer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/array */ "./src/utils/array.js");
/* harmony import */ var _utils_fn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/fn */ "./src/utils/fn.js");
/* harmony import */ var _Outline_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Outline.css */ "./src/components/Outline/Outline.css");
/* harmony import */ var _Outline_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Outline_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_uses_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/uses/mapper */ "./src/utils/uses/mapper.js");
/* harmony import */ var _utils_indices_timing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/indices/timing */ "./src/utils/indices/timing.js");
/* harmony import */ var _utils_asserts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/asserts */ "./src/utils/asserts.js");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\v_zhtaozhou\\projects\\AppEditor\\src\\components\\Outline\\Outline.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const node_map = {};
const dom_payload_map = new Map();

const Node = ({
  data,
  top_payload
}) => {
  const {
    name = "",
    id,
    level,
    children = []
  } = data;
  const top_node = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const payload = {
      name,
      id,
      children,
      dom: top_node.current,
      raw: data,
      top: top_payload
    };
    node_map[id] = payload;
    dom_payload_map.set(top_node.current, payload);
    return () => {
      dom_payload_map.delete(top_node.current);
      delete node_map[id];
    };
  }, [top_node.current, data]);
  return __jsx("div", {
    ref: top_node,
    className: "node",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "title",
    style: {
      paddingLeft: `${level * 20}px`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }
  }, name), children.length > 0 && __jsx("div", {
    className: "children",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, children.map(data => __jsx(Node, {
    key: data.id,
    data: data,
    top_payload: top_payload,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }))));
};

function getPayload() {}
const FlatNode = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((_ref = {}, ref) => {
  let {
    item_type,
    level = 0,
    props = {}
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["item_type", "level", "props"]);

  const Item = item_type;
  return __jsx("div", {
    className: "node",
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "title",
    style: {
      paddingLeft: `${level * 20}px`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(Item, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 6
    }
  }))));
});
const lineHeight = 20;

function ArrayMapper(array) {
  function constructor({
    list,
    map = {}
  }) {
    list.map(item => map[item.id] = item);

    function clone() {
      return constructor({
        list: list.slice(),
        map: {}
      });
    }

    function remove(id) {
      delete map[id];
    }

    function splice(start_position, delete_count, ...append_items) {
      const be_culled = list.splice(start_position, delete_count, ...append_items);
      be_culled.map(({
        id
      }) => remove(id));
      return be_culled;
    }

    function map(...args) {
      return list.map(...args);
    }

    function get(id) {
      return map[id];
    }

    return {
      get,
      clone,
      remove,
      splice,
      list,
      map
    };
  }

  return constructor({
    list: array
  });
} // type Payload { id, level, can_expand, type_self, props }
// type PayloadList []Payload


const makeOutlineState = ({
  item_type = null,
  payloads = [],
  relayed = new Set(["id", "level"])
} = {}) => {
  return {
    hierarchy_map: {},
    item_type,
    payloads: ArrayMapper(payloads),
    relayed,
    records: new Map()
  };
};

function Relation(id, _ref2) {
  let props = Object.assign({}, _ref2);
  return Object.assign({
    id,
    next_sibling: undefined,
    prev_sibling: undefined,
    parent: undefined,
    child: undefined
  }, props);
}

function genHierarchyAnalyzer({} = {}) {
  function constructor({
    hierarchy_map = {
      relation: {},
      size: {}
    }
  } = {}) {
    let {
      relation: live_relation_map,
      size: live_size_map
    } = hierarchy_map; // console.log(live_size_map);
    // type HierarchyNode Payload

    function onInserted({
      level,
      id
    }, index, payloads) {
      const is_first = index === 0;
      const is_top = level === 0;
      const is_last = index === payloads.length - 1;
      const prev_index = index - 1;
      const next_index = index + 1;
      const prev_id = is_first ? undefined : payloads[prev_index].id;
      const next_id = is_last ? undefined : payloads[next_index].id;
      const prev_payload = payloads[prev_index];
      const prev_level = !is_first && prev_payload.level;
      const diff_level = !is_first && level - prev_level;
      const prev_relation = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_2__["fallback"])(Relation(id))(live_relation_map[prev_id]);
      const next_relation = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_2__["fallback"])(Relation(id))(live_relation_map[next_id]);
      const relation = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_2__["fallback"])(Relation(id))(live_relation_map[id]);

      if (diff_level > 0) {
        prev_relation.child = id;
        relation.parent = is_first || is_top ? undefined : prev_id;

        if (!is_last && relation.parent === next_relation.parent) {
          next_relation.prev_sibling = id;
        }
      } else if (diff_level === 0) {
        relation.prev_sibling = prev_id;
        relation.parent = is_first || is_top ? undefined : prev_relation.parent;
        prev_relation.next_sibling = id;

        if (!is_last && next_relation.parent === relation.parent) {
          relation.next_sibling = next_id;
          next_relation.prev_sibling = id;
        }
      } else {
        const prev_sibling_id = getRecursiveParent(prev_id, -diff_level);
        const parent_relation = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_2__["fallback"])(Relation(id))(live_relation_map[prev_sibling_id]);
        const prev_sibling_relation = live_relation_map[prev_sibling_id];
        relation.parent = is_first || is_top ? undefined : parent_relation.parent;
        relation.prev_sibling = is_last ? undefined : prev_sibling_id;

        if (!is_first) {
          prev_sibling_relation.next_sibling = id;
        }

        if (!is_last && relation.parent === next_relation.parent) {
          parent_relation.next_sibling = id;
          next_relation.prev_sibling = id;
        }

        if (!is_first) {
          live_relation_map[prev_sibling_id] = parent_relation;
        }
      }

      if (!is_top) {
        const size = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_2__["fallback"])(0)(live_size_map[relation.parent]);
        live_size_map[relation.parent] = size + 1;
      }

      if (!is_first) {
        live_relation_map[prev_id] = prev_relation;
      }

      live_relation_map[id] = relation;
    }

    function getRecursiveParent(id, count = 0) {
      const parent_id = live_relation_map[id] && live_relation_map[id].parent;

      if (count > 1 && parent_id) {
        return getRecursiveParent(parent_id, count - 1);
      } else {
        return parent_id;
      }
    }

    function onRemoved({
      id
    }, index, payloads) {
      const is_first = index === 0;
      const is_last = index === payloads.length;
      const prev_index = index - 1;
      const next_index = index;
      const prev_id = is_first ? undefined : payloads[prev_index].id;
      const next_id = is_last ? undefined : payloads[next_index].id;
      const prev_relation = live_relation_map[prev_id];
      const next_relation = live_relation_map[next_id];
      const relation = live_relation_map[id];
      const {
        prev_sibling,
        next_sibling,
        parent
      } = relation;
      const prev_sibling_relation = Object(_utils_asserts__WEBPACK_IMPORTED_MODULE_6__["isNotEmpty"])(prev_sibling) ? live_relation_map[prev_sibling] : undefined;
      const next_sibling_relation = Object(_utils_asserts__WEBPACK_IMPORTED_MODULE_6__["isNotEmpty"])(next_sibling) ? live_relation_map[next_sibling] : undefined;
      const parent_relation = Object(_utils_asserts__WEBPACK_IMPORTED_MODULE_6__["isNotEmpty"])(parent) ? live_relation_map[parent] : undefined;

      if (Object(_utils_asserts__WEBPACK_IMPORTED_MODULE_6__["isNotEmpty"])(prev_sibling_relation)) {
        prev_relation.next_sibling = next_sibling;
      }

      if (Object(_utils_asserts__WEBPACK_IMPORTED_MODULE_6__["isNotEmpty"])(next_sibling_relation)) {
        next_relation.prev_sibling = prev_sibling;
      }

      if (Object(_utils_asserts__WEBPACK_IMPORTED_MODULE_6__["isNotEmpty"])(parent_relation) && parent_relation.child === id) {
        parent_relation.child = next_sibling;
      }

      delete live_relation_map[id];
      live_size_map[relation.parent]--;
    }

    function clone() {
      return constructor({
        hierarchy_map: {
          relation: _objectSpread({}, live_relation_map),
          size: _objectSpread({}, live_size_map)
        }
      });
    }

    function apply({
      hierarchy_map
    }) {
      live_relation_map = hierarchy_map.relation;
      live_size_map = hierarchy_map.size;
    }

    function getHierarchyMap() {
      return hierarchy_map;
    }

    const exports = {
      clone,
      apply,
      onInserted,
      onRemoved,
      getHierarchyMap
    };
    return Object.assign([exports], exports);
  }

  return constructor({});
}

const useOutlineReducer = ({
  state = makeOutlineState(),
  hierarchy_analyzer = genHierarchyAnalyzer()
} = {}) => {
  state.hierarchy_analyzer = hierarchy_analyzer;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    state.payloads.map(hierarchy_analyzer.onInserted);
  }, [state.payloads]);
  const reducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])((state, action) => {
    if (action.type === "delete") {
      const {
        index
      } = action;
      const {
        payloads
      } = state;
      state.payloads.splice(index, 1);
      return _objectSpread(_objectSpread({}, state), {}, {
        payloads
      });
    } else if (action.type === "save") {
      const {
        id,
        extra = () => ({})
      } = action;
      const {
        records,
        payloads
      } = state;
      const extra_data = extra(state);
      records.set(id, payloads.clone());
      Object.getOwnPropertySymbols(extra_data).map(sym => {
        records.set(sym, extra_data[sym]);
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        records
      });
    } else if (action.type === "restore") {
      const {
        id = [],
        extra = []
      } = action;
      const {
        records
      } = state;
      records.delete(id);
      extra.map(id => records.delete(id));
      return _objectSpread(_objectSpread({}, state), {}, {
        records
      });
    } else if (action.type === "setBasedOn") {
      const {
        id,
        affect
      } = action;
      const payloads = affect(state.records.get(id).clone(), state);
      return _objectSpread(_objectSpread({}, state), {}, {
        payloads
      });
    } else if (action.type === "set") {
      const {
        affect
      } = action;
      return _objectSpread(_objectSpread({}, state), affect(state));
    } else {
      return state;
    }
  }, state);
  return reducer;
};
const EmptyNode = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((_ref3, ref) => {
  let rest = Object.assign({}, _ref3);
  return __jsx("div", _extends({
    ref: ref
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 2
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = ((_ref4) => {
  let {
    reducer = useOutlineReducer(),
    className,
    style
  } = _ref4,
      rest = _objectWithoutProperties(_ref4, ["reducer", "className", "style"]);

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const cls = Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__["joinBySpace"])(className, "Outline");
  const [Node, mapper] = Object(_utils_uses_mapper__WEBPACK_IMPORTED_MODULE_4__["useComponentIndexer"])(FlatNode);
  const [state, dispatch] = reducer;
  const {
    0: thumb_props,
    1: setThumbProps
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    offset: 0,
    node_props: {
      item_type: EmptyNode
    }
  });
  const payloads = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const hierarchy_analyzer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    payloads.current = state.payloads;
  }, [state.payloads]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    hierarchy_analyzer.current = state.hierarchy_analyzer;
  }, [state.hierarchy_analyzer]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!ref) return;
    const top_node_dom = ref.current;
    const top_bound = top_node_dom.getBoundingClientRect();
    return Object(_utils_fn__WEBPACK_IMPORTED_MODULE_2__["listen"])("mousedown", top_node_dom)(e => {
      const {
        path,
        clientX,
        clientY
      } = e;
      const local_offset = (clientY - top_bound.y) % lineHeight;
      const init_index = (clientY - top_bound.y - local_offset) / lineHeight;
      const init_payload_node_position = init_index * lineHeight + local_offset; // dispatch({
      // 	type: "save",
      // 	id,
      // 	extra: ({ payloads, hierarchy_analyzer }) => ({
      // 		[init_payload_level_id]: payloads.list[init_index].level,
      // 		[init_hierarchy_analyzer_id]: hierarchy_analyzer.clone(),
      // 	}),
      // });
      // dispatch({
      // 	type: "set",
      // 	affect: ({ payloads, hierarchy_analyzer }) => {
      // 		const [payload] = payloads.splice(init_index, 1);
      // 		hierarchy_analyzer.onRemoved(
      // 			payload,
      // 			init_index,
      // 			payloads.list
      // 		);
      // 		return { payloads, hierarchy_analyzer };
      // 	},
      // });

      const ix = clientX,
            iy = clientY;
      const payloads_locked = payloads.current.clone();
      const hierarchy_analyzer_locked = hierarchy_analyzer.current.clone();
      const init_payload = payloads_locked.list[init_index];
      const clean_move = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_2__["listen"])("mousemove")(({
        clientX,
        clientY
      }) => {
        let start_stamp = Date.now(); // const payloads_live = payloads_locked.clone();
        // const hierarchy_analyzer_live = hierarchy_analyzer_locked.clone();
        // const hierarchy_map = hierarchy_analyzer_live.getHierarchyMap();
        // const local_offset = (clientY - top_bound.y) % lineHeight;
        // const live_index =
        // 	(clientY - top_bound.y - local_offset) / lineHeight;
        // const prev_index = live_index - 1;
        // const next_index = live_index + 1;
        // console.log(prev_index, next_index);
        // const is_first = live_index === 0;
        // const is_last = live_index === payloads_live.length - 1;
        // const init_relation = hierarchy_map.relation[init_payload.id];
        // const prev_payload = payloads_live.list[prev_index];
        // const next_payload = payloads_live.list[next_index];
        // const prev_relation = hierarchy_map.relation[prev_payload.id];
        // const prev_level = prev_payload.level;
        // const prev_parent_payload = payloads_live.get(
        // 	prev_relation.parent
        // );
        // const prev_is_parent = prev_payload.id in hierarchy_map.size;

        const init_level = init_payload.level; // const maybe_level =
        // 	(prev_is_parent
        // 		? prev_payload.level
        // 		: prev_parent_payload.level) + 1;

        const x = clientX - ix;
        const should_level = init_level + x / 20;
        const offset = init_payload_node_position + clientY - iy;
        setThumbProps({
          node_props: getNodeProps(_objectSpread(_objectSpread({}, init_payload), {}, {
            level: should_level
          }), state),
          offset
        }); // setThumbProps({
        // 	node_props: getNodeProps(
        // 		{ ...init_payload, level: clientX / 20 },
        // 		state
        // 	),
        // 	offset,
        // });
        // if (
        // 	isEmpty(prev_relation.next_sibling) &&
        // 	!prev_is_parent
        // ) {
        // 	if (should_level < maybe_level) {
        // 		init_payload.level = should_level;
        // 	}
        // } else {
        // }
        // init_payload.level = maybe_level;
        // payloads_live.splice(init_index, 1);
        // hierarchy_analyzer_live.onRemoved(
        // 	init_payload,
        // 	init_index,
        // 	payloads_live.list
        // );
        // payloads_live.splice(live_index >> 0, 0, init_payload);
        // hierarchy_analyzer_live.onInserted(
        // 	init_payload,
        // 	live_index >> 0,
        // 	payloads_live.list
        // );
        // let start_stamp_dispatch = Date.now();
        // dispatch({
        // 	type: "set",
        // 	affect: () => ({
        // 		payloads: payloads_live,
        // 		hierarchy_analyzer: hierarchy_analyzer_live,
        // 	}),
        // });
        // console.log(
        // 	Date.now() - start_stamp,
        // 	Date.now() - start_stamp_dispatch
        // );
      });
      const clean_up = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_2__["listen"])("mouseup")(() => {
        clean_move();
        clean_up();
      });
    });
  }, [ref.current]);
  return __jsx("div", {
    className: cls,
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "holder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "thumb",
    style: {
      top: thumb_props.offset + "px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 5
    }
  }, __jsx(Node, _extends({}, thumb_props.node_props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 6
    }
  })))), __jsx("div", {
    className: "list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 4
    }
  }, state.payloads.map(payload => __jsx(Node, _extends({
    key: payload.id
  }, getNodeProps(payload, state), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 6
    }
  })))));
});

function getNodeProps(payload, state) {
  const reducer = (relayed, [key, value]) => {
    if (state.relayed.has(key)) {
      relayed[key] = value;
    }

    return relayed;
  };

  const relayed_props = Object.entries(payload).reduce(reducer, {});
  const payload_props = payload.props;
  const meta_props = {
    id: payload.id,
    level: payload.level,
    can_expand: payload.can_expand
  };

  if ("type_self" in payload) {
    meta_props.item_type = payload.type_self;
  } else {
    meta_props.item_type = state.item_type;
  }

  return _objectSpread({
    props: _objectSpread(_objectSpread({}, payload_props), relayed_props)
  }, meta_props);
}

/***/ }),

/***/ "./src/components/Outline/index.js":
/*!*****************************************!*\
  !*** ./src/components/Outline/index.js ***!
  \*****************************************/
/*! exports provided: default, node_map, dom_payload_map, getPayload, makeOutlineState, useOutlineReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Outline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Outline */ "./src/components/Outline/Outline.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Outline__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "node_map", function() { return _Outline__WEBPACK_IMPORTED_MODULE_0__["node_map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dom_payload_map", function() { return _Outline__WEBPACK_IMPORTED_MODULE_0__["dom_payload_map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPayload", function() { return _Outline__WEBPACK_IMPORTED_MODULE_0__["getPayload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeOutlineState", function() { return _Outline__WEBPACK_IMPORTED_MODULE_0__["makeOutlineState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOutlineReducer", function() { return _Outline__WEBPACK_IMPORTED_MODULE_0__["useOutlineReducer"]; });




/***/ }),

/***/ "./src/utils/array.js":
/*!****************************!*\
  !*** ./src/utils/array.js ***!
  \****************************/
/*! exports provided: repeat, joinBySpace, add, last, first, inBound, inArrayBound, firstInIter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinBySpace", function() { return joinBySpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inBound", function() { return inBound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inArrayBound", function() { return inArrayBound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstInIter", function() { return firstInIter; });
/* harmony import */ var _fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fn */ "./src/utils/fn.js");
 // Array Generator

const repeat = count => {
  return (fn = v => v) => Array.prototype.map.call(" ".repeat(count), (_, idx) => fn(idx));
};
const joinBySpace = (...cls) => cls.filter(Boolean).join(" ");
const add = (a, b) => a.map((a, i) => b[i] + a);
const last = arraylike => arraylike[arraylike.length - 1];
const first = arraylike => arraylike[0];
const inBound = (min, max) => v => Math.max(min, Math.min(v, max));
const inArrayBound = ({
  length
}) => inBound(0, length - 1);
const firstInIter = set => set.entries().next().value;

/***/ }),

/***/ "./src/utils/asserts.js":
/*!******************************!*\
  !*** ./src/utils/asserts.js ***!
  \******************************/
/*! exports provided: isFalsy, isTruthy, isString, isFunction, isEmpty, isNotEmpty, isArray, isEmptyArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFalsy", function() { return isFalsy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTruthy", function() { return isTruthy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotEmpty", function() { return isNotEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyArray", function() { return isEmptyArray; });
const isFalsy = v => !v;
const isTruthy = v => !!v;
const isString = v => typeof v === 'string';
const isFunction = v => typeof v === 'function';
const isEmpty = v => typeof v === 'undefined';
const isNotEmpty = v => typeof v !== 'undefined';
const isArray = v => v instanceof Array;
const isEmptyArray = v => isArray(v) && v.length === 0;

/***/ }),

/***/ "./src/utils/fn.js":
/*!*************************!*\
  !*** ./src/utils/fn.js ***!
  \*************************/
/*! exports provided: listen, noop, fallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallback", function() { return fallback; });
const listen = (name, target = window, options = {}) => fn => {
  target.addEventListener(name, fn, options);
  return function clean() {
    target.removeEventListener(name, fn, options);
  };
};
const noop = () => {};
const fallback = default_value => (v = default_value) => v;

/***/ }),

/***/ "./src/utils/indices/timing.js":
/*!*************************************!*\
  !*** ./src/utils/indices/timing.js ***!
  \*************************************/
/*! exports provided: TimingIndex, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingIndex", function() { return TimingIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return proxy; });
/* harmony import */ var _utils_fn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/fn */ "./src/utils/fn.js");


const isPositive = function (n) {
  return 1 / n > 0;
};

function TimingIndex(source) {
  function constructor({
    source = [],
    change_process = []
  } = {}) {
    const init_timing = source.map((_, idx) => onInserted(idx)); // id string, p uint

    function onInserted(index) {
      change_process.push(index);
      return change_process.length;
    }

    function onRemoved(index) {
      change_process.push(-index); // console.log(change_process, "@@@@@@@@");
    }

    function has(index, timing) {}

    function get(index, timing) {
      let position = index;

      for (let i = timing; i < change_process.length; i++) {
        const cp = change_process[i];

        if (isPositive(cp)) {
          if (position >= cp) {
            position++;
          }
        } else {
          if (position > -cp) {
            position--;
          }
        }
      }

      return position;
    }

    function getInitTiming() {
      return init_timing;
    }

    function clone() {
      return constructor({
        source,
        change_process: [...change_process]
      });
    }

    return {
      clone,
      onInserted,
      onRemoved,
      get,
      getInitTiming
    };
  }

  return constructor({
    source
  });
}
function proxy(source) {
  function constructor(source) {
    const host = [...source];
    const indexer = TimingIndex(host);

    function splice(start_position, delete_count = 0, ...append_items) {
      const timing_items = new Array(append_items.length);

      for (let i = 0; i < delete_count; i++) {
        indexer.onRemoved(start_position + i);
      }

      for (let i = 0; i < append_items.length; i++) {
        const index = start_position + i;
        const timing = indexer.onInserted(index);
        timing_items[i] = [index, timing];
      }

      const effected_items = Array.prototype.splice.call(host, start_position, delete_count, ...append_items);
      return Object.assign(effected_items, {
        timing: timing_items
      });
    }

    function clone() {
      return constructor(host);
    }

    function get(index, timing) {
      return indexer.get(index, timing);
    }

    return Object.assign(host, {
      splice,
      clone,
      get
    });
  }

  return constructor(source);
}

/***/ }),

/***/ "./src/utils/uses/mapper.js":
/*!**********************************!*\
  !*** ./src/utils/uses/mapper.js ***!
  \**********************************/
/*! exports provided: useMapTo, useComponentIndexer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMapTo", function() { return useMapTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComponentIndexer", function() { return useComponentIndexer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\v_zhtaozhou\\projects\\AppEditor\\src\\utils\\uses\\mapper.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const useMapTo = (Component, indexer) => {
  return (_ref) => {
    let props = Object.assign({}, _ref);
    const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      return indexer(ref.current, props);
    }, ref.current);
    return __jsx(Component, _extends({}, props, {
      ref: ref,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 10
      }
    }));
  };
};
const useComponentIndexer = Component => {
  const dom_payload_map = new Map();
  const ComponentMapped = useMapTo(Component, (dom, payload) => {
    dom_payload_map.set(dom, payload);
    return () => {
      dom_payload_map.delete(dom);
    };
  });
  return [ComponentMapped, dom_payload_map];
};

/***/ }),

/***/ "./workspace/Box/utils/array.js":
/*!**************************************!*\
  !*** ./workspace/Box/utils/array.js ***!
  \**************************************/
/*! exports provided: repeat, joinBySpace, add, last, first, inBound, inArrayBound, firstInIter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinBySpace", function() { return joinBySpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inBound", function() { return inBound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inArrayBound", function() { return inArrayBound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstInIter", function() { return firstInIter; });
// Array Generator
const repeat = (count, fn) => {
  return Array.prototype.map.call(" ".repeat(count), (_, idx) => fn(idx));
};
const joinBySpace = (...cls) => cls.filter(Boolean).join(" ");
const add = (a, b) => a.map((a, i) => b[i] + a);
const last = arraylike => arraylike[arraylike.length - 1];
const first = arraylike => arraylike[0];
const inBound = (min, max) => v => Math.max(min, Math.min(v, max));
const inArrayBound = ({
  length
}) => inBound(0, length - 1);
const firstInIter = set => set.entries().next().value;

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXBwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL091dGxpbmUvT3V0bGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3V0bGluZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Fzc2VydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2ZuLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRpY2VzL3RpbWluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXNlcy9tYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd29ya3NwYWNlL0JveC91dGlscy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJJdGVtIiwibmFtZSIsImNvbmZpZyIsIml0ZW1fdHlwZSIsInBheWxvYWRzIiwiaWQiLCJsZXZlbCIsInByb3BzIiwiY2FuX2V4cGFuZCIsInJlZHVjZXIiLCJ1c2VPdXRsaW5lUmVkdWNlciIsInN0YXRlIiwibWFrZU91dGxpbmVTdGF0ZSIsIkFwcCIsIm5vZGVfbWFwIiwiZG9tX3BheWxvYWRfbWFwIiwiTWFwIiwiTm9kZSIsImRhdGEiLCJ0b3BfcGF5bG9hZCIsImNoaWxkcmVuIiwidG9wX25vZGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwYXlsb2FkIiwiZG9tIiwiY3VycmVudCIsInJhdyIsInRvcCIsInNldCIsImRlbGV0ZSIsInBhZGRpbmdMZWZ0IiwibGVuZ3RoIiwibWFwIiwiZ2V0UGF5bG9hZCIsIkZsYXROb2RlIiwiZm9yd2FyZFJlZiIsInJlZiIsInJlc3QiLCJsaW5lSGVpZ2h0IiwiQXJyYXlNYXBwZXIiLCJhcnJheSIsImNvbnN0cnVjdG9yIiwibGlzdCIsIml0ZW0iLCJjbG9uZSIsInNsaWNlIiwicmVtb3ZlIiwic3BsaWNlIiwic3RhcnRfcG9zaXRpb24iLCJkZWxldGVfY291bnQiLCJhcHBlbmRfaXRlbXMiLCJiZV9jdWxsZWQiLCJhcmdzIiwiZ2V0IiwicmVsYXllZCIsIlNldCIsImhpZXJhcmNoeV9tYXAiLCJyZWNvcmRzIiwiUmVsYXRpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJuZXh0X3NpYmxpbmciLCJ1bmRlZmluZWQiLCJwcmV2X3NpYmxpbmciLCJwYXJlbnQiLCJjaGlsZCIsImdlbkhpZXJhcmNoeUFuYWx5emVyIiwicmVsYXRpb24iLCJzaXplIiwibGl2ZV9yZWxhdGlvbl9tYXAiLCJsaXZlX3NpemVfbWFwIiwib25JbnNlcnRlZCIsImluZGV4IiwiaXNfZmlyc3QiLCJpc190b3AiLCJpc19sYXN0IiwicHJldl9pbmRleCIsIm5leHRfaW5kZXgiLCJwcmV2X2lkIiwibmV4dF9pZCIsInByZXZfcGF5bG9hZCIsInByZXZfbGV2ZWwiLCJkaWZmX2xldmVsIiwicHJldl9yZWxhdGlvbiIsImZhbGxiYWNrIiwibmV4dF9yZWxhdGlvbiIsInByZXZfc2libGluZ19pZCIsImdldFJlY3Vyc2l2ZVBhcmVudCIsInBhcmVudF9yZWxhdGlvbiIsInByZXZfc2libGluZ19yZWxhdGlvbiIsImNvdW50IiwicGFyZW50X2lkIiwib25SZW1vdmVkIiwiaXNOb3RFbXB0eSIsIm5leHRfc2libGluZ19yZWxhdGlvbiIsImFwcGx5IiwiZ2V0SGllcmFyY2h5TWFwIiwiZXhwb3J0cyIsImhpZXJhcmNoeV9hbmFseXplciIsInVzZU1lbW8iLCJ1c2VSZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsImV4dHJhIiwiZXh0cmFfZGF0YSIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bSIsImFmZmVjdCIsIkVtcHR5Tm9kZSIsImNsYXNzTmFtZSIsInN0eWxlIiwiY2xzIiwiam9pbkJ5U3BhY2UiLCJtYXBwZXIiLCJ1c2VDb21wb25lbnRJbmRleGVyIiwiZGlzcGF0Y2giLCJ0aHVtYl9wcm9wcyIsInNldFRodW1iUHJvcHMiLCJ1c2VTdGF0ZSIsIm9mZnNldCIsIm5vZGVfcHJvcHMiLCJ0b3Bfbm9kZV9kb20iLCJ0b3BfYm91bmQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsaXN0ZW4iLCJlIiwicGF0aCIsImNsaWVudFgiLCJjbGllbnRZIiwibG9jYWxfb2Zmc2V0IiwieSIsImluaXRfaW5kZXgiLCJpbml0X3BheWxvYWRfbm9kZV9wb3NpdGlvbiIsIml4IiwiaXkiLCJwYXlsb2Fkc19sb2NrZWQiLCJoaWVyYXJjaHlfYW5hbHl6ZXJfbG9ja2VkIiwiaW5pdF9wYXlsb2FkIiwiY2xlYW5fbW92ZSIsInN0YXJ0X3N0YW1wIiwiRGF0ZSIsIm5vdyIsImluaXRfbGV2ZWwiLCJ4Iiwic2hvdWxkX2xldmVsIiwiZ2V0Tm9kZVByb3BzIiwiY2xlYW5fdXAiLCJrZXkiLCJ2YWx1ZSIsImhhcyIsInJlbGF5ZWRfcHJvcHMiLCJlbnRyaWVzIiwicmVkdWNlIiwicGF5bG9hZF9wcm9wcyIsIm1ldGFfcHJvcHMiLCJ0eXBlX3NlbGYiLCJyZXBlYXQiLCJmbiIsInYiLCJBcnJheSIsInByb3RvdHlwZSIsImNhbGwiLCJfIiwiaWR4IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJhZGQiLCJhIiwiYiIsImkiLCJsYXN0IiwiYXJyYXlsaWtlIiwiZmlyc3QiLCJpbkJvdW5kIiwibWluIiwibWF4IiwiTWF0aCIsImluQXJyYXlCb3VuZCIsImZpcnN0SW5JdGVyIiwibmV4dCIsImlzRmFsc3kiLCJpc1RydXRoeSIsImlzU3RyaW5nIiwiaXNGdW5jdGlvbiIsImlzRW1wdHkiLCJpc0FycmF5IiwiaXNFbXB0eUFycmF5IiwidGFyZ2V0Iiwid2luZG93Iiwib3B0aW9ucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJub29wIiwiZGVmYXVsdF92YWx1ZSIsImlzUG9zaXRpdmUiLCJuIiwiVGltaW5nSW5kZXgiLCJzb3VyY2UiLCJjaGFuZ2VfcHJvY2VzcyIsImluaXRfdGltaW5nIiwicHVzaCIsInRpbWluZyIsInBvc2l0aW9uIiwiY3AiLCJnZXRJbml0VGltaW5nIiwicHJveHkiLCJob3N0IiwiaW5kZXhlciIsInRpbWluZ19pdGVtcyIsImVmZmVjdGVkX2l0ZW1zIiwidXNlTWFwVG8iLCJDb21wb25lbnQiLCJDb21wb25lbnRNYXBwZWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDMUIsU0FBTztBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFB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RCxJQUFlQSxTQUFTLENBQUMsQ0FBRCxDQUF0QztBQUVBLE1BQU1FLE9BQU8sR0FBRyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sS0FBZWxCLENBQUQsSUFBT21CLElBQUksQ0FBQ0QsR0FBTCxDQUFTRCxHQUFULEVBQWNFLElBQUksQ0FBQ0YsR0FBTCxDQUFTakIsQ0FBVCxFQUFZa0IsR0FBWixDQUFkLENBQXJDO0FBRUEsTUFBTUUsWUFBWSxHQUFHLENBQUM7QUFBRW5KO0FBQUYsQ0FBRCxLQUFnQitJLE9BQU8sQ0FBQyxDQUFELEVBQUkvSSxNQUFNLEdBQUcsQ0FBYixDQUE1QztBQUVBLE1BQU1vSixXQUFXLEdBQUl2SixHQUFELElBQVNBLEdBQUcsQ0FBQzJILE9BQUosR0FBYzZCLElBQWQsR0FBcUJoQyxLQUFsRCxDOzs7Ozs7Ozs7OztBQ2pCUCxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgT3V0bGluZSBmcm9tIFwiQC9jb21wb25lbnRzL091dGxpbmVcIjtcclxuaW1wb3J0IHsgbm9kZV9tYXAsIGRvbV9wYXlsb2FkX21hcCB9IGZyb20gXCJAL2NvbXBvbmVudHMvT3V0bGluZVwiO1xyXG5pbXBvcnQgeyB1c2VPdXRsaW5lUmVkdWNlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvT3V0bGluZS9PdXRsaW5lXCI7XHJcbmltcG9ydCB7IG1ha2VPdXRsaW5lU3RhdGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL091dGxpbmUvT3V0bGluZVwiO1xyXG5pbXBvcnQgeyB1c2VNYXBUbyB9IGZyb20gXCJAL2NvbXBvbmVudHMvT3V0bGluZS9PdXRsaW5lXCI7XHJcbmltcG9ydCB7IGxpc3RlbiB9IGZyb20gXCJAL3V0aWxzL2ZuXCI7XHJcbmltcG9ydCB7IGluQm91bmQgfSBmcm9tIFwicHVibGljL3dvcmtzcGFjZS9Cb3gvdXRpbHMvYXJyYXlcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VSZWR1Y2VyLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEl0ZW0gPSAoeyBuYW1lIH0pID0+IHtcclxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJJdGVtXCI+e25hbWV9PC9kaXY+O1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG5cdGl0ZW1fdHlwZTogSXRlbSxcclxuXHRwYXlsb2FkczogW1xyXG5cdFx0eyBpZDogXCIwMDFcIiwgbGV2ZWw6IDAsIHByb3BzOiB7IG5hbWU6IFwiSmFja2llXCIgfSwgY2FuX2V4cGFuZDogdHJ1ZSB9LFxyXG5cdFx0eyBpZDogXCIwMDJcIiwgbGV2ZWw6IDEsIHByb3BzOiB7IG5hbWU6IFwiVG9tXCIgfSwgY2FuX2V4cGFuZDogdHJ1ZSB9LFxyXG5cdFx0eyBpZDogXCIwMDNcIiwgbGV2ZWw6IDIsIHByb3BzOiB7IG5hbWU6IFwiVGVlXCIgfSB9LFxyXG5cdFx0eyBpZDogXCIwMDVcIiwgbGV2ZWw6IDIsIHByb3BzOiB7IG5hbWU6IFwiSnVpY2VcIiB9IH0sXHJcblx0XHR7IGlkOiBcIjAwOFwiLCBsZXZlbDogMiwgcHJvcHM6IHsgbmFtZTogXCJBbGljZVwiIH0gfSxcclxuXHRcdHsgaWQ6IFwiMDA3XCIsIGxldmVsOiAyLCBwcm9wczogeyBuYW1lOiBcIkJvYlwiIH0gfSxcclxuXHRcdHsgaWQ6IFwiMDkwXCIsIGxldmVsOiAyLCBwcm9wczogeyBuYW1lOiBcIkppcFwiIH0gfSxcclxuXHRcdHsgaWQ6IFwiMDIyXCIsIGxldmVsOiAyLCBwcm9wczogeyBuYW1lOiBcIlRob3JcIiB9IH0sXHJcblx0XHR7IGlkOiBcIjA1NVwiLCBsZXZlbDogMiwgcHJvcHM6IHsgbmFtZTogXCJJc3NcIiB9IH0sXHJcblx0XHR7IGlkOiBcIjAwNFwiLCBsZXZlbDogMiwgcHJvcHM6IHsgbmFtZTogXCJIdWZlZFwiIH0sIGNhbl9leHBhbmQ6IHRydWUgfSxcclxuXHRcdHsgaWQ6IFwiMDE0XCIsIGxldmVsOiAzLCBwcm9wczogeyBuYW1lOiBcIkp1ZFwiIH0gfSxcclxuXHRcdHsgaWQ6IFwiMDMyXCIsIGxldmVsOiAzLCBwcm9wczogeyBuYW1lOiBcIkZja1wiIH0gfSxcclxuXHRcdHsgaWQ6IFwiMDE4XCIsIGxldmVsOiAxLCBwcm9wczogeyBuYW1lOiBcIkZpcFwiIH0gfSxcclxuXHRcdHsgaWQ6IFwiMDQzXCIsIGxldmVsOiAyLCBwcm9wczogeyBuYW1lOiBcIklvb1wiIH0gfSxcclxuXHRcdHsgaWQ6IFwiMTAyXCIsIGxldmVsOiAxLCBwcm9wczogeyBuYW1lOiBcIkxpb3BcIiB9IH0sXHJcblx0XHR7IGlkOiBcIjEwM1wiLCBsZXZlbDogMiwgcHJvcHM6IHsgbmFtZTogXCJMaXNvblwiIH0gfSxcclxuXHRcdHsgaWQ6IFwiMTA0XCIsIGxldmVsOiAzLCBwcm9wczogeyBuYW1lOiBcIkx1bWllblwiIH0gfSxcclxuXHRcdHsgaWQ6IFwiMTA1XCIsIGxldmVsOiAzLCBwcm9wczogeyBuYW1lOiBcIlBvcGxpbVwiIH0gfSxcclxuXHRdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG5cdGNvbnN0IHJlZHVjZXIgPSB1c2VPdXRsaW5lUmVkdWNlcih7XHJcblx0XHRzdGF0ZTogbWFrZU91dGxpbmVTdGF0ZShjb25maWcpLFxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJEcmFnTGF5ZXJcIj48L2Rpdj5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8T3V0bGluZSByZWR1Y2VyPXtyZWR1Y2VyfSAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PHByZT57XCJcIn08L3ByZT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuaW1wb3J0IFwiLi4vc2hhcmVkL2dsb2JhbC5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IHsgam9pbkJ5U3BhY2UsIGluQm91bmQsIGluQXJyYXlCb3VuZCB9IGZyb20gXCJAL3V0aWxzL2FycmF5XCI7XHJcbmltcG9ydCB7IGZhbGxiYWNrLCBsaXN0ZW4gfSBmcm9tIFwiQC91dGlscy9mblwiO1xyXG5pbXBvcnQge1xyXG5cdHVzZVJlZixcclxuXHR1c2VFZmZlY3QsXHJcblx0Zm9yd2FyZFJlZixcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VSZWR1Y2VyLFxyXG5cdHVzZUNhbGxiYWNrLFxyXG5cdHVzZU1lbW8sXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vT3V0bGluZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlQ29tcG9uZW50SW5kZXhlciB9IGZyb20gXCJAL3V0aWxzL3VzZXMvbWFwcGVyXCI7XHJcbmltcG9ydCB7IFRpbWluZ0luZGV4IH0gZnJvbSBcIkAvdXRpbHMvaW5kaWNlcy90aW1pbmdcIjtcclxuaW1wb3J0IHsgaXNFbXB0eSwgaXNOb3RFbXB0eSB9IGZyb20gXCJAL3V0aWxzL2Fzc2VydHNcIjtcclxuaW1wb3J0IG5leHQgZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCJAL3V0aWxzL2FycmF5XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgbm9kZV9tYXAgPSB7fTtcclxuZXhwb3J0IGNvbnN0IGRvbV9wYXlsb2FkX21hcCA9IG5ldyBNYXAoKTtcclxuXHJcbmNvbnN0IE5vZGUgPSAoeyBkYXRhLCB0b3BfcGF5bG9hZCB9KSA9PiB7XHJcblx0Y29uc3QgeyBuYW1lID0gXCJcIiwgaWQsIGxldmVsLCBjaGlsZHJlbiA9IFtdIH0gPSBkYXRhO1xyXG5cdGNvbnN0IHRvcF9ub2RlID0gdXNlUmVmKCk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IHBheWxvYWQgPSB7XHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGlkLFxyXG5cdFx0XHRjaGlsZHJlbixcclxuXHRcdFx0ZG9tOiB0b3Bfbm9kZS5jdXJyZW50LFxyXG5cdFx0XHRyYXc6IGRhdGEsXHJcblx0XHRcdHRvcDogdG9wX3BheWxvYWQsXHJcblx0XHR9O1xyXG5cdFx0bm9kZV9tYXBbaWRdID0gcGF5bG9hZDtcclxuXHRcdGRvbV9wYXlsb2FkX21hcC5zZXQodG9wX25vZGUuY3VycmVudCwgcGF5bG9hZCk7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRkb21fcGF5bG9hZF9tYXAuZGVsZXRlKHRvcF9ub2RlLmN1cnJlbnQpO1xyXG5cdFx0XHRkZWxldGUgbm9kZV9tYXBbaWRdO1xyXG5cdFx0fTtcclxuXHR9LCBbdG9wX25vZGUuY3VycmVudCwgZGF0YV0pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHJlZj17dG9wX25vZGV9IGNsYXNzTmFtZT1cIm5vZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBgJHtsZXZlbCAqIDIwfXB4YCB9fT5cclxuXHRcdFx0XHR7bmFtZX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHtjaGlsZHJlbi5sZW5ndGggPiAwICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoaWxkcmVuXCI+XHJcblx0XHRcdFx0XHR7Y2hpbGRyZW4ubWFwKChkYXRhKSA9PiAoXHJcblx0XHRcdFx0XHRcdDxOb2RlXHJcblx0XHRcdFx0XHRcdFx0a2V5PXtkYXRhLmlkfVxyXG5cdFx0XHRcdFx0XHRcdGRhdGE9e2RhdGF9XHJcblx0XHRcdFx0XHRcdFx0dG9wX3BheWxvYWQ9e3RvcF9wYXlsb2FkfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBheWxvYWQoKSB7fVxyXG5cclxuY29uc3QgRmxhdE5vZGUgPSBmb3J3YXJkUmVmKFxyXG5cdCh7IGl0ZW1fdHlwZSwgbGV2ZWwgPSAwLCBwcm9wcyA9IHt9LCAuLi5yZXN0IH0gPSB7fSwgcmVmKSA9PiB7XHJcblx0XHRjb25zdCBJdGVtID0gaXRlbV90eXBlO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub2RlXCIgcmVmPXtyZWZ9PlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInRpdGxlXCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBgJHtsZXZlbCAqIDIwfXB4YCB9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxJdGVtIHsuLi5wcm9wc30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxuKTtcclxuXHJcbmNvbnN0IGxpbmVIZWlnaHQgPSAyMDtcclxuXHJcbmZ1bmN0aW9uIEFycmF5TWFwcGVyKGFycmF5KSB7XHJcblx0ZnVuY3Rpb24gY29uc3RydWN0b3IoeyBsaXN0LCBtYXAgPSB7fSB9KSB7XHJcblx0XHRsaXN0Lm1hcCgoaXRlbSkgPT4gKG1hcFtpdGVtLmlkXSA9IGl0ZW0pKTtcclxuXHJcblx0XHRmdW5jdGlvbiBjbG9uZSgpIHtcclxuXHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yKHsgbGlzdDogbGlzdC5zbGljZSgpLCBtYXA6IHt9IH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlbW92ZShpZCkge1xyXG5cdFx0XHRkZWxldGUgbWFwW2lkXTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzcGxpY2Uoc3RhcnRfcG9zaXRpb24sIGRlbGV0ZV9jb3VudCwgLi4uYXBwZW5kX2l0ZW1zKSB7XHJcblx0XHRcdGNvbnN0IGJlX2N1bGxlZCA9IGxpc3Quc3BsaWNlKFxyXG5cdFx0XHRcdHN0YXJ0X3Bvc2l0aW9uLFxyXG5cdFx0XHRcdGRlbGV0ZV9jb3VudCxcclxuXHRcdFx0XHQuLi5hcHBlbmRfaXRlbXNcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGJlX2N1bGxlZC5tYXAoKHsgaWQgfSkgPT4gcmVtb3ZlKGlkKSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gYmVfY3VsbGVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG1hcCguLi5hcmdzKSB7XHJcblx0XHRcdHJldHVybiBsaXN0Lm1hcCguLi5hcmdzKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXQoaWQpIHtcclxuXHRcdFx0cmV0dXJuIG1hcFtpZF07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Z2V0LFxyXG5cdFx0XHRjbG9uZSxcclxuXHRcdFx0cmVtb3ZlLFxyXG5cdFx0XHRzcGxpY2UsXHJcblx0XHRcdGxpc3QsXHJcblx0XHRcdG1hcCxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY29uc3RydWN0b3IoeyBsaXN0OiBhcnJheSB9KTtcclxufVxyXG5cclxuLy8gdHlwZSBQYXlsb2FkIHsgaWQsIGxldmVsLCBjYW5fZXhwYW5kLCB0eXBlX3NlbGYsIHByb3BzIH1cclxuLy8gdHlwZSBQYXlsb2FkTGlzdCBbXVBheWxvYWRcclxuZXhwb3J0IGNvbnN0IG1ha2VPdXRsaW5lU3RhdGUgPSAoe1xyXG5cdGl0ZW1fdHlwZSA9IG51bGwsXHJcblx0cGF5bG9hZHMgPSBbXSxcclxuXHRyZWxheWVkID0gbmV3IFNldChbXCJpZFwiLCBcImxldmVsXCJdKSxcclxufSA9IHt9KSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGhpZXJhcmNoeV9tYXA6IHt9LFxyXG5cdFx0aXRlbV90eXBlLFxyXG5cdFx0cGF5bG9hZHM6IEFycmF5TWFwcGVyKHBheWxvYWRzKSxcclxuXHRcdHJlbGF5ZWQsXHJcblx0XHRyZWNvcmRzOiBuZXcgTWFwKCksXHJcblx0fTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFJlbGF0aW9uKGlkLCB7IC4uLnByb3BzIH0pIHtcclxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuXHRcdHtcclxuXHRcdFx0aWQsXHJcblx0XHRcdG5leHRfc2libGluZzogdW5kZWZpbmVkLFxyXG5cdFx0XHRwcmV2X3NpYmxpbmc6IHVuZGVmaW5lZCxcclxuXHRcdFx0cGFyZW50OiB1bmRlZmluZWQsXHJcblx0XHRcdGNoaWxkOiB1bmRlZmluZWQsXHJcblx0XHR9LFxyXG5cdFx0cHJvcHNcclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5IaWVyYXJjaHlBbmFseXplcih7fSA9IHt9KSB7XHJcblx0ZnVuY3Rpb24gY29uc3RydWN0b3IoeyBoaWVyYXJjaHlfbWFwID0geyByZWxhdGlvbjoge30sIHNpemU6IHt9IH0gfSA9IHt9KSB7XHJcblx0XHRsZXQge1xyXG5cdFx0XHRyZWxhdGlvbjogbGl2ZV9yZWxhdGlvbl9tYXAsXHJcblx0XHRcdHNpemU6IGxpdmVfc2l6ZV9tYXAsXHJcblx0XHR9ID0gaGllcmFyY2h5X21hcDtcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZyhsaXZlX3NpemVfbWFwKTtcclxuXHJcblx0XHQvLyB0eXBlIEhpZXJhcmNoeU5vZGUgUGF5bG9hZFxyXG5cdFx0ZnVuY3Rpb24gb25JbnNlcnRlZCh7IGxldmVsLCBpZCB9LCBpbmRleCwgcGF5bG9hZHMpIHtcclxuXHRcdFx0Y29uc3QgaXNfZmlyc3QgPSBpbmRleCA9PT0gMDtcclxuXHRcdFx0Y29uc3QgaXNfdG9wID0gbGV2ZWwgPT09IDA7XHJcblx0XHRcdGNvbnN0IGlzX2xhc3QgPSBpbmRleCA9PT0gcGF5bG9hZHMubGVuZ3RoIC0gMTtcclxuXHRcdFx0Y29uc3QgcHJldl9pbmRleCA9IGluZGV4IC0gMTtcclxuXHRcdFx0Y29uc3QgbmV4dF9pbmRleCA9IGluZGV4ICsgMTtcclxuXHRcdFx0Y29uc3QgcHJldl9pZCA9IGlzX2ZpcnN0ID8gdW5kZWZpbmVkIDogcGF5bG9hZHNbcHJldl9pbmRleF0uaWQ7XHJcblx0XHRcdGNvbnN0IG5leHRfaWQgPSBpc19sYXN0ID8gdW5kZWZpbmVkIDogcGF5bG9hZHNbbmV4dF9pbmRleF0uaWQ7XHJcblx0XHRcdGNvbnN0IHByZXZfcGF5bG9hZCA9IHBheWxvYWRzW3ByZXZfaW5kZXhdO1xyXG5cdFx0XHRjb25zdCBwcmV2X2xldmVsID0gIWlzX2ZpcnN0ICYmIHByZXZfcGF5bG9hZC5sZXZlbDtcclxuXHRcdFx0Y29uc3QgZGlmZl9sZXZlbCA9ICFpc19maXJzdCAmJiBsZXZlbCAtIHByZXZfbGV2ZWw7XHJcblxyXG5cdFx0XHRjb25zdCBwcmV2X3JlbGF0aW9uID0gZmFsbGJhY2soUmVsYXRpb24oaWQpKShcclxuXHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X2lkXVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCBuZXh0X3JlbGF0aW9uID0gZmFsbGJhY2soUmVsYXRpb24oaWQpKShcclxuXHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtuZXh0X2lkXVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCByZWxhdGlvbiA9IGZhbGxiYWNrKFJlbGF0aW9uKGlkKSkobGl2ZV9yZWxhdGlvbl9tYXBbaWRdKTtcclxuXHJcblx0XHRcdGlmIChkaWZmX2xldmVsID4gMCkge1xyXG5cdFx0XHRcdHByZXZfcmVsYXRpb24uY2hpbGQgPSBpZDtcclxuXHRcdFx0XHRyZWxhdGlvbi5wYXJlbnQgPSBpc19maXJzdCB8fCBpc190b3AgPyB1bmRlZmluZWQgOiBwcmV2X2lkO1xyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2xhc3QgJiYgcmVsYXRpb24ucGFyZW50ID09PSBuZXh0X3JlbGF0aW9uLnBhcmVudCkge1xyXG5cdFx0XHRcdFx0bmV4dF9yZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoZGlmZl9sZXZlbCA9PT0gMCkge1xyXG5cdFx0XHRcdHJlbGF0aW9uLnByZXZfc2libGluZyA9IHByZXZfaWQ7XHJcblx0XHRcdFx0cmVsYXRpb24ucGFyZW50ID1cclxuXHRcdFx0XHRcdGlzX2ZpcnN0IHx8IGlzX3RvcCA/IHVuZGVmaW5lZCA6IHByZXZfcmVsYXRpb24ucGFyZW50O1xyXG5cdFx0XHRcdHByZXZfcmVsYXRpb24ubmV4dF9zaWJsaW5nID0gaWQ7XHJcblxyXG5cdFx0XHRcdGlmICghaXNfbGFzdCAmJiBuZXh0X3JlbGF0aW9uLnBhcmVudCA9PT0gcmVsYXRpb24ucGFyZW50KSB7XHJcblx0XHRcdFx0XHRyZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBuZXh0X2lkO1xyXG5cdFx0XHRcdFx0bmV4dF9yZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc3QgcHJldl9zaWJsaW5nX2lkID0gZ2V0UmVjdXJzaXZlUGFyZW50KFxyXG5cdFx0XHRcdFx0cHJldl9pZCxcclxuXHRcdFx0XHRcdC1kaWZmX2xldmVsXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0Y29uc3QgcGFyZW50X3JlbGF0aW9uID0gZmFsbGJhY2soUmVsYXRpb24oaWQpKShcclxuXHRcdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfc2libGluZ19pZF1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNvbnN0IHByZXZfc2libGluZ19yZWxhdGlvbiA9XHJcblx0XHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X3NpYmxpbmdfaWRdO1xyXG5cclxuXHRcdFx0XHRyZWxhdGlvbi5wYXJlbnQgPVxyXG5cdFx0XHRcdFx0aXNfZmlyc3QgfHwgaXNfdG9wID8gdW5kZWZpbmVkIDogcGFyZW50X3JlbGF0aW9uLnBhcmVudDtcclxuXHRcdFx0XHRyZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBpc19sYXN0ID8gdW5kZWZpbmVkIDogcHJldl9zaWJsaW5nX2lkO1xyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2ZpcnN0KSB7XHJcblx0XHRcdFx0XHRwcmV2X3NpYmxpbmdfcmVsYXRpb24ubmV4dF9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2xhc3QgJiYgcmVsYXRpb24ucGFyZW50ID09PSBuZXh0X3JlbGF0aW9uLnBhcmVudCkge1xyXG5cdFx0XHRcdFx0cGFyZW50X3JlbGF0aW9uLm5leHRfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdFx0bmV4dF9yZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICghaXNfZmlyc3QpIHtcclxuXHRcdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfc2libGluZ19pZF0gPSBwYXJlbnRfcmVsYXRpb247XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWlzX3RvcCkge1xyXG5cdFx0XHRcdGNvbnN0IHNpemUgPSBmYWxsYmFjaygwKShsaXZlX3NpemVfbWFwW3JlbGF0aW9uLnBhcmVudF0pO1xyXG5cdFx0XHRcdGxpdmVfc2l6ZV9tYXBbcmVsYXRpb24ucGFyZW50XSA9IHNpemUgKyAxO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWlzX2ZpcnN0KSB7XHJcblx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9pZF0gPSBwcmV2X3JlbGF0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW2lkXSA9IHJlbGF0aW9uO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldFJlY3Vyc2l2ZVBhcmVudChpZCwgY291bnQgPSAwKSB7XHJcblx0XHRcdGNvbnN0IHBhcmVudF9pZCA9XHJcblx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbaWRdICYmIGxpdmVfcmVsYXRpb25fbWFwW2lkXS5wYXJlbnQ7XHJcblx0XHRcdGlmIChjb3VudCA+IDEgJiYgcGFyZW50X2lkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGdldFJlY3Vyc2l2ZVBhcmVudChwYXJlbnRfaWQsIGNvdW50IC0gMSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcmVudF9pZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG9uUmVtb3ZlZCh7IGlkIH0sIGluZGV4LCBwYXlsb2Fkcykge1xyXG5cdFx0XHRjb25zdCBpc19maXJzdCA9IGluZGV4ID09PSAwO1xyXG5cdFx0XHRjb25zdCBpc19sYXN0ID0gaW5kZXggPT09IHBheWxvYWRzLmxlbmd0aDtcclxuXHRcdFx0Y29uc3QgcHJldl9pbmRleCA9IGluZGV4IC0gMTtcclxuXHRcdFx0Y29uc3QgbmV4dF9pbmRleCA9IGluZGV4O1xyXG5cdFx0XHRjb25zdCBwcmV2X2lkID0gaXNfZmlyc3QgPyB1bmRlZmluZWQgOiBwYXlsb2Fkc1twcmV2X2luZGV4XS5pZDtcclxuXHRcdFx0Y29uc3QgbmV4dF9pZCA9IGlzX2xhc3QgPyB1bmRlZmluZWQgOiBwYXlsb2Fkc1tuZXh0X2luZGV4XS5pZDtcclxuXHJcblx0XHRcdGNvbnN0IHByZXZfcmVsYXRpb24gPSBsaXZlX3JlbGF0aW9uX21hcFtwcmV2X2lkXTtcclxuXHRcdFx0Y29uc3QgbmV4dF9yZWxhdGlvbiA9IGxpdmVfcmVsYXRpb25fbWFwW25leHRfaWRdO1xyXG5cdFx0XHRjb25zdCByZWxhdGlvbiA9IGxpdmVfcmVsYXRpb25fbWFwW2lkXTtcclxuXHJcblx0XHRcdGNvbnN0IHsgcHJldl9zaWJsaW5nLCBuZXh0X3NpYmxpbmcsIHBhcmVudCB9ID0gcmVsYXRpb247XHJcblxyXG5cdFx0XHRjb25zdCBwcmV2X3NpYmxpbmdfcmVsYXRpb24gPSBpc05vdEVtcHR5KHByZXZfc2libGluZylcclxuXHRcdFx0XHQ/IGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfc2libGluZ11cclxuXHRcdFx0XHQ6IHVuZGVmaW5lZDtcclxuXHRcdFx0Y29uc3QgbmV4dF9zaWJsaW5nX3JlbGF0aW9uID0gaXNOb3RFbXB0eShuZXh0X3NpYmxpbmcpXHJcblx0XHRcdFx0PyBsaXZlX3JlbGF0aW9uX21hcFtuZXh0X3NpYmxpbmddXHJcblx0XHRcdFx0OiB1bmRlZmluZWQ7XHJcblx0XHRcdGNvbnN0IHBhcmVudF9yZWxhdGlvbiA9IGlzTm90RW1wdHkocGFyZW50KVxyXG5cdFx0XHRcdD8gbGl2ZV9yZWxhdGlvbl9tYXBbcGFyZW50XVxyXG5cdFx0XHRcdDogdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0aWYgKGlzTm90RW1wdHkocHJldl9zaWJsaW5nX3JlbGF0aW9uKSkge1xyXG5cdFx0XHRcdHByZXZfcmVsYXRpb24ubmV4dF9zaWJsaW5nID0gbmV4dF9zaWJsaW5nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChpc05vdEVtcHR5KG5leHRfc2libGluZ19yZWxhdGlvbikpIHtcclxuXHRcdFx0XHRuZXh0X3JlbGF0aW9uLnByZXZfc2libGluZyA9IHByZXZfc2libGluZztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoaXNOb3RFbXB0eShwYXJlbnRfcmVsYXRpb24pICYmIHBhcmVudF9yZWxhdGlvbi5jaGlsZCA9PT0gaWQpIHtcclxuXHRcdFx0XHRwYXJlbnRfcmVsYXRpb24uY2hpbGQgPSBuZXh0X3NpYmxpbmc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRlbGV0ZSBsaXZlX3JlbGF0aW9uX21hcFtpZF07XHJcblxyXG5cdFx0XHRsaXZlX3NpemVfbWFwW3JlbGF0aW9uLnBhcmVudF0tLTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjbG9uZSgpIHtcclxuXHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yKHtcclxuXHRcdFx0XHRoaWVyYXJjaHlfbWFwOiB7XHJcblx0XHRcdFx0XHRyZWxhdGlvbjogeyAuLi5saXZlX3JlbGF0aW9uX21hcCB9LFxyXG5cdFx0XHRcdFx0c2l6ZTogeyAuLi5saXZlX3NpemVfbWFwIH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gYXBwbHkoeyBoaWVyYXJjaHlfbWFwIH0pIHtcclxuXHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXAgPSBoaWVyYXJjaHlfbWFwLnJlbGF0aW9uO1xyXG5cdFx0XHRsaXZlX3NpemVfbWFwID0gaGllcmFyY2h5X21hcC5zaXplO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldEhpZXJhcmNoeU1hcCgpIHtcclxuXHRcdFx0cmV0dXJuIGhpZXJhcmNoeV9tYXA7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZXhwb3J0cyA9IHtcclxuXHRcdFx0Y2xvbmUsXHJcblx0XHRcdGFwcGx5LFxyXG5cdFx0XHRvbkluc2VydGVkLFxyXG5cdFx0XHRvblJlbW92ZWQsXHJcblx0XHRcdGdldEhpZXJhcmNoeU1hcCxcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oW2V4cG9ydHNdLCBleHBvcnRzKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBjb25zdHJ1Y3Rvcih7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VPdXRsaW5lUmVkdWNlciA9ICh7XHJcblx0c3RhdGUgPSBtYWtlT3V0bGluZVN0YXRlKCksXHJcblx0aGllcmFyY2h5X2FuYWx5emVyID0gZ2VuSGllcmFyY2h5QW5hbHl6ZXIoKSxcclxufSA9IHt9KSA9PiB7XHJcblx0c3RhdGUuaGllcmFyY2h5X2FuYWx5emVyID0gaGllcmFyY2h5X2FuYWx5emVyO1xyXG5cclxuXHR1c2VNZW1vKCgpID0+IHtcclxuXHRcdHN0YXRlLnBheWxvYWRzLm1hcChoaWVyYXJjaHlfYW5hbHl6ZXIub25JbnNlcnRlZCk7XHJcblx0fSwgW3N0YXRlLnBheWxvYWRzXSk7XHJcblxyXG5cdGNvbnN0IHJlZHVjZXIgPSB1c2VSZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0XHRpZiAoYWN0aW9uLnR5cGUgPT09IFwiZGVsZXRlXCIpIHtcclxuXHRcdFx0Y29uc3QgeyBpbmRleCB9ID0gYWN0aW9uO1xyXG5cdFx0XHRjb25zdCB7IHBheWxvYWRzIH0gPSBzdGF0ZTtcclxuXHRcdFx0c3RhdGUucGF5bG9hZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBheWxvYWRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInNhdmVcIikge1xyXG5cdFx0XHRjb25zdCB7IGlkLCBleHRyYSA9ICgpID0+ICh7fSkgfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgeyByZWNvcmRzLCBwYXlsb2FkcyB9ID0gc3RhdGU7XHJcblx0XHRcdGNvbnN0IGV4dHJhX2RhdGEgPSBleHRyYShzdGF0ZSk7XHJcblxyXG5cdFx0XHRyZWNvcmRzLnNldChpZCwgcGF5bG9hZHMuY2xvbmUoKSk7XHJcblx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZXh0cmFfZGF0YSkubWFwKChzeW0pID0+IHtcclxuXHRcdFx0XHRyZWNvcmRzLnNldChzeW0sIGV4dHJhX2RhdGFbc3ltXSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHJlY29yZHMgfTtcclxuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFwicmVzdG9yZVwiKSB7XHJcblx0XHRcdGNvbnN0IHsgaWQgPSBbXSwgZXh0cmEgPSBbXSB9ID0gYWN0aW9uO1xyXG5cdFx0XHRjb25zdCB7IHJlY29yZHMgfSA9IHN0YXRlO1xyXG5cclxuXHRcdFx0cmVjb3Jkcy5kZWxldGUoaWQpO1xyXG5cdFx0XHRleHRyYS5tYXAoKGlkKSA9PiByZWNvcmRzLmRlbGV0ZShpZCkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHJlY29yZHMgfTtcclxuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFwic2V0QmFzZWRPblwiKSB7XHJcblx0XHRcdGNvbnN0IHsgaWQsIGFmZmVjdCB9ID0gYWN0aW9uO1xyXG5cdFx0XHRjb25zdCBwYXlsb2FkcyA9IGFmZmVjdChzdGF0ZS5yZWNvcmRzLmdldChpZCkuY2xvbmUoKSwgc3RhdGUpO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcGF5bG9hZHMgfTtcclxuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFwic2V0XCIpIHtcclxuXHRcdFx0Y29uc3QgeyBhZmZlY3QgfSA9IGFjdGlvbjtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFmZmVjdChzdGF0ZSkgfTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH1cclxuXHR9LCBzdGF0ZSk7XHJcblxyXG5cdHJldHVybiByZWR1Y2VyO1xyXG59O1xyXG5cclxuY29uc3QgRW1wdHlOb2RlID0gZm9yd2FyZFJlZigoeyAuLi5yZXN0IH0sIHJlZikgPT4gKFxyXG5cdDxkaXYgcmVmPXtyZWZ9IHsuLi5yZXN0fT48L2Rpdj5cclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoe1xyXG5cdHJlZHVjZXIgPSB1c2VPdXRsaW5lUmVkdWNlcigpLFxyXG5cdGNsYXNzTmFtZSxcclxuXHRzdHlsZSxcclxuXHQuLi5yZXN0XHJcbn0pID0+IHtcclxuXHRjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuXHRjb25zdCBjbHMgPSBqb2luQnlTcGFjZShjbGFzc05hbWUsIFwiT3V0bGluZVwiKTtcclxuXHRjb25zdCBbTm9kZSwgbWFwcGVyXSA9IHVzZUNvbXBvbmVudEluZGV4ZXIoRmxhdE5vZGUpO1xyXG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gcmVkdWNlcjtcclxuXHRjb25zdCBbdGh1bWJfcHJvcHMsIHNldFRodW1iUHJvcHNdID0gdXNlU3RhdGUoe1xyXG5cdFx0b2Zmc2V0OiAwLFxyXG5cdFx0bm9kZV9wcm9wczogeyBpdGVtX3R5cGU6IEVtcHR5Tm9kZSB9LFxyXG5cdH0pO1xyXG5cdGNvbnN0IHBheWxvYWRzID0gdXNlUmVmKCk7XHJcblx0Y29uc3QgaGllcmFyY2h5X2FuYWx5emVyID0gdXNlUmVmKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRwYXlsb2Fkcy5jdXJyZW50ID0gc3RhdGUucGF5bG9hZHM7XHJcblx0fSwgW3N0YXRlLnBheWxvYWRzXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRoaWVyYXJjaHlfYW5hbHl6ZXIuY3VycmVudCA9IHN0YXRlLmhpZXJhcmNoeV9hbmFseXplcjtcclxuXHR9LCBbc3RhdGUuaGllcmFyY2h5X2FuYWx5emVyXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoIXJlZikgcmV0dXJuO1xyXG5cdFx0Y29uc3QgdG9wX25vZGVfZG9tID0gcmVmLmN1cnJlbnQ7XHJcblx0XHRjb25zdCB0b3BfYm91bmQgPSB0b3Bfbm9kZV9kb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gbGlzdGVuKFxyXG5cdFx0XHRcIm1vdXNlZG93blwiLFxyXG5cdFx0XHR0b3Bfbm9kZV9kb21cclxuXHRcdCkoKGUpID0+IHtcclxuXHRcdFx0Y29uc3QgeyBwYXRoLCBjbGllbnRYLCBjbGllbnRZIH0gPSBlO1xyXG5cclxuXHRcdFx0Y29uc3QgbG9jYWxfb2Zmc2V0ID0gKGNsaWVudFkgLSB0b3BfYm91bmQueSkgJSBsaW5lSGVpZ2h0O1xyXG5cdFx0XHRjb25zdCBpbml0X2luZGV4ID1cclxuXHRcdFx0XHQoY2xpZW50WSAtIHRvcF9ib3VuZC55IC0gbG9jYWxfb2Zmc2V0KSAvIGxpbmVIZWlnaHQ7XHJcblxyXG5cdFx0XHRjb25zdCBpbml0X3BheWxvYWRfbm9kZV9wb3NpdGlvbiA9XHJcblx0XHRcdFx0aW5pdF9pbmRleCAqIGxpbmVIZWlnaHQgKyBsb2NhbF9vZmZzZXQ7XHJcblxyXG5cdFx0XHQvLyBkaXNwYXRjaCh7XHJcblx0XHRcdC8vIFx0dHlwZTogXCJzYXZlXCIsXHJcblx0XHRcdC8vIFx0aWQsXHJcblx0XHRcdC8vIFx0ZXh0cmE6ICh7IHBheWxvYWRzLCBoaWVyYXJjaHlfYW5hbHl6ZXIgfSkgPT4gKHtcclxuXHRcdFx0Ly8gXHRcdFtpbml0X3BheWxvYWRfbGV2ZWxfaWRdOiBwYXlsb2Fkcy5saXN0W2luaXRfaW5kZXhdLmxldmVsLFxyXG5cdFx0XHQvLyBcdFx0W2luaXRfaGllcmFyY2h5X2FuYWx5emVyX2lkXTogaGllcmFyY2h5X2FuYWx5emVyLmNsb25lKCksXHJcblx0XHRcdC8vIFx0fSksXHJcblx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdFx0Ly8gZGlzcGF0Y2goe1xyXG5cdFx0XHQvLyBcdHR5cGU6IFwic2V0XCIsXHJcblx0XHRcdC8vIFx0YWZmZWN0OiAoeyBwYXlsb2FkcywgaGllcmFyY2h5X2FuYWx5emVyIH0pID0+IHtcclxuXHRcdFx0Ly8gXHRcdGNvbnN0IFtwYXlsb2FkXSA9IHBheWxvYWRzLnNwbGljZShpbml0X2luZGV4LCAxKTtcclxuXHRcdFx0Ly8gXHRcdGhpZXJhcmNoeV9hbmFseXplci5vblJlbW92ZWQoXHJcblx0XHRcdC8vIFx0XHRcdHBheWxvYWQsXHJcblx0XHRcdC8vIFx0XHRcdGluaXRfaW5kZXgsXHJcblx0XHRcdC8vIFx0XHRcdHBheWxvYWRzLmxpc3RcclxuXHRcdFx0Ly8gXHRcdCk7XHJcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBwYXlsb2FkcywgaGllcmFyY2h5X2FuYWx5emVyIH07XHJcblx0XHRcdC8vIFx0fSxcclxuXHRcdFx0Ly8gfSk7XHJcblxyXG5cdFx0XHRjb25zdCBpeCA9IGNsaWVudFgsXHJcblx0XHRcdFx0aXkgPSBjbGllbnRZO1xyXG5cclxuXHRcdFx0Y29uc3QgcGF5bG9hZHNfbG9ja2VkID0gcGF5bG9hZHMuY3VycmVudC5jbG9uZSgpO1xyXG5cdFx0XHRjb25zdCBoaWVyYXJjaHlfYW5hbHl6ZXJfbG9ja2VkID0gaGllcmFyY2h5X2FuYWx5emVyLmN1cnJlbnQuY2xvbmUoKTtcclxuXHRcdFx0Y29uc3QgaW5pdF9wYXlsb2FkID0gcGF5bG9hZHNfbG9ja2VkLmxpc3RbaW5pdF9pbmRleF07XHJcblxyXG5cdFx0XHRjb25zdCBjbGVhbl9tb3ZlID0gbGlzdGVuKFwibW91c2Vtb3ZlXCIpKCh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xyXG5cdFx0XHRcdGxldCBzdGFydF9zdGFtcCA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0Ly8gY29uc3QgcGF5bG9hZHNfbGl2ZSA9IHBheWxvYWRzX2xvY2tlZC5jbG9uZSgpO1xyXG5cdFx0XHRcdC8vIGNvbnN0IGhpZXJhcmNoeV9hbmFseXplcl9saXZlID0gaGllcmFyY2h5X2FuYWx5emVyX2xvY2tlZC5jbG9uZSgpO1xyXG5cdFx0XHRcdC8vIGNvbnN0IGhpZXJhcmNoeV9tYXAgPSBoaWVyYXJjaHlfYW5hbHl6ZXJfbGl2ZS5nZXRIaWVyYXJjaHlNYXAoKTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgbG9jYWxfb2Zmc2V0ID0gKGNsaWVudFkgLSB0b3BfYm91bmQueSkgJSBsaW5lSGVpZ2h0O1xyXG5cdFx0XHRcdC8vIGNvbnN0IGxpdmVfaW5kZXggPVxyXG5cdFx0XHRcdC8vIFx0KGNsaWVudFkgLSB0b3BfYm91bmQueSAtIGxvY2FsX29mZnNldCkgLyBsaW5lSGVpZ2h0O1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X2luZGV4ID0gbGl2ZV9pbmRleCAtIDE7XHJcblx0XHRcdFx0Ly8gY29uc3QgbmV4dF9pbmRleCA9IGxpdmVfaW5kZXggKyAxO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwcmV2X2luZGV4LCBuZXh0X2luZGV4KTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgaXNfZmlyc3QgPSBsaXZlX2luZGV4ID09PSAwO1xyXG5cdFx0XHRcdC8vIGNvbnN0IGlzX2xhc3QgPSBsaXZlX2luZGV4ID09PSBwYXlsb2Fkc19saXZlLmxlbmd0aCAtIDE7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IGluaXRfcmVsYXRpb24gPSBoaWVyYXJjaHlfbWFwLnJlbGF0aW9uW2luaXRfcGF5bG9hZC5pZF07XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfcGF5bG9hZCA9IHBheWxvYWRzX2xpdmUubGlzdFtwcmV2X2luZGV4XTtcclxuXHRcdFx0XHQvLyBjb25zdCBuZXh0X3BheWxvYWQgPSBwYXlsb2Fkc19saXZlLmxpc3RbbmV4dF9pbmRleF07XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfcmVsYXRpb24gPSBoaWVyYXJjaHlfbWFwLnJlbGF0aW9uW3ByZXZfcGF5bG9hZC5pZF07XHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9sZXZlbCA9IHByZXZfcGF5bG9hZC5sZXZlbDtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9wYXJlbnRfcGF5bG9hZCA9IHBheWxvYWRzX2xpdmUuZ2V0KFxyXG5cdFx0XHRcdC8vIFx0cHJldl9yZWxhdGlvbi5wYXJlbnRcclxuXHRcdFx0XHQvLyApO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X2lzX3BhcmVudCA9IHByZXZfcGF5bG9hZC5pZCBpbiBoaWVyYXJjaHlfbWFwLnNpemU7XHJcblxyXG5cdFx0XHRcdGNvbnN0IGluaXRfbGV2ZWwgPSBpbml0X3BheWxvYWQubGV2ZWw7XHJcblx0XHRcdFx0Ly8gY29uc3QgbWF5YmVfbGV2ZWwgPVxyXG5cdFx0XHRcdC8vIFx0KHByZXZfaXNfcGFyZW50XHJcblx0XHRcdFx0Ly8gXHRcdD8gcHJldl9wYXlsb2FkLmxldmVsXHJcblx0XHRcdFx0Ly8gXHRcdDogcHJldl9wYXJlbnRfcGF5bG9hZC5sZXZlbCkgKyAxO1xyXG5cclxuXHRcdFx0XHRjb25zdCB4ID0gY2xpZW50WCAtIGl4O1xyXG5cdFx0XHRcdGNvbnN0IHNob3VsZF9sZXZlbCA9IGluaXRfbGV2ZWwgKyB4IC8gMjA7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG9mZnNldCA9IGluaXRfcGF5bG9hZF9ub2RlX3Bvc2l0aW9uICsgY2xpZW50WSAtIGl5O1xyXG5cclxuXHRcdFx0XHRzZXRUaHVtYlByb3BzKHtcclxuXHRcdFx0XHRcdG5vZGVfcHJvcHM6IGdldE5vZGVQcm9wcyhcclxuXHRcdFx0XHRcdFx0eyAuLi5pbml0X3BheWxvYWQsIGxldmVsOiBzaG91bGRfbGV2ZWwgfSxcclxuXHRcdFx0XHRcdFx0c3RhdGVcclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHRvZmZzZXQsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gc2V0VGh1bWJQcm9wcyh7XHJcblx0XHRcdFx0Ly8gXHRub2RlX3Byb3BzOiBnZXROb2RlUHJvcHMoXHJcblx0XHRcdFx0Ly8gXHRcdHsgLi4uaW5pdF9wYXlsb2FkLCBsZXZlbDogY2xpZW50WCAvIDIwIH0sXHJcblx0XHRcdFx0Ly8gXHRcdHN0YXRlXHJcblx0XHRcdFx0Ly8gXHQpLFxyXG5cdFx0XHRcdC8vIFx0b2Zmc2V0LFxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdFx0XHQvLyBpZiAoXHJcblx0XHRcdFx0Ly8gXHRpc0VtcHR5KHByZXZfcmVsYXRpb24ubmV4dF9zaWJsaW5nKSAmJlxyXG5cdFx0XHRcdC8vIFx0IXByZXZfaXNfcGFyZW50XHJcblx0XHRcdFx0Ly8gKSB7XHJcblx0XHRcdFx0Ly8gXHRpZiAoc2hvdWxkX2xldmVsIDwgbWF5YmVfbGV2ZWwpIHtcclxuXHRcdFx0XHQvLyBcdFx0aW5pdF9wYXlsb2FkLmxldmVsID0gc2hvdWxkX2xldmVsO1xyXG5cdFx0XHRcdC8vIFx0fVxyXG5cdFx0XHRcdC8vIH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdC8vIGluaXRfcGF5bG9hZC5sZXZlbCA9IG1heWJlX2xldmVsO1xyXG5cclxuXHRcdFx0XHQvLyBwYXlsb2Fkc19saXZlLnNwbGljZShpbml0X2luZGV4LCAxKTtcclxuXHRcdFx0XHQvLyBoaWVyYXJjaHlfYW5hbHl6ZXJfbGl2ZS5vblJlbW92ZWQoXHJcblx0XHRcdFx0Ly8gXHRpbml0X3BheWxvYWQsXHJcblx0XHRcdFx0Ly8gXHRpbml0X2luZGV4LFxyXG5cdFx0XHRcdC8vIFx0cGF5bG9hZHNfbGl2ZS5saXN0XHJcblx0XHRcdFx0Ly8gKTtcclxuXHJcblx0XHRcdFx0Ly8gcGF5bG9hZHNfbGl2ZS5zcGxpY2UobGl2ZV9pbmRleCA+PiAwLCAwLCBpbml0X3BheWxvYWQpO1xyXG5cdFx0XHRcdC8vIGhpZXJhcmNoeV9hbmFseXplcl9saXZlLm9uSW5zZXJ0ZWQoXHJcblx0XHRcdFx0Ly8gXHRpbml0X3BheWxvYWQsXHJcblx0XHRcdFx0Ly8gXHRsaXZlX2luZGV4ID4+IDAsXHJcblx0XHRcdFx0Ly8gXHRwYXlsb2Fkc19saXZlLmxpc3RcclxuXHRcdFx0XHQvLyApO1xyXG5cclxuXHRcdFx0XHQvLyBsZXQgc3RhcnRfc3RhbXBfZGlzcGF0Y2ggPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdC8vIGRpc3BhdGNoKHtcclxuXHRcdFx0XHQvLyBcdHR5cGU6IFwic2V0XCIsXHJcblx0XHRcdFx0Ly8gXHRhZmZlY3Q6ICgpID0+ICh7XHJcblx0XHRcdFx0Ly8gXHRcdHBheWxvYWRzOiBwYXlsb2Fkc19saXZlLFxyXG5cdFx0XHRcdC8vIFx0XHRoaWVyYXJjaHlfYW5hbHl6ZXI6IGhpZXJhcmNoeV9hbmFseXplcl9saXZlLFxyXG5cdFx0XHRcdC8vIFx0fSksXHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXHJcblx0XHRcdFx0Ly8gXHREYXRlLm5vdygpIC0gc3RhcnRfc3RhbXAsXHJcblx0XHRcdFx0Ly8gXHREYXRlLm5vdygpIC0gc3RhcnRfc3RhbXBfZGlzcGF0Y2hcclxuXHRcdFx0XHQvLyApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IGNsZWFuX3VwID0gbGlzdGVuKFwibW91c2V1cFwiKSgoKSA9PiB7XHJcblx0XHRcdFx0Y2xlYW5fbW92ZSgpO1xyXG5cdFx0XHRcdGNsZWFuX3VwKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSwgW3JlZi5jdXJyZW50XSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xzfSByZWY9e3JlZn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9sZGVyXCI+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGh1bWJcIlxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgdG9wOiB0aHVtYl9wcm9wcy5vZmZzZXQgKyBcInB4XCIgfX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Tm9kZSB7Li4udGh1bWJfcHJvcHMubm9kZV9wcm9wc30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG5cdFx0XHRcdHtzdGF0ZS5wYXlsb2Fkcy5tYXAoKHBheWxvYWQpID0+IChcclxuXHRcdFx0XHRcdDxOb2RlIGtleT17cGF5bG9hZC5pZH0gey4uLmdldE5vZGVQcm9wcyhwYXlsb2FkLCBzdGF0ZSl9IC8+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldE5vZGVQcm9wcyhwYXlsb2FkLCBzdGF0ZSkge1xyXG5cdGNvbnN0IHJlZHVjZXIgPSAocmVsYXllZCwgW2tleSwgdmFsdWVdKSA9PiB7XHJcblx0XHRpZiAoc3RhdGUucmVsYXllZC5oYXMoa2V5KSkge1xyXG5cdFx0XHRyZWxheWVkW2tleV0gPSB2YWx1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZWxheWVkO1xyXG5cdH07XHJcblx0Y29uc3QgcmVsYXllZF9wcm9wcyA9IE9iamVjdC5lbnRyaWVzKHBheWxvYWQpLnJlZHVjZShyZWR1Y2VyLCB7fSk7XHJcblx0Y29uc3QgcGF5bG9hZF9wcm9wcyA9IHBheWxvYWQucHJvcHM7XHJcblx0Y29uc3QgbWV0YV9wcm9wcyA9IHtcclxuXHRcdGlkOiBwYXlsb2FkLmlkLFxyXG5cdFx0bGV2ZWw6IHBheWxvYWQubGV2ZWwsXHJcblx0XHRjYW5fZXhwYW5kOiBwYXlsb2FkLmNhbl9leHBhbmQsXHJcblx0fTtcclxuXHJcblx0aWYgKFwidHlwZV9zZWxmXCIgaW4gcGF5bG9hZCkge1xyXG5cdFx0bWV0YV9wcm9wcy5pdGVtX3R5cGUgPSBwYXlsb2FkLnR5cGVfc2VsZjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bWV0YV9wcm9wcy5pdGVtX3R5cGUgPSBzdGF0ZS5pdGVtX3R5cGU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHsgLi4ucGF5bG9hZF9wcm9wcywgLi4ucmVsYXllZF9wcm9wcyB9LFxyXG5cdFx0Li4ubWV0YV9wcm9wcyxcclxuXHR9O1xyXG59XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9PdXRsaW5lXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL091dGxpbmVcIjtcclxuIiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gXCIuL2ZuXCI7XHJcblxyXG4vLyBBcnJheSBHZW5lcmF0b3JcclxuZXhwb3J0IGNvbnN0IHJlcGVhdCA9IChjb3VudCkgPT4ge1xyXG5cdHJldHVybiAoZm4gPSAodikgPT4gdikgPT5cclxuXHRcdEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChcIiBcIi5yZXBlYXQoY291bnQpLCAoXywgaWR4KSA9PiBmbihpZHgpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBqb2luQnlTcGFjZSA9ICguLi5jbHMpID0+IGNscy5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkID0gKGEsIGIpID0+IGEubWFwKChhLCBpKSA9PiBiW2ldICsgYSk7XHJcblxyXG5leHBvcnQgY29uc3QgbGFzdCA9IChhcnJheWxpa2UpID0+IGFycmF5bGlrZVthcnJheWxpa2UubGVuZ3RoIC0gMV07XHJcblxyXG5leHBvcnQgY29uc3QgZmlyc3QgPSAoYXJyYXlsaWtlKSA9PiBhcnJheWxpa2VbMF07XHJcblxyXG5leHBvcnQgY29uc3QgaW5Cb3VuZCA9IChtaW4sIG1heCkgPT4gKHYpID0+IE1hdGgubWF4KG1pbiwgTWF0aC5taW4odiwgbWF4KSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5BcnJheUJvdW5kID0gKHsgbGVuZ3RoIH0pID0+IGluQm91bmQoMCwgbGVuZ3RoIC0gMSk7XHJcblxyXG5leHBvcnQgY29uc3QgZmlyc3RJbkl0ZXIgPSAoc2V0KSA9PiBzZXQuZW50cmllcygpLm5leHQoKS52YWx1ZTtcclxuIiwiZXhwb3J0IGNvbnN0IGlzRmFsc3kgPSB2ID0+ICF2O1xyXG5leHBvcnQgY29uc3QgaXNUcnV0aHkgPSB2ID0+ICEhdjtcclxuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gdiA9PiB0eXBlb2YgdiA9PT0gJ3N0cmluZyc7XHJcbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uID0gdiA9PiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcclxuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSB2ID0+IHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJztcclxuZXhwb3J0IGNvbnN0IGlzTm90RW1wdHkgPSB2ID0+IHR5cGVvZiB2ICE9PSAndW5kZWZpbmVkJztcclxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSB2ID0+IHYgaW5zdGFuY2VvZiBBcnJheTtcclxuZXhwb3J0IGNvbnN0IGlzRW1wdHlBcnJheSA9IHYgPT4gaXNBcnJheSh2KSAmJiB2Lmxlbmd0aCA9PT0gMDtcclxuIiwiZXhwb3J0IGNvbnN0IGxpc3RlbiA9IChuYW1lLCB0YXJnZXQgPSB3aW5kb3csIG9wdGlvbnMgPSB7fSkgPT4gKGZuKSA9PiB7XHJcblx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZm4sIG9wdGlvbnMpO1xyXG5cdHJldHVybiBmdW5jdGlvbiBjbGVhbigpIHtcclxuXHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGZuLCBvcHRpb25zKTtcclxuXHR9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWxsYmFjayA9IChkZWZhdWx0X3ZhbHVlKSA9PiAodiA9IGRlZmF1bHRfdmFsdWUpID0+IHY7XHJcbiIsImltcG9ydCB7IGZhbGxiYWNrIH0gZnJvbSBcIkAvdXRpbHMvZm5cIjtcclxuXHJcbmNvbnN0IGlzUG9zaXRpdmUgPSBmdW5jdGlvbiAobikge1xyXG5cdHJldHVybiAxIC8gbiA+IDA7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGltaW5nSW5kZXgoc291cmNlKSB7XHJcblx0ZnVuY3Rpb24gY29uc3RydWN0b3IoeyBzb3VyY2UgPSBbXSwgY2hhbmdlX3Byb2Nlc3MgPSBbXSB9ID0ge30pIHtcclxuXHRcdGNvbnN0IGluaXRfdGltaW5nID0gc291cmNlLm1hcCgoXywgaWR4KSA9PiBvbkluc2VydGVkKGlkeCkpO1xyXG5cclxuXHRcdC8vIGlkIHN0cmluZywgcCB1aW50XHJcblx0XHRmdW5jdGlvbiBvbkluc2VydGVkKGluZGV4KSB7XHJcblx0XHRcdGNoYW5nZV9wcm9jZXNzLnB1c2goaW5kZXgpO1xyXG5cdFx0XHRyZXR1cm4gY2hhbmdlX3Byb2Nlc3MubGVuZ3RoO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG9uUmVtb3ZlZChpbmRleCkge1xyXG5cdFx0XHRjaGFuZ2VfcHJvY2Vzcy5wdXNoKC1pbmRleCk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKGNoYW5nZV9wcm9jZXNzLCBcIkBAQEBAQEBAXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGhhcyhpbmRleCwgdGltaW5nKSB7fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldChpbmRleCwgdGltaW5nKSB7XHJcblx0XHRcdGxldCBwb3NpdGlvbiA9IGluZGV4O1xyXG5cdFx0XHRmb3IgKGxldCBpID0gdGltaW5nOyBpIDwgY2hhbmdlX3Byb2Nlc3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRjb25zdCBjcCA9IGNoYW5nZV9wcm9jZXNzW2ldO1xyXG5cdFx0XHRcdGlmIChpc1Bvc2l0aXZlKGNwKSkge1xyXG5cdFx0XHRcdFx0aWYgKHBvc2l0aW9uID49IGNwKSB7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uKys7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChwb3NpdGlvbiA+IC1jcCkge1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbi0tO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHBvc2l0aW9uO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldEluaXRUaW1pbmcoKSB7XHJcblx0XHRcdHJldHVybiBpbml0X3RpbWluZztcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjbG9uZSgpIHtcclxuXHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yKHsgc291cmNlLCBjaGFuZ2VfcHJvY2VzczogWy4uLmNoYW5nZV9wcm9jZXNzXSB9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRjbG9uZSxcclxuXHRcdFx0b25JbnNlcnRlZCxcclxuXHRcdFx0b25SZW1vdmVkLFxyXG5cdFx0XHRnZXQsXHJcblx0XHRcdGdldEluaXRUaW1pbmcsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNvbnN0cnVjdG9yKHsgc291cmNlIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm94eShzb3VyY2UpIHtcclxuXHRmdW5jdGlvbiBjb25zdHJ1Y3Rvcihzb3VyY2UpIHtcclxuXHRcdGNvbnN0IGhvc3QgPSBbLi4uc291cmNlXTtcclxuXHRcdGNvbnN0IGluZGV4ZXIgPSBUaW1pbmdJbmRleChob3N0KTtcclxuXHJcblx0XHRmdW5jdGlvbiBzcGxpY2Uoc3RhcnRfcG9zaXRpb24sIGRlbGV0ZV9jb3VudCA9IDAsIC4uLmFwcGVuZF9pdGVtcykge1xyXG5cdFx0XHRjb25zdCB0aW1pbmdfaXRlbXMgPSBuZXcgQXJyYXkoYXBwZW5kX2l0ZW1zLmxlbmd0aCk7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlX2NvdW50OyBpKyspIHtcclxuXHRcdFx0XHRpbmRleGVyLm9uUmVtb3ZlZChzdGFydF9wb3NpdGlvbiArIGkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXBwZW5kX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0Y29uc3QgaW5kZXggPSBzdGFydF9wb3NpdGlvbiArIGk7XHJcblx0XHRcdFx0Y29uc3QgdGltaW5nID0gaW5kZXhlci5vbkluc2VydGVkKGluZGV4KTtcclxuXHRcdFx0XHR0aW1pbmdfaXRlbXNbaV0gPSBbaW5kZXgsIHRpbWluZ107XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgZWZmZWN0ZWRfaXRlbXMgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoXHJcblx0XHRcdFx0aG9zdCxcclxuXHRcdFx0XHRzdGFydF9wb3NpdGlvbixcclxuXHRcdFx0XHRkZWxldGVfY291bnQsXHJcblx0XHRcdFx0Li4uYXBwZW5kX2l0ZW1zXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihlZmZlY3RlZF9pdGVtcywge1xyXG5cdFx0XHRcdHRpbWluZzogdGltaW5nX2l0ZW1zLFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjbG9uZSgpIHtcclxuXHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yKGhvc3QpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldChpbmRleCwgdGltaW5nKSB7XHJcblx0XHRcdHJldHVybiBpbmRleGVyLmdldChpbmRleCwgdGltaW5nKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihob3N0LCB7XHJcblx0XHRcdHNwbGljZSxcclxuXHRcdFx0Y2xvbmUsXHJcblx0XHRcdGdldCxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNvbnN0cnVjdG9yKHNvdXJjZSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VNYXBUbyA9IChDb21wb25lbnQsIGluZGV4ZXIpID0+IHtcclxuXHRyZXR1cm4gKHsgLi4ucHJvcHMgfSkgPT4ge1xyXG5cdFx0Y29uc3QgcmVmID0gdXNlUmVmKCk7XHJcblx0XHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gaW5kZXhlcihyZWYuY3VycmVudCwgcHJvcHMpO1xyXG5cdFx0fSwgcmVmLmN1cnJlbnQpO1xyXG5cdFx0cmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSByZWY9e3JlZn0gLz47XHJcblx0fTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDb21wb25lbnRJbmRleGVyID0gKENvbXBvbmVudCkgPT4ge1xyXG5cdGNvbnN0IGRvbV9wYXlsb2FkX21hcCA9IG5ldyBNYXAoKTtcclxuXHRjb25zdCBDb21wb25lbnRNYXBwZWQgPSB1c2VNYXBUbyhDb21wb25lbnQsIChkb20sIHBheWxvYWQpID0+IHtcclxuXHRcdGRvbV9wYXlsb2FkX21hcC5zZXQoZG9tLCBwYXlsb2FkKTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGRvbV9wYXlsb2FkX21hcC5kZWxldGUoZG9tKTtcclxuXHRcdH07XHJcblx0fSk7XHJcblx0cmV0dXJuIFtDb21wb25lbnRNYXBwZWQsIGRvbV9wYXlsb2FkX21hcF07XHJcbn07XHJcbiIsIi8vIEFycmF5IEdlbmVyYXRvclxyXG5leHBvcnQgY29uc3QgcmVwZWF0ID0gKGNvdW50LCBmbikgPT4ge1xyXG5cdHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoXCIgXCIucmVwZWF0KGNvdW50KSwgKF8sIGlkeCkgPT4gZm4oaWR4KSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgam9pbkJ5U3BhY2UgPSAoLi4uY2xzKSA9PiBjbHMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZCA9IChhLCBiKSA9PiBhLm1hcCgoYSwgaSkgPT4gYltpXSArIGEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxhc3QgPSAoYXJyYXlsaWtlKSA9PiBhcnJheWxpa2VbYXJyYXlsaWtlLmxlbmd0aCAtIDFdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpcnN0ID0gKGFycmF5bGlrZSkgPT4gYXJyYXlsaWtlWzBdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluQm91bmQgPSAobWluLCBtYXgpID0+ICh2KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKHYsIG1heCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluQXJyYXlCb3VuZCA9ICh7IGxlbmd0aCB9KSA9PiBpbkJvdW5kKDAsIGxlbmd0aCAtIDEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpcnN0SW5JdGVyID0gKHNldCkgPT4gc2V0LmVudHJpZXMoKS5uZXh0KCkudmFsdWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==