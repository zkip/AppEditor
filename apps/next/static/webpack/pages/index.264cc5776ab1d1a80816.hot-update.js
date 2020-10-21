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
        dispatch({
          type: "set",
          affect: function affect() {
            return {// payloads: payloads_live,
              // hierarchy_analyzer: hierarchy_analyzer_live,
            };
          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3V0bGluZS9PdXRsaW5lLmpzeCJdLCJuYW1lcyI6WyJub2RlX21hcCIsImRvbV9wYXlsb2FkX21hcCIsIk1hcCIsIk5vZGUiLCJkYXRhIiwidG9wX3BheWxvYWQiLCJuYW1lIiwiaWQiLCJsZXZlbCIsImNoaWxkcmVuIiwidG9wX25vZGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwYXlsb2FkIiwiZG9tIiwiY3VycmVudCIsInJhdyIsInRvcCIsInNldCIsInBhZGRpbmdMZWZ0IiwibGVuZ3RoIiwibWFwIiwiZ2V0UGF5bG9hZCIsIkZsYXROb2RlIiwiZm9yd2FyZFJlZiIsInJlZiIsIml0ZW1fdHlwZSIsInByb3BzIiwicmVzdCIsIkl0ZW0iLCJsaW5lSGVpZ2h0IiwiQXJyYXlNYXBwZXIiLCJhcnJheSIsImNvbnN0cnVjdG9yIiwibGlzdCIsIml0ZW0iLCJjbG9uZSIsInNsaWNlIiwicmVtb3ZlIiwic3BsaWNlIiwic3RhcnRfcG9zaXRpb24iLCJkZWxldGVfY291bnQiLCJhcHBlbmRfaXRlbXMiLCJiZV9jdWxsZWQiLCJnZXQiLCJtYWtlT3V0bGluZVN0YXRlIiwicGF5bG9hZHMiLCJyZWxheWVkIiwiU2V0IiwiaGllcmFyY2h5X21hcCIsInJlY29yZHMiLCJSZWxhdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsIm5leHRfc2libGluZyIsInVuZGVmaW5lZCIsInByZXZfc2libGluZyIsInBhcmVudCIsImNoaWxkIiwiZ2VuSGllcmFyY2h5QW5hbHl6ZXIiLCJyZWxhdGlvbiIsInNpemUiLCJsaXZlX3JlbGF0aW9uX21hcCIsImxpdmVfc2l6ZV9tYXAiLCJvbkluc2VydGVkIiwiaW5kZXgiLCJpc19maXJzdCIsImlzX3RvcCIsImlzX2xhc3QiLCJwcmV2X2luZGV4IiwibmV4dF9pbmRleCIsInByZXZfaWQiLCJuZXh0X2lkIiwicHJldl9wYXlsb2FkIiwicHJldl9sZXZlbCIsImRpZmZfbGV2ZWwiLCJwcmV2X3JlbGF0aW9uIiwiZmFsbGJhY2siLCJuZXh0X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX2lkIiwiZ2V0UmVjdXJzaXZlUGFyZW50IiwicGFyZW50X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX3JlbGF0aW9uIiwiY291bnQiLCJwYXJlbnRfaWQiLCJvblJlbW92ZWQiLCJpc05vdEVtcHR5IiwibmV4dF9zaWJsaW5nX3JlbGF0aW9uIiwiYXBwbHkiLCJnZXRIaWVyYXJjaHlNYXAiLCJleHBvcnRzIiwidXNlT3V0bGluZVJlZHVjZXIiLCJzdGF0ZSIsImhpZXJhcmNoeV9hbmFseXplciIsInVzZU1lbW8iLCJyZWR1Y2VyIiwidXNlUmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJleHRyYSIsImV4dHJhX2RhdGEiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW0iLCJhZmZlY3QiLCJFbXB0eU5vZGUiLCJjbGFzc05hbWUiLCJzdHlsZSIsImNscyIsImpvaW5CeVNwYWNlIiwidXNlQ29tcG9uZW50SW5kZXhlciIsIm1hcHBlciIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJvZmZzZXQiLCJub2RlX3Byb3BzIiwidGh1bWJfcHJvcHMiLCJzZXRUaHVtYlByb3BzIiwidG9wX25vZGVfZG9tIiwidG9wX2JvdW5kIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGlzdGVuIiwiZSIsInBhdGgiLCJjbGllbnRYIiwiY2xpZW50WSIsImxvY2FsX29mZnNldCIsInkiLCJpbml0X2luZGV4IiwiaW5pdF9wYXlsb2FkX25vZGVfcG9zaXRpb24iLCJpeCIsIml5IiwicGF5bG9hZHNfbG9ja2VkIiwiaGllcmFyY2h5X2FuYWx5emVyX2xvY2tlZCIsImluaXRfcGF5bG9hZCIsImNsZWFuX21vdmUiLCJzdGFydF9zdGFtcCIsIkRhdGUiLCJub3ciLCJzdGFydF9zdGFtcF9kaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhbl91cCIsImdldE5vZGVQcm9wcyIsImtleSIsInZhbHVlIiwiaGFzIiwicmVsYXllZF9wcm9wcyIsImVudHJpZXMiLCJyZWR1Y2UiLCJwYXlsb2FkX3Byb3BzIiwibWV0YV9wcm9wcyIsImNhbl9leHBhbmQiLCJ0eXBlX3NlbGYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFFBQVEsR0FBRyxFQUFqQjtBQUNBLElBQU1DLGVBQWUsR0FBRyxJQUFJQyxHQUFKLEVBQXhCOztBQUVQLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTJCO0FBQUE7O0FBQUEsTUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFBQSxtQkFDU0QsSUFEVCxDQUMvQkUsSUFEK0I7QUFBQSxNQUMvQkEsSUFEK0IsMkJBQ3hCLEVBRHdCO0FBQUEsTUFDcEJDLEVBRG9CLEdBQ1NILElBRFQsQ0FDcEJHLEVBRG9CO0FBQUEsTUFDaEJDLEtBRGdCLEdBQ1NKLElBRFQsQ0FDaEJJLEtBRGdCO0FBQUEsdUJBQ1NKLElBRFQsQ0FDVEssUUFEUztBQUFBLE1BQ1RBLFFBRFMsK0JBQ0UsRUFERjtBQUV2QyxNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLEVBQXZCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1DLE9BQU8sR0FBRztBQUNmUCxVQUFJLEVBQUpBLElBRGU7QUFFZkMsUUFBRSxFQUFGQSxFQUZlO0FBR2ZFLGNBQVEsRUFBUkEsUUFIZTtBQUlmSyxTQUFHLEVBQUVKLFFBQVEsQ0FBQ0ssT0FKQztBQUtmQyxTQUFHLEVBQUVaLElBTFU7QUFNZmEsU0FBRyxFQUFFWjtBQU5VLEtBQWhCO0FBUUFMLFlBQVEsQ0FBQ08sRUFBRCxDQUFSLEdBQWVNLE9BQWY7QUFDQVosbUJBQWUsQ0FBQ2lCLEdBQWhCLENBQW9CUixRQUFRLENBQUNLLE9BQTdCLEVBQXNDRixPQUF0QztBQUNBLFdBQU8sWUFBTTtBQUNaWixxQkFBZSxVQUFmLENBQXVCUyxRQUFRLENBQUNLLE9BQWhDO0FBQ0EsYUFBT2YsUUFBUSxDQUFDTyxFQUFELENBQWY7QUFDQSxLQUhEO0FBSUEsR0FmUSxFQWVOLENBQUNHLFFBQVEsQ0FBQ0ssT0FBVixFQUFtQlgsSUFBbkIsQ0FmTSxDQUFUO0FBZ0JBLFNBQ0M7QUFBSyxPQUFHLEVBQUVNLFFBQVY7QUFBb0IsYUFBUyxFQUFDLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQXVCLFNBQUssRUFBRTtBQUFFUyxpQkFBVyxZQUFLWCxLQUFLLEdBQUcsRUFBYjtBQUFiLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUYsSUFERixDQURELEVBSUVHLFFBQVEsQ0FBQ1csTUFBVCxHQUFrQixDQUFsQixJQUNBO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFWCxRQUFRLENBQUNZLEdBQVQsQ0FBYSxVQUFDakIsSUFBRDtBQUFBLFdBQ2IsTUFBQyxJQUFEO0FBQ0MsU0FBRyxFQUFFQSxJQUFJLENBQUNHLEVBRFg7QUFFQyxVQUFJLEVBQUVILElBRlA7QUFHQyxpQkFBVyxFQUFFQyxXQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEYTtBQUFBLEdBQWIsQ0FERixDQUxGLENBREQ7QUFrQkEsQ0FyQ0Q7O0dBQU1GLEk7O0tBQUFBLEk7QUF1Q0MsU0FBU21CLFVBQVQsR0FBc0IsQ0FBRTtBQUUvQixJQUFNQyxRQUFRLGdCQUFHQyx3REFBVSxPQUMxQixlQUE2RDtBQUFBLGtGQUFaLEVBQVk7O0FBQUEsTUFBUkMsR0FBUTs7QUFBQSxNQUExREMsU0FBMEQsU0FBMURBLFNBQTBEO0FBQUEsMEJBQS9DbEIsS0FBK0M7QUFBQSxNQUEvQ0EsS0FBK0MsNEJBQXZDLENBQXVDO0FBQUEsMEJBQXBDbUIsS0FBb0M7QUFBQSxNQUFwQ0EsS0FBb0MsNEJBQTVCLEVBQTRCO0FBQUEsTUFBckJDLElBQXFCOztBQUM1RCxNQUFNQyxJQUFJLEdBQUdILFNBQWI7QUFDQSxTQUNDO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBc0IsT0FBRyxFQUFFRCxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxhQUFTLEVBQUMsT0FEWDtBQUVDLFNBQUssRUFBRTtBQUFFTixpQkFBVyxZQUFLWCxLQUFLLEdBQUcsRUFBYjtBQUFiLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlDLE1BQUMsSUFBRCx5RkFBVW1CLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpELENBREQsQ0FERDtBQVVBLENBYnlCLENBQTNCO01BQU1KLFE7QUFnQk4sSUFBTU8sVUFBVSxHQUFHLEVBQW5COztBQUVBLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzNCLFdBQVNDLFdBQVQ7QUFBQSxRQUF1QkMsSUFBdkIsU0FBdUJBLElBQXZCO0FBQUEsMEJBQTZCYixHQUE3QjtBQUFBLFFBQTZCQSxHQUE3QiwwQkFBbUMsRUFBbkM7QUFBQSwwQkFBeUM7QUFDeENhLFVBQUksQ0FBQ2IsR0FBTCxDQUFTLFVBQUNjLElBQUQ7QUFBQSxlQUFXZCxHQUFHLENBQUNjLElBQUksQ0FBQzVCLEVBQU4sQ0FBSCxHQUFlNEIsSUFBMUI7QUFBQSxPQUFUOztBQUVBLGVBQVNDLEtBQVQsR0FBaUI7QUFDaEIsZUFBT0gsV0FBVyxDQUFDO0FBQUVDLGNBQUksRUFBRUEsSUFBSSxDQUFDRyxLQUFMLEVBQVI7QUFBc0JoQixhQUFHLEVBQUU7QUFBM0IsU0FBRCxDQUFsQjtBQUNBOztBQUVELGVBQVNpQixNQUFULENBQWdCL0IsRUFBaEIsRUFBb0I7QUFDbkIsZUFBT2MsR0FBRyxDQUFDZCxFQUFELENBQVY7QUFDQTs7QUFFRCxlQUFTZ0MsTUFBVCxDQUFnQkMsY0FBaEIsRUFBZ0NDLFlBQWhDLEVBQStEO0FBQUEsMENBQWRDLFlBQWM7QUFBZEEsc0JBQWM7QUFBQTs7QUFDOUQsWUFBTUMsU0FBUyxHQUFHVCxJQUFJLENBQUNLLE1BQUwsT0FBQUwsSUFBSSxHQUNyQk0sY0FEcUIsRUFFckJDLFlBRnFCLFNBR2xCQyxZQUhrQixFQUF0QjtBQU1BQyxpQkFBUyxDQUFDdEIsR0FBVixDQUFjO0FBQUEsY0FBR2QsRUFBSCxTQUFHQSxFQUFIO0FBQUEsaUJBQVkrQixNQUFNLENBQUMvQixFQUFELENBQWxCO0FBQUEsU0FBZDtBQUVBLGVBQU9vQyxTQUFQO0FBQ0E7O0FBRUQsZUFBU3RCLEdBQVQsR0FBc0I7QUFDckIsZUFBT2EsSUFBSSxDQUFDYixHQUFMLE9BQUFhLElBQUksWUFBWDtBQUNBOztBQUVELGVBQVNVLEdBQVQsQ0FBYXJDLEVBQWIsRUFBaUI7QUFDaEIsZUFBT2MsR0FBRyxDQUFDZCxFQUFELENBQVY7QUFDQTs7QUFFRCxhQUFPO0FBQ05xQyxXQUFHLEVBQUhBLEdBRE07QUFFTlIsYUFBSyxFQUFMQSxLQUZNO0FBR05FLGNBQU0sRUFBTkEsTUFITTtBQUlOQyxjQUFNLEVBQU5BLE1BSk07QUFLTkwsWUFBSSxFQUFKQSxJQUxNO0FBTU5iLFdBQUcsRUFBSEE7QUFOTSxPQUFQO0FBUUEsS0F2Q0Q7QUFBQTs7QUF5Q0EsU0FBT1ksV0FBVyxDQUFDO0FBQUVDLFFBQUksRUFBRUY7QUFBUixHQUFELENBQWxCO0FBQ0EsQyxDQUVEO0FBQ0E7OztNQTlDU0QsVztBQStDRixJQUFNYyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBSXJCO0FBQUEsa0ZBQVAsRUFBTztBQUFBLDhCQUhWbkIsU0FHVTtBQUFBLE1BSFZBLFNBR1UsZ0NBSEUsSUFHRjtBQUFBLDZCQUZWb0IsUUFFVTtBQUFBLE1BRlZBLFFBRVUsK0JBRkMsRUFFRDtBQUFBLDRCQURWQyxPQUNVO0FBQUEsTUFEVkEsT0FDVSw4QkFEQSxJQUFJQyxHQUFKLENBQVEsQ0FBQyxJQUFELEVBQU8sT0FBUCxDQUFSLENBQ0E7O0FBQ1YsU0FBTztBQUNOQyxpQkFBYSxFQUFFLEVBRFQ7QUFFTnZCLGFBQVMsRUFBVEEsU0FGTTtBQUdOb0IsWUFBUSxFQUFFZixXQUFXLENBQUNlLFFBQUQsQ0FIZjtBQUlOQyxXQUFPLEVBQVBBLE9BSk07QUFLTkcsV0FBTyxFQUFFLElBQUloRCxHQUFKO0FBTEgsR0FBUDtBQU9BLENBWk07O0FBY1AsU0FBU2lELFFBQVQsQ0FBa0I1QyxFQUFsQixTQUFvQztBQUFBLE1BQVRvQixLQUFTOztBQUNuQyxTQUFPeUIsTUFBTSxDQUFDQyxNQUFQLENBQ047QUFDQzlDLE1BQUUsRUFBRkEsRUFERDtBQUVDK0MsZ0JBQVksRUFBRUMsU0FGZjtBQUdDQyxnQkFBWSxFQUFFRCxTQUhmO0FBSUNFLFVBQU0sRUFBRUYsU0FKVDtBQUtDRyxTQUFLLEVBQUVIO0FBTFIsR0FETSxFQVFONUIsS0FSTSxDQUFQO0FBVUE7O01BWFF3QixROztBQWFULFNBQVNRLG9CQUFULEdBQXVDO0FBQUEsa0ZBQUosRUFBSTs7QUFBQTs7QUFDdEMsV0FBUzFCLFdBQVQsR0FBMEU7QUFBQSxvRkFBSixFQUFJO0FBQUEsb0NBQW5EZ0IsYUFBbUQ7QUFBQSxRQUFuREEsYUFBbUQsb0NBQW5DO0FBQUVXLGNBQVEsRUFBRSxFQUFaO0FBQWdCQyxVQUFJLEVBQUU7QUFBdEIsS0FBbUM7O0FBQUEsUUFFOURDLGlCQUY4RCxHQUlyRWIsYUFKcUUsQ0FFeEVXLFFBRndFO0FBQUEsUUFHbEVHLGFBSGtFLEdBSXJFZCxhQUpxRSxDQUd4RVksSUFId0UsRUFNekU7QUFFQTs7QUFDQSxhQUFTRyxVQUFULFFBQW1DQyxLQUFuQyxFQUEwQ25CLFFBQTFDLEVBQW9EO0FBQUEsVUFBOUJ0QyxLQUE4QixTQUE5QkEsS0FBOEI7QUFBQSxVQUF2QkQsRUFBdUIsU0FBdkJBLEVBQXVCO0FBQ25ELFVBQU0yRCxRQUFRLEdBQUdELEtBQUssS0FBSyxDQUEzQjtBQUNBLFVBQU1FLE1BQU0sR0FBRzNELEtBQUssS0FBSyxDQUF6QjtBQUNBLFVBQU00RCxPQUFPLEdBQUdILEtBQUssS0FBS25CLFFBQVEsQ0FBQzFCLE1BQVQsR0FBa0IsQ0FBNUM7QUFDQSxVQUFNaUQsVUFBVSxHQUFHSixLQUFLLEdBQUcsQ0FBM0I7QUFDQSxVQUFNSyxVQUFVLEdBQUdMLEtBQUssR0FBRyxDQUEzQjtBQUNBLFVBQU1NLE9BQU8sR0FBR0wsUUFBUSxHQUFHWCxTQUFILEdBQWVULFFBQVEsQ0FBQ3VCLFVBQUQsQ0FBUixDQUFxQjlELEVBQTVEO0FBQ0EsVUFBTWlFLE9BQU8sR0FBR0osT0FBTyxHQUFHYixTQUFILEdBQWVULFFBQVEsQ0FBQ3dCLFVBQUQsQ0FBUixDQUFxQi9ELEVBQTNEO0FBQ0EsVUFBTWtFLFlBQVksR0FBRzNCLFFBQVEsQ0FBQ3VCLFVBQUQsQ0FBN0I7QUFDQSxVQUFNSyxVQUFVLEdBQUcsQ0FBQ1IsUUFBRCxJQUFhTyxZQUFZLENBQUNqRSxLQUE3QztBQUNBLFVBQU1tRSxVQUFVLEdBQUcsQ0FBQ1QsUUFBRCxJQUFhMUQsS0FBSyxHQUFHa0UsVUFBeEM7QUFFQSxVQUFNRSxhQUFhLEdBQUdDLDBEQUFRLENBQUMxQixRQUFRLENBQUM1QyxFQUFELENBQVQsQ0FBUixDQUNyQnVELGlCQUFpQixDQUFDUyxPQUFELENBREksQ0FBdEI7QUFHQSxVQUFNTyxhQUFhLEdBQUdELDBEQUFRLENBQUMxQixRQUFRLENBQUM1QyxFQUFELENBQVQsQ0FBUixDQUNyQnVELGlCQUFpQixDQUFDVSxPQUFELENBREksQ0FBdEI7QUFHQSxVQUFNWixRQUFRLEdBQUdpQiwwREFBUSxDQUFDMUIsUUFBUSxDQUFDNUMsRUFBRCxDQUFULENBQVIsQ0FBdUJ1RCxpQkFBaUIsQ0FBQ3ZELEVBQUQsQ0FBeEMsQ0FBakI7O0FBRUEsVUFBSW9FLFVBQVUsR0FBRyxDQUFqQixFQUFvQjtBQUNuQkMscUJBQWEsQ0FBQ2xCLEtBQWQsR0FBc0JuRCxFQUF0QjtBQUNBcUQsZ0JBQVEsQ0FBQ0gsTUFBVCxHQUFrQlMsUUFBUSxJQUFJQyxNQUFaLEdBQXFCWixTQUFyQixHQUFpQ2dCLE9BQW5EOztBQUVBLFlBQUksQ0FBQ0gsT0FBRCxJQUFZUixRQUFRLENBQUNILE1BQVQsS0FBb0JxQixhQUFhLENBQUNyQixNQUFsRCxFQUEwRDtBQUN6RHFCLHVCQUFhLENBQUN0QixZQUFkLEdBQTZCakQsRUFBN0I7QUFDQTtBQUNELE9BUEQsTUFPTyxJQUFJb0UsVUFBVSxLQUFLLENBQW5CLEVBQXNCO0FBQzVCZixnQkFBUSxDQUFDSixZQUFULEdBQXdCZSxPQUF4QjtBQUNBWCxnQkFBUSxDQUFDSCxNQUFULEdBQ0NTLFFBQVEsSUFBSUMsTUFBWixHQUFxQlosU0FBckIsR0FBaUNxQixhQUFhLENBQUNuQixNQURoRDtBQUVBbUIscUJBQWEsQ0FBQ3RCLFlBQWQsR0FBNkIvQyxFQUE3Qjs7QUFFQSxZQUFJLENBQUM2RCxPQUFELElBQVlVLGFBQWEsQ0FBQ3JCLE1BQWQsS0FBeUJHLFFBQVEsQ0FBQ0gsTUFBbEQsRUFBMEQ7QUFDekRHLGtCQUFRLENBQUNOLFlBQVQsR0FBd0JrQixPQUF4QjtBQUNBTSx1QkFBYSxDQUFDdEIsWUFBZCxHQUE2QmpELEVBQTdCO0FBQ0E7QUFDRCxPQVZNLE1BVUE7QUFDTixZQUFNd0UsZUFBZSxHQUFHQyxrQkFBa0IsQ0FDekNULE9BRHlDLEVBRXpDLENBQUNJLFVBRndDLENBQTFDO0FBS0EsWUFBTU0sZUFBZSxHQUFHSiwwREFBUSxDQUFDMUIsUUFBUSxDQUFDNUMsRUFBRCxDQUFULENBQVIsQ0FDdkJ1RCxpQkFBaUIsQ0FBQ2lCLGVBQUQsQ0FETSxDQUF4QjtBQUdBLFlBQU1HLHFCQUFxQixHQUMxQnBCLGlCQUFpQixDQUFDaUIsZUFBRCxDQURsQjtBQUdBbkIsZ0JBQVEsQ0FBQ0gsTUFBVCxHQUNDUyxRQUFRLElBQUlDLE1BQVosR0FBcUJaLFNBQXJCLEdBQWlDMEIsZUFBZSxDQUFDeEIsTUFEbEQ7QUFFQUcsZ0JBQVEsQ0FBQ0osWUFBVCxHQUF3QlksT0FBTyxHQUFHYixTQUFILEdBQWV3QixlQUE5Qzs7QUFFQSxZQUFJLENBQUNiLFFBQUwsRUFBZTtBQUNkZ0IsK0JBQXFCLENBQUM1QixZQUF0QixHQUFxQy9DLEVBQXJDO0FBQ0E7O0FBRUQsWUFBSSxDQUFDNkQsT0FBRCxJQUFZUixRQUFRLENBQUNILE1BQVQsS0FBb0JxQixhQUFhLENBQUNyQixNQUFsRCxFQUEwRDtBQUN6RHdCLHlCQUFlLENBQUMzQixZQUFoQixHQUErQi9DLEVBQS9CO0FBQ0F1RSx1QkFBYSxDQUFDdEIsWUFBZCxHQUE2QmpELEVBQTdCO0FBQ0E7O0FBRUQsWUFBSSxDQUFDMkQsUUFBTCxFQUFlO0FBQ2RKLDJCQUFpQixDQUFDaUIsZUFBRCxDQUFqQixHQUFxQ0UsZUFBckM7QUFDQTtBQUNEOztBQUVELFVBQUksQ0FBQ2QsTUFBTCxFQUFhO0FBQ1osWUFBTU4sSUFBSSxHQUFHZ0IsMERBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWWQsYUFBYSxDQUFDSCxRQUFRLENBQUNILE1BQVYsQ0FBekIsQ0FBYjtBQUNBTSxxQkFBYSxDQUFDSCxRQUFRLENBQUNILE1BQVYsQ0FBYixHQUFpQ0ksSUFBSSxHQUFHLENBQXhDO0FBQ0E7O0FBRUQsVUFBSSxDQUFDSyxRQUFMLEVBQWU7QUFDZEoseUJBQWlCLENBQUNTLE9BQUQsQ0FBakIsR0FBNkJLLGFBQTdCO0FBQ0E7O0FBQ0RkLHVCQUFpQixDQUFDdkQsRUFBRCxDQUFqQixHQUF3QnFELFFBQXhCO0FBQ0E7O0FBRUQsYUFBU29CLGtCQUFULENBQTRCekUsRUFBNUIsRUFBMkM7QUFBQSxVQUFYNEUsS0FBVyx1RUFBSCxDQUFHO0FBQzFDLFVBQU1DLFNBQVMsR0FDZHRCLGlCQUFpQixDQUFDdkQsRUFBRCxDQUFqQixJQUF5QnVELGlCQUFpQixDQUFDdkQsRUFBRCxDQUFqQixDQUFzQmtELE1BRGhEOztBQUVBLFVBQUkwQixLQUFLLEdBQUcsQ0FBUixJQUFhQyxTQUFqQixFQUE0QjtBQUMzQixlQUFPSixrQkFBa0IsQ0FBQ0ksU0FBRCxFQUFZRCxLQUFLLEdBQUcsQ0FBcEIsQ0FBekI7QUFDQSxPQUZELE1BRU87QUFDTixlQUFPQyxTQUFQO0FBQ0E7QUFDRDs7QUFFRCxhQUFTQyxTQUFULFNBQTJCcEIsS0FBM0IsRUFBa0NuQixRQUFsQyxFQUE0QztBQUFBLFVBQXZCdkMsRUFBdUIsVUFBdkJBLEVBQXVCO0FBQzNDLFVBQU0yRCxRQUFRLEdBQUdELEtBQUssS0FBSyxDQUEzQjtBQUNBLFVBQU1HLE9BQU8sR0FBR0gsS0FBSyxLQUFLbkIsUUFBUSxDQUFDMUIsTUFBbkM7QUFDQSxVQUFNaUQsVUFBVSxHQUFHSixLQUFLLEdBQUcsQ0FBM0I7QUFDQSxVQUFNSyxVQUFVLEdBQUdMLEtBQW5CO0FBQ0EsVUFBTU0sT0FBTyxHQUFHTCxRQUFRLEdBQUdYLFNBQUgsR0FBZVQsUUFBUSxDQUFDdUIsVUFBRCxDQUFSLENBQXFCOUQsRUFBNUQ7QUFDQSxVQUFNaUUsT0FBTyxHQUFHSixPQUFPLEdBQUdiLFNBQUgsR0FBZVQsUUFBUSxDQUFDd0IsVUFBRCxDQUFSLENBQXFCL0QsRUFBM0Q7QUFFQSxVQUFNcUUsYUFBYSxHQUFHZCxpQkFBaUIsQ0FBQ1MsT0FBRCxDQUF2QztBQUNBLFVBQU1PLGFBQWEsR0FBR2hCLGlCQUFpQixDQUFDVSxPQUFELENBQXZDO0FBQ0EsVUFBTVosUUFBUSxHQUFHRSxpQkFBaUIsQ0FBQ3ZELEVBQUQsQ0FBbEM7QUFWMkMsVUFZbkNpRCxZQVptQyxHQVlJSSxRQVpKLENBWW5DSixZQVptQztBQUFBLFVBWXJCRixZQVpxQixHQVlJTSxRQVpKLENBWXJCTixZQVpxQjtBQUFBLFVBWVBHLE1BWk8sR0FZSUcsUUFaSixDQVlQSCxNQVpPO0FBYzNDLFVBQU15QixxQkFBcUIsR0FBR0ksa0VBQVUsQ0FBQzlCLFlBQUQsQ0FBVixHQUMzQk0saUJBQWlCLENBQUNOLFlBQUQsQ0FEVSxHQUUzQkQsU0FGSDtBQUdBLFVBQU1nQyxxQkFBcUIsR0FBR0Qsa0VBQVUsQ0FBQ2hDLFlBQUQsQ0FBVixHQUMzQlEsaUJBQWlCLENBQUNSLFlBQUQsQ0FEVSxHQUUzQkMsU0FGSDtBQUdBLFVBQU0wQixlQUFlLEdBQUdLLGtFQUFVLENBQUM3QixNQUFELENBQVYsR0FDckJLLGlCQUFpQixDQUFDTCxNQUFELENBREksR0FFckJGLFNBRkg7O0FBSUEsVUFBSStCLGtFQUFVLENBQUNKLHFCQUFELENBQWQsRUFBdUM7QUFDdENOLHFCQUFhLENBQUN0QixZQUFkLEdBQTZCQSxZQUE3QjtBQUNBOztBQUNELFVBQUlnQyxrRUFBVSxDQUFDQyxxQkFBRCxDQUFkLEVBQXVDO0FBQ3RDVCxxQkFBYSxDQUFDdEIsWUFBZCxHQUE2QkEsWUFBN0I7QUFDQTs7QUFDRCxVQUFJOEIsa0VBQVUsQ0FBQ0wsZUFBRCxDQUFWLElBQStCQSxlQUFlLENBQUN2QixLQUFoQixLQUEwQm5ELEVBQTdELEVBQWlFO0FBQ2hFMEUsdUJBQWUsQ0FBQ3ZCLEtBQWhCLEdBQXdCSixZQUF4QjtBQUNBOztBQUVELGFBQU9RLGlCQUFpQixDQUFDdkQsRUFBRCxDQUF4QjtBQUVBd0QsbUJBQWEsQ0FBQ0gsUUFBUSxDQUFDSCxNQUFWLENBQWI7QUFDQTs7QUFFRCxhQUFTckIsS0FBVCxHQUFpQjtBQUNoQixhQUFPSCxXQUFXLENBQUM7QUFDbEJnQixxQkFBYSxFQUFFO0FBQ2RXLGtCQUFRLG9CQUFPRSxpQkFBUCxDQURNO0FBRWRELGNBQUksb0JBQU9FLGFBQVA7QUFGVTtBQURHLE9BQUQsQ0FBbEI7QUFNQTs7QUFFRCxhQUFTeUIsS0FBVCxTQUFrQztBQUFBLFVBQWpCdkMsYUFBaUIsVUFBakJBLGFBQWlCO0FBQ2pDYSx1QkFBaUIsR0FBR2IsYUFBYSxDQUFDVyxRQUFsQztBQUNBRyxtQkFBYSxHQUFHZCxhQUFhLENBQUNZLElBQTlCO0FBQ0E7O0FBRUQsYUFBUzRCLGVBQVQsR0FBMkI7QUFDMUIsYUFBT3hDLGFBQVA7QUFDQTs7QUFFRCxRQUFNeUMsT0FBTyxHQUFHO0FBQ2Z0RCxXQUFLLEVBQUxBLEtBRGU7QUFFZm9ELFdBQUssRUFBTEEsS0FGZTtBQUdmeEIsZ0JBQVUsRUFBVkEsVUFIZTtBQUlmcUIsZUFBUyxFQUFUQSxTQUplO0FBS2ZJLHFCQUFlLEVBQWZBO0FBTGUsS0FBaEI7QUFRQSxXQUFPckMsTUFBTSxDQUFDQyxNQUFQLENBQWMsQ0FBQ3FDLE9BQUQsQ0FBZCxFQUF5QkEsT0FBekIsQ0FBUDtBQUNBOztBQUVELFNBQU96RCxXQUFXLENBQUMsRUFBRCxDQUFsQjtBQUNBOztBQUVNLElBQU0wRCxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBR3RCO0FBQUE7O0FBQUEsbUZBQVAsRUFBTztBQUFBLDRCQUZWQyxLQUVVO0FBQUEsTUFGVkEsS0FFVSw2QkFGRi9DLGdCQUFnQixFQUVkO0FBQUEscUNBRFZnRCxrQkFDVTtBQUFBLE1BRFZBLGtCQUNVLHNDQURXbEMsb0JBQW9CLEVBQy9COztBQUNWaUMsT0FBSyxDQUFDQyxrQkFBTixHQUEyQkEsa0JBQTNCO0FBRUFDLHVEQUFPLENBQUMsWUFBTTtBQUNiRixTQUFLLENBQUM5QyxRQUFOLENBQWV6QixHQUFmLENBQW1Cd0Usa0JBQWtCLENBQUM3QixVQUF0QztBQUNBLEdBRk0sRUFFSixDQUFDNEIsS0FBSyxDQUFDOUMsUUFBUCxDQUZJLENBQVA7QUFJQSxNQUFNaUQsT0FBTyxHQUFHQyx3REFBVSxDQUFDLFVBQUNKLEtBQUQsRUFBUUssTUFBUixFQUFtQjtBQUM3QyxRQUFJQSxNQUFNLENBQUNDLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFBQSxVQUNyQmpDLEtBRHFCLEdBQ1hnQyxNQURXLENBQ3JCaEMsS0FEcUI7QUFBQSxVQUVyQm5CLFFBRnFCLEdBRVI4QyxLQUZRLENBRXJCOUMsUUFGcUI7QUFHN0I4QyxXQUFLLENBQUM5QyxRQUFOLENBQWVQLE1BQWYsQ0FBc0IwQixLQUF0QixFQUE2QixDQUE3QjtBQUNBLDZDQUFZMkIsS0FBWjtBQUFtQjlDLGdCQUFRLEVBQVJBO0FBQW5CO0FBQ0EsS0FMRCxNQUtPLElBQUltRCxNQUFNLENBQUNDLElBQVAsS0FBZ0IsTUFBcEIsRUFBNEI7QUFBQSxVQUMxQjNGLEVBRDBCLEdBQ0MwRixNQURELENBQzFCMUYsRUFEMEI7QUFBQSwwQkFDQzBGLE1BREQsQ0FDdEJFLEtBRHNCO0FBQUEsVUFDdEJBLEtBRHNCLDhCQUNkO0FBQUEsZUFBTyxFQUFQO0FBQUEsT0FEYztBQUFBLFVBRTFCakQsT0FGMEIsR0FFSjBDLEtBRkksQ0FFMUIxQyxPQUYwQjtBQUFBLFVBRWpCSixTQUZpQixHQUVKOEMsS0FGSSxDQUVqQjlDLFFBRmlCO0FBR2xDLFVBQU1zRCxVQUFVLEdBQUdELEtBQUssQ0FBQ1AsS0FBRCxDQUF4QjtBQUVBMUMsYUFBTyxDQUFDaEMsR0FBUixDQUFZWCxFQUFaLEVBQWdCdUMsU0FBUSxDQUFDVixLQUFULEVBQWhCO0FBQ0FnQixZQUFNLENBQUNpRCxxQkFBUCxDQUE2QkQsVUFBN0IsRUFBeUMvRSxHQUF6QyxDQUE2QyxVQUFDaUYsR0FBRCxFQUFTO0FBQ3JEcEQsZUFBTyxDQUFDaEMsR0FBUixDQUFZb0YsR0FBWixFQUFpQkYsVUFBVSxDQUFDRSxHQUFELENBQTNCO0FBQ0EsT0FGRDtBQUlBLDZDQUFZVixLQUFaO0FBQW1CMUMsZUFBTyxFQUFQQTtBQUFuQjtBQUNBLEtBWE0sTUFXQSxJQUFJK0MsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLFNBQXBCLEVBQStCO0FBQUEsdUJBQ0xELE1BREssQ0FDN0IxRixFQUQ2QjtBQUFBLFVBQzdCQSxHQUQ2QiwyQkFDeEIsRUFEd0I7QUFBQSwyQkFDTDBGLE1BREssQ0FDcEJFLEtBRG9CO0FBQUEsVUFDcEJBLE1BRG9CLCtCQUNaLEVBRFk7O0FBQUEsVUFFN0JqRCxRQUY2QixHQUVqQjBDLEtBRmlCLENBRTdCMUMsT0FGNkI7O0FBSXJDQSxjQUFPLFVBQVAsQ0FBZTNDLEdBQWY7O0FBQ0E0RixZQUFLLENBQUM5RSxHQUFOLENBQVUsVUFBQ2QsRUFBRDtBQUFBLGVBQVEyQyxRQUFPLFVBQVAsQ0FBZTNDLEVBQWYsQ0FBUjtBQUFBLE9BQVY7O0FBRUEsNkNBQVlxRixLQUFaO0FBQW1CMUMsZUFBTyxFQUFQQTtBQUFuQjtBQUNBLEtBUk0sTUFRQSxJQUFJK0MsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLFlBQXBCLEVBQWtDO0FBQUEsVUFDaEMzRixJQURnQyxHQUNqQjBGLE1BRGlCLENBQ2hDMUYsRUFEZ0M7QUFBQSxVQUM1QmdHLE1BRDRCLEdBQ2pCTixNQURpQixDQUM1Qk0sTUFENEI7O0FBRXhDLFVBQU16RCxVQUFRLEdBQUd5RCxNQUFNLENBQUNYLEtBQUssQ0FBQzFDLE9BQU4sQ0FBY04sR0FBZCxDQUFrQnJDLElBQWxCLEVBQXNCNkIsS0FBdEIsRUFBRCxFQUFnQ3dELEtBQWhDLENBQXZCOztBQUNBLDZDQUFZQSxLQUFaO0FBQW1COUMsZ0JBQVEsRUFBUkE7QUFBbkI7QUFDQSxLQUpNLE1BSUEsSUFBSW1ELE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixLQUFwQixFQUEyQjtBQUFBLFVBQ3pCSyxPQUR5QixHQUNkTixNQURjLENBQ3pCTSxNQUR5QjtBQUVqQyw2Q0FBWVgsS0FBWixHQUFzQlcsT0FBTSxDQUFDWCxLQUFELENBQTVCO0FBQ0EsS0FITSxNQUdBO0FBQ04sYUFBT0EsS0FBUDtBQUNBO0FBQ0QsR0FuQ3lCLEVBbUN2QkEsS0FuQ3VCLENBQTFCO0FBcUNBLFNBQU9HLE9BQVA7QUFDQSxDQWhETTs7SUFBTUosaUI7O0FBa0RiLElBQU1hLFNBQVMsZ0JBQUdoRix3REFBVSxPQUFDLHFCQUFjQyxHQUFkO0FBQUEsTUFBTUcsSUFBTjs7QUFBQSxTQUM1QjtBQUFLLE9BQUcsRUFBRUg7QUFBVixLQUFtQkcsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUQ0QjtBQUFBLENBQUQsQ0FBNUI7TUFBTTRFLFM7QUFJUyxxRkFLVDtBQUFBOztBQUFBLDhCQUpMVCxPQUlLO0FBQUEsTUFKTEEsT0FJSywrQkFKS0osaUJBQWlCLEVBSXRCO0FBQUEsTUFITGMsU0FHSyxVQUhMQSxTQUdLO0FBQUEsTUFGTEMsS0FFSyxVQUZMQSxLQUVLO0FBQUEsTUFERjlFLElBQ0U7O0FBQ0wsTUFBTUgsR0FBRyxHQUFHZCxvREFBTSxFQUFsQjtBQUNBLE1BQU1nRyxHQUFHLEdBQUdDLGdFQUFXLENBQUNILFNBQUQsRUFBWSxTQUFaLENBQXZCOztBQUZLLDZCQUdrQkksOEVBQW1CLENBQUN0RixRQUFELENBSHJDO0FBQUE7QUFBQSxNQUdFcEIsSUFIRjtBQUFBLE1BR1EyRyxNQUhSOztBQUFBLDBHQUlxQmYsT0FKckI7QUFBQSxNQUlFSCxLQUpGO0FBQUEsTUFJU21CLFFBSlQ7O0FBQUEsa0JBS2dDQyxzREFBUSxDQUFDO0FBQzdDQyxVQUFNLEVBQUUsQ0FEcUM7QUFFN0NDLGNBQVUsRUFBRTtBQUFFeEYsZUFBUyxFQUFFOEU7QUFBYjtBQUZpQyxHQUFELENBTHhDO0FBQUEsTUFLRVcsV0FMRjtBQUFBLE1BS2VDLGFBTGY7O0FBU0wsTUFBTXRFLFFBQVEsR0FBR25DLG9EQUFNLEVBQXZCO0FBQ0EsTUFBTWtGLGtCQUFrQixHQUFHbEYsb0RBQU0sRUFBakM7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2ZrQyxZQUFRLENBQUMvQixPQUFULEdBQW1CNkUsS0FBSyxDQUFDOUMsUUFBekI7QUFDQSxHQUZRLEVBRU4sQ0FBQzhDLEtBQUssQ0FBQzlDLFFBQVAsQ0FGTSxDQUFUO0FBSUFsQyx5REFBUyxDQUFDLFlBQU07QUFDZmlGLHNCQUFrQixDQUFDOUUsT0FBbkIsR0FBNkI2RSxLQUFLLENBQUNDLGtCQUFuQztBQUNBLEdBRlEsRUFFTixDQUFDRCxLQUFLLENBQUNDLGtCQUFQLENBRk0sQ0FBVDtBQUlBakYseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSSxDQUFDYSxHQUFMLEVBQVU7QUFDVixRQUFNNEYsWUFBWSxHQUFHNUYsR0FBRyxDQUFDVixPQUF6QjtBQUNBLFFBQU11RyxTQUFTLEdBQUdELFlBQVksQ0FBQ0UscUJBQWIsRUFBbEI7QUFDQSxXQUFPQyx3REFBTSxDQUNaLFdBRFksRUFFWkgsWUFGWSxDQUFOLENBR0wsVUFBQ0ksQ0FBRCxFQUFPO0FBQUEsVUFDQUMsSUFEQSxHQUMyQkQsQ0FEM0IsQ0FDQUMsSUFEQTtBQUFBLFVBQ01DLE9BRE4sR0FDMkJGLENBRDNCLENBQ01FLE9BRE47QUFBQSxVQUNlQyxPQURmLEdBQzJCSCxDQUQzQixDQUNlRyxPQURmO0FBR1IsVUFBTUMsWUFBWSxHQUFHLENBQUNELE9BQU8sR0FBR04sU0FBUyxDQUFDUSxDQUFyQixJQUEwQmhHLFVBQS9DO0FBQ0EsVUFBTWlHLFVBQVUsR0FDZixDQUFDSCxPQUFPLEdBQUdOLFNBQVMsQ0FBQ1EsQ0FBcEIsR0FBd0JELFlBQXpCLElBQXlDL0YsVUFEMUM7QUFHQSxVQUFNa0csMEJBQTBCLEdBQy9CRCxVQUFVLEdBQUdqRyxVQUFiLEdBQTBCK0YsWUFEM0IsQ0FQUSxDQVVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBTUksRUFBRSxHQUFHTixPQUFYO0FBQUEsVUFDQ08sRUFBRSxHQUFHTixPQUROO0FBR0EsVUFBTU8sZUFBZSxHQUFHckYsUUFBUSxDQUFDL0IsT0FBVCxDQUFpQnFCLEtBQWpCLEVBQXhCO0FBQ0EsVUFBTWdHLHlCQUF5QixHQUFHdkMsa0JBQWtCLENBQUM5RSxPQUFuQixDQUEyQnFCLEtBQTNCLEVBQWxDO0FBQ0EsVUFBTWlHLFlBQVksR0FBR0YsZUFBZSxDQUFDakcsSUFBaEIsQ0FBcUI2RixVQUFyQixDQUFyQjtBQUVBLFVBQU1PLFVBQVUsR0FBR2Qsd0RBQU0sQ0FBQyxXQUFELENBQU4sQ0FBb0Isa0JBQTBCO0FBQUEsWUFBdkJHLE9BQXVCLFVBQXZCQSxPQUF1QjtBQUFBLFlBQWRDLE9BQWMsVUFBZEEsT0FBYztBQUNoRSxZQUFJVyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFsQixDQURnRSxDQUVoRTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFJQyxvQkFBb0IsR0FBR0YsSUFBSSxDQUFDQyxHQUFMLEVBQTNCO0FBQ0ExQixnQkFBUSxDQUFDO0FBQ1JiLGNBQUksRUFBRSxLQURFO0FBRVJLLGdCQUFNLEVBQUU7QUFBQSxtQkFBTyxDQUNkO0FBQ0E7QUFGYyxhQUFQO0FBQUE7QUFGQSxTQUFELENBQVI7QUFPQW9DLGVBQU8sQ0FBQ0MsR0FBUixDQUNDSixJQUFJLENBQUNDLEdBQUwsS0FBYUYsV0FEZCxFQUVDQyxJQUFJLENBQUNDLEdBQUwsS0FBYUMsb0JBRmQ7QUFJQSxPQS9Ga0IsQ0FBbkI7QUFpR0EsVUFBTUcsUUFBUSxHQUFHckIsd0RBQU0sQ0FBQyxTQUFELENBQU4sQ0FBa0IsWUFBTTtBQUN4Q2Msa0JBQVU7QUFDVk8sZ0JBQVE7QUFDUixPQUhnQixDQUFqQjtBQUlBLEtBL0lNLENBQVA7QUFnSkEsR0FwSlEsRUFvSk4sQ0FBQ3BILEdBQUcsQ0FBQ1YsT0FBTCxDQXBKTSxDQUFUO0FBc0pBLFNBQ0M7QUFBSyxhQUFTLEVBQUU0RixHQUFoQjtBQUFxQixPQUFHLEVBQUVsRixHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxhQUFTLEVBQUMsT0FEWDtBQUVDLFNBQUssRUFBRTtBQUFFUixTQUFHLEVBQUVrRyxXQUFXLENBQUNGLE1BQVosR0FBcUI7QUFBNUIsS0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUMsTUFBQyxJQUFELHlGQUFVRSxXQUFXLENBQUNELFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRCxDQURELENBREQsRUFTQztBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRXRCLEtBQUssQ0FBQzlDLFFBQU4sQ0FBZXpCLEdBQWYsQ0FBbUIsVUFBQ1IsT0FBRDtBQUFBLFdBQ25CLE1BQUMsSUFBRDtBQUFNLFNBQUcsRUFBRUEsT0FBTyxDQUFDTjtBQUFuQixPQUEyQnVJLFlBQVksQ0FBQ2pJLE9BQUQsRUFBVStFLEtBQVYsQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURtQjtBQUFBLEdBQW5CLENBREYsQ0FURCxDQUREO0FBaUJBLENBaE1EO0FBQUEsVUFDV0QsaUJBRFgsRUFRd0JrQixzRUFSeEI7QUFBQTs7QUFrTUEsU0FBU2lDLFlBQVQsQ0FBc0JqSSxPQUF0QixFQUErQitFLEtBQS9CLEVBQXNDO0FBQ3JDLE1BQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNoRCxPQUFELFVBQTJCO0FBQUE7QUFBQSxRQUFoQmdHLEdBQWdCO0FBQUEsUUFBWEMsS0FBVzs7QUFDMUMsUUFBSXBELEtBQUssQ0FBQzdDLE9BQU4sQ0FBY2tHLEdBQWQsQ0FBa0JGLEdBQWxCLENBQUosRUFBNEI7QUFDM0JoRyxhQUFPLENBQUNnRyxHQUFELENBQVAsR0FBZUMsS0FBZjtBQUNBOztBQUNELFdBQU9qRyxPQUFQO0FBQ0EsR0FMRDs7QUFNQSxNQUFNbUcsYUFBYSxHQUFHOUYsTUFBTSxDQUFDK0YsT0FBUCxDQUFldEksT0FBZixFQUF3QnVJLE1BQXhCLENBQStCckQsT0FBL0IsRUFBd0MsRUFBeEMsQ0FBdEI7QUFDQSxNQUFNc0QsYUFBYSxHQUFHeEksT0FBTyxDQUFDYyxLQUE5QjtBQUNBLE1BQU0ySCxVQUFVLEdBQUc7QUFDbEIvSSxNQUFFLEVBQUVNLE9BQU8sQ0FBQ04sRUFETTtBQUVsQkMsU0FBSyxFQUFFSyxPQUFPLENBQUNMLEtBRkc7QUFHbEIrSSxjQUFVLEVBQUUxSSxPQUFPLENBQUMwSTtBQUhGLEdBQW5COztBQU1BLE1BQUksZUFBZTFJLE9BQW5CLEVBQTRCO0FBQzNCeUksY0FBVSxDQUFDNUgsU0FBWCxHQUF1QmIsT0FBTyxDQUFDMkksU0FBL0I7QUFDQSxHQUZELE1BRU87QUFDTkYsY0FBVSxDQUFDNUgsU0FBWCxHQUF1QmtFLEtBQUssQ0FBQ2xFLFNBQTdCO0FBQ0E7O0FBRUQ7QUFDQ0MsU0FBSyxrQ0FBTzBILGFBQVAsR0FBeUJILGFBQXpCO0FBRE4sS0FFSUksVUFGSjtBQUlBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI2NGNjNTc3NmFiMWQxYTgwODE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqb2luQnlTcGFjZSwgaW5Cb3VuZCwgaW5BcnJheUJvdW5kIH0gZnJvbSBcIkAvdXRpbHMvYXJyYXlcIjtcclxuaW1wb3J0IHsgZmFsbGJhY2ssIGxpc3RlbiB9IGZyb20gXCJAL3V0aWxzL2ZuXCI7XHJcbmltcG9ydCB7XHJcblx0dXNlUmVmLFxyXG5cdHVzZUVmZmVjdCxcclxuXHRmb3J3YXJkUmVmLFxyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZVJlZHVjZXIsXHJcblx0dXNlQ2FsbGJhY2ssXHJcblx0dXNlTWVtbyxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9PdXRsaW5lLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VDb21wb25lbnRJbmRleGVyIH0gZnJvbSBcIkAvdXRpbHMvdXNlcy9tYXBwZXJcIjtcclxuaW1wb3J0IHsgVGltaW5nSW5kZXggfSBmcm9tIFwiQC91dGlscy9pbmRpY2VzL3RpbWluZ1wiO1xyXG5pbXBvcnQgeyBpc0VtcHR5LCBpc05vdEVtcHR5IH0gZnJvbSBcIkAvdXRpbHMvYXNzZXJ0c1wiO1xyXG5pbXBvcnQgbmV4dCBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIkAvdXRpbHMvYXJyYXlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBub2RlX21hcCA9IHt9O1xyXG5leHBvcnQgY29uc3QgZG9tX3BheWxvYWRfbWFwID0gbmV3IE1hcCgpO1xyXG5cclxuY29uc3QgTm9kZSA9ICh7IGRhdGEsIHRvcF9wYXlsb2FkIH0pID0+IHtcclxuXHRjb25zdCB7IG5hbWUgPSBcIlwiLCBpZCwgbGV2ZWwsIGNoaWxkcmVuID0gW10gfSA9IGRhdGE7XHJcblx0Y29uc3QgdG9wX25vZGUgPSB1c2VSZWYoKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgcGF5bG9hZCA9IHtcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0aWQsXHJcblx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRkb206IHRvcF9ub2RlLmN1cnJlbnQsXHJcblx0XHRcdHJhdzogZGF0YSxcclxuXHRcdFx0dG9wOiB0b3BfcGF5bG9hZCxcclxuXHRcdH07XHJcblx0XHRub2RlX21hcFtpZF0gPSBwYXlsb2FkO1xyXG5cdFx0ZG9tX3BheWxvYWRfbWFwLnNldCh0b3Bfbm9kZS5jdXJyZW50LCBwYXlsb2FkKTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGRvbV9wYXlsb2FkX21hcC5kZWxldGUodG9wX25vZGUuY3VycmVudCk7XHJcblx0XHRcdGRlbGV0ZSBub2RlX21hcFtpZF07XHJcblx0XHR9O1xyXG5cdH0sIFt0b3Bfbm9kZS5jdXJyZW50LCBkYXRhXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgcmVmPXt0b3Bfbm9kZX0gY2xhc3NOYW1lPVwibm9kZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IGAke2xldmVsICogMjB9cHhgIH19PlxyXG5cdFx0XHRcdHtuYW1lfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0e2NoaWxkcmVuLmxlbmd0aCA+IDAgJiYgKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj5cclxuXHRcdFx0XHRcdHtjaGlsZHJlbi5tYXAoKGRhdGEpID0+IChcclxuXHRcdFx0XHRcdFx0PE5vZGVcclxuXHRcdFx0XHRcdFx0XHRrZXk9e2RhdGEuaWR9XHJcblx0XHRcdFx0XHRcdFx0ZGF0YT17ZGF0YX1cclxuXHRcdFx0XHRcdFx0XHR0b3BfcGF5bG9hZD17dG9wX3BheWxvYWR9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGF5bG9hZCgpIHt9XHJcblxyXG5jb25zdCBGbGF0Tm9kZSA9IGZvcndhcmRSZWYoXHJcblx0KHsgaXRlbV90eXBlLCBsZXZlbCA9IDAsIHByb3BzID0ge30sIC4uLnJlc3QgfSA9IHt9LCByZWYpID0+IHtcclxuXHRcdGNvbnN0IEl0ZW0gPSBpdGVtX3R5cGU7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vZGVcIiByZWY9e3JlZn0+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGl0bGVcIlxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ0xlZnQ6IGAke2xldmVsICogMjB9cHhgIH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEl0ZW0gey4uLnByb3BzfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG4pO1xyXG5cclxuY29uc3QgbGluZUhlaWdodCA9IDIwO1xyXG5cclxuZnVuY3Rpb24gQXJyYXlNYXBwZXIoYXJyYXkpIHtcclxuXHRmdW5jdGlvbiBjb25zdHJ1Y3Rvcih7IGxpc3QsIG1hcCA9IHt9IH0pIHtcclxuXHRcdGxpc3QubWFwKChpdGVtKSA9PiAobWFwW2l0ZW0uaWRdID0gaXRlbSkpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNsb25lKCkge1xyXG5cdFx0XHRyZXR1cm4gY29uc3RydWN0b3IoeyBsaXN0OiBsaXN0LnNsaWNlKCksIG1hcDoge30gfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcmVtb3ZlKGlkKSB7XHJcblx0XHRcdGRlbGV0ZSBtYXBbaWRdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNwbGljZShzdGFydF9wb3NpdGlvbiwgZGVsZXRlX2NvdW50LCAuLi5hcHBlbmRfaXRlbXMpIHtcclxuXHRcdFx0Y29uc3QgYmVfY3VsbGVkID0gbGlzdC5zcGxpY2UoXHJcblx0XHRcdFx0c3RhcnRfcG9zaXRpb24sXHJcblx0XHRcdFx0ZGVsZXRlX2NvdW50LFxyXG5cdFx0XHRcdC4uLmFwcGVuZF9pdGVtc1xyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0YmVfY3VsbGVkLm1hcCgoeyBpZCB9KSA9PiByZW1vdmUoaWQpKTtcclxuXHJcblx0XHRcdHJldHVybiBiZV9jdWxsZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gbWFwKC4uLmFyZ3MpIHtcclxuXHRcdFx0cmV0dXJuIGxpc3QubWFwKC4uLmFyZ3MpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldChpZCkge1xyXG5cdFx0XHRyZXR1cm4gbWFwW2lkXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRnZXQsXHJcblx0XHRcdGNsb25lLFxyXG5cdFx0XHRyZW1vdmUsXHJcblx0XHRcdHNwbGljZSxcclxuXHRcdFx0bGlzdCxcclxuXHRcdFx0bWFwLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBjb25zdHJ1Y3Rvcih7IGxpc3Q6IGFycmF5IH0pO1xyXG59XHJcblxyXG4vLyB0eXBlIFBheWxvYWQgeyBpZCwgbGV2ZWwsIGNhbl9leHBhbmQsIHR5cGVfc2VsZiwgcHJvcHMgfVxyXG4vLyB0eXBlIFBheWxvYWRMaXN0IFtdUGF5bG9hZFxyXG5leHBvcnQgY29uc3QgbWFrZU91dGxpbmVTdGF0ZSA9ICh7XHJcblx0aXRlbV90eXBlID0gbnVsbCxcclxuXHRwYXlsb2FkcyA9IFtdLFxyXG5cdHJlbGF5ZWQgPSBuZXcgU2V0KFtcImlkXCIsIFwibGV2ZWxcIl0pLFxyXG59ID0ge30pID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0aGllcmFyY2h5X21hcDoge30sXHJcblx0XHRpdGVtX3R5cGUsXHJcblx0XHRwYXlsb2FkczogQXJyYXlNYXBwZXIocGF5bG9hZHMpLFxyXG5cdFx0cmVsYXllZCxcclxuXHRcdHJlY29yZHM6IG5ldyBNYXAoKSxcclxuXHR9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gUmVsYXRpb24oaWQsIHsgLi4ucHJvcHMgfSkge1xyXG5cdHJldHVybiBPYmplY3QuYXNzaWduKFxyXG5cdFx0e1xyXG5cdFx0XHRpZCxcclxuXHRcdFx0bmV4dF9zaWJsaW5nOiB1bmRlZmluZWQsXHJcblx0XHRcdHByZXZfc2libGluZzogdW5kZWZpbmVkLFxyXG5cdFx0XHRwYXJlbnQ6IHVuZGVmaW5lZCxcclxuXHRcdFx0Y2hpbGQ6IHVuZGVmaW5lZCxcclxuXHRcdH0sXHJcblx0XHRwcm9wc1xyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbkhpZXJhcmNoeUFuYWx5emVyKHt9ID0ge30pIHtcclxuXHRmdW5jdGlvbiBjb25zdHJ1Y3Rvcih7IGhpZXJhcmNoeV9tYXAgPSB7IHJlbGF0aW9uOiB7fSwgc2l6ZToge30gfSB9ID0ge30pIHtcclxuXHRcdGxldCB7XHJcblx0XHRcdHJlbGF0aW9uOiBsaXZlX3JlbGF0aW9uX21hcCxcclxuXHRcdFx0c2l6ZTogbGl2ZV9zaXplX21hcCxcclxuXHRcdH0gPSBoaWVyYXJjaHlfbWFwO1xyXG5cclxuXHRcdC8vIGNvbnNvbGUubG9nKGxpdmVfc2l6ZV9tYXApO1xyXG5cclxuXHRcdC8vIHR5cGUgSGllcmFyY2h5Tm9kZSBQYXlsb2FkXHJcblx0XHRmdW5jdGlvbiBvbkluc2VydGVkKHsgbGV2ZWwsIGlkIH0sIGluZGV4LCBwYXlsb2Fkcykge1xyXG5cdFx0XHRjb25zdCBpc19maXJzdCA9IGluZGV4ID09PSAwO1xyXG5cdFx0XHRjb25zdCBpc190b3AgPSBsZXZlbCA9PT0gMDtcclxuXHRcdFx0Y29uc3QgaXNfbGFzdCA9IGluZGV4ID09PSBwYXlsb2Fkcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRjb25zdCBwcmV2X2luZGV4ID0gaW5kZXggLSAxO1xyXG5cdFx0XHRjb25zdCBuZXh0X2luZGV4ID0gaW5kZXggKyAxO1xyXG5cdFx0XHRjb25zdCBwcmV2X2lkID0gaXNfZmlyc3QgPyB1bmRlZmluZWQgOiBwYXlsb2Fkc1twcmV2X2luZGV4XS5pZDtcclxuXHRcdFx0Y29uc3QgbmV4dF9pZCA9IGlzX2xhc3QgPyB1bmRlZmluZWQgOiBwYXlsb2Fkc1tuZXh0X2luZGV4XS5pZDtcclxuXHRcdFx0Y29uc3QgcHJldl9wYXlsb2FkID0gcGF5bG9hZHNbcHJldl9pbmRleF07XHJcblx0XHRcdGNvbnN0IHByZXZfbGV2ZWwgPSAhaXNfZmlyc3QgJiYgcHJldl9wYXlsb2FkLmxldmVsO1xyXG5cdFx0XHRjb25zdCBkaWZmX2xldmVsID0gIWlzX2ZpcnN0ICYmIGxldmVsIC0gcHJldl9sZXZlbDtcclxuXHJcblx0XHRcdGNvbnN0IHByZXZfcmVsYXRpb24gPSBmYWxsYmFjayhSZWxhdGlvbihpZCkpKFxyXG5cdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfaWRdXHJcblx0XHRcdCk7XHJcblx0XHRcdGNvbnN0IG5leHRfcmVsYXRpb24gPSBmYWxsYmFjayhSZWxhdGlvbihpZCkpKFxyXG5cdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW25leHRfaWRdXHJcblx0XHRcdCk7XHJcblx0XHRcdGNvbnN0IHJlbGF0aW9uID0gZmFsbGJhY2soUmVsYXRpb24oaWQpKShsaXZlX3JlbGF0aW9uX21hcFtpZF0pO1xyXG5cclxuXHRcdFx0aWYgKGRpZmZfbGV2ZWwgPiAwKSB7XHJcblx0XHRcdFx0cHJldl9yZWxhdGlvbi5jaGlsZCA9IGlkO1xyXG5cdFx0XHRcdHJlbGF0aW9uLnBhcmVudCA9IGlzX2ZpcnN0IHx8IGlzX3RvcCA/IHVuZGVmaW5lZCA6IHByZXZfaWQ7XHJcblxyXG5cdFx0XHRcdGlmICghaXNfbGFzdCAmJiByZWxhdGlvbi5wYXJlbnQgPT09IG5leHRfcmVsYXRpb24ucGFyZW50KSB7XHJcblx0XHRcdFx0XHRuZXh0X3JlbGF0aW9uLnByZXZfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChkaWZmX2xldmVsID09PSAwKSB7XHJcblx0XHRcdFx0cmVsYXRpb24ucHJldl9zaWJsaW5nID0gcHJldl9pZDtcclxuXHRcdFx0XHRyZWxhdGlvbi5wYXJlbnQgPVxyXG5cdFx0XHRcdFx0aXNfZmlyc3QgfHwgaXNfdG9wID8gdW5kZWZpbmVkIDogcHJldl9yZWxhdGlvbi5wYXJlbnQ7XHJcblx0XHRcdFx0cHJldl9yZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBpZDtcclxuXHJcblx0XHRcdFx0aWYgKCFpc19sYXN0ICYmIG5leHRfcmVsYXRpb24ucGFyZW50ID09PSByZWxhdGlvbi5wYXJlbnQpIHtcclxuXHRcdFx0XHRcdHJlbGF0aW9uLm5leHRfc2libGluZyA9IG5leHRfaWQ7XHJcblx0XHRcdFx0XHRuZXh0X3JlbGF0aW9uLnByZXZfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBwcmV2X3NpYmxpbmdfaWQgPSBnZXRSZWN1cnNpdmVQYXJlbnQoXHJcblx0XHRcdFx0XHRwcmV2X2lkLFxyXG5cdFx0XHRcdFx0LWRpZmZfbGV2ZWxcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBwYXJlbnRfcmVsYXRpb24gPSBmYWxsYmFjayhSZWxhdGlvbihpZCkpKFxyXG5cdFx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9zaWJsaW5nX2lkXVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y29uc3QgcHJldl9zaWJsaW5nX3JlbGF0aW9uID1cclxuXHRcdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfc2libGluZ19pZF07XHJcblxyXG5cdFx0XHRcdHJlbGF0aW9uLnBhcmVudCA9XHJcblx0XHRcdFx0XHRpc19maXJzdCB8fCBpc190b3AgPyB1bmRlZmluZWQgOiBwYXJlbnRfcmVsYXRpb24ucGFyZW50O1xyXG5cdFx0XHRcdHJlbGF0aW9uLnByZXZfc2libGluZyA9IGlzX2xhc3QgPyB1bmRlZmluZWQgOiBwcmV2X3NpYmxpbmdfaWQ7XHJcblxyXG5cdFx0XHRcdGlmICghaXNfZmlyc3QpIHtcclxuXHRcdFx0XHRcdHByZXZfc2libGluZ19yZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICghaXNfbGFzdCAmJiByZWxhdGlvbi5wYXJlbnQgPT09IG5leHRfcmVsYXRpb24ucGFyZW50KSB7XHJcblx0XHRcdFx0XHRwYXJlbnRfcmVsYXRpb24ubmV4dF9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0XHRuZXh0X3JlbGF0aW9uLnByZXZfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCFpc19maXJzdCkge1xyXG5cdFx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9zaWJsaW5nX2lkXSA9IHBhcmVudF9yZWxhdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghaXNfdG9wKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2l6ZSA9IGZhbGxiYWNrKDApKGxpdmVfc2l6ZV9tYXBbcmVsYXRpb24ucGFyZW50XSk7XHJcblx0XHRcdFx0bGl2ZV9zaXplX21hcFtyZWxhdGlvbi5wYXJlbnRdID0gc2l6ZSArIDE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghaXNfZmlyc3QpIHtcclxuXHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X2lkXSA9IHByZXZfcmVsYXRpb247XHJcblx0XHRcdH1cclxuXHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbaWRdID0gcmVsYXRpb247XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0UmVjdXJzaXZlUGFyZW50KGlkLCBjb3VudCA9IDApIHtcclxuXHRcdFx0Y29uc3QgcGFyZW50X2lkID1cclxuXHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtpZF0gJiYgbGl2ZV9yZWxhdGlvbl9tYXBbaWRdLnBhcmVudDtcclxuXHRcdFx0aWYgKGNvdW50ID4gMSAmJiBwYXJlbnRfaWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZ2V0UmVjdXJzaXZlUGFyZW50KHBhcmVudF9pZCwgY291bnQgLSAxKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gcGFyZW50X2lkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gb25SZW1vdmVkKHsgaWQgfSwgaW5kZXgsIHBheWxvYWRzKSB7XHJcblx0XHRcdGNvbnN0IGlzX2ZpcnN0ID0gaW5kZXggPT09IDA7XHJcblx0XHRcdGNvbnN0IGlzX2xhc3QgPSBpbmRleCA9PT0gcGF5bG9hZHMubGVuZ3RoO1xyXG5cdFx0XHRjb25zdCBwcmV2X2luZGV4ID0gaW5kZXggLSAxO1xyXG5cdFx0XHRjb25zdCBuZXh0X2luZGV4ID0gaW5kZXg7XHJcblx0XHRcdGNvbnN0IHByZXZfaWQgPSBpc19maXJzdCA/IHVuZGVmaW5lZCA6IHBheWxvYWRzW3ByZXZfaW5kZXhdLmlkO1xyXG5cdFx0XHRjb25zdCBuZXh0X2lkID0gaXNfbGFzdCA/IHVuZGVmaW5lZCA6IHBheWxvYWRzW25leHRfaW5kZXhdLmlkO1xyXG5cclxuXHRcdFx0Y29uc3QgcHJldl9yZWxhdGlvbiA9IGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfaWRdO1xyXG5cdFx0XHRjb25zdCBuZXh0X3JlbGF0aW9uID0gbGl2ZV9yZWxhdGlvbl9tYXBbbmV4dF9pZF07XHJcblx0XHRcdGNvbnN0IHJlbGF0aW9uID0gbGl2ZV9yZWxhdGlvbl9tYXBbaWRdO1xyXG5cclxuXHRcdFx0Y29uc3QgeyBwcmV2X3NpYmxpbmcsIG5leHRfc2libGluZywgcGFyZW50IH0gPSByZWxhdGlvbjtcclxuXHJcblx0XHRcdGNvbnN0IHByZXZfc2libGluZ19yZWxhdGlvbiA9IGlzTm90RW1wdHkocHJldl9zaWJsaW5nKVxyXG5cdFx0XHRcdD8gbGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9zaWJsaW5nXVxyXG5cdFx0XHRcdDogdW5kZWZpbmVkO1xyXG5cdFx0XHRjb25zdCBuZXh0X3NpYmxpbmdfcmVsYXRpb24gPSBpc05vdEVtcHR5KG5leHRfc2libGluZylcclxuXHRcdFx0XHQ/IGxpdmVfcmVsYXRpb25fbWFwW25leHRfc2libGluZ11cclxuXHRcdFx0XHQ6IHVuZGVmaW5lZDtcclxuXHRcdFx0Y29uc3QgcGFyZW50X3JlbGF0aW9uID0gaXNOb3RFbXB0eShwYXJlbnQpXHJcblx0XHRcdFx0PyBsaXZlX3JlbGF0aW9uX21hcFtwYXJlbnRdXHJcblx0XHRcdFx0OiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHRpZiAoaXNOb3RFbXB0eShwcmV2X3NpYmxpbmdfcmVsYXRpb24pKSB7XHJcblx0XHRcdFx0cHJldl9yZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBuZXh0X3NpYmxpbmc7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGlzTm90RW1wdHkobmV4dF9zaWJsaW5nX3JlbGF0aW9uKSkge1xyXG5cdFx0XHRcdG5leHRfcmVsYXRpb24ucHJldl9zaWJsaW5nID0gcHJldl9zaWJsaW5nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChpc05vdEVtcHR5KHBhcmVudF9yZWxhdGlvbikgJiYgcGFyZW50X3JlbGF0aW9uLmNoaWxkID09PSBpZCkge1xyXG5cdFx0XHRcdHBhcmVudF9yZWxhdGlvbi5jaGlsZCA9IG5leHRfc2libGluZztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZGVsZXRlIGxpdmVfcmVsYXRpb25fbWFwW2lkXTtcclxuXHJcblx0XHRcdGxpdmVfc2l6ZV9tYXBbcmVsYXRpb24ucGFyZW50XS0tO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNsb25lKCkge1xyXG5cdFx0XHRyZXR1cm4gY29uc3RydWN0b3Ioe1xyXG5cdFx0XHRcdGhpZXJhcmNoeV9tYXA6IHtcclxuXHRcdFx0XHRcdHJlbGF0aW9uOiB7IC4uLmxpdmVfcmVsYXRpb25fbWFwIH0sXHJcblx0XHRcdFx0XHRzaXplOiB7IC4uLmxpdmVfc2l6ZV9tYXAgfSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBhcHBseSh7IGhpZXJhcmNoeV9tYXAgfSkge1xyXG5cdFx0XHRsaXZlX3JlbGF0aW9uX21hcCA9IGhpZXJhcmNoeV9tYXAucmVsYXRpb247XHJcblx0XHRcdGxpdmVfc2l6ZV9tYXAgPSBoaWVyYXJjaHlfbWFwLnNpemU7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0SGllcmFyY2h5TWFwKCkge1xyXG5cdFx0XHRyZXR1cm4gaGllcmFyY2h5X21hcDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBleHBvcnRzID0ge1xyXG5cdFx0XHRjbG9uZSxcclxuXHRcdFx0YXBwbHksXHJcblx0XHRcdG9uSW5zZXJ0ZWQsXHJcblx0XHRcdG9uUmVtb3ZlZCxcclxuXHRcdFx0Z2V0SGllcmFyY2h5TWFwLFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihbZXhwb3J0c10sIGV4cG9ydHMpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNvbnN0cnVjdG9yKHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU91dGxpbmVSZWR1Y2VyID0gKHtcclxuXHRzdGF0ZSA9IG1ha2VPdXRsaW5lU3RhdGUoKSxcclxuXHRoaWVyYXJjaHlfYW5hbHl6ZXIgPSBnZW5IaWVyYXJjaHlBbmFseXplcigpLFxyXG59ID0ge30pID0+IHtcclxuXHRzdGF0ZS5oaWVyYXJjaHlfYW5hbHl6ZXIgPSBoaWVyYXJjaHlfYW5hbHl6ZXI7XHJcblxyXG5cdHVzZU1lbW8oKCkgPT4ge1xyXG5cdFx0c3RhdGUucGF5bG9hZHMubWFwKGhpZXJhcmNoeV9hbmFseXplci5vbkluc2VydGVkKTtcclxuXHR9LCBbc3RhdGUucGF5bG9hZHNdKTtcclxuXHJcblx0Y29uc3QgcmVkdWNlciA9IHVzZVJlZHVjZXIoKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRcdGlmIChhY3Rpb24udHlwZSA9PT0gXCJkZWxldGVcIikge1xyXG5cdFx0XHRjb25zdCB7IGluZGV4IH0gPSBhY3Rpb247XHJcblx0XHRcdGNvbnN0IHsgcGF5bG9hZHMgfSA9IHN0YXRlO1xyXG5cdFx0XHRzdGF0ZS5wYXlsb2Fkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcGF5bG9hZHMgfTtcclxuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFwic2F2ZVwiKSB7XHJcblx0XHRcdGNvbnN0IHsgaWQsIGV4dHJhID0gKCkgPT4gKHt9KSB9ID0gYWN0aW9uO1xyXG5cdFx0XHRjb25zdCB7IHJlY29yZHMsIHBheWxvYWRzIH0gPSBzdGF0ZTtcclxuXHRcdFx0Y29uc3QgZXh0cmFfZGF0YSA9IGV4dHJhKHN0YXRlKTtcclxuXHJcblx0XHRcdHJlY29yZHMuc2V0KGlkLCBwYXlsb2Fkcy5jbG9uZSgpKTtcclxuXHRcdFx0T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhleHRyYV9kYXRhKS5tYXAoKHN5bSkgPT4ge1xyXG5cdFx0XHRcdHJlY29yZHMuc2V0KHN5bSwgZXh0cmFfZGF0YVtzeW1dKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcmVjb3JkcyB9O1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJyZXN0b3JlXCIpIHtcclxuXHRcdFx0Y29uc3QgeyBpZCA9IFtdLCBleHRyYSA9IFtdIH0gPSBhY3Rpb247XHJcblx0XHRcdGNvbnN0IHsgcmVjb3JkcyB9ID0gc3RhdGU7XHJcblxyXG5cdFx0XHRyZWNvcmRzLmRlbGV0ZShpZCk7XHJcblx0XHRcdGV4dHJhLm1hcCgoaWQpID0+IHJlY29yZHMuZGVsZXRlKGlkKSk7XHJcblxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcmVjb3JkcyB9O1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJzZXRCYXNlZE9uXCIpIHtcclxuXHRcdFx0Y29uc3QgeyBpZCwgYWZmZWN0IH0gPSBhY3Rpb247XHJcblx0XHRcdGNvbnN0IHBheWxvYWRzID0gYWZmZWN0KHN0YXRlLnJlY29yZHMuZ2V0KGlkKS5jbG9uZSgpLCBzdGF0ZSk7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBwYXlsb2FkcyB9O1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJzZXRcIikge1xyXG5cdFx0XHRjb25zdCB7IGFmZmVjdCB9ID0gYWN0aW9uO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWZmZWN0KHN0YXRlKSB9O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH0sIHN0YXRlKTtcclxuXHJcblx0cmV0dXJuIHJlZHVjZXI7XHJcbn07XHJcblxyXG5jb25zdCBFbXB0eU5vZGUgPSBmb3J3YXJkUmVmKCh7IC4uLnJlc3QgfSwgcmVmKSA9PiAoXHJcblx0PGRpdiByZWY9e3JlZn0gey4uLnJlc3R9PjwvZGl2PlxyXG4pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7XHJcblx0cmVkdWNlciA9IHVzZU91dGxpbmVSZWR1Y2VyKCksXHJcblx0Y2xhc3NOYW1lLFxyXG5cdHN0eWxlLFxyXG5cdC4uLnJlc3RcclxufSkgPT4ge1xyXG5cdGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG5cdGNvbnN0IGNscyA9IGpvaW5CeVNwYWNlKGNsYXNzTmFtZSwgXCJPdXRsaW5lXCIpO1xyXG5cdGNvbnN0IFtOb2RlLCBtYXBwZXJdID0gdXNlQ29tcG9uZW50SW5kZXhlcihGbGF0Tm9kZSk7XHJcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSByZWR1Y2VyO1xyXG5cdGNvbnN0IFt0aHVtYl9wcm9wcywgc2V0VGh1bWJQcm9wc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRvZmZzZXQ6IDAsXHJcblx0XHRub2RlX3Byb3BzOiB7IGl0ZW1fdHlwZTogRW1wdHlOb2RlIH0sXHJcblx0fSk7XHJcblx0Y29uc3QgcGF5bG9hZHMgPSB1c2VSZWYoKTtcclxuXHRjb25zdCBoaWVyYXJjaHlfYW5hbHl6ZXIgPSB1c2VSZWYoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHBheWxvYWRzLmN1cnJlbnQgPSBzdGF0ZS5wYXlsb2FkcztcclxuXHR9LCBbc3RhdGUucGF5bG9hZHNdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGhpZXJhcmNoeV9hbmFseXplci5jdXJyZW50ID0gc3RhdGUuaGllcmFyY2h5X2FuYWx5emVyO1xyXG5cdH0sIFtzdGF0ZS5oaWVyYXJjaHlfYW5hbHl6ZXJdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghcmVmKSByZXR1cm47XHJcblx0XHRjb25zdCB0b3Bfbm9kZV9kb20gPSByZWYuY3VycmVudDtcclxuXHRcdGNvbnN0IHRvcF9ib3VuZCA9IHRvcF9ub2RlX2RvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiBsaXN0ZW4oXHJcblx0XHRcdFwibW91c2Vkb3duXCIsXHJcblx0XHRcdHRvcF9ub2RlX2RvbVxyXG5cdFx0KSgoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHBhdGgsIGNsaWVudFgsIGNsaWVudFkgfSA9IGU7XHJcblxyXG5cdFx0XHRjb25zdCBsb2NhbF9vZmZzZXQgPSAoY2xpZW50WSAtIHRvcF9ib3VuZC55KSAlIGxpbmVIZWlnaHQ7XHJcblx0XHRcdGNvbnN0IGluaXRfaW5kZXggPVxyXG5cdFx0XHRcdChjbGllbnRZIC0gdG9wX2JvdW5kLnkgLSBsb2NhbF9vZmZzZXQpIC8gbGluZUhlaWdodDtcclxuXHJcblx0XHRcdGNvbnN0IGluaXRfcGF5bG9hZF9ub2RlX3Bvc2l0aW9uID1cclxuXHRcdFx0XHRpbml0X2luZGV4ICogbGluZUhlaWdodCArIGxvY2FsX29mZnNldDtcclxuXHJcblx0XHRcdC8vIGRpc3BhdGNoKHtcclxuXHRcdFx0Ly8gXHR0eXBlOiBcInNhdmVcIixcclxuXHRcdFx0Ly8gXHRpZCxcclxuXHRcdFx0Ly8gXHRleHRyYTogKHsgcGF5bG9hZHMsIGhpZXJhcmNoeV9hbmFseXplciB9KSA9PiAoe1xyXG5cdFx0XHQvLyBcdFx0W2luaXRfcGF5bG9hZF9sZXZlbF9pZF06IHBheWxvYWRzLmxpc3RbaW5pdF9pbmRleF0ubGV2ZWwsXHJcblx0XHRcdC8vIFx0XHRbaW5pdF9oaWVyYXJjaHlfYW5hbHl6ZXJfaWRdOiBoaWVyYXJjaHlfYW5hbHl6ZXIuY2xvbmUoKSxcclxuXHRcdFx0Ly8gXHR9KSxcclxuXHRcdFx0Ly8gfSk7XHJcblxyXG5cdFx0XHQvLyBkaXNwYXRjaCh7XHJcblx0XHRcdC8vIFx0dHlwZTogXCJzZXRcIixcclxuXHRcdFx0Ly8gXHRhZmZlY3Q6ICh7IHBheWxvYWRzLCBoaWVyYXJjaHlfYW5hbHl6ZXIgfSkgPT4ge1xyXG5cdFx0XHQvLyBcdFx0Y29uc3QgW3BheWxvYWRdID0gcGF5bG9hZHMuc3BsaWNlKGluaXRfaW5kZXgsIDEpO1xyXG5cdFx0XHQvLyBcdFx0aGllcmFyY2h5X2FuYWx5emVyLm9uUmVtb3ZlZChcclxuXHRcdFx0Ly8gXHRcdFx0cGF5bG9hZCxcclxuXHRcdFx0Ly8gXHRcdFx0aW5pdF9pbmRleCxcclxuXHRcdFx0Ly8gXHRcdFx0cGF5bG9hZHMubGlzdFxyXG5cdFx0XHQvLyBcdFx0KTtcclxuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHBheWxvYWRzLCBoaWVyYXJjaHlfYW5hbHl6ZXIgfTtcclxuXHRcdFx0Ly8gXHR9LFxyXG5cdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdGNvbnN0IGl4ID0gY2xpZW50WCxcclxuXHRcdFx0XHRpeSA9IGNsaWVudFk7XHJcblxyXG5cdFx0XHRjb25zdCBwYXlsb2Fkc19sb2NrZWQgPSBwYXlsb2Fkcy5jdXJyZW50LmNsb25lKCk7XHJcblx0XHRcdGNvbnN0IGhpZXJhcmNoeV9hbmFseXplcl9sb2NrZWQgPSBoaWVyYXJjaHlfYW5hbHl6ZXIuY3VycmVudC5jbG9uZSgpO1xyXG5cdFx0XHRjb25zdCBpbml0X3BheWxvYWQgPSBwYXlsb2Fkc19sb2NrZWQubGlzdFtpbml0X2luZGV4XTtcclxuXHJcblx0XHRcdGNvbnN0IGNsZWFuX21vdmUgPSBsaXN0ZW4oXCJtb3VzZW1vdmVcIikoKHsgY2xpZW50WCwgY2xpZW50WSB9KSA9PiB7XHJcblx0XHRcdFx0bGV0IHN0YXJ0X3N0YW1wID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHQvLyBjb25zdCBwYXlsb2Fkc19saXZlID0gcGF5bG9hZHNfbG9ja2VkLmNsb25lKCk7XHJcblx0XHRcdFx0Ly8gY29uc3QgaGllcmFyY2h5X2FuYWx5emVyX2xpdmUgPSBoaWVyYXJjaHlfYW5hbHl6ZXJfbG9ja2VkLmNsb25lKCk7XHJcblx0XHRcdFx0Ly8gY29uc3QgaGllcmFyY2h5X21hcCA9IGhpZXJhcmNoeV9hbmFseXplcl9saXZlLmdldEhpZXJhcmNoeU1hcCgpO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBsb2NhbF9vZmZzZXQgPSAoY2xpZW50WSAtIHRvcF9ib3VuZC55KSAlIGxpbmVIZWlnaHQ7XHJcblx0XHRcdFx0Ly8gY29uc3QgbGl2ZV9pbmRleCA9XHJcblx0XHRcdFx0Ly8gXHQoY2xpZW50WSAtIHRvcF9ib3VuZC55IC0gbG9jYWxfb2Zmc2V0KSAvIGxpbmVIZWlnaHQ7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfaW5kZXggPSBsaXZlX2luZGV4IC0gMTtcclxuXHRcdFx0XHQvLyBjb25zdCBuZXh0X2luZGV4ID0gbGl2ZV9pbmRleCArIDE7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHByZXZfaW5kZXgsIG5leHRfaW5kZXgpO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBpc19maXJzdCA9IGxpdmVfaW5kZXggPT09IDA7XHJcblx0XHRcdFx0Ly8gY29uc3QgaXNfbGFzdCA9IGxpdmVfaW5kZXggPT09IHBheWxvYWRzX2xpdmUubGVuZ3RoIC0gMTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgaW5pdF9yZWxhdGlvbiA9IGhpZXJhcmNoeV9tYXAucmVsYXRpb25baW5pdF9wYXlsb2FkLmlkXTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9wYXlsb2FkID0gcGF5bG9hZHNfbGl2ZS5saXN0W3ByZXZfaW5kZXhdO1xyXG5cdFx0XHRcdC8vIGNvbnN0IG5leHRfcGF5bG9hZCA9IHBheWxvYWRzX2xpdmUubGlzdFtuZXh0X2luZGV4XTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9yZWxhdGlvbiA9IGhpZXJhcmNoeV9tYXAucmVsYXRpb25bcHJldl9wYXlsb2FkLmlkXTtcclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X2xldmVsID0gcHJldl9wYXlsb2FkLmxldmVsO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X3BhcmVudF9wYXlsb2FkID0gcGF5bG9hZHNfbGl2ZS5nZXQoXHJcblx0XHRcdFx0Ly8gXHRwcmV2X3JlbGF0aW9uLnBhcmVudFxyXG5cdFx0XHRcdC8vICk7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfaXNfcGFyZW50ID0gcHJldl9wYXlsb2FkLmlkIGluIGhpZXJhcmNoeV9tYXAuc2l6ZTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgaW5pdF9sZXZlbCA9IGluaXRfcGF5bG9hZC5sZXZlbDtcclxuXHRcdFx0XHQvLyBjb25zdCBtYXliZV9sZXZlbCA9XHJcblx0XHRcdFx0Ly8gXHQocHJldl9pc19wYXJlbnRcclxuXHRcdFx0XHQvLyBcdFx0PyBwcmV2X3BheWxvYWQubGV2ZWxcclxuXHRcdFx0XHQvLyBcdFx0OiBwcmV2X3BhcmVudF9wYXlsb2FkLmxldmVsKSArIDE7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHggPSBjbGllbnRYIC0gaXg7XHJcblx0XHRcdFx0Ly8gY29uc3Qgc2hvdWxkX2xldmVsID0gaW5pdF9sZXZlbCArIHggLyAyMDtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3Qgb2Zmc2V0ID0gaW5pdF9wYXlsb2FkX25vZGVfcG9zaXRpb24gKyBjbGllbnRZIC0gaXk7XHJcblxyXG5cdFx0XHRcdC8vIHNldFRodW1iUHJvcHMoe1xyXG5cdFx0XHRcdC8vIFx0bm9kZV9wcm9wczogZ2V0Tm9kZVByb3BzKFxyXG5cdFx0XHRcdC8vIFx0XHR7IC4uLmluaXRfcGF5bG9hZCwgbGV2ZWw6IHNob3VsZF9sZXZlbCB9LFxyXG5cdFx0XHRcdC8vIFx0XHRzdGF0ZVxyXG5cdFx0XHRcdC8vIFx0KSxcclxuXHRcdFx0XHQvLyBcdG9mZnNldCxcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHQvLyBzZXRUaHVtYlByb3BzKHtcclxuXHRcdFx0XHQvLyBcdG5vZGVfcHJvcHM6IGdldE5vZGVQcm9wcyhcclxuXHRcdFx0XHQvLyBcdFx0eyAuLi5pbml0X3BheWxvYWQsIGxldmVsOiBjbGllbnRYIC8gMjAgfSxcclxuXHRcdFx0XHQvLyBcdFx0c3RhdGVcclxuXHRcdFx0XHQvLyBcdCksXHJcblx0XHRcdFx0Ly8gXHRvZmZzZXQsXHJcblx0XHRcdFx0Ly8gfSk7XHJcblxyXG5cdFx0XHRcdC8vIGlmIChcclxuXHRcdFx0XHQvLyBcdGlzRW1wdHkocHJldl9yZWxhdGlvbi5uZXh0X3NpYmxpbmcpICYmXHJcblx0XHRcdFx0Ly8gXHQhcHJldl9pc19wYXJlbnRcclxuXHRcdFx0XHQvLyApIHtcclxuXHRcdFx0XHQvLyBcdGlmIChzaG91bGRfbGV2ZWwgPCBtYXliZV9sZXZlbCkge1xyXG5cdFx0XHRcdC8vIFx0XHRpbml0X3BheWxvYWQubGV2ZWwgPSBzaG91bGRfbGV2ZWw7XHJcblx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0Ly8gfSBlbHNlIHtcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0Ly8gaW5pdF9wYXlsb2FkLmxldmVsID0gbWF5YmVfbGV2ZWw7XHJcblxyXG5cdFx0XHRcdC8vIHBheWxvYWRzX2xpdmUuc3BsaWNlKGluaXRfaW5kZXgsIDEpO1xyXG5cdFx0XHRcdC8vIGhpZXJhcmNoeV9hbmFseXplcl9saXZlLm9uUmVtb3ZlZChcclxuXHRcdFx0XHQvLyBcdGluaXRfcGF5bG9hZCxcclxuXHRcdFx0XHQvLyBcdGluaXRfaW5kZXgsXHJcblx0XHRcdFx0Ly8gXHRwYXlsb2Fkc19saXZlLmxpc3RcclxuXHRcdFx0XHQvLyApO1xyXG5cclxuXHRcdFx0XHQvLyBwYXlsb2Fkc19saXZlLnNwbGljZShsaXZlX2luZGV4ID4+IDAsIDAsIGluaXRfcGF5bG9hZCk7XHJcblx0XHRcdFx0Ly8gaGllcmFyY2h5X2FuYWx5emVyX2xpdmUub25JbnNlcnRlZChcclxuXHRcdFx0XHQvLyBcdGluaXRfcGF5bG9hZCxcclxuXHRcdFx0XHQvLyBcdGxpdmVfaW5kZXggPj4gMCxcclxuXHRcdFx0XHQvLyBcdHBheWxvYWRzX2xpdmUubGlzdFxyXG5cdFx0XHRcdC8vICk7XHJcblxyXG5cdFx0XHRcdGxldCBzdGFydF9zdGFtcF9kaXNwYXRjaCA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdFx0dHlwZTogXCJzZXRcIixcclxuXHRcdFx0XHRcdGFmZmVjdDogKCkgPT4gKHtcclxuXHRcdFx0XHRcdFx0Ly8gcGF5bG9hZHM6IHBheWxvYWRzX2xpdmUsXHJcblx0XHRcdFx0XHRcdC8vIGhpZXJhcmNoeV9hbmFseXplcjogaGllcmFyY2h5X2FuYWx5emVyX2xpdmUsXHJcblx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdERhdGUubm93KCkgLSBzdGFydF9zdGFtcCxcclxuXHRcdFx0XHRcdERhdGUubm93KCkgLSBzdGFydF9zdGFtcF9kaXNwYXRjaFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgY2xlYW5fdXAgPSBsaXN0ZW4oXCJtb3VzZXVwXCIpKCgpID0+IHtcclxuXHRcdFx0XHRjbGVhbl9tb3ZlKCk7XHJcblx0XHRcdFx0Y2xlYW5fdXAoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9LCBbcmVmLmN1cnJlbnRdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN9IHJlZj17cmVmfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0aHVtYlwiXHJcblx0XHRcdFx0XHRzdHlsZT17eyB0b3A6IHRodW1iX3Byb3BzLm9mZnNldCArIFwicHhcIiB9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxOb2RlIHsuLi50aHVtYl9wcm9wcy5ub2RlX3Byb3BzfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XHJcblx0XHRcdFx0e3N0YXRlLnBheWxvYWRzLm1hcCgocGF5bG9hZCkgPT4gKFxyXG5cdFx0XHRcdFx0PE5vZGUga2V5PXtwYXlsb2FkLmlkfSB7Li4uZ2V0Tm9kZVByb3BzKHBheWxvYWQsIHN0YXRlKX0gLz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0Tm9kZVByb3BzKHBheWxvYWQsIHN0YXRlKSB7XHJcblx0Y29uc3QgcmVkdWNlciA9IChyZWxheWVkLCBba2V5LCB2YWx1ZV0pID0+IHtcclxuXHRcdGlmIChzdGF0ZS5yZWxheWVkLmhhcyhrZXkpKSB7XHJcblx0XHRcdHJlbGF5ZWRba2V5XSA9IHZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlbGF5ZWQ7XHJcblx0fTtcclxuXHRjb25zdCByZWxheWVkX3Byb3BzID0gT2JqZWN0LmVudHJpZXMocGF5bG9hZCkucmVkdWNlKHJlZHVjZXIsIHt9KTtcclxuXHRjb25zdCBwYXlsb2FkX3Byb3BzID0gcGF5bG9hZC5wcm9wcztcclxuXHRjb25zdCBtZXRhX3Byb3BzID0ge1xyXG5cdFx0aWQ6IHBheWxvYWQuaWQsXHJcblx0XHRsZXZlbDogcGF5bG9hZC5sZXZlbCxcclxuXHRcdGNhbl9leHBhbmQ6IHBheWxvYWQuY2FuX2V4cGFuZCxcclxuXHR9O1xyXG5cclxuXHRpZiAoXCJ0eXBlX3NlbGZcIiBpbiBwYXlsb2FkKSB7XHJcblx0XHRtZXRhX3Byb3BzLml0ZW1fdHlwZSA9IHBheWxvYWQudHlwZV9zZWxmO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRtZXRhX3Byb3BzLml0ZW1fdHlwZSA9IHN0YXRlLml0ZW1fdHlwZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczogeyAuLi5wYXlsb2FkX3Byb3BzLCAuLi5yZWxheWVkX3Byb3BzIH0sXHJcblx0XHQuLi5tZXRhX3Byb3BzLFxyXG5cdH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==