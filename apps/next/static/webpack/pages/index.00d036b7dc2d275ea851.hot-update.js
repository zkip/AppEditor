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
      lineNumber: 375,
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
        var start_stamp = Date.now(); // const payloads_live = payloads_locked.clone();
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
        // const init_level = init_payload.level;
        // const maybe_level =
        // 	(prev_is_parent
        // 		? prev_payload.level
        // 		: prev_parent_payload.level) + 1;
        // const x = clientX - ix;
        // const should_level = init_level + x / 20;
        // const offset = init_payload_node_position + clientY - iy;
        // setThumbProps({
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

        var start_stamp_dispatch = Date.now();
        dispatch({// type: "set",
          // affect: () => ({
          // 	// payloads: payloads_live,
          // 	// hierarchy_analyzer: hierarchy_analyzer_live,
          // }),
        });
        console.log(Date.now() - start_stamp, Date.now() - start_stamp_dispatch);
      });
      var clean_up = Object(_utils_fn__WEBPACK_IMPORTED_MODULE_7__["listen"])("mouseup")(function () {
        clean_move();
        clean_up();
      });
    });
  }, [ref.current]);
  return __jsx("div", {
    className: cls,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "holder",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 5
    }
  }, __jsx(Node, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, thumb_props.node_props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 6
    }
  })))), __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 4
    }
  }, state.payloads.map(function (payload) {
    return __jsx(Node, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      key: payload.id
    }, getNodeProps(payload, state), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3V0bGluZS9PdXRsaW5lLmpzeCJdLCJuYW1lcyI6WyJub2RlX21hcCIsImRvbV9wYXlsb2FkX21hcCIsIk1hcCIsIk5vZGUiLCJkYXRhIiwidG9wX3BheWxvYWQiLCJuYW1lIiwiaWQiLCJsZXZlbCIsImNoaWxkcmVuIiwidG9wX25vZGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwYXlsb2FkIiwiZG9tIiwiY3VycmVudCIsInJhdyIsInRvcCIsInNldCIsInBhZGRpbmdMZWZ0IiwibGVuZ3RoIiwibWFwIiwiZ2V0UGF5bG9hZCIsIkZsYXROb2RlIiwiZm9yd2FyZFJlZiIsInJlZiIsIml0ZW1fdHlwZSIsInByb3BzIiwicmVzdCIsIkl0ZW0iLCJsaW5lSGVpZ2h0IiwiQXJyYXlNYXBwZXIiLCJhcnJheSIsImNvbnN0cnVjdG9yIiwibGlzdCIsIml0ZW0iLCJjbG9uZSIsInNsaWNlIiwicmVtb3ZlIiwic3BsaWNlIiwic3RhcnRfcG9zaXRpb24iLCJkZWxldGVfY291bnQiLCJhcHBlbmRfaXRlbXMiLCJiZV9jdWxsZWQiLCJnZXQiLCJtYWtlT3V0bGluZVN0YXRlIiwicGF5bG9hZHMiLCJyZWxheWVkIiwiU2V0IiwiaGllcmFyY2h5X21hcCIsInJlY29yZHMiLCJSZWxhdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsIm5leHRfc2libGluZyIsInVuZGVmaW5lZCIsInByZXZfc2libGluZyIsInBhcmVudCIsImNoaWxkIiwiZ2VuSGllcmFyY2h5QW5hbHl6ZXIiLCJyZWxhdGlvbiIsInNpemUiLCJsaXZlX3JlbGF0aW9uX21hcCIsImxpdmVfc2l6ZV9tYXAiLCJvbkluc2VydGVkIiwiaW5kZXgiLCJpc19maXJzdCIsImlzX3RvcCIsImlzX2xhc3QiLCJwcmV2X2luZGV4IiwibmV4dF9pbmRleCIsInByZXZfaWQiLCJuZXh0X2lkIiwicHJldl9wYXlsb2FkIiwicHJldl9sZXZlbCIsImRpZmZfbGV2ZWwiLCJwcmV2X3JlbGF0aW9uIiwiZmFsbGJhY2siLCJuZXh0X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX2lkIiwiZ2V0UmVjdXJzaXZlUGFyZW50IiwicGFyZW50X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX3JlbGF0aW9uIiwiY291bnQiLCJwYXJlbnRfaWQiLCJvblJlbW92ZWQiLCJpc05vdEVtcHR5IiwibmV4dF9zaWJsaW5nX3JlbGF0aW9uIiwiYXBwbHkiLCJnZXRIaWVyYXJjaHlNYXAiLCJleHBvcnRzIiwidXNlT3V0bGluZVJlZHVjZXIiLCJzdGF0ZSIsImhpZXJhcmNoeV9hbmFseXplciIsInVzZU1lbW8iLCJyZWR1Y2VyIiwidXNlUmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJleHRyYSIsImV4dHJhX2RhdGEiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW0iLCJhZmZlY3QiLCJFbXB0eU5vZGUiLCJjbGFzc05hbWUiLCJzdHlsZSIsImNscyIsImpvaW5CeVNwYWNlIiwidXNlQ29tcG9uZW50SW5kZXhlciIsIm1hcHBlciIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJvZmZzZXQiLCJub2RlX3Byb3BzIiwidGh1bWJfcHJvcHMiLCJzZXRUaHVtYlByb3BzIiwidG9wX25vZGVfZG9tIiwidG9wX2JvdW5kIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGlzdGVuIiwiZSIsInBhdGgiLCJjbGllbnRYIiwiY2xpZW50WSIsImxvY2FsX29mZnNldCIsInkiLCJpbml0X2luZGV4IiwiaW5pdF9wYXlsb2FkX25vZGVfcG9zaXRpb24iLCJpeCIsIml5IiwicGF5bG9hZHNfbG9ja2VkIiwiaGllcmFyY2h5X2FuYWx5emVyX2xvY2tlZCIsImluaXRfcGF5bG9hZCIsImNsZWFuX21vdmUiLCJzdGFydF9zdGFtcCIsIkRhdGUiLCJub3ciLCJzdGFydF9zdGFtcF9kaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhbl91cCIsImdldE5vZGVQcm9wcyIsImtleSIsInZhbHVlIiwiaGFzIiwicmVsYXllZF9wcm9wcyIsImVudHJpZXMiLCJyZWR1Y2UiLCJwYXlsb2FkX3Byb3BzIiwibWV0YV9wcm9wcyIsImNhbl9leHBhbmQiLCJ0eXBlX3NlbGYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFFBQVEsR0FBRyxFQUFqQjtBQUNBLElBQU1DLGVBQWUsR0FBRyxJQUFJQyxHQUFKLEVBQXhCOztBQUVQLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTJCO0FBQUE7O0FBQUEsTUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFBQSxtQkFDU0QsSUFEVCxDQUMvQkUsSUFEK0I7QUFBQSxNQUMvQkEsSUFEK0IsMkJBQ3hCLEVBRHdCO0FBQUEsTUFDcEJDLEVBRG9CLEdBQ1NILElBRFQsQ0FDcEJHLEVBRG9CO0FBQUEsTUFDaEJDLEtBRGdCLEdBQ1NKLElBRFQsQ0FDaEJJLEtBRGdCO0FBQUEsdUJBQ1NKLElBRFQsQ0FDVEssUUFEUztBQUFBLE1BQ1RBLFFBRFMsK0JBQ0UsRUFERjtBQUV2QyxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLEVBQXZCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1DLE9BQU8sR0FBRztBQUNmUCxVQUFJLEVBQUpBLElBRGU7QUFFZkMsUUFBRSxFQUFGQSxFQUZlO0FBR2ZFLGNBQVEsRUFBUkEsUUFIZTtBQUlmSyxTQUFHLEVBQUVKLFFBQVEsQ0FBQ0ssT0FKQztBQUtmQyxTQUFHLEVBQUVaLElBTFU7QUFNZmEsU0FBRyxFQUFFWjtBQU5VLEtBQWhCO0FBUUFMLFlBQVEsQ0FBQ08sRUFBRCxDQUFSLEdBQWVNLE9BQWY7QUFDQVosbUJBQWUsQ0FBQ2lCLEdBQWhCLENBQW9CUixRQUFRLENBQUNLLE9BQTdCLEVBQXNDRixPQUF0QztBQUNBLFdBQU8s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QUM1SCxTQUFYLEdBQXVCYixPQUFPLENBQUMySSxTQUEvQjtBQUNBLEdBRkQsTUFFTztBQUNORixjQUFVLENBQUM1SCxTQUFYLEdBQXVCa0UsS0FBSyxDQUFDbEUsU0FBN0I7QUFDQTs7QUFFRDtBQUNDQyxTQUFLLGtDQUFPMEgsYUFBUCxHQUF5QkgsYUFBekI7QUFETixLQUVJSSxVQUZKO0FBSUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDBkMDM2YjdkYzJkMjc1ZWE4NTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpvaW5CeVNwYWNlLCBpbkJvdW5kLCBpbkFycmF5Qm91bmQgfSBmcm9tIFwiQC91dGlscy9hcnJheVwiO1xyXG5pbXBvcnQgeyBmYWxsYmFjaywgbGlzdGVuIH0gZnJvbSBcIkAvdXRpbHMvZm5cIjtcclxuaW1wb3J0IHtcclxuXHR1c2VSZWYsXHJcblx0dXNlRWZmZWN0LFxyXG5cdGZvcndhcmRSZWYsXHJcblx0dXNlU3RhdGUsXHJcblx0dXNlUmVkdWNlcixcclxuXHR1c2VDYWxsYmFjayxcclxuXHR1c2VNZW1vLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL091dGxpbmUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZUNvbXBvbmVudEluZGV4ZXIgfSBmcm9tIFwiQC91dGlscy91c2VzL21hcHBlclwiO1xyXG5pbXBvcnQgeyBUaW1pbmdJbmRleCB9IGZyb20gXCJAL3V0aWxzL2luZGljZXMvdGltaW5nXCI7XHJcbmltcG9ydCB7IGlzRW1wdHksIGlzTm90RW1wdHkgfSBmcm9tIFwiQC91dGlscy9hc3NlcnRzXCI7XHJcbmltcG9ydCBuZXh0IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiQC91dGlscy9hcnJheVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vZGVfbWFwID0ge307XHJcbmV4cG9ydCBjb25zdCBkb21fcGF5bG9hZF9tYXAgPSBuZXcgTWFwKCk7XHJcblxyXG5jb25zdCBOb2RlID0gKHsgZGF0YSwgdG9wX3BheWxvYWQgfSkgPT4ge1xyXG5cdGNvbnN0IHsgbmFtZSA9IFwiXCIsIGlkLCBsZXZlbCwgY2hpbGRyZW4gPSBbXSB9ID0gZGF0YTtcclxuXHRjb25zdCB0b3Bfbm9kZSA9IHVzZVJlZigpO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBwYXlsb2FkID0ge1xyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHRpZCxcclxuXHRcdFx0Y2hpbGRyZW4sXHJcblx0XHRcdGRvbTogdG9wX25vZGUuY3VycmVudCxcclxuXHRcdFx0cmF3OiBkYXRhLFxyXG5cdFx0XHR0b3A6IHRvcF9wYXlsb2FkLFxyXG5cdFx0fTtcclxuXHRcdG5vZGVfbWFwW2lkXSA9IHBheWxvYWQ7XHJcblx0XHRkb21fcGF5bG9hZF9tYXAuc2V0KHRvcF9ub2RlLmN1cnJlbnQsIHBheWxvYWQpO1xyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0ZG9tX3BheWxvYWRfbWFwLmRlbGV0ZSh0b3Bfbm9kZS5jdXJyZW50KTtcclxuXHRcdFx0ZGVsZXRlIG5vZGVfbWFwW2lkXTtcclxuXHRcdH07XHJcblx0fSwgW3RvcF9ub2RlLmN1cnJlbnQsIGRhdGFdKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiByZWY9e3RvcF9ub2RlfSBjbGFzc05hbWU9XCJub2RlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogYCR7bGV2ZWwgKiAyMH1weGAgfX0+XHJcblx0XHRcdFx0e25hbWV9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7Y2hpbGRyZW4ubGVuZ3RoID4gMCAmJiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGlsZHJlblwiPlxyXG5cdFx0XHRcdFx0e2NoaWxkcmVuLm1hcCgoZGF0YSkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8Tm9kZVxyXG5cdFx0XHRcdFx0XHRcdGtleT17ZGF0YS5pZH1cclxuXHRcdFx0XHRcdFx0XHRkYXRhPXtkYXRhfVxyXG5cdFx0XHRcdFx0XHRcdHRvcF9wYXlsb2FkPXt0b3BfcGF5bG9hZH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXlsb2FkKCkge31cclxuXHJcbmNvbnN0IEZsYXROb2RlID0gZm9yd2FyZFJlZihcclxuXHQoeyBpdGVtX3R5cGUsIGxldmVsID0gMCwgcHJvcHMgPSB7fSwgLi4ucmVzdCB9ID0ge30sIHJlZikgPT4ge1xyXG5cdFx0Y29uc3QgSXRlbSA9IGl0ZW1fdHlwZTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm9kZVwiIHJlZj17cmVmfT5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0aXRsZVwiXHJcblx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nTGVmdDogYCR7bGV2ZWwgKiAyMH1weGAgfX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8SXRlbSB7Li4ucHJvcHN9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbik7XHJcblxyXG5jb25zdCBsaW5lSGVpZ2h0ID0gMjA7XHJcblxyXG5mdW5jdGlvbiBBcnJheU1hcHBlcihhcnJheSkge1xyXG5cdGZ1bmN0aW9uIGNvbnN0cnVjdG9yKHsgbGlzdCwgbWFwID0ge30gfSkge1xyXG5cdFx0bGlzdC5tYXAoKGl0ZW0pID0+IChtYXBbaXRlbS5pZF0gPSBpdGVtKSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xvbmUoKSB7XHJcblx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvcih7IGxpc3Q6IGxpc3Quc2xpY2UoKSwgbWFwOiB7fSB9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiByZW1vdmUoaWQpIHtcclxuXHRcdFx0ZGVsZXRlIG1hcFtpZF07XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc3BsaWNlKHN0YXJ0X3Bvc2l0aW9uLCBkZWxldGVfY291bnQsIC4uLmFwcGVuZF9pdGVtcykge1xyXG5cdFx0XHRjb25zdCBiZV9jdWxsZWQgPSBsaXN0LnNwbGljZShcclxuXHRcdFx0XHRzdGFydF9wb3NpdGlvbixcclxuXHRcdFx0XHRkZWxldGVfY291bnQsXHJcblx0XHRcdFx0Li4uYXBwZW5kX2l0ZW1zXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRiZV9jdWxsZWQubWFwKCh7IGlkIH0pID0+IHJlbW92ZShpZCkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIGJlX2N1bGxlZDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBtYXAoLi4uYXJncykge1xyXG5cdFx0XHRyZXR1cm4gbGlzdC5tYXAoLi4uYXJncyk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0KGlkKSB7XHJcblx0XHRcdHJldHVybiBtYXBbaWRdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGdldCxcclxuXHRcdFx0Y2xvbmUsXHJcblx0XHRcdHJlbW92ZSxcclxuXHRcdFx0c3BsaWNlLFxyXG5cdFx0XHRsaXN0LFxyXG5cdFx0XHRtYXAsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNvbnN0cnVjdG9yKHsgbGlzdDogYXJyYXkgfSk7XHJcbn1cclxuXHJcbi8vIHR5cGUgUGF5bG9hZCB7IGlkLCBsZXZlbCwgY2FuX2V4cGFuZCwgdHlwZV9zZWxmLCBwcm9wcyB9XHJcbi8vIHR5cGUgUGF5bG9hZExpc3QgW11QYXlsb2FkXHJcbmV4cG9ydCBjb25zdCBtYWtlT3V0bGluZVN0YXRlID0gKHtcclxuXHRpdGVtX3R5cGUgPSBudWxsLFxyXG5cdHBheWxvYWRzID0gW10sXHJcblx0cmVsYXllZCA9IG5ldyBTZXQoW1wiaWRcIiwgXCJsZXZlbFwiXSksXHJcbn0gPSB7fSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRoaWVyYXJjaHlfbWFwOiB7fSxcclxuXHRcdGl0ZW1fdHlwZSxcclxuXHRcdHBheWxvYWRzOiBBcnJheU1hcHBlcihwYXlsb2FkcyksXHJcblx0XHRyZWxheWVkLFxyXG5cdFx0cmVjb3JkczogbmV3IE1hcCgpLFxyXG5cdH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBSZWxhdGlvbihpZCwgeyAuLi5wcm9wcyB9KSB7XHJcblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcblx0XHR7XHJcblx0XHRcdGlkLFxyXG5cdFx0XHRuZXh0X3NpYmxpbmc6IHVuZGVmaW5lZCxcclxuXHRcdFx0cHJldl9zaWJsaW5nOiB1bmRlZmluZWQsXHJcblx0XHRcdHBhcmVudDogdW5kZWZpbmVkLFxyXG5cdFx0XHRjaGlsZDogdW5kZWZpbmVkLFxyXG5cdFx0fSxcclxuXHRcdHByb3BzXHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuSGllcmFyY2h5QW5hbHl6ZXIoe30gPSB7fSkge1xyXG5cdGZ1bmN0aW9uIGNvbnN0cnVjdG9yKHsgaGllcmFyY2h5X21hcCA9IHsgcmVsYXRpb246IHt9LCBzaXplOiB7fSB9IH0gPSB7fSkge1xyXG5cdFx0bGV0IHtcclxuXHRcdFx0cmVsYXRpb246IGxpdmVfcmVsYXRpb25fbWFwLFxyXG5cdFx0XHRzaXplOiBsaXZlX3NpemVfbWFwLFxyXG5cdFx0fSA9IGhpZXJhcmNoeV9tYXA7XHJcblxyXG5cdFx0Ly8gY29uc29sZS5sb2cobGl2ZV9zaXplX21hcCk7XHJcblxyXG5cdFx0Ly8gdHlwZSBIaWVyYXJjaHlOb2RlIFBheWxvYWRcclxuXHRcdGZ1bmN0aW9uIG9uSW5zZXJ0ZWQoeyBsZXZlbCwgaWQgfSwgaW5kZXgsIHBheWxvYWRzKSB7XHJcblx0XHRcdGNvbnN0IGlzX2ZpcnN0ID0gaW5kZXggPT09IDA7XHJcblx0XHRcdGNvbnN0IGlzX3RvcCA9IGxldmVsID09PSAwO1xyXG5cdFx0XHRjb25zdCBpc19sYXN0ID0gaW5kZXggPT09IHBheWxvYWRzLmxlbmd0aCAtIDE7XHJcblx0XHRcdGNvbnN0IHByZXZfaW5kZXggPSBpbmRleCAtIDE7XHJcblx0XHRcdGNvbnN0IG5leHRfaW5kZXggPSBpbmRleCArIDE7XHJcblx0XHRcdGNvbnN0IHByZXZfaWQgPSBpc19maXJzdCA/IHVuZGVmaW5lZCA6IHBheWxvYWRzW3ByZXZfaW5kZXhdLmlkO1xyXG5cdFx0XHRjb25zdCBuZXh0X2lkID0gaXNfbGFzdCA/IHVuZGVmaW5lZCA6IHBheWxvYWRzW25leHRfaW5kZXhdLmlkO1xyXG5cdFx0XHRjb25zdCBwcmV2X3BheWxvYWQgPSBwYXlsb2Fkc1twcmV2X2luZGV4XTtcclxuXHRcdFx0Y29uc3QgcHJldl9sZXZlbCA9ICFpc19maXJzdCAmJiBwcmV2X3BheWxvYWQubGV2ZWw7XHJcblx0XHRcdGNvbnN0IGRpZmZfbGV2ZWwgPSAhaXNfZmlyc3QgJiYgbGV2ZWwgLSBwcmV2X2xldmVsO1xyXG5cclxuXHRcdFx0Y29uc3QgcHJldl9yZWxhdGlvbiA9IGZhbGxiYWNrKFJlbGF0aW9uKGlkKSkoXHJcblx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9pZF1cclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgbmV4dF9yZWxhdGlvbiA9IGZhbGxiYWNrKFJlbGF0aW9uKGlkKSkoXHJcblx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbbmV4dF9pZF1cclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgcmVsYXRpb24gPSBmYWxsYmFjayhSZWxhdGlvbihpZCkpKGxpdmVfcmVsYXRpb25fbWFwW2lkXSk7XHJcblxyXG5cdFx0XHRpZiAoZGlmZl9sZXZlbCA+IDApIHtcclxuXHRcdFx0XHRwcmV2X3JlbGF0aW9uLmNoaWxkID0gaWQ7XHJcblx0XHRcdFx0cmVsYXRpb24ucGFyZW50ID0gaXNfZmlyc3QgfHwgaXNfdG9wID8gdW5kZWZpbmVkIDogcHJldl9pZDtcclxuXHJcblx0XHRcdFx0aWYgKCFpc19sYXN0ICYmIHJlbGF0aW9uLnBhcmVudCA9PT0gbmV4dF9yZWxhdGlvbi5wYXJlbnQpIHtcclxuXHRcdFx0XHRcdG5leHRfcmVsYXRpb24ucHJldl9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGRpZmZfbGV2ZWwgPT09IDApIHtcclxuXHRcdFx0XHRyZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBwcmV2X2lkO1xyXG5cdFx0XHRcdHJlbGF0aW9uLnBhcmVudCA9XHJcblx0XHRcdFx0XHRpc19maXJzdCB8fCBpc190b3AgPyB1bmRlZmluZWQgOiBwcmV2X3JlbGF0aW9uLnBhcmVudDtcclxuXHRcdFx0XHRwcmV2X3JlbGF0aW9uLm5leHRfc2libGluZyA9IGlkO1xyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2xhc3QgJiYgbmV4dF9yZWxhdGlvbi5wYXJlbnQgPT09IHJlbGF0aW9uLnBhcmVudCkge1xyXG5cdFx0XHRcdFx0cmVsYXRpb24ubmV4dF9zaWJsaW5nID0gbmV4dF9pZDtcclxuXHRcdFx0XHRcdG5leHRfcmVsYXRpb24ucHJldl9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0IHByZXZfc2libGluZ19pZCA9IGdldFJlY3Vyc2l2ZVBhcmVudChcclxuXHRcdFx0XHRcdHByZXZfaWQsXHJcblx0XHRcdFx0XHQtZGlmZl9sZXZlbFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHBhcmVudF9yZWxhdGlvbiA9IGZhbGxiYWNrKFJlbGF0aW9uKGlkKSkoXHJcblx0XHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X3NpYmxpbmdfaWRdXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRjb25zdCBwcmV2X3NpYmxpbmdfcmVsYXRpb24gPVxyXG5cdFx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9zaWJsaW5nX2lkXTtcclxuXHJcblx0XHRcdFx0cmVsYXRpb24ucGFyZW50ID1cclxuXHRcdFx0XHRcdGlzX2ZpcnN0IHx8IGlzX3RvcCA/IHVuZGVmaW5lZCA6IHBhcmVudF9yZWxhdGlvbi5wYXJlbnQ7XHJcblx0XHRcdFx0cmVsYXRpb24ucHJldl9zaWJsaW5nID0gaXNfbGFzdCA/IHVuZGVmaW5lZCA6IHByZXZfc2libGluZ19pZDtcclxuXHJcblx0XHRcdFx0aWYgKCFpc19maXJzdCkge1xyXG5cdFx0XHRcdFx0cHJldl9zaWJsaW5nX3JlbGF0aW9uLm5leHRfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCFpc19sYXN0ICYmIHJlbGF0aW9uLnBhcmVudCA9PT0gbmV4dF9yZWxhdGlvbi5wYXJlbnQpIHtcclxuXHRcdFx0XHRcdHBhcmVudF9yZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHRcdG5leHRfcmVsYXRpb24ucHJldl9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2ZpcnN0KSB7XHJcblx0XHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X3NpYmxpbmdfaWRdID0gcGFyZW50X3JlbGF0aW9uO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFpc190b3ApIHtcclxuXHRcdFx0XHRjb25zdCBzaXplID0gZmFsbGJhY2soMCkobGl2ZV9zaXplX21hcFtyZWxhdGlvbi5wYXJlbnRdKTtcclxuXHRcdFx0XHRsaXZlX3NpemVfbWFwW3JlbGF0aW9uLnBhcmVudF0gPSBzaXplICsgMTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFpc19maXJzdCkge1xyXG5cdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfaWRdID0gcHJldl9yZWxhdGlvbjtcclxuXHRcdFx0fVxyXG5cdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtpZF0gPSByZWxhdGlvbjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXRSZWN1cnNpdmVQYXJlbnQoaWQsIGNvdW50ID0gMCkge1xyXG5cdFx0XHRjb25zdCBwYXJlbnRfaWQgPVxyXG5cdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW2lkXSAmJiBsaXZlX3JlbGF0aW9uX21hcFtpZF0ucGFyZW50O1xyXG5cdFx0XHRpZiAoY291bnQgPiAxICYmIHBhcmVudF9pZCkge1xyXG5cdFx0XHRcdHJldHVybiBnZXRSZWN1cnNpdmVQYXJlbnQocGFyZW50X2lkLCBjb3VudCAtIDEpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBwYXJlbnRfaWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBvblJlbW92ZWQoeyBpZCB9LCBpbmRleCwgcGF5bG9hZHMpIHtcclxuXHRcdFx0Y29uc3QgaXNfZmlyc3QgPSBpbmRleCA9PT0gMDtcclxuXHRcdFx0Y29uc3QgaXNfbGFzdCA9IGluZGV4ID09PSBwYXlsb2Fkcy5sZW5ndGg7XHJcblx0XHRcdGNvbnN0IHByZXZfaW5kZXggPSBpbmRleCAtIDE7XHJcblx0XHRcdGNvbnN0IG5leHRfaW5kZXggPSBpbmRleDtcclxuXHRcdFx0Y29uc3QgcHJldl9pZCA9IGlzX2ZpcnN0ID8gdW5kZWZpbmVkIDogcGF5bG9hZHNbcHJldl9pbmRleF0uaWQ7XHJcblx0XHRcdGNvbnN0IG5leHRfaWQgPSBpc19sYXN0ID8gdW5kZWZpbmVkIDogcGF5bG9hZHNbbmV4dF9pbmRleF0uaWQ7XHJcblxyXG5cdFx0XHRjb25zdCBwcmV2X3JlbGF0aW9uID0gbGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9pZF07XHJcblx0XHRcdGNvbnN0IG5leHRfcmVsYXRpb24gPSBsaXZlX3JlbGF0aW9uX21hcFtuZXh0X2lkXTtcclxuXHRcdFx0Y29uc3QgcmVsYXRpb24gPSBsaXZlX3JlbGF0aW9uX21hcFtpZF07XHJcblxyXG5cdFx0XHRjb25zdCB7IHByZXZfc2libGluZywgbmV4dF9zaWJsaW5nLCBwYXJlbnQgfSA9IHJlbGF0aW9uO1xyXG5cclxuXHRcdFx0Y29uc3QgcHJldl9zaWJsaW5nX3JlbGF0aW9uID0gaXNOb3RFbXB0eShwcmV2X3NpYmxpbmcpXHJcblx0XHRcdFx0PyBsaXZlX3JlbGF0aW9uX21hcFtwcmV2X3NpYmxpbmddXHJcblx0XHRcdFx0OiB1bmRlZmluZWQ7XHJcblx0XHRcdGNvbnN0IG5leHRfc2libGluZ19yZWxhdGlvbiA9IGlzTm90RW1wdHkobmV4dF9zaWJsaW5nKVxyXG5cdFx0XHRcdD8gbGl2ZV9yZWxhdGlvbl9tYXBbbmV4dF9zaWJsaW5nXVxyXG5cdFx0XHRcdDogdW5kZWZpbmVkO1xyXG5cdFx0XHRjb25zdCBwYXJlbnRfcmVsYXRpb24gPSBpc05vdEVtcHR5KHBhcmVudClcclxuXHRcdFx0XHQ/IGxpdmVfcmVsYXRpb25fbWFwW3BhcmVudF1cclxuXHRcdFx0XHQ6IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdGlmIChpc05vdEVtcHR5KHByZXZfc2libGluZ19yZWxhdGlvbikpIHtcclxuXHRcdFx0XHRwcmV2X3JlbGF0aW9uLm5leHRfc2libGluZyA9IG5leHRfc2libGluZztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoaXNOb3RFbXB0eShuZXh0X3NpYmxpbmdfcmVsYXRpb24pKSB7XHJcblx0XHRcdFx0bmV4dF9yZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBwcmV2X3NpYmxpbmc7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGlzTm90RW1wdHkocGFyZW50X3JlbGF0aW9uKSAmJiBwYXJlbnRfcmVsYXRpb24uY2hpbGQgPT09IGlkKSB7XHJcblx0XHRcdFx0cGFyZW50X3JlbGF0aW9uLmNoaWxkID0gbmV4dF9zaWJsaW5nO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkZWxldGUgbGl2ZV9yZWxhdGlvbl9tYXBbaWRdO1xyXG5cclxuXHRcdFx0bGl2ZV9zaXplX21hcFtyZWxhdGlvbi5wYXJlbnRdLS07XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xvbmUoKSB7XHJcblx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvcih7XHJcblx0XHRcdFx0aGllcmFyY2h5X21hcDoge1xyXG5cdFx0XHRcdFx0cmVsYXRpb246IHsgLi4ubGl2ZV9yZWxhdGlvbl9tYXAgfSxcclxuXHRcdFx0XHRcdHNpemU6IHsgLi4ubGl2ZV9zaXplX21hcCB9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGFwcGx5KHsgaGllcmFyY2h5X21hcCB9KSB7XHJcblx0XHRcdGxpdmVfcmVsYXRpb25fbWFwID0gaGllcmFyY2h5X21hcC5yZWxhdGlvbjtcclxuXHRcdFx0bGl2ZV9zaXplX21hcCA9IGhpZXJhcmNoeV9tYXAuc2l6ZTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXRIaWVyYXJjaHlNYXAoKSB7XHJcblx0XHRcdHJldHVybiBoaWVyYXJjaHlfbWFwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGV4cG9ydHMgPSB7XHJcblx0XHRcdGNsb25lLFxyXG5cdFx0XHRhcHBseSxcclxuXHRcdFx0b25JbnNlcnRlZCxcclxuXHRcdFx0b25SZW1vdmVkLFxyXG5cdFx0XHRnZXRIaWVyYXJjaHlNYXAsXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKFtleHBvcnRzXSwgZXhwb3J0cyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY29uc3RydWN0b3Ioe30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlT3V0bGluZVJlZHVjZXIgPSAoe1xyXG5cdHN0YXRlID0gbWFrZU91dGxpbmVTdGF0ZSgpLFxyXG5cdGhpZXJhcmNoeV9hbmFseXplciA9IGdlbkhpZXJhcmNoeUFuYWx5emVyKCksXHJcbn0gPSB7fSkgPT4ge1xyXG5cdHN0YXRlLmhpZXJhcmNoeV9hbmFseXplciA9IGhpZXJhcmNoeV9hbmFseXplcjtcclxuXHJcblx0dXNlTWVtbygoKSA9PiB7XHJcblx0XHRzdGF0ZS5wYXlsb2Fkcy5tYXAoaGllcmFyY2h5X2FuYWx5emVyLm9uSW5zZXJ0ZWQpO1xyXG5cdH0sIFtzdGF0ZS5wYXlsb2Fkc10pO1xyXG5cclxuXHRjb25zdCByZWR1Y2VyID0gdXNlUmVkdWNlcigoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdFx0aWYgKGFjdGlvbi50eXBlID09PSBcImRlbGV0ZVwiKSB7XHJcblx0XHRcdGNvbnN0IHsgaW5kZXggfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgeyBwYXlsb2FkcyB9ID0gc3RhdGU7XHJcblx0XHRcdHN0YXRlLnBheWxvYWRzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBwYXlsb2FkcyB9O1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJzYXZlXCIpIHtcclxuXHRcdFx0Y29uc3QgeyBpZCwgZXh0cmEgPSAoKSA9PiAoe30pIH0gPSBhY3Rpb247XHJcblx0XHRcdGNvbnN0IHsgcmVjb3JkcywgcGF5bG9hZHMgfSA9IHN0YXRlO1xyXG5cdFx0XHRjb25zdCBleHRyYV9kYXRhID0gZXh0cmEoc3RhdGUpO1xyXG5cclxuXHRcdFx0cmVjb3Jkcy5zZXQoaWQsIHBheWxvYWRzLmNsb25lKCkpO1xyXG5cdFx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV4dHJhX2RhdGEpLm1hcCgoc3ltKSA9PiB7XHJcblx0XHRcdFx0cmVjb3Jkcy5zZXQoc3ltLCBleHRyYV9kYXRhW3N5bV0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCByZWNvcmRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInJlc3RvcmVcIikge1xyXG5cdFx0XHRjb25zdCB7IGlkID0gW10sIGV4dHJhID0gW10gfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgeyByZWNvcmRzIH0gPSBzdGF0ZTtcclxuXHJcblx0XHRcdHJlY29yZHMuZGVsZXRlKGlkKTtcclxuXHRcdFx0ZXh0cmEubWFwKChpZCkgPT4gcmVjb3Jkcy5kZWxldGUoaWQpKTtcclxuXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCByZWNvcmRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInNldEJhc2VkT25cIikge1xyXG5cdFx0XHRjb25zdCB7IGlkLCBhZmZlY3QgfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgcGF5bG9hZHMgPSBhZmZlY3Qoc3RhdGUucmVjb3Jkcy5nZXQoaWQpLmNsb25lKCksIHN0YXRlKTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBheWxvYWRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInNldFwiKSB7XHJcblx0XHRcdGNvbnN0IHsgYWZmZWN0IH0gPSBhY3Rpb247XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCAuLi5hZmZlY3Qoc3RhdGUpIH07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fSwgc3RhdGUpO1xyXG5cclxuXHRyZXR1cm4gcmVkdWNlcjtcclxufTtcclxuXHJcbmNvbnN0IEVtcHR5Tm9kZSA9IGZvcndhcmRSZWYoKHsgLi4ucmVzdCB9LCByZWYpID0+IChcclxuXHQ8ZGl2IHJlZj17cmVmfSB7Li4ucmVzdH0+PC9kaXY+XHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtcclxuXHRyZWR1Y2VyID0gdXNlT3V0bGluZVJlZHVjZXIoKSxcclxuXHRjbGFzc05hbWUsXHJcblx0c3R5bGUsXHJcblx0Li4ucmVzdFxyXG59KSA9PiB7XHJcblx0Y29uc3QgcmVmID0gdXNlUmVmKCk7XHJcblx0Y29uc3QgY2xzID0gam9pbkJ5U3BhY2UoY2xhc3NOYW1lLCBcIk91dGxpbmVcIik7XHJcblx0Y29uc3QgW05vZGUsIG1hcHBlcl0gPSB1c2VDb21wb25lbnRJbmRleGVyKEZsYXROb2RlKTtcclxuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHJlZHVjZXI7XHJcblx0Y29uc3QgW3RodW1iX3Byb3BzLCBzZXRUaHVtYlByb3BzXSA9IHVzZVN0YXRlKHtcclxuXHRcdG9mZnNldDogMCxcclxuXHRcdG5vZGVfcHJvcHM6IHsgaXRlbV90eXBlOiBFbXB0eU5vZGUgfSxcclxuXHR9KTtcclxuXHRjb25zdCBwYXlsb2FkcyA9IHVzZVJlZigpO1xyXG5cdGNvbnN0IGhpZXJhcmNoeV9hbmFseXplciA9IHVzZVJlZigpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0cGF5bG9hZHMuY3VycmVudCA9IHN0YXRlLnBheWxvYWRzO1xyXG5cdH0sIFtzdGF0ZS5wYXlsb2Fkc10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aGllcmFyY2h5X2FuYWx5emVyLmN1cnJlbnQgPSBzdGF0ZS5oaWVyYXJjaHlfYW5hbHl6ZXI7XHJcblx0fSwgW3N0YXRlLmhpZXJhcmNoeV9hbmFseXplcl0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFyZWYpIHJldHVybjtcclxuXHRcdGNvbnN0IHRvcF9ub2RlX2RvbSA9IHJlZi5jdXJyZW50O1xyXG5cdFx0Y29uc3QgdG9wX2JvdW5kID0gdG9wX25vZGVfZG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmV0dXJuIGxpc3RlbihcclxuXHRcdFx0XCJtb3VzZWRvd25cIixcclxuXHRcdFx0dG9wX25vZGVfZG9tXHJcblx0XHQpKChlKSA9PiB7XHJcblx0XHRcdGNvbnN0IHsgcGF0aCwgY2xpZW50WCwgY2xpZW50WSB9ID0gZTtcclxuXHJcblx0XHRcdGNvbnN0IGxvY2FsX29mZnNldCA9IChjbGllbnRZIC0gdG9wX2JvdW5kLnkpICUgbGluZUhlaWdodDtcclxuXHRcdFx0Y29uc3QgaW5pdF9pbmRleCA9XHJcblx0XHRcdFx0KGNsaWVudFkgLSB0b3BfYm91bmQueSAtIGxvY2FsX29mZnNldCkgLyBsaW5lSGVpZ2h0O1xyXG5cclxuXHRcdFx0Y29uc3QgaW5pdF9wYXlsb2FkX25vZGVfcG9zaXRpb24gPVxyXG5cdFx0XHRcdGluaXRfaW5kZXggKiBsaW5lSGVpZ2h0ICsgbG9jYWxfb2Zmc2V0O1xyXG5cclxuXHRcdFx0Ly8gZGlzcGF0Y2goe1xyXG5cdFx0XHQvLyBcdHR5cGU6IFwic2F2ZVwiLFxyXG5cdFx0XHQvLyBcdGlkLFxyXG5cdFx0XHQvLyBcdGV4dHJhOiAoeyBwYXlsb2FkcywgaGllcmFyY2h5X2FuYWx5emVyIH0pID0+ICh7XHJcblx0XHRcdC8vIFx0XHRbaW5pdF9wYXlsb2FkX2xldmVsX2lkXTogcGF5bG9hZHMubGlzdFtpbml0X2luZGV4XS5sZXZlbCxcclxuXHRcdFx0Ly8gXHRcdFtpbml0X2hpZXJhcmNoeV9hbmFseXplcl9pZF06IGhpZXJhcmNoeV9hbmFseXplci5jbG9uZSgpLFxyXG5cdFx0XHQvLyBcdH0pLFxyXG5cdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdC8vIGRpc3BhdGNoKHtcclxuXHRcdFx0Ly8gXHR0eXBlOiBcInNldFwiLFxyXG5cdFx0XHQvLyBcdGFmZmVjdDogKHsgcGF5bG9hZHMsIGhpZXJhcmNoeV9hbmFseXplciB9KSA9PiB7XHJcblx0XHRcdC8vIFx0XHRjb25zdCBbcGF5bG9hZF0gPSBwYXlsb2Fkcy5zcGxpY2UoaW5pdF9pbmRleCwgMSk7XHJcblx0XHRcdC8vIFx0XHRoaWVyYXJjaHlfYW5hbHl6ZXIub25SZW1vdmVkKFxyXG5cdFx0XHQvLyBcdFx0XHRwYXlsb2FkLFxyXG5cdFx0XHQvLyBcdFx0XHRpbml0X2luZGV4LFxyXG5cdFx0XHQvLyBcdFx0XHRwYXlsb2Fkcy5saXN0XHJcblx0XHRcdC8vIFx0XHQpO1xyXG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgcGF5bG9hZHMsIGhpZXJhcmNoeV9hbmFseXplciB9O1xyXG5cdFx0XHQvLyBcdH0sXHJcblx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgaXggPSBjbGllbnRYLFxyXG5cdFx0XHRcdGl5ID0gY2xpZW50WTtcclxuXHJcblx0XHRcdGNvbnN0IHBheWxvYWRzX2xvY2tlZCA9IHBheWxvYWRzLmN1cnJlbnQuY2xvbmUoKTtcclxuXHRcdFx0Y29uc3QgaGllcmFyY2h5X2FuYWx5emVyX2xvY2tlZCA9IGhpZXJhcmNoeV9hbmFseXplci5jdXJyZW50LmNsb25lKCk7XHJcblx0XHRcdGNvbnN0IGluaXRfcGF5bG9hZCA9IHBheWxvYWRzX2xvY2tlZC5saXN0W2luaXRfaW5kZXhdO1xyXG5cclxuXHRcdFx0Y29uc3QgY2xlYW5fbW92ZSA9IGxpc3RlbihcIm1vdXNlbW92ZVwiKSgoeyBjbGllbnRYLCBjbGllbnRZIH0pID0+IHtcclxuXHRcdFx0XHRsZXQgc3RhcnRfc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdC8vIGNvbnN0IHBheWxvYWRzX2xpdmUgPSBwYXlsb2Fkc19sb2NrZWQuY2xvbmUoKTtcclxuXHRcdFx0XHQvLyBjb25zdCBoaWVyYXJjaHlfYW5hbHl6ZXJfbGl2ZSA9IGhpZXJhcmNoeV9hbmFseXplcl9sb2NrZWQuY2xvbmUoKTtcclxuXHRcdFx0XHQvLyBjb25zdCBoaWVyYXJjaHlfbWFwID0gaGllcmFyY2h5X2FuYWx5emVyX2xpdmUuZ2V0SGllcmFyY2h5TWFwKCk7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IGxvY2FsX29mZnNldCA9IChjbGllbnRZIC0gdG9wX2JvdW5kLnkpICUgbGluZUhlaWdodDtcclxuXHRcdFx0XHQvLyBjb25zdCBsaXZlX2luZGV4ID1cclxuXHRcdFx0XHQvLyBcdChjbGllbnRZIC0gdG9wX2JvdW5kLnkgLSBsb2NhbF9vZmZzZXQpIC8gbGluZUhlaWdodDtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9pbmRleCA9IGxpdmVfaW5kZXggLSAxO1xyXG5cdFx0XHRcdC8vIGNvbnN0IG5leHRfaW5kZXggPSBsaXZlX2luZGV4ICsgMTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocHJldl9pbmRleCwgbmV4dF9pbmRleCk7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IGlzX2ZpcnN0ID0gbGl2ZV9pbmRleCA9PT0gMDtcclxuXHRcdFx0XHQvLyBjb25zdCBpc19sYXN0ID0gbGl2ZV9pbmRleCA9PT0gcGF5bG9hZHNfbGl2ZS5sZW5ndGggLSAxO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBpbml0X3JlbGF0aW9uID0gaGllcmFyY2h5X21hcC5yZWxhdGlvbltpbml0X3BheWxvYWQuaWRdO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X3BheWxvYWQgPSBwYXlsb2Fkc19saXZlLmxpc3RbcHJldl9pbmRleF07XHJcblx0XHRcdFx0Ly8gY29uc3QgbmV4dF9wYXlsb2FkID0gcGF5bG9hZHNfbGl2ZS5saXN0W25leHRfaW5kZXhdO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X3JlbGF0aW9uID0gaGllcmFyY2h5X21hcC5yZWxhdGlvbltwcmV2X3BheWxvYWQuaWRdO1xyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfbGV2ZWwgPSBwcmV2X3BheWxvYWQubGV2ZWw7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfcGFyZW50X3BheWxvYWQgPSBwYXlsb2Fkc19saXZlLmdldChcclxuXHRcdFx0XHQvLyBcdHByZXZfcmVsYXRpb24ucGFyZW50XHJcblx0XHRcdFx0Ly8gKTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9pc19wYXJlbnQgPSBwcmV2X3BheWxvYWQuaWQgaW4gaGllcmFyY2h5X21hcC5zaXplO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBpbml0X2xldmVsID0gaW5pdF9wYXlsb2FkLmxldmVsO1xyXG5cdFx0XHRcdC8vIGNvbnN0IG1heWJlX2xldmVsID1cclxuXHRcdFx0XHQvLyBcdChwcmV2X2lzX3BhcmVudFxyXG5cdFx0XHRcdC8vIFx0XHQ/IHByZXZfcGF5bG9hZC5sZXZlbFxyXG5cdFx0XHRcdC8vIFx0XHQ6IHByZXZfcGFyZW50X3BheWxvYWQubGV2ZWwpICsgMTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgeCA9IGNsaWVudFggLSBpeDtcclxuXHRcdFx0XHQvLyBjb25zdCBzaG91bGRfbGV2ZWwgPSBpbml0X2xldmVsICsgeCAvIDIwO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBvZmZzZXQgPSBpbml0X3BheWxvYWRfbm9kZV9wb3NpdGlvbiArIGNsaWVudFkgLSBpeTtcclxuXHJcblx0XHRcdFx0Ly8gc2V0VGh1bWJQcm9wcyh7XHJcblx0XHRcdFx0Ly8gXHRub2RlX3Byb3BzOiBnZXROb2RlUHJvcHMoXHJcblx0XHRcdFx0Ly8gXHRcdHsgLi4uaW5pdF9wYXlsb2FkLCBsZXZlbDogc2hvdWxkX2xldmVsIH0sXHJcblx0XHRcdFx0Ly8gXHRcdHN0YXRlXHJcblx0XHRcdFx0Ly8gXHQpLFxyXG5cdFx0XHRcdC8vIFx0b2Zmc2V0LFxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdC8vIHNldFRodW1iUHJvcHMoe1xyXG5cdFx0XHRcdC8vIFx0bm9kZV9wcm9wczogZ2V0Tm9kZVByb3BzKFxyXG5cdFx0XHRcdC8vIFx0XHR7IC4uLmluaXRfcGF5bG9hZCwgbGV2ZWw6IGNsaWVudFggLyAyMCB9LFxyXG5cdFx0XHRcdC8vIFx0XHRzdGF0ZVxyXG5cdFx0XHRcdC8vIFx0KSxcclxuXHRcdFx0XHQvLyBcdG9mZnNldCxcclxuXHRcdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgKFxyXG5cdFx0XHRcdC8vIFx0aXNFbXB0eShwcmV2X3JlbGF0aW9uLm5leHRfc2libGluZykgJiZcclxuXHRcdFx0XHQvLyBcdCFwcmV2X2lzX3BhcmVudFxyXG5cdFx0XHRcdC8vICkge1xyXG5cdFx0XHRcdC8vIFx0aWYgKHNob3VsZF9sZXZlbCA8IG1heWJlX2xldmVsKSB7XHJcblx0XHRcdFx0Ly8gXHRcdGluaXRfcGF5bG9hZC5sZXZlbCA9IHNob3VsZF9sZXZlbDtcclxuXHRcdFx0XHQvLyBcdH1cclxuXHRcdFx0XHQvLyB9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHQvLyBpbml0X3BheWxvYWQubGV2ZWwgPSBtYXliZV9sZXZlbDtcclxuXHJcblx0XHRcdFx0Ly8gcGF5bG9hZHNfbGl2ZS5zcGxpY2UoaW5pdF9pbmRleCwgMSk7XHJcblx0XHRcdFx0Ly8gaGllcmFyY2h5X2FuYWx5emVyX2xpdmUub25SZW1vdmVkKFxyXG5cdFx0XHRcdC8vIFx0aW5pdF9wYXlsb2FkLFxyXG5cdFx0XHRcdC8vIFx0aW5pdF9pbmRleCxcclxuXHRcdFx0XHQvLyBcdHBheWxvYWRzX2xpdmUubGlzdFxyXG5cdFx0XHRcdC8vICk7XHJcblxyXG5cdFx0XHRcdC8vIHBheWxvYWRzX2xpdmUuc3BsaWNlKGxpdmVfaW5kZXggPj4gMCwgMCwgaW5pdF9wYXlsb2FkKTtcclxuXHRcdFx0XHQvLyBoaWVyYXJjaHlfYW5hbHl6ZXJfbGl2ZS5vbkluc2VydGVkKFxyXG5cdFx0XHRcdC8vIFx0aW5pdF9wYXlsb2FkLFxyXG5cdFx0XHRcdC8vIFx0bGl2ZV9pbmRleCA+PiAwLFxyXG5cdFx0XHRcdC8vIFx0cGF5bG9hZHNfbGl2ZS5saXN0XHJcblx0XHRcdFx0Ly8gKTtcclxuXHJcblx0XHRcdFx0bGV0IHN0YXJ0X3N0YW1wX2Rpc3BhdGNoID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0XHQvLyB0eXBlOiBcInNldFwiLFxyXG5cdFx0XHRcdFx0Ly8gYWZmZWN0OiAoKSA9PiAoe1xyXG5cdFx0XHRcdFx0Ly8gXHQvLyBwYXlsb2FkczogcGF5bG9hZHNfbGl2ZSxcclxuXHRcdFx0XHRcdC8vIFx0Ly8gaGllcmFyY2h5X2FuYWx5emVyOiBoaWVyYXJjaHlfYW5hbHl6ZXJfbGl2ZSxcclxuXHRcdFx0XHRcdC8vIH0pLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFxyXG5cdFx0XHRcdFx0RGF0ZS5ub3coKSAtIHN0YXJ0X3N0YW1wLFxyXG5cdFx0XHRcdFx0RGF0ZS5ub3coKSAtIHN0YXJ0X3N0YW1wX2Rpc3BhdGNoXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb25zdCBjbGVhbl91cCA9IGxpc3RlbihcIm1vdXNldXBcIikoKCkgPT4ge1xyXG5cdFx0XHRcdGNsZWFuX21vdmUoKTtcclxuXHRcdFx0XHRjbGVhbl91cCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0sIFtyZWYuY3VycmVudF0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Nsc30gcmVmPXtyZWZ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInRodW1iXCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHRvcDogdGh1bWJfcHJvcHMub2Zmc2V0ICsgXCJweFwiIH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE5vZGUgey4uLnRodW1iX3Byb3BzLm5vZGVfcHJvcHN9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuXHRcdFx0XHR7c3RhdGUucGF5bG9hZHMubWFwKChwYXlsb2FkKSA9PiAoXHJcblx0XHRcdFx0XHQ8Tm9kZSBrZXk9e3BheWxvYWQuaWR9IHsuLi5nZXROb2RlUHJvcHMocGF5bG9hZCwgc3RhdGUpfSAvPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXROb2RlUHJvcHMocGF5bG9hZCwgc3RhdGUpIHtcclxuXHRjb25zdCByZWR1Y2VyID0gKHJlbGF5ZWQsIFtrZXksIHZhbHVlXSkgPT4ge1xyXG5cdFx0aWYgKHN0YXRlLnJlbGF5ZWQuaGFzKGtleSkpIHtcclxuXHRcdFx0cmVsYXllZFtrZXldID0gdmFsdWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVsYXllZDtcclxuXHR9O1xyXG5cdGNvbnN0IHJlbGF5ZWRfcHJvcHMgPSBPYmplY3QuZW50cmllcyhwYXlsb2FkKS5yZWR1Y2UocmVkdWNlciwge30pO1xyXG5cdGNvbnN0IHBheWxvYWRfcHJvcHMgPSBwYXlsb2FkLnByb3BzO1xyXG5cdGNvbnN0IG1ldGFfcHJvcHMgPSB7XHJcblx0XHRpZDogcGF5bG9hZC5pZCxcclxuXHRcdGxldmVsOiBwYXlsb2FkLmxldmVsLFxyXG5cdFx0Y2FuX2V4cGFuZDogcGF5bG9hZC5jYW5fZXhwYW5kLFxyXG5cdH07XHJcblxyXG5cdGlmIChcInR5cGVfc2VsZlwiIGluIHBheWxvYWQpIHtcclxuXHRcdG1ldGFfcHJvcHMuaXRlbV90eXBlID0gcGF5bG9hZC50eXBlX3NlbGY7XHJcblx0fSBlbHNlIHtcclxuXHRcdG1ldGFfcHJvcHMuaXRlbV90eXBlID0gc3RhdGUuaXRlbV90eXBlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7IC4uLnBheWxvYWRfcHJvcHMsIC4uLnJlbGF5ZWRfcHJvcHMgfSxcclxuXHRcdC4uLm1ldGFfcHJvcHMsXHJcblx0fTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9