webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Outline/Outline.jsx":
/*!********************************************!*\
  !*** ./src/components/Outline/Outline.jsx ***!
  \********************************************/
/*! exports provided: node_map, dom_payload_map, getPayload, makeOutlineState, useOutlineReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "node_map", function() { return node_map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom_payload_map", function() { return dom_payload_map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayload", function() { return getPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeOutlineState", function() { return makeOutlineState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOutlineReducer", function() { return useOutlineReducer; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/array */ "./src/utils/array.js");
/* harmony import */ var _utils_fn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/fn */ "./src/utils/fn.js");
/* harmony import */ var _Outline_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Outline.css */ "./src/components/Outline/Outline.css");
/* harmony import */ var _Outline_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Outline_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_uses_mapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/uses/mapper */ "./src/utils/uses/mapper.js");
/* harmony import */ var _utils_indices_timing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/indices/timing */ "./src/utils/indices/timing.js");
/* harmony import */ var _utils_asserts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/asserts */ "./src/utils/asserts.js");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next */ "next");
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_12__);






var _this = undefined,
    _jsxFileName = "C:\\Users\\v_zhtaozhou\\projects\\AppEditor\\src\\components\\Outline\\Outline.jsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var node_map = {};
var dom_payload_map = new Map();

var Node = function Node(_ref) {
  _s();

  var data = _ref.data,
      top_payload = _ref.top_payload;
  var _data$name = data.name,
      name = _data$name === void 0 ? "" : _data$name,
      id = data.id,
      level = data.level,
      _data$children = data.children,
      children = _data$children === void 0 ? [] : _data$children;
  var top_node = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var payload = {
      name: name,
      id: id,
      children: children,
      dom: top_node.current,
      raw: data,
      top: top_payload
    };
    node_map[id] = payload;
    dom_payload_map.set(top_node.current, payload);
    return function () {
      dom_payload_map["delete"](top_node.current);
      delete node_map[id];
    };
  }, [top_node.current, data]);
  return __jsx("div", {
    ref: top_node,
    className: "node",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "title",
    style: {
      paddingLeft: "".concat(level * 20, "px")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }
  }, name), children.length > 0 && __jsx("div", {
    className: "children",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, children.map(function (data) {
    return __jsx(Node, {
      key: data.id,
      data: data,
      top_payload: top_payload,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    });
  })));
};

_s(Node, "tDieoeYtW9KO2eLVuRsouqLW4nM=");

_c = Node;
function getPayload() {}
var FlatNode = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(_c2 = function _c2() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var ref = arguments.length > 1 ? arguments[1] : undefined;

  var item_type = _ref2.item_type,
      _ref2$level = _ref2.level,
      level = _ref2$level === void 0 ? 0 : _ref2$level,
      _ref2$props = _ref2.props,
      props = _ref2$props === void 0 ? {} : _ref2$props,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref2, ["item_type", "level", "props"]);

  var Item = item_type;
  return __jsx("div", {
    className: "node",
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "title",
    style: {
      paddingLeft: "".concat(level * 20, "px")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(Item, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 6
    }
  }))));
});
_c3 = FlatNode;
var lineHeight = 20;

function ArrayMapper(array) {
  function constructor(_ref3) {
    var list = _ref3.list,
        _ref3$map = _ref3.map,
        map = _ref3$map === void 0 ? {} : _ref3$map;
    return function (map) {
      list.map(function (item) {
        return map[item.id] = item;
      });

      function clone() {
        return constructor({
          list: list.slice(),
          map: {}
        });
      }

      function remove(id) {
        delete map[id];
      }

      function splice(start_position, delete_count) {
        for (var _len = arguments.length, append_items = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          append_items[_key - 2] = arguments[_key];
        }

        var be_culled = list.splice.apply(list, [start_position, delete_count].concat(append_items));
        be_culled.map(function (_ref4) {
          var id = _ref4.id;
          return remove(id);
        });
        return be_culled;
      }

      function map() {
        return list.map.apply(list, arguments);
      }

      function get(id) {
        return map[id];
      }

      return {
        get: get,
        clone: clone,
        remove: remove,
        splice: splice,
        list: list,
        map: map
      };
    }(map);
  }

  return constructor({
    list: array
  });
} // type Payload { id, level, can_expand, type_self, props }
// type PayloadList []Payload


_c4 = ArrayMapper;
var makeOutlineState = function makeOutlineState() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref5$item_type = _ref5.item_type,
      item_type = _ref5$item_type === void 0 ? null : _ref5$item_type,
      _ref5$payloads = _ref5.payloads,
      payloads = _ref5$payloads === void 0 ? [] : _ref5$payloads,
      _ref5$relayed = _ref5.relayed,
      relayed = _ref5$relayed === void 0 ? new Set(["id", "level"]) : _ref5$relayed;

  return {
    hierarchy_map: {},
    item_type: item_type,
    payloads: ArrayMapper(payloads),
    relayed: relayed,
    records: new Map()
  };
};

function Relation(id, _ref6) {
  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _ref6);

  return Object.assign({
    id: id,
    next_sibling: undefined,
    prev_sibling: undefined,
    parent: undefined,
    child: undefined
  }, props);
}

_c5 = Relation;

function genHierarchyAnalyzer() {
  var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref7);

  function constructor() {
    var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref8$hierarchy_map = _ref8.hierarchy_map,
        hierarchy_map = _ref8$hierarchy_map === void 0 ? {
      relation: {},
      size: {}
    } : _ref8$hierarchy_map;

    var live_relation_map = hierarchy_map.relation,
        live_size_map = hierarchy_map.size; // console.log(live_size_map);
    // type HierarchyNode Payload

    function onInserted(_ref9, index, payloads) {
      var level = _ref9.level,
          id = _ref9.id;
      var is_first = index === 0;
      var is_top = level === 0;
      var is_last = index === payloads.length - 1;
      var prev_index = index - 1;
      var next_index = index + 1;
      var prev_id = is_first ? undefined : payloads[prev_index].id;
      var next_id = is_last ? undefined : payloads[next_index].id;
      var prev_payload = payloads[prev_index];
      var prev_level = !is_first && prev_payload.level;
      var diff_level = !is_first && level - prev_level;
      var prev_relation = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_7__["fallback"])(Relation(id))(live_relation_map[prev_id]);
      var next_relation = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_7__["fallback"])(Relation(id))(live_relation_map[next_id]);
      var relation = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_7__["fallback"])(Relation(id))(live_relation_map[id]);

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
        var prev_sibling_id = getRecursiveParent(prev_id, -diff_level);
        var parent_relation = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_7__["fallback"])(Relation(id))(live_relation_map[prev_sibling_id]);
        var prev_sibling_relation = live_relation_map[prev_sibling_id];
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
        var size = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_7__["fallback"])(0)(live_size_map[relation.parent]);
        live_size_map[relation.parent] = size + 1;
      }

      if (!is_first) {
        live_relation_map[prev_id] = prev_relation;
      }

      live_relation_map[id] = relation;
    }

    function getRecursiveParent(id) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var parent_id = live_relation_map[id] && live_relation_map[id].parent;

      if (count > 1 && parent_id) {
        return getRecursiveParent(parent_id, count - 1);
      } else {
        return parent_id;
      }
    }

    function onRemoved(_ref10, index, payloads) {
      var id = _ref10.id;
      var is_first = index === 0;
      var is_last = index === payloads.length;
      var prev_index = index - 1;
      var next_index = index;
      var prev_id = is_first ? undefined : payloads[prev_index].id;
      var next_id = is_last ? undefined : payloads[next_index].id;
      var prev_relation = live_relation_map[prev_id];
      var next_relation = live_relation_map[next_id];
      var relation = live_relation_map[id];
      var prev_sibling = relation.prev_sibling,
          next_sibling = relation.next_sibling,
          parent = relation.parent;
      var prev_sibling_relation = Object(_utils_asserts__WEBPACK_IMPORTED_MODULE_11__["isNotEmpty"])(prev_sibling) ? live_relation_map[prev_sibling] : undefined;
      var next_sibling_relation = Object(_utils_asserts__WEBPACK_IMPORTED_MODULE_11__["isNotEmpty"])(next_sibling) ? live_relation_map[next_sibling] : undefined;
      var parent_relation = Object(_utils_asserts__WEBPACK_IMPORTED_MODULE_11__["isNotEmpty"])(parent) ? live_relation_map[parent] : undefined;

      if (Object(_utils_asserts__WEBPACK_IMPORTED_MODULE_11__["isNotEmpty"])(prev_sibling_relation)) {
        prev_relation.next_sibling = next_sibling;
      }

      if (Object(_utils_asserts__WEBPACK_IMPORTED_MODULE_11__["isNotEmpty"])(next_sibling_relation)) {
        next_relation.prev_sibling = prev_sibling;
      }

      if (Object(_utils_asserts__WEBPACK_IMPORTED_MODULE_11__["isNotEmpty"])(parent_relation) && parent_relation.child === id) {
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

    function apply(_ref11) {
      var hierarchy_map = _ref11.hierarchy_map;
      live_relation_map = hierarchy_map.relation;
      live_size_map = hierarchy_map.size;
    }

    function getHierarchyMap() {
      return hierarchy_map;
    }

    var exports = {
      clone: clone,
      apply: apply,
      onInserted: onInserted,
      onRemoved: onRemoved,
      getHierarchyMap: getHierarchyMap
    };
    return Object.assign([exports], exports);
  }

  return constructor({});
}

var useOutlineReducer = function useOutlineReducer() {
  _s2();

  var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref12$state = _ref12.state,
      state = _ref12$state === void 0 ? makeOutlineState() : _ref12$state,
      _ref12$hierarchy_anal = _ref12.hierarchy_analyzer,
      hierarchy_analyzer = _ref12$hierarchy_anal === void 0 ? genHierarchyAnalyzer() : _ref12$hierarchy_anal;

  state.hierarchy_analyzer = hierarchy_analyzer;
  var start_stamp = Date.now();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    state.payloads.map(hierarchy_analyzer.onInserted);
  }, [state.payloads]);
  var reducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(function (state, action) {
    if (action.type === "delete") {
      var index = action.index;
      var payloads = state.payloads;
      state.payloads.splice(index, 1);
      return _objectSpread(_objectSpread({}, state), {}, {
        payloads: payloads
      });
    } else if (action.type === "save") {
      var id = action.id,
          _action$extra = action.extra,
          extra = _action$extra === void 0 ? function () {
        return {};
      } : _action$extra;
      var records = state.records,
          _payloads = state.payloads;
      var extra_data = extra(state);
      records.set(id, _payloads.clone());
      Object.getOwnPropertySymbols(extra_data).map(function (sym) {
        records.set(sym, extra_data[sym]);
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        records: records
      });
    } else if (action.type === "restore") {
      var _action$id = action.id,
          _id = _action$id === void 0 ? [] : _action$id,
          _action$extra2 = action.extra,
          _extra = _action$extra2 === void 0 ? [] : _action$extra2;

      var _records = state.records;

      _records["delete"](_id);

      _extra.map(function (id) {
        return _records["delete"](id);
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        records: _records
      });
    } else if (action.type === "setBasedOn") {
      var _id2 = action.id,
          affect = action.affect;

      var _payloads2 = affect(state.records.get(_id2).clone(), state);

      return _objectSpread(_objectSpread({}, state), {}, {
        payloads: _payloads2
      });
    } else if (action.type === "set") {
      var _affect = action.affect;
      return _objectSpread(_objectSpread({}, state), _affect(state));
    } else {
      return state;
    }
  }, state);
  console.log("---");
  return reducer;
};

_s2(useOutlineReducer, "uM8ZlkBmeHSIRldqBuhtkiu/VOQ=");

var EmptyNode = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(_c6 = function _c6(_ref13, ref) {
  var rest = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _ref13);

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    ref: ref
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 2
    }
  }));
});
_c7 = EmptyNode;
/* harmony default export */ __webpack_exports__["default"] = (_s3(function (_ref14) {
  _s3();

  var _ref14$reducer = _ref14.reducer,
      reducer = _ref14$reducer === void 0 ? useOutlineReducer() : _ref14$reducer,
      className = _ref14.className,
      style = _ref14.style,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(_ref14, ["reducer", "className", "style"]);

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var cls = Object(_utils_array__WEBPACK_IMPORTED_MODULE_6__["joinBySpace"])(className, "Outline");

  var _useComponentIndexer = Object(_utils_uses_mapper__WEBPACK_IMPORTED_MODULE_9__["useComponentIndexer"])(FlatNode),
      _useComponentIndexer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useComponentIndexer, 2),
      Node = _useComponentIndexer2[0],
      mapper = _useComponentIndexer2[1];

  var _reducer = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(reducer, 2),
      state = _reducer[0],
      dispatch = _reducer[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    offset: 0,
    node_props: {
      item_type: EmptyNode
    }
  }),
      thumb_props = _useState[0],
      setThumbProps = _useState[1];

  var payloads = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var hierarchy_analyzer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    payloads.current = state.payloads;
  }, [state.payloads]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    hierarchy_analyzer.current = state.hierarchy_analyzer;
  }, [state.hierarchy_analyzer]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (!ref) return;
    var top_node_dom = ref.current;
    var top_bound = top_node_dom.getBoundingClientRect();
    return Object(_utils_fn__WEBPACK_IMPORTED_MODULE_7__["listen"])("mousedown", top_node_dom)(function (e) {
      var path = e.path,
          clientX = e.clientX,
          clientY = e.clientY;
      var local_offset = (clientY - top_bound.y) % lineHeight;
      var init_index = (clientY - top_bound.y - local_offset) / lineHeight;
      var init_payload_node_position = init_index * lineHeight + local_offset; // dispatch({
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

      var ix = clientX,
          iy = clientY;
      var payloads_locked = payloads.current.clone();
      var hierarchy_analyzer_locked = hierarchy_analyzer.current.clone();
      var init_payload = payloads_locked.list[init_index];
      var clean_move = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_7__["listen"])("mousemove")(function (_ref15) {
        var clientX = _ref15.clientX,
            clientY = _ref15.clientY;
        var start_stamp = Date.now();
        var payloads_live = payloads_locked.clone();
        var hierarchy_analyzer_live = hierarchy_analyzer_locked.clone(); // const hierarchy_map = hierarchy_analyzer_live.getHierarchyMap();
        // const local_offset = (clientY - top_bound.y) % lineHeight;

        var live_index = (clientY - top_bound.y - local_offset) / lineHeight; // const prev_index = live_index - 1;
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
        // const init_level = init_payload.level;
        // const maybe_level =
        // 	(prev_is_parent
        // 		? prev_payload.level
        // 		: prev_parent_payload.level) + 1;
        // const x = clientX - ix;
        // const should_level = init_level + x / 20;

        var offset = init_payload_node_position + clientY - iy; // setThumbProps({
        // 	node_props: getNodeProps(
        // 		{ ...init_payload, level: should_level },
        // 		state
        // 	),
        // 	offset,
        // });
        // setThumbProps({
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

        payloads_live.splice(init_index, 1);
        hierarchy_analyzer_live.onRemoved(init_payload, init_index, payloads_live.list);
        payloads_live.splice(live_index >> 0, 0, init_payload);
        hierarchy_analyzer_live.onInserted(init_payload, live_index >> 0, payloads_live.list);
        dispatch({
          type: "set",
          affect: function affect() {
            return {
              payloads: payloads_live,
              hierarchy_analyzer: hierarchy_analyzer_live
            };
          }
        }); // console.log(Date.now() - start_stamp);
      });
      var clean_up = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_7__["listen"])("mouseup")(function () {
        clean_move();
        clean_up();
      });
    });
  }, [ref.current, dispatch]);
  return __jsx("div", {
    className: cls,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "holder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "thumb",
    style: {
      top: thumb_props.offset + "px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 5
    }
  }, __jsx(Node, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, thumb_props.node_props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 6
    }
  })))), __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 4
    }
  }, state.payloads.map(function (payload) {
    return __jsx(Node, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      key: payload.id
    }, getNodeProps(payload, state), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 6
      }
    }));
  })));
}, "7uvwSPfCl+NGzjuWdxBfa/E1aNg=", false, function () {
  return [useOutlineReducer, _utils_uses_mapper__WEBPACK_IMPORTED_MODULE_9__["useComponentIndexer"]];
}));

function getNodeProps(payload, state) {
  var reducer = function reducer(relayed, _ref16) {
    var _ref17 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref16, 2),
        key = _ref17[0],
        value = _ref17[1];

    if (state.relayed.has(key)) {
      relayed[key] = value;
    }

    return relayed;
  };

  var relayed_props = Object.entries(payload).reduce(reducer, {});
  var payload_props = payload.props;
  var meta_props = {
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

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Node");
$RefreshReg$(_c2, "FlatNode$forwardRef");
$RefreshReg$(_c3, "FlatNode");
$RefreshReg$(_c4, "ArrayMapper");
$RefreshReg$(_c5, "Relation");
$RefreshReg$(_c6, "EmptyNode$forwardRef");
$RefreshReg$(_c7, "EmptyNode");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3V0bGluZS9PdXRsaW5lLmpzeCJdLCJuYW1lcyI6WyJub2RlX21hcCIsImRvbV9wYXlsb2FkX21hcCIsIk1hcCIsIk5vZGUiLCJkYXRhIiwidG9wX3BheWxvYWQiLCJuYW1lIiwiaWQiLCJsZXZlbCIsImNoaWxkcmVuIiwidG9wX25vZGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwYXlsb2FkIiwiZG9tIiwiY3VycmVudCIsInJhdyIsInRvcCIsInNldCIsInBhZGRpbmdMZWZ0IiwibGVuZ3RoIiwibWFwIiwiZ2V0UGF5bG9hZCIsIkZsYXROb2RlIiwiZm9yd2FyZFJlZiIsInJlZiIsIml0ZW1fdHlwZSIsInByb3BzIiwicmVzdCIsIkl0ZW0iLCJsaW5lSGVpZ2h0IiwiQXJyYXlNYXBwZXIiLCJhcnJheSIsImNvbnN0cnVjdG9yIiwibGlzdCIsIml0ZW0iLCJjbG9uZSIsInNsaWNlIiwicmVtb3ZlIiwic3BsaWNlIiwic3RhcnRfcG9zaXRpb24iLCJkZWxldGVfY291bnQiLCJhcHBlbmRfaXRlbXMiLCJiZV9jdWxsZWQiLCJnZXQiLCJtYWtlT3V0bGluZVN0YXRlIiwicGF5bG9hZHMiLCJyZWxheWVkIiwiU2V0IiwiaGllcmFyY2h5X21hcCIsInJlY29yZHMiLCJSZWxhdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsIm5leHRfc2libGluZyIsInVuZGVmaW5lZCIsInByZXZfc2libGluZyIsInBhcmVudCIsImNoaWxkIiwiZ2VuSGllcmFyY2h5QW5hbHl6ZXIiLCJyZWxhdGlvbiIsInNpemUiLCJsaXZlX3JlbGF0aW9uX21hcCIsImxpdmVfc2l6ZV9tYXAiLCJvbkluc2VydGVkIiwiaW5kZXgiLCJpc19maXJzdCIsImlzX3RvcCIsImlzX2xhc3QiLCJwcmV2X2luZGV4IiwibmV4dF9pbmRleCIsInByZXZfaWQiLCJuZXh0X2lkIiwicHJldl9wYXlsb2FkIiwicHJldl9sZXZlbCIsImRpZmZfbGV2ZWwiLCJwcmV2X3JlbGF0aW9uIiwiZmFsbGJhY2siLCJuZXh0X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX2lkIiwiZ2V0UmVjdXJzaXZlUGFyZW50IiwicGFyZW50X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX3JlbGF0aW9uIiwiY291bnQiLCJwYXJlbnRfaWQiLCJvblJlbW92ZWQiLCJpc05vdEVtcHR5IiwibmV4dF9zaWJsaW5nX3JlbGF0aW9uIiwiYXBwbHkiLCJnZXRIaWVyYXJjaHlNYXAiLCJleHBvcnRzIiwidXNlT3V0bGluZVJlZHVjZXIiLCJzdGF0ZSIsImhpZXJhcmNoeV9hbmFseXplciIsInN0YXJ0X3N0YW1wIiwiRGF0ZSIsIm5vdyIsInVzZU1lbW8iLCJyZWR1Y2VyIiwidXNlUmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJleHRyYSIsImV4dHJhX2RhdGEiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW0iLCJhZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiRW1wdHlOb2RlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjbHMiLCJqb2luQnlTcGFjZSIsInVzZUNvbXBvbmVudEluZGV4ZXIiLCJtYXBwZXIiLCJkaXNwYXRjaCIsInVzZVN0YXRlIiwib2Zmc2V0Iiwibm9kZV9wcm9wcyIsInRodW1iX3Byb3BzIiwic2V0VGh1bWJQcm9wcyIsInRvcF9ub2RlX2RvbSIsInRvcF9ib3VuZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxpc3RlbiIsImUiLCJwYXRoIiwiY2xpZW50WCIsImNsaWVudFkiLCJsb2NhbF9vZmZzZXQiLCJ5IiwiaW5pdF9pbmRleCIsImluaXRfcGF5bG9hZF9ub2RlX3Bvc2l0aW9uIiwiaXgiLCJpeSIsInBheWxvYWRzX2xvY2tlZCIsImhpZXJhcmNoeV9hbmFseXplcl9sb2NrZWQiLCJpbml0X3BheWxvYWQiLCJjbGVhbl9tb3ZlIiwicGF5bG9hZHNfbGl2ZSIsImhpZXJhcmNoeV9hbmFseXplcl9saXZlIiwibGl2ZV9pbmRleCIsImNsZWFuX3VwIiwiZ2V0Tm9kZVByb3BzIiwia2V5IiwidmFsdWUiLCJoYXMiLCJyZWxheWVkX3Byb3BzIiwiZW50cmllcyIsInJlZHVjZSIsInBheWxvYWRfcHJvcHMiLCJtZXRhX3Byb3BzIiwiY2FuX2V4cGFuZCIsInR5cGVfc2VsZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLElBQUlDLEdBQUosRUFBeEI7O0FBRVAsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUFBLG1CQUNTRCxJQURULENBQy9CRSxJQUQrQjtBQUFBLE1BQy9CQSxJQUQrQiwyQkFDeEIsRUFEd0I7QUFBQSxNQUNwQkMsRUFEb0IsR0FDU0gsSUFEVCxDQUNwQkcsRUFEb0I7QUFBQSxNQUNoQkMsS0FEZ0IsR0FDU0osSUFEVCxDQUNoQkksS0FEZ0I7QUFBQSx1QkFDU0osSUFEVCxDQUNUSyxRQURTO0FBQUEsTUFDVEEsUUFEUywrQkFDRSxFQURGO0FBRXZDLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTUMsT0FBTyxHQUFHO0FBQ2ZQLFVBQUksRUFBSkEsSUFEZTtBQUVmQyxRQUFFLEVBQUZBLEVBRmU7QUFHZkUsY0FBUSxFQUFSQSxRQUhlO0FBSWZLLFNBQUcsRUFBRUosUUFBUSxDQUFDSyxPQUpDO0FBS2ZDLFNBQUcsRUFBRVosSUFMVTtBQU1mYSxTQUFHLEVBQUVaO0FBTlUsS0FBaEI7QUFRQUwsWUFBUSxDQUFDTyxFQUFELENBQVIsR0FBZU0sT0FBZjtBQUNBWixtQkFBZSxDQUFDaUIsR0FBaEIsQ0FBb0JSLFFBQVEsQ0FB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QUcsU0FBVkEsT0FBVSxDQUFDbkQsT0FBRCxVQUEyQjtBQUFBO0FBQUEsUUFBaEJrRyxHQUFnQjtBQUFBLFFBQVhDLEtBQVc7O0FBQzFDLFFBQUl0RCxLQUFLLENBQUM3QyxPQUFOLENBQWNvRyxHQUFkLENBQWtCRixHQUFsQixDQUFKLEVBQTRCO0FBQzNCbEcsYUFBTyxDQUFDa0csR0FBRCxDQUFQLEdBQWVDLEtBQWY7QUFDQTs7QUFDRCxXQUFPbkcsT0FBUDtBQUNBLEdBTEQ7O0FBTUEsTUFBTXFHLGFBQWEsR0FBR2hHLE1BQU0sQ0FBQ2lHLE9BQVAsQ0FBZXhJLE9BQWYsRUFBd0J5SSxNQUF4QixDQUErQnBELE9BQS9CLEVBQXdDLEVBQXhDLENBQXRCO0FBQ0EsTUFBTXFELGFBQWEsR0FBRzFJLE9BQU8sQ0FBQ2MsS0FBOUI7QUFDQSxNQUFNNkgsVUFBVSxHQUFHO0FBQ2xCakosTUFBRSxFQUFFTSxPQUFPLENBQUNOLEVBRE07QUFFbEJDLFNBQUssRUFBRUssT0FBTyxDQUFDTCxLQUZHO0FBR2xCaUosY0FBVSxFQUFFNUksT0FBTyxDQUFDNEk7QUFIRixHQUFuQjs7QUFNQSxNQUFJLGVBQWU1SSxPQUFuQixFQUE0QjtBQUMzQjJJLGNBQVUsQ0FBQzlILFNBQVgsR0FBdUJiLE9BQU8sQ0FBQzZJLFNBQS9CO0FBQ0EsR0FGRCxNQUVPO0FBQ05GLGNBQVUsQ0FBQzlILFNBQVgsR0FBdUJrRSxLQUFLLENBQUNsRSxTQUE3QjtBQUNBOztBQUVEO0FBQ0NDLFNBQUssa0NBQU80SCxhQUFQLEdBQXlCSCxhQUF6QjtBQUROLEtBRUlJLFVBRko7QUFJQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mN2I3MGYwOGVkNWQ0MTI2MjNhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgam9pbkJ5U3BhY2UsIGluQm91bmQsIGluQXJyYXlCb3VuZCB9IGZyb20gXCJAL3V0aWxzL2FycmF5XCI7XHJcbmltcG9ydCB7IGZhbGxiYWNrLCBsaXN0ZW4gfSBmcm9tIFwiQC91dGlscy9mblwiO1xyXG5pbXBvcnQge1xyXG5cdHVzZVJlZixcclxuXHR1c2VFZmZlY3QsXHJcblx0Zm9yd2FyZFJlZixcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VSZWR1Y2VyLFxyXG5cdHVzZUNhbGxiYWNrLFxyXG5cdHVzZU1lbW8sXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vT3V0bGluZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlQ29tcG9uZW50SW5kZXhlciB9IGZyb20gXCJAL3V0aWxzL3VzZXMvbWFwcGVyXCI7XHJcbmltcG9ydCB7IFRpbWluZ0luZGV4IH0gZnJvbSBcIkAvdXRpbHMvaW5kaWNlcy90aW1pbmdcIjtcclxuaW1wb3J0IHsgaXNFbXB0eSwgaXNOb3RFbXB0eSB9IGZyb20gXCJAL3V0aWxzL2Fzc2VydHNcIjtcclxuaW1wb3J0IG5leHQgZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCJAL3V0aWxzL2FycmF5XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgbm9kZV9tYXAgPSB7fTtcclxuZXhwb3J0IGNvbnN0IGRvbV9wYXlsb2FkX21hcCA9IG5ldyBNYXAoKTtcclxuXHJcbmNvbnN0IE5vZGUgPSAoeyBkYXRhLCB0b3BfcGF5bG9hZCB9KSA9PiB7XHJcblx0Y29uc3QgeyBuYW1lID0gXCJcIiwgaWQsIGxldmVsLCBjaGlsZHJlbiA9IFtdIH0gPSBkYXRhO1xyXG5cdGNvbnN0IHRvcF9ub2RlID0gdXNlUmVmKCk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IHBheWxvYWQgPSB7XHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGlkLFxyXG5cdFx0XHRjaGlsZHJlbixcclxuXHRcdFx0ZG9tOiB0b3Bfbm9kZS5jdXJyZW50LFxyXG5cdFx0XHRyYXc6IGRhdGEsXHJcblx0XHRcdHRvcDogdG9wX3BheWxvYWQsXHJcblx0XHR9O1xyXG5cdFx0bm9kZV9tYXBbaWRdID0gcGF5bG9hZDtcclxuXHRcdGRvbV9wYXlsb2FkX21hcC5zZXQodG9wX25vZGUuY3VycmVudCwgcGF5bG9hZCk7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRkb21fcGF5bG9hZF9tYXAuZGVsZXRlKHRvcF9ub2RlLmN1cnJlbnQpO1xyXG5cdFx0XHRkZWxldGUgbm9kZV9tYXBbaWRdO1xyXG5cdFx0fTtcclxuXHR9LCBbdG9wX25vZGUuY3VycmVudCwgZGF0YV0pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHJlZj17dG9wX25vZGV9IGNsYXNzTmFtZT1cIm5vZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBgJHtsZXZlbCAqIDIwfXB4YCB9fT5cclxuXHRcdFx0XHR7bmFtZX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHtjaGlsZHJlbi5sZW5ndGggPiAwICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoaWxkcmVuXCI+XHJcblx0XHRcdFx0XHR7Y2hpbGRyZW4ubWFwKChkYXRhKSA9PiAoXHJcblx0XHRcdFx0XHRcdDxOb2RlXHJcblx0XHRcdFx0XHRcdFx0a2V5PXtkYXRhLmlkfVxyXG5cdFx0XHRcdFx0XHRcdGRhdGE9e2RhdGF9XHJcblx0XHRcdFx0XHRcdFx0dG9wX3BheWxvYWQ9e3RvcF9wYXlsb2FkfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBheWxvYWQoKSB7fVxyXG5cclxuY29uc3QgRmxhdE5vZGUgPSBmb3J3YXJkUmVmKFxyXG5cdCh7IGl0ZW1fdHlwZSwgbGV2ZWwgPSAwLCBwcm9wcyA9IHt9LCAuLi5yZXN0IH0gPSB7fSwgcmVmKSA9PiB7XHJcblx0XHRjb25zdCBJdGVtID0gaXRlbV90eXBlO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub2RlXCIgcmVmPXtyZWZ9PlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInRpdGxlXCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBgJHtsZXZlbCAqIDIwfXB4YCB9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxJdGVtIHsuLi5wcm9wc30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxuKTtcclxuXHJcbmNvbnN0IGxpbmVIZWlnaHQgPSAyMDtcclxuXHJcbmZ1bmN0aW9uIEFycmF5TWFwcGVyKGFycmF5KSB7XHJcblx0ZnVuY3Rpb24gY29uc3RydWN0b3IoeyBsaXN0LCBtYXAgPSB7fSB9KSB7XHJcblx0XHRsaXN0Lm1hcCgoaXRlbSkgPT4gKG1hcFtpdGVtLmlkXSA9IGl0ZW0pKTtcclxuXHJcblx0XHRmdW5jdGlvbiBjbG9uZSgpIHtcclxuXHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yKHsgbGlzdDogbGlzdC5zbGljZSgpLCBtYXA6IHt9IH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlbW92ZShpZCkge1xyXG5cdFx0XHRkZWxldGUgbWFwW2lkXTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzcGxpY2Uoc3RhcnRfcG9zaXRpb24sIGRlbGV0ZV9jb3VudCwgLi4uYXBwZW5kX2l0ZW1zKSB7XHJcblx0XHRcdGNvbnN0IGJlX2N1bGxlZCA9IGxpc3Quc3BsaWNlKFxyXG5cdFx0XHRcdHN0YXJ0X3Bvc2l0aW9uLFxyXG5cdFx0XHRcdGRlbGV0ZV9jb3VudCxcclxuXHRcdFx0XHQuLi5hcHBlbmRfaXRlbXNcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGJlX2N1bGxlZC5tYXAoKHsgaWQgfSkgPT4gcmVtb3ZlKGlkKSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gYmVfY3VsbGVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG1hcCguLi5hcmdzKSB7XHJcblx0XHRcdHJldHVybiBsaXN0Lm1hcCguLi5hcmdzKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXQoaWQpIHtcclxuXHRcdFx0cmV0dXJuIG1hcFtpZF07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Z2V0LFxyXG5cdFx0XHRjbG9uZSxcclxuXHRcdFx0cmVtb3ZlLFxyXG5cdFx0XHRzcGxpY2UsXHJcblx0XHRcdGxpc3QsXHJcblx0XHRcdG1hcCxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY29uc3RydWN0b3IoeyBsaXN0OiBhcnJheSB9KTtcclxufVxyXG5cclxuLy8gdHlwZSBQYXlsb2FkIHsgaWQsIGxldmVsLCBjYW5fZXhwYW5kLCB0eXBlX3NlbGYsIHByb3BzIH1cclxuLy8gdHlwZSBQYXlsb2FkTGlzdCBbXVBheWxvYWRcclxuZXhwb3J0IGNvbnN0IG1ha2VPdXRsaW5lU3RhdGUgPSAoe1xyXG5cdGl0ZW1fdHlwZSA9IG51bGwsXHJcblx0cGF5bG9hZHMgPSBbXSxcclxuXHRyZWxheWVkID0gbmV3IFNldChbXCJpZFwiLCBcImxldmVsXCJdKSxcclxufSA9IHt9KSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGhpZXJhcmNoeV9tYXA6IHt9LFxyXG5cdFx0aXRlbV90eXBlLFxyXG5cdFx0cGF5bG9hZHM6IEFycmF5TWFwcGVyKHBheWxvYWRzKSxcclxuXHRcdHJlbGF5ZWQsXHJcblx0XHRyZWNvcmRzOiBuZXcgTWFwKCksXHJcblx0fTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFJlbGF0aW9uKGlkLCB7IC4uLnByb3BzIH0pIHtcclxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuXHRcdHtcclxuXHRcdFx0aWQsXHJcblx0XHRcdG5leHRfc2libGluZzogdW5kZWZpbmVkLFxyXG5cdFx0XHRwcmV2X3NpYmxpbmc6IHVuZGVmaW5lZCxcclxuXHRcdFx0cGFyZW50OiB1bmRlZmluZWQsXHJcblx0XHRcdGNoaWxkOiB1bmRlZmluZWQsXHJcblx0XHR9LFxyXG5cdFx0cHJvcHNcclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5IaWVyYXJjaHlBbmFseXplcih7fSA9IHt9KSB7XHJcblx0ZnVuY3Rpb24gY29uc3RydWN0b3IoeyBoaWVyYXJjaHlfbWFwID0geyByZWxhdGlvbjoge30sIHNpemU6IHt9IH0gfSA9IHt9KSB7XHJcblx0XHRsZXQge1xyXG5cdFx0XHRyZWxhdGlvbjogbGl2ZV9yZWxhdGlvbl9tYXAsXHJcblx0XHRcdHNpemU6IGxpdmVfc2l6ZV9tYXAsXHJcblx0XHR9ID0gaGllcmFyY2h5X21hcDtcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZyhsaXZlX3NpemVfbWFwKTtcclxuXHJcblx0XHQvLyB0eXBlIEhpZXJhcmNoeU5vZGUgUGF5bG9hZFxyXG5cdFx0ZnVuY3Rpb24gb25JbnNlcnRlZCh7IGxldmVsLCBpZCB9LCBpbmRleCwgcGF5bG9hZHMpIHtcclxuXHRcdFx0Y29uc3QgaXNfZmlyc3QgPSBpbmRleCA9PT0gMDtcclxuXHRcdFx0Y29uc3QgaXNfdG9wID0gbGV2ZWwgPT09IDA7XHJcblx0XHRcdGNvbnN0IGlzX2xhc3QgPSBpbmRleCA9PT0gcGF5bG9hZHMubGVuZ3RoIC0gMTtcclxuXHRcdFx0Y29uc3QgcHJldl9pbmRleCA9IGluZGV4IC0gMTtcclxuXHRcdFx0Y29uc3QgbmV4dF9pbmRleCA9IGluZGV4ICsgMTtcclxuXHRcdFx0Y29uc3QgcHJldl9pZCA9IGlzX2ZpcnN0ID8gdW5kZWZpbmVkIDogcGF5bG9hZHNbcHJldl9pbmRleF0uaWQ7XHJcblx0XHRcdGNvbnN0IG5leHRfaWQgPSBpc19sYXN0ID8gdW5kZWZpbmVkIDogcGF5bG9hZHNbbmV4dF9pbmRleF0uaWQ7XHJcblx0XHRcdGNvbnN0IHByZXZfcGF5bG9hZCA9IHBheWxvYWRzW3ByZXZfaW5kZXhdO1xyXG5cdFx0XHRjb25zdCBwcmV2X2xldmVsID0gIWlzX2ZpcnN0ICYmIHByZXZfcGF5bG9hZC5sZXZlbDtcclxuXHRcdFx0Y29uc3QgZGlmZl9sZXZlbCA9ICFpc19maXJzdCAmJiBsZXZlbCAtIHByZXZfbGV2ZWw7XHJcblxyXG5cdFx0XHRjb25zdCBwcmV2X3JlbGF0aW9uID0gZmFsbGJhY2soUmVsYXRpb24oaWQpKShcclxuXHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X2lkXVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCBuZXh0X3JlbGF0aW9uID0gZmFsbGJhY2soUmVsYXRpb24oaWQpKShcclxuXHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtuZXh0X2lkXVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCByZWxhdGlvbiA9IGZhbGxiYWNrKFJlbGF0aW9uKGlkKSkobGl2ZV9yZWxhdGlvbl9tYXBbaWRdKTtcclxuXHJcblx0XHRcdGlmIChkaWZmX2xldmVsID4gMCkge1xyXG5cdFx0XHRcdHByZXZfcmVsYXRpb24uY2hpbGQgPSBpZDtcclxuXHRcdFx0XHRyZWxhdGlvbi5wYXJlbnQgPSBpc19maXJzdCB8fCBpc190b3AgPyB1bmRlZmluZWQgOiBwcmV2X2lkO1xyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2xhc3QgJiYgcmVsYXRpb24ucGFyZW50ID09PSBuZXh0X3JlbGF0aW9uLnBhcmVudCkge1xyXG5cdFx0XHRcdFx0bmV4dF9yZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoZGlmZl9sZXZlbCA9PT0gMCkge1xyXG5cdFx0XHRcdHJlbGF0aW9uLnByZXZfc2libGluZyA9IHByZXZfaWQ7XHJcblx0XHRcdFx0cmVsYXRpb24ucGFyZW50ID1cclxuXHRcdFx0XHRcdGlzX2ZpcnN0IHx8IGlzX3RvcCA/IHVuZGVmaW5lZCA6IHByZXZfcmVsYXRpb24ucGFyZW50O1xyXG5cdFx0XHRcdHByZXZfcmVsYXRpb24ubmV4dF9zaWJsaW5nID0gaWQ7XHJcblxyXG5cdFx0XHRcdGlmICghaXNfbGFzdCAmJiBuZXh0X3JlbGF0aW9uLnBhcmVudCA9PT0gcmVsYXRpb24ucGFyZW50KSB7XHJcblx0XHRcdFx0XHRyZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBuZXh0X2lkO1xyXG5cdFx0XHRcdFx0bmV4dF9yZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc3QgcHJldl9zaWJsaW5nX2lkID0gZ2V0UmVjdXJzaXZlUGFyZW50KFxyXG5cdFx0XHRcdFx0cHJldl9pZCxcclxuXHRcdFx0XHRcdC1kaWZmX2xldmVsXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0Y29uc3QgcGFyZW50X3JlbGF0aW9uID0gZmFsbGJhY2soUmVsYXRpb24oaWQpKShcclxuXHRcdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfc2libGluZ19pZF1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNvbnN0IHByZXZfc2libGluZ19yZWxhdGlvbiA9XHJcblx0XHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X3NpYmxpbmdfaWRdO1xyXG5cclxuXHRcdFx0XHRyZWxhdGlvbi5wYXJlbnQgPVxyXG5cdFx0XHRcdFx0aXNfZmlyc3QgfHwgaXNfdG9wID8gdW5kZWZpbmVkIDogcGFyZW50X3JlbGF0aW9uLnBhcmVudDtcclxuXHRcdFx0XHRyZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBpc19sYXN0ID8gdW5kZWZpbmVkIDogcHJldl9zaWJsaW5nX2lkO1xyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2ZpcnN0KSB7XHJcblx0XHRcdFx0XHRwcmV2X3NpYmxpbmdfcmVsYXRpb24ubmV4dF9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2xhc3QgJiYgcmVsYXRpb24ucGFyZW50ID09PSBuZXh0X3JlbGF0aW9uLnBhcmVudCkge1xyXG5cdFx0XHRcdFx0cGFyZW50X3JlbGF0aW9uLm5leHRfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdFx0bmV4dF9yZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICghaXNfZmlyc3QpIHtcclxuXHRcdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfc2libGluZ19pZF0gPSBwYXJlbnRfcmVsYXRpb247XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWlzX3RvcCkge1xyXG5cdFx0XHRcdGNvbnN0IHNpemUgPSBmYWxsYmFjaygwKShsaXZlX3NpemVfbWFwW3JlbGF0aW9uLnBhcmVudF0pO1xyXG5cdFx0XHRcdGxpdmVfc2l6ZV9tYXBbcmVsYXRpb24ucGFyZW50XSA9IHNpemUgKyAxO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWlzX2ZpcnN0KSB7XHJcblx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9pZF0gPSBwcmV2X3JlbGF0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW2lkXSA9IHJlbGF0aW9uO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldFJlY3Vyc2l2ZVBhcmVudChpZCwgY291bnQgPSAwKSB7XHJcblx0XHRcdGNvbnN0IHBhcmVudF9pZCA9XHJcblx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbaWRdICYmIGxpdmVfcmVsYXRpb25fbWFwW2lkXS5wYXJlbnQ7XHJcblx0XHRcdGlmIChjb3VudCA+IDEgJiYgcGFyZW50X2lkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGdldFJlY3Vyc2l2ZVBhcmVudChwYXJlbnRfaWQsIGNvdW50IC0gMSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcmVudF9pZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG9uUmVtb3ZlZCh7IGlkIH0sIGluZGV4LCBwYXlsb2Fkcykge1xyXG5cdFx0XHRjb25zdCBpc19maXJzdCA9IGluZGV4ID09PSAwO1xyXG5cdFx0XHRjb25zdCBpc19sYXN0ID0gaW5kZXggPT09IHBheWxvYWRzLmxlbmd0aDtcclxuXHRcdFx0Y29uc3QgcHJldl9pbmRleCA9IGluZGV4IC0gMTtcclxuXHRcdFx0Y29uc3QgbmV4dF9pbmRleCA9IGluZGV4O1xyXG5cdFx0XHRjb25zdCBwcmV2X2lkID0gaXNfZmlyc3QgPyB1bmRlZmluZWQgOiBwYXlsb2Fkc1twcmV2X2luZGV4XS5pZDtcclxuXHRcdFx0Y29uc3QgbmV4dF9pZCA9IGlzX2xhc3QgPyB1bmRlZmluZWQgOiBwYXlsb2Fkc1tuZXh0X2luZGV4XS5pZDtcclxuXHJcblx0XHRcdGNvbnN0IHByZXZfcmVsYXRpb24gPSBsaXZlX3JlbGF0aW9uX21hcFtwcmV2X2lkXTtcclxuXHRcdFx0Y29uc3QgbmV4dF9yZWxhdGlvbiA9IGxpdmVfcmVsYXRpb25fbWFwW25leHRfaWRdO1xyXG5cdFx0XHRjb25zdCByZWxhdGlvbiA9IGxpdmVfcmVsYXRpb25fbWFwW2lkXTtcclxuXHJcblx0XHRcdGNvbnN0IHsgcHJldl9zaWJsaW5nLCBuZXh0X3NpYmxpbmcsIHBhcmVudCB9ID0gcmVsYXRpb247XHJcblxyXG5cdFx0XHRjb25zdCBwcmV2X3NpYmxpbmdfcmVsYXRpb24gPSBpc05vdEVtcHR5KHByZXZfc2libGluZylcclxuXHRcdFx0XHQ/IGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfc2libGluZ11cclxuXHRcdFx0XHQ6IHVuZGVmaW5lZDtcclxuXHRcdFx0Y29uc3QgbmV4dF9zaWJsaW5nX3JlbGF0aW9uID0gaXNOb3RFbXB0eShuZXh0X3NpYmxpbmcpXHJcblx0XHRcdFx0PyBsaXZlX3JlbGF0aW9uX21hcFtuZXh0X3NpYmxpbmddXHJcblx0XHRcdFx0OiB1bmRlZmluZWQ7XHJcblx0XHRcdGNvbnN0IHBhcmVudF9yZWxhdGlvbiA9IGlzTm90RW1wdHkocGFyZW50KVxyXG5cdFx0XHRcdD8gbGl2ZV9yZWxhdGlvbl9tYXBbcGFyZW50XVxyXG5cdFx0XHRcdDogdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0aWYgKGlzTm90RW1wdHkocHJldl9zaWJsaW5nX3JlbGF0aW9uKSkge1xyXG5cdFx0XHRcdHByZXZfcmVsYXRpb24ubmV4dF9zaWJsaW5nID0gbmV4dF9zaWJsaW5nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChpc05vdEVtcHR5KG5leHRfc2libGluZ19yZWxhdGlvbikpIHtcclxuXHRcdFx0XHRuZXh0X3JlbGF0aW9uLnByZXZfc2libGluZyA9IHByZXZfc2libGluZztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoaXNOb3RFbXB0eShwYXJlbnRfcmVsYXRpb24pICYmIHBhcmVudF9yZWxhdGlvbi5jaGlsZCA9PT0gaWQpIHtcclxuXHRcdFx0XHRwYXJlbnRfcmVsYXRpb24uY2hpbGQgPSBuZXh0X3NpYmxpbmc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRlbGV0ZSBsaXZlX3JlbGF0aW9uX21hcFtpZF07XHJcblxyXG5cdFx0XHRsaXZlX3NpemVfbWFwW3JlbGF0aW9uLnBhcmVudF0tLTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjbG9uZSgpIHtcclxuXHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yKHtcclxuXHRcdFx0XHRoaWVyYXJjaHlfbWFwOiB7XHJcblx0XHRcdFx0XHRyZWxhdGlvbjogeyAuLi5saXZlX3JlbGF0aW9uX21hcCB9LFxyXG5cdFx0XHRcdFx0c2l6ZTogeyAuLi5saXZlX3NpemVfbWFwIH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gYXBwbHkoeyBoaWVyYXJjaHlfbWFwIH0pIHtcclxuXHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXAgPSBoaWVyYXJjaHlfbWFwLnJlbGF0aW9uO1xyXG5cdFx0XHRsaXZlX3NpemVfbWFwID0gaGllcmFyY2h5X21hcC5zaXplO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldEhpZXJhcmNoeU1hcCgpIHtcclxuXHRcdFx0cmV0dXJuIGhpZXJhcmNoeV9tYXA7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZXhwb3J0cyA9IHtcclxuXHRcdFx0Y2xvbmUsXHJcblx0XHRcdGFwcGx5LFxyXG5cdFx0XHRvbkluc2VydGVkLFxyXG5cdFx0XHRvblJlbW92ZWQsXHJcblx0XHRcdGdldEhpZXJhcmNoeU1hcCxcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oW2V4cG9ydHNdLCBleHBvcnRzKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBjb25zdHJ1Y3Rvcih7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VPdXRsaW5lUmVkdWNlciA9ICh7XHJcblx0c3RhdGUgPSBtYWtlT3V0bGluZVN0YXRlKCksXHJcblx0aGllcmFyY2h5X2FuYWx5emVyID0gZ2VuSGllcmFyY2h5QW5hbHl6ZXIoKSxcclxufSA9IHt9KSA9PiB7XHJcblx0c3RhdGUuaGllcmFyY2h5X2FuYWx5emVyID0gaGllcmFyY2h5X2FuYWx5emVyO1xyXG5cclxuXHRjb25zdCBzdGFydF9zdGFtcCA9IERhdGUubm93KCk7XHJcblxyXG5cdHVzZU1lbW8oKCkgPT4ge1xyXG5cdFx0c3RhdGUucGF5bG9hZHMubWFwKGhpZXJhcmNoeV9hbmFseXplci5vbkluc2VydGVkKTtcclxuXHR9LCBbc3RhdGUucGF5bG9hZHNdKTtcclxuXHJcblx0Y29uc3QgcmVkdWNlciA9IHVzZVJlZHVjZXIoKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRcdGlmIChhY3Rpb24udHlwZSA9PT0gXCJkZWxldGVcIikge1xyXG5cdFx0XHRjb25zdCB7IGluZGV4IH0gPSBhY3Rpb247XHJcblx0XHRcdGNvbnN0IHsgcGF5bG9hZHMgfSA9IHN0YXRlO1xyXG5cdFx0XHRzdGF0ZS5wYXlsb2Fkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcGF5bG9hZHMgfTtcclxuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFwic2F2ZVwiKSB7XHJcblx0XHRcdGNvbnN0IHsgaWQsIGV4dHJhID0gKCkgPT4gKHt9KSB9ID0gYWN0aW9uO1xyXG5cdFx0XHRjb25zdCB7IHJlY29yZHMsIHBheWxvYWRzIH0gPSBzdGF0ZTtcclxuXHRcdFx0Y29uc3QgZXh0cmFfZGF0YSA9IGV4dHJhKHN0YXRlKTtcclxuXHJcblx0XHRcdHJlY29yZHMuc2V0KGlkLCBwYXlsb2Fkcy5jbG9uZSgpKTtcclxuXHRcdFx0T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhleHRyYV9kYXRhKS5tYXAoKHN5bSkgPT4ge1xyXG5cdFx0XHRcdHJlY29yZHMuc2V0KHN5bSwgZXh0cmFfZGF0YVtzeW1dKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcmVjb3JkcyB9O1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJyZXN0b3JlXCIpIHtcclxuXHRcdFx0Y29uc3QgeyBpZCA9IFtdLCBleHRyYSA9IFtdIH0gPSBhY3Rpb247XHJcblx0XHRcdGNvbnN0IHsgcmVjb3JkcyB9ID0gc3RhdGU7XHJcblxyXG5cdFx0XHRyZWNvcmRzLmRlbGV0ZShpZCk7XHJcblx0XHRcdGV4dHJhLm1hcCgoaWQpID0+IHJlY29yZHMuZGVsZXRlKGlkKSk7XHJcblxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcmVjb3JkcyB9O1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJzZXRCYXNlZE9uXCIpIHtcclxuXHRcdFx0Y29uc3QgeyBpZCwgYWZmZWN0IH0gPSBhY3Rpb247XHJcblx0XHRcdGNvbnN0IHBheWxvYWRzID0gYWZmZWN0KHN0YXRlLnJlY29yZHMuZ2V0KGlkKS5jbG9uZSgpLCBzdGF0ZSk7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBwYXlsb2FkcyB9O1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJzZXRcIikge1xyXG5cdFx0XHRjb25zdCB7IGFmZmVjdCB9ID0gYWN0aW9uO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWZmZWN0KHN0YXRlKSB9O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH0sIHN0YXRlKTtcclxuXHJcblx0Y29uc29sZS5sb2coXCItLS1cIik7XHJcblx0cmV0dXJuIHJlZHVjZXI7XHJcbn07XHJcblxyXG5jb25zdCBFbXB0eU5vZGUgPSBmb3J3YXJkUmVmKCh7IC4uLnJlc3QgfSwgcmVmKSA9PiAoXHJcblx0PGRpdiByZWY9e3JlZn0gey4uLnJlc3R9PjwvZGl2PlxyXG4pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7XHJcblx0cmVkdWNlciA9IHVzZU91dGxpbmVSZWR1Y2VyKCksXHJcblx0Y2xhc3NOYW1lLFxyXG5cdHN0eWxlLFxyXG5cdC4uLnJlc3RcclxufSkgPT4ge1xyXG5cdGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG5cdGNvbnN0IGNscyA9IGpvaW5CeVNwYWNlKGNsYXNzTmFtZSwgXCJPdXRsaW5lXCIpO1xyXG5cdGNvbnN0IFtOb2RlLCBtYXBwZXJdID0gdXNlQ29tcG9uZW50SW5kZXhlcihGbGF0Tm9kZSk7XHJcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSByZWR1Y2VyO1xyXG5cdGNvbnN0IFt0aHVtYl9wcm9wcywgc2V0VGh1bWJQcm9wc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRvZmZzZXQ6IDAsXHJcblx0XHRub2RlX3Byb3BzOiB7IGl0ZW1fdHlwZTogRW1wdHlOb2RlIH0sXHJcblx0fSk7XHJcblx0Y29uc3QgcGF5bG9hZHMgPSB1c2VSZWYoKTtcclxuXHRjb25zdCBoaWVyYXJjaHlfYW5hbHl6ZXIgPSB1c2VSZWYoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHBheWxvYWRzLmN1cnJlbnQgPSBzdGF0ZS5wYXlsb2FkcztcclxuXHR9LCBbc3RhdGUucGF5bG9hZHNdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGhpZXJhcmNoeV9hbmFseXplci5jdXJyZW50ID0gc3RhdGUuaGllcmFyY2h5X2FuYWx5emVyO1xyXG5cdH0sIFtzdGF0ZS5oaWVyYXJjaHlfYW5hbHl6ZXJdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghcmVmKSByZXR1cm47XHJcblx0XHRjb25zdCB0b3Bfbm9kZV9kb20gPSByZWYuY3VycmVudDtcclxuXHRcdGNvbnN0IHRvcF9ib3VuZCA9IHRvcF9ub2RlX2RvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiBsaXN0ZW4oXHJcblx0XHRcdFwibW91c2Vkb3duXCIsXHJcblx0XHRcdHRvcF9ub2RlX2RvbVxyXG5cdFx0KSgoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHBhdGgsIGNsaWVudFgsIGNsaWVudFkgfSA9IGU7XHJcblxyXG5cdFx0XHRjb25zdCBsb2NhbF9vZmZzZXQgPSAoY2xpZW50WSAtIHRvcF9ib3VuZC55KSAlIGxpbmVIZWlnaHQ7XHJcblx0XHRcdGNvbnN0IGluaXRfaW5kZXggPVxyXG5cdFx0XHRcdChjbGllbnRZIC0gdG9wX2JvdW5kLnkgLSBsb2NhbF9vZmZzZXQpIC8gbGluZUhlaWdodDtcclxuXHJcblx0XHRcdGNvbnN0IGluaXRfcGF5bG9hZF9ub2RlX3Bvc2l0aW9uID1cclxuXHRcdFx0XHRpbml0X2luZGV4ICogbGluZUhlaWdodCArIGxvY2FsX29mZnNldDtcclxuXHJcblx0XHRcdC8vIGRpc3BhdGNoKHtcclxuXHRcdFx0Ly8gXHR0eXBlOiBcInNhdmVcIixcclxuXHRcdFx0Ly8gXHRpZCxcclxuXHRcdFx0Ly8gXHRleHRyYTogKHsgcGF5bG9hZHMsIGhpZXJhcmNoeV9hbmFseXplciB9KSA9PiAoe1xyXG5cdFx0XHQvLyBcdFx0W2luaXRfcGF5bG9hZF9sZXZlbF9pZF06IHBheWxvYWRzLmxpc3RbaW5pdF9pbmRleF0ubGV2ZWwsXHJcblx0XHRcdC8vIFx0XHRbaW5pdF9oaWVyYXJjaHlfYW5hbHl6ZXJfaWRdOiBoaWVyYXJjaHlfYW5hbHl6ZXIuY2xvbmUoKSxcclxuXHRcdFx0Ly8gXHR9KSxcclxuXHRcdFx0Ly8gfSk7XHJcblxyXG5cdFx0XHQvLyBkaXNwYXRjaCh7XHJcblx0XHRcdC8vIFx0dHlwZTogXCJzZXRcIixcclxuXHRcdFx0Ly8gXHRhZmZlY3Q6ICh7IHBheWxvYWRzLCBoaWVyYXJjaHlfYW5hbHl6ZXIgfSkgPT4ge1xyXG5cdFx0XHQvLyBcdFx0Y29uc3QgW3BheWxvYWRdID0gcGF5bG9hZHMuc3BsaWNlKGluaXRfaW5kZXgsIDEpO1xyXG5cdFx0XHQvLyBcdFx0aGllcmFyY2h5X2FuYWx5emVyLm9uUmVtb3ZlZChcclxuXHRcdFx0Ly8gXHRcdFx0cGF5bG9hZCxcclxuXHRcdFx0Ly8gXHRcdFx0aW5pdF9pbmRleCxcclxuXHRcdFx0Ly8gXHRcdFx0cGF5bG9hZHMubGlzdFxyXG5cdFx0XHQvLyBcdFx0KTtcclxuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHBheWxvYWRzLCBoaWVyYXJjaHlfYW5hbHl6ZXIgfTtcclxuXHRcdFx0Ly8gXHR9LFxyXG5cdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdGNvbnN0IGl4ID0gY2xpZW50WCxcclxuXHRcdFx0XHRpeSA9IGNsaWVudFk7XHJcblxyXG5cdFx0XHRjb25zdCBwYXlsb2Fkc19sb2NrZWQgPSBwYXlsb2Fkcy5jdXJyZW50LmNsb25lKCk7XHJcblx0XHRcdGNvbnN0IGhpZXJhcmNoeV9hbmFseXplcl9sb2NrZWQgPSBoaWVyYXJjaHlfYW5hbHl6ZXIuY3VycmVudC5jbG9uZSgpO1xyXG5cdFx0XHRjb25zdCBpbml0X3BheWxvYWQgPSBwYXlsb2Fkc19sb2NrZWQubGlzdFtpbml0X2luZGV4XTtcclxuXHJcblx0XHRcdGNvbnN0IGNsZWFuX21vdmUgPSBsaXN0ZW4oXCJtb3VzZW1vdmVcIikoKHsgY2xpZW50WCwgY2xpZW50WSB9KSA9PiB7XHJcblx0XHRcdFx0bGV0IHN0YXJ0X3N0YW1wID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHRjb25zdCBwYXlsb2Fkc19saXZlID0gcGF5bG9hZHNfbG9ja2VkLmNsb25lKCk7XHJcblx0XHRcdFx0Y29uc3QgaGllcmFyY2h5X2FuYWx5emVyX2xpdmUgPSBoaWVyYXJjaHlfYW5hbHl6ZXJfbG9ja2VkLmNsb25lKCk7XHJcblx0XHRcdFx0Ly8gY29uc3QgaGllcmFyY2h5X21hcCA9IGhpZXJhcmNoeV9hbmFseXplcl9saXZlLmdldEhpZXJhcmNoeU1hcCgpO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBsb2NhbF9vZmZzZXQgPSAoY2xpZW50WSAtIHRvcF9ib3VuZC55KSAlIGxpbmVIZWlnaHQ7XHJcblx0XHRcdFx0Y29uc3QgbGl2ZV9pbmRleCA9XHJcblx0XHRcdFx0XHQoY2xpZW50WSAtIHRvcF9ib3VuZC55IC0gbG9jYWxfb2Zmc2V0KSAvIGxpbmVIZWlnaHQ7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfaW5kZXggPSBsaXZlX2luZGV4IC0gMTtcclxuXHRcdFx0XHQvLyBjb25zdCBuZXh0X2luZGV4ID0gbGl2ZV9pbmRleCArIDE7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHByZXZfaW5kZXgsIG5leHRfaW5kZXgpO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBpc19maXJzdCA9IGxpdmVfaW5kZXggPT09IDA7XHJcblx0XHRcdFx0Ly8gY29uc3QgaXNfbGFzdCA9IGxpdmVfaW5kZXggPT09IHBheWxvYWRzX2xpdmUubGVuZ3RoIC0gMTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgaW5pdF9yZWxhdGlvbiA9IGhpZXJhcmNoeV9tYXAucmVsYXRpb25baW5pdF9wYXlsb2FkLmlkXTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9wYXlsb2FkID0gcGF5bG9hZHNfbGl2ZS5saXN0W3ByZXZfaW5kZXhdO1xyXG5cdFx0XHRcdC8vIGNvbnN0IG5leHRfcGF5bG9hZCA9IHBheWxvYWRzX2xpdmUubGlzdFtuZXh0X2luZGV4XTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9yZWxhdGlvbiA9IGhpZXJhcmNoeV9tYXAucmVsYXRpb25bcHJldl9wYXlsb2FkLmlkXTtcclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X2xldmVsID0gcHJldl9wYXlsb2FkLmxldmVsO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X3BhcmVudF9wYXlsb2FkID0gcGF5bG9hZHNfbGl2ZS5nZXQoXHJcblx0XHRcdFx0Ly8gXHRwcmV2X3JlbGF0aW9uLnBhcmVudFxyXG5cdFx0XHRcdC8vICk7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfaXNfcGFyZW50ID0gcHJldl9wYXlsb2FkLmlkIGluIGhpZXJhcmNoeV9tYXAuc2l6ZTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgaW5pdF9sZXZlbCA9IGluaXRfcGF5bG9hZC5sZXZlbDtcclxuXHRcdFx0XHQvLyBjb25zdCBtYXliZV9sZXZlbCA9XHJcblx0XHRcdFx0Ly8gXHQocHJldl9pc19wYXJlbnRcclxuXHRcdFx0XHQvLyBcdFx0PyBwcmV2X3BheWxvYWQubGV2ZWxcclxuXHRcdFx0XHQvLyBcdFx0OiBwcmV2X3BhcmVudF9wYXlsb2FkLmxldmVsKSArIDE7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHggPSBjbGllbnRYIC0gaXg7XHJcblx0XHRcdFx0Ly8gY29uc3Qgc2hvdWxkX2xldmVsID0gaW5pdF9sZXZlbCArIHggLyAyMDtcclxuXHJcblx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gaW5pdF9wYXlsb2FkX25vZGVfcG9zaXRpb24gKyBjbGllbnRZIC0gaXk7XHJcblxyXG5cdFx0XHRcdC8vIHNldFRodW1iUHJvcHMoe1xyXG5cdFx0XHRcdC8vIFx0bm9kZV9wcm9wczogZ2V0Tm9kZVByb3BzKFxyXG5cdFx0XHRcdC8vIFx0XHR7IC4uLmluaXRfcGF5bG9hZCwgbGV2ZWw6IHNob3VsZF9sZXZlbCB9LFxyXG5cdFx0XHRcdC8vIFx0XHRzdGF0ZVxyXG5cdFx0XHRcdC8vIFx0KSxcclxuXHRcdFx0XHQvLyBcdG9mZnNldCxcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHQvLyBzZXRUaHVtYlByb3BzKHtcclxuXHRcdFx0XHQvLyBcdG5vZGVfcHJvcHM6IGdldE5vZGVQcm9wcyhcclxuXHRcdFx0XHQvLyBcdFx0eyAuLi5pbml0X3BheWxvYWQsIGxldmVsOiBjbGllbnRYIC8gMjAgfSxcclxuXHRcdFx0XHQvLyBcdFx0c3RhdGVcclxuXHRcdFx0XHQvLyBcdCksXHJcblx0XHRcdFx0Ly8gXHRvZmZzZXQsXHJcblx0XHRcdFx0Ly8gfSk7XHJcblxyXG5cdFx0XHRcdC8vIGlmIChcclxuXHRcdFx0XHQvLyBcdGlzRW1wdHkocHJldl9yZWxhdGlvbi5uZXh0X3NpYmxpbmcpICYmXHJcblx0XHRcdFx0Ly8gXHQhcHJldl9pc19wYXJlbnRcclxuXHRcdFx0XHQvLyApIHtcclxuXHRcdFx0XHQvLyBcdGlmIChzaG91bGRfbGV2ZWwgPCBtYXliZV9sZXZlbCkge1xyXG5cdFx0XHRcdC8vIFx0XHRpbml0X3BheWxvYWQubGV2ZWwgPSBzaG91bGRfbGV2ZWw7XHJcblx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0Ly8gfSBlbHNlIHtcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0Ly8gaW5pdF9wYXlsb2FkLmxldmVsID0gbWF5YmVfbGV2ZWw7XHJcblxyXG5cdFx0XHRcdHBheWxvYWRzX2xpdmUuc3BsaWNlKGluaXRfaW5kZXgsIDEpO1xyXG5cdFx0XHRcdGhpZXJhcmNoeV9hbmFseXplcl9saXZlLm9uUmVtb3ZlZChcclxuXHRcdFx0XHRcdGluaXRfcGF5bG9hZCxcclxuXHRcdFx0XHRcdGluaXRfaW5kZXgsXHJcblx0XHRcdFx0XHRwYXlsb2Fkc19saXZlLmxpc3RcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRwYXlsb2Fkc19saXZlLnNwbGljZShsaXZlX2luZGV4ID4+IDAsIDAsIGluaXRfcGF5bG9hZCk7XHJcblx0XHRcdFx0aGllcmFyY2h5X2FuYWx5emVyX2xpdmUub25JbnNlcnRlZChcclxuXHRcdFx0XHRcdGluaXRfcGF5bG9hZCxcclxuXHRcdFx0XHRcdGxpdmVfaW5kZXggPj4gMCxcclxuXHRcdFx0XHRcdHBheWxvYWRzX2xpdmUubGlzdFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdHR5cGU6IFwic2V0XCIsXHJcblx0XHRcdFx0XHRhZmZlY3Q6ICgpID0+ICh7XHJcblx0XHRcdFx0XHRcdHBheWxvYWRzOiBwYXlsb2Fkc19saXZlLFxyXG5cdFx0XHRcdFx0XHRoaWVyYXJjaHlfYW5hbHl6ZXI6IGhpZXJhcmNoeV9hbmFseXplcl9saXZlLFxyXG5cdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coRGF0ZS5ub3coKSAtIHN0YXJ0X3N0YW1wKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb25zdCBjbGVhbl91cCA9IGxpc3RlbihcIm1vdXNldXBcIikoKCkgPT4ge1xyXG5cdFx0XHRcdGNsZWFuX21vdmUoKTtcclxuXHRcdFx0XHRjbGVhbl91cCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0sIFtyZWYuY3VycmVudCwgZGlzcGF0Y2hdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN9IHJlZj17cmVmfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0aHVtYlwiXHJcblx0XHRcdFx0XHRzdHlsZT17eyB0b3A6IHRodW1iX3Byb3BzLm9mZnNldCArIFwicHhcIiB9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxOb2RlIHsuLi50aHVtYl9wcm9wcy5ub2RlX3Byb3BzfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XHJcblx0XHRcdFx0e3N0YXRlLnBheWxvYWRzLm1hcCgocGF5bG9hZCkgPT4gKFxyXG5cdFx0XHRcdFx0PE5vZGUga2V5PXtwYXlsb2FkLmlkfSB7Li4uZ2V0Tm9kZVByb3BzKHBheWxvYWQsIHN0YXRlKX0gLz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0Tm9kZVByb3BzKHBheWxvYWQsIHN0YXRlKSB7XHJcblx0Y29uc3QgcmVkdWNlciA9IChyZWxheWVkLCBba2V5LCB2YWx1ZV0pID0+IHtcclxuXHRcdGlmIChzdGF0ZS5yZWxheWVkLmhhcyhrZXkpKSB7XHJcblx0XHRcdHJlbGF5ZWRba2V5XSA9IHZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlbGF5ZWQ7XHJcblx0fTtcclxuXHRjb25zdCByZWxheWVkX3Byb3BzID0gT2JqZWN0LmVudHJpZXMocGF5bG9hZCkucmVkdWNlKHJlZHVjZXIsIHt9KTtcclxuXHRjb25zdCBwYXlsb2FkX3Byb3BzID0gcGF5bG9hZC5wcm9wcztcclxuXHRjb25zdCBtZXRhX3Byb3BzID0ge1xyXG5cdFx0aWQ6IHBheWxvYWQuaWQsXHJcblx0XHRsZXZlbDogcGF5bG9hZC5sZXZlbCxcclxuXHRcdGNhbl9leHBhbmQ6IHBheWxvYWQuY2FuX2V4cGFuZCxcclxuXHR9O1xyXG5cclxuXHRpZiAoXCJ0eXBlX3NlbGZcIiBpbiBwYXlsb2FkKSB7XHJcblx0XHRtZXRhX3Byb3BzLml0ZW1fdHlwZSA9IHBheWxvYWQudHlwZV9zZWxmO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRtZXRhX3Byb3BzLml0ZW1fdHlwZSA9IHN0YXRlLml0ZW1fdHlwZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczogeyAuLi5wYXlsb2FkX3Byb3BzLCAuLi5yZWxheWVkX3Byb3BzIH0sXHJcblx0XHQuLi5tZXRhX3Byb3BzLFxyXG5cdH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==