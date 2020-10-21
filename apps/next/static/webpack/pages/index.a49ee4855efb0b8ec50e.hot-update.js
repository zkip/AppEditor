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

        payloads_live.splice(init_index, 1);
        hierarchy_analyzer_live.onRemoved(init_payload, init_index, payloads_live.list);
        payloads_live.splice(live_index >> 0, 0, init_payload);
        hierarchy_analyzer_live.onInserted(init_payload, live_index >> 0, payloads_live.list);
        var start_stamp_dispatch = Date.now();
        dispatch({
          type: "set",
          affect: function affect() {
            return {
              payloads: payloads_live,
              hierarchy_analyzer: hierarchy_analyzer_live
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3V0bGluZS9PdXRsaW5lLmpzeCJdLCJuYW1lcyI6WyJub2RlX21hcCIsImRvbV9wYXlsb2FkX21hcCIsIk1hcCIsIk5vZGUiLCJkYXRhIiwidG9wX3BheWxvYWQiLCJuYW1lIiwiaWQiLCJsZXZlbCIsImNoaWxkcmVuIiwidG9wX25vZGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwYXlsb2FkIiwiZG9tIiwiY3VycmVudCIsInJhdyIsInRvcCIsInNldCIsInBhZGRpbmdMZWZ0IiwibGVuZ3RoIiwibWFwIiwiZ2V0UGF5bG9hZCIsIkZsYXROb2RlIiwiZm9yd2FyZFJlZiIsInJlZiIsIml0ZW1fdHlwZSIsInByb3BzIiwicmVzdCIsIkl0ZW0iLCJsaW5lSGVpZ2h0IiwiQXJyYXlNYXBwZXIiLCJhcnJheSIsImNvbnN0cnVjdG9yIiwibGlzdCIsIml0ZW0iLCJjbG9uZSIsInNsaWNlIiwicmVtb3ZlIiwic3BsaWNlIiwic3RhcnRfcG9zaXRpb24iLCJkZWxldGVfY291bnQiLCJhcHBlbmRfaXRlbXMiLCJiZV9jdWxsZWQiLCJnZXQiLCJtYWtlT3V0bGluZVN0YXRlIiwicGF5bG9hZHMiLCJyZWxheWVkIiwiU2V0IiwiaGllcmFyY2h5X21hcCIsInJlY29yZHMiLCJSZWxhdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsIm5leHRfc2libGluZyIsInVuZGVmaW5lZCIsInByZXZfc2libGluZyIsInBhcmVudCIsImNoaWxkIiwiZ2VuSGllcmFyY2h5QW5hbHl6ZXIiLCJyZWxhdGlvbiIsInNpemUiLCJsaXZlX3JlbGF0aW9uX21hcCIsImxpdmVfc2l6ZV9tYXAiLCJvbkluc2VydGVkIiwiaW5kZXgiLCJpc19maXJzdCIsImlzX3RvcCIsImlzX2xhc3QiLCJwcmV2X2luZGV4IiwibmV4dF9pbmRleCIsInByZXZfaWQiLCJuZXh0X2lkIiwicHJldl9wYXlsb2FkIiwicHJldl9sZXZlbCIsImRpZmZfbGV2ZWwiLCJwcmV2X3JlbGF0aW9uIiwiZmFsbGJhY2siLCJuZXh0X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX2lkIiwiZ2V0UmVjdXJzaXZlUGFyZW50IiwicGFyZW50X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX3JlbGF0aW9uIiwiY291bnQiLCJwYXJlbnRfaWQiLCJvblJlbW92ZWQiLCJpc05vdEVtcHR5IiwibmV4dF9zaWJsaW5nX3JlbGF0aW9uIiwiYXBwbHkiLCJnZXRIaWVyYXJjaHlNYXAiLCJleHBvcnRzIiwidXNlT3V0bGluZVJlZHVjZXIiLCJzdGF0ZSIsImhpZXJhcmNoeV9hbmFseXplciIsInVzZU1lbW8iLCJyZWR1Y2VyIiwidXNlUmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJleHRyYSIsImV4dHJhX2RhdGEiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW0iLCJhZmZlY3QiLCJFbXB0eU5vZGUiLCJjbGFzc05hbWUiLCJzdHlsZSIsImNscyIsImpvaW5CeVNwYWNlIiwidXNlQ29tcG9uZW50SW5kZXhlciIsIm1hcHBlciIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJvZmZzZXQiLCJub2RlX3Byb3BzIiwidGh1bWJfcHJvcHMiLCJzZXRUaHVtYlByb3BzIiwidG9wX25vZGVfZG9tIiwidG9wX2JvdW5kIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGlzdGVuIiwiZSIsInBhdGgiLCJjbGllbnRYIiwiY2xpZW50WSIsImxvY2FsX29mZnNldCIsInkiLCJpbml0X2luZGV4IiwiaW5pdF9wYXlsb2FkX25vZGVfcG9zaXRpb24iLCJpeCIsIml5IiwicGF5bG9hZHNfbG9ja2VkIiwiaGllcmFyY2h5X2FuYWx5emVyX2xvY2tlZCIsImluaXRfcGF5bG9hZCIsImNsZWFuX21vdmUiLCJzdGFydF9zdGFtcCIsIkRhdGUiLCJub3ciLCJwYXlsb2Fkc19saXZlIiwiaGllcmFyY2h5X2FuYWx5emVyX2xpdmUiLCJsaXZlX2luZGV4Iiwic3RhcnRfc3RhbXBfZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiY2xlYW5fdXAiLCJnZXROb2RlUHJvcHMiLCJrZXkiLCJ2YWx1ZSIsImhhcyIsInJlbGF5ZWRfcHJvcHMiLCJlbnRyaWVzIiwicmVkdWNlIiwicGF5bG9hZF9wcm9wcyIsIm1ldGFfcHJvcHMiLCJjYW5fZXhwYW5kIiwidHlwZV9zZWxmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxRQUFRLEdBQUcsRUFBakI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsSUFBSUMsR0FBSixFQUF4Qjs7QUFFUCxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQUEsbUJBQ1NELElBRFQsQ0FDL0JFLElBRCtCO0FBQUEsTUFDL0JBLElBRCtCLDJCQUN4QixFQUR3QjtBQUFBLE1BQ3BCQyxFQURvQixHQUNTSCxJQURULENBQ3BCRyxFQURvQjtBQUFBLE1BQ2hCQyxLQURnQixHQUNTSixJQURULENBQ2hCSSxLQURnQjtBQUFBLHVCQUNTSixJQURULENBQ1RLLFFBRFM7QUFBQSxNQUNUQSxRQURTLCtCQUNFLEVBREY7QUFFdkMsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxPQUFPLEdBQUc7QUFDZlAsVUFBSSxFQUFKQSxJQURlO0FBRWZDLFFBQUUsRUFBRkEsRUFGZTtBQUdmRSxjQUFRLEVBQVJBLFFBSGU7QUFJZkssU0FBRyxFQUFFSixRQUFRLENBQUNLLE9BSkM7QUFLZkMsU0FBRyxFQUFFWixJQUxVO0FBTWZhLFNBQUcsRUFBRVo7QUFOVSxLQUFoQjtBQVFBTCxZQUFRLENBQUNPLEVBQUQsQ0FBUixHQUFlTSxPQUFmO0FBQ0FaLG1CQUFlLENBQUNp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S0FBZjtBQUNBOztBQUNELFdBQU9wRyxPQUFQO0FBQ0EsR0FMRDs7QUFNQSxNQUFNc0csYUFBYSxHQUFHakcsTUFBTSxDQUFDa0csT0FBUCxDQUFlekksT0FBZixFQUF3QjBJLE1BQXhCLENBQStCeEQsT0FBL0IsRUFBd0MsRUFBeEMsQ0FBdEI7QUFDQSxNQUFNeUQsYUFBYSxHQUFHM0ksT0FBTyxDQUFDYyxLQUE5QjtBQUNBLE1BQU04SCxVQUFVLEdBQUc7QUFDbEJsSixNQUFFLEVBQUVNLE9BQU8sQ0FBQ04sRUFETTtBQUVsQkMsU0FBSyxFQUFFSyxPQUFPLENBQUNMLEtBRkc7QUFHbEJrSixjQUFVLEVBQUU3SSxPQUFPLENBQUM2STtBQUhGLEdBQW5COztBQU1BLE1BQUksZUFBZTdJLE9BQW5CLEVBQTRCO0FBQzNCNEksY0FBVSxDQUFDL0gsU0FBWCxHQUF1QmIsT0FBTyxDQUFDOEksU0FBL0I7QUFDQSxHQUZELE1BRU87QUFDTkYsY0FBVSxDQUFDL0gsU0FBWCxHQUF1QmtFLEtBQUssQ0FBQ2xFLFNBQTdCO0FBQ0E7O0FBRUQ7QUFDQ0MsU0FBSyxrQ0FBTzZILGFBQVAsR0FBeUJILGFBQXpCO0FBRE4sS0FFSUksVUFGSjtBQUlBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE0OWVlNDg1NWVmYjBiOGVjNTBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqb2luQnlTcGFjZSwgaW5Cb3VuZCwgaW5BcnJheUJvdW5kIH0gZnJvbSBcIkAvdXRpbHMvYXJyYXlcIjtcclxuaW1wb3J0IHsgZmFsbGJhY2ssIGxpc3RlbiB9IGZyb20gXCJAL3V0aWxzL2ZuXCI7XHJcbmltcG9ydCB7XHJcblx0dXNlUmVmLFxyXG5cdHVzZUVmZmVjdCxcclxuXHRmb3J3YXJkUmVmLFxyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZVJlZHVjZXIsXHJcblx0dXNlQ2FsbGJhY2ssXHJcblx0dXNlTWVtbyxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9PdXRsaW5lLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VDb21wb25lbnRJbmRleGVyIH0gZnJvbSBcIkAvdXRpbHMvdXNlcy9tYXBwZXJcIjtcclxuaW1wb3J0IHsgVGltaW5nSW5kZXggfSBmcm9tIFwiQC91dGlscy9pbmRpY2VzL3RpbWluZ1wiO1xyXG5pbXBvcnQgeyBpc0VtcHR5LCBpc05vdEVtcHR5IH0gZnJvbSBcIkAvdXRpbHMvYXNzZXJ0c1wiO1xyXG5pbXBvcnQgbmV4dCBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIkAvdXRpbHMvYXJyYXlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBub2RlX21hcCA9IHt9O1xyXG5leHBvcnQgY29uc3QgZG9tX3BheWxvYWRfbWFwID0gbmV3IE1hcCgpO1xyXG5cclxuY29uc3QgTm9kZSA9ICh7IGRhdGEsIHRvcF9wYXlsb2FkIH0pID0+IHtcclxuXHRjb25zdCB7IG5hbWUgPSBcIlwiLCBpZCwgbGV2ZWwsIGNoaWxkcmVuID0gW10gfSA9IGRhdGE7XHJcblx0Y29uc3QgdG9wX25vZGUgPSB1c2VSZWYoKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgcGF5bG9hZCA9IHtcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0aWQsXHJcblx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRkb206IHRvcF9ub2RlLmN1cnJlbnQsXHJcblx0XHRcdHJhdzogZGF0YSxcclxuXHRcdFx0dG9wOiB0b3BfcGF5bG9hZCxcclxuXHRcdH07XHJcblx0XHRub2RlX21hcFtpZF0gPSBwYXlsb2FkO1xyXG5cdFx0ZG9tX3BheWxvYWRfbWFwLnNldCh0b3Bfbm9kZS5jdXJyZW50LCBwYXlsb2FkKTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGRvbV9wYXlsb2FkX21hcC5kZWxldGUodG9wX25vZGUuY3VycmVudCk7XHJcblx0XHRcdGRlbGV0ZSBub2RlX21hcFtpZF07XHJcblx0XHR9O1xyXG5cdH0sIFt0b3Bfbm9kZS5jdXJyZW50LCBkYXRhXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgcmVmPXt0b3Bfbm9kZX0gY2xhc3NOYW1lPVwibm9kZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IGAke2xldmVsICogMjB9cHhgIH19PlxyXG5cdFx0XHRcdHtuYW1lfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0e2NoaWxkcmVuLmxlbmd0aCA+IDAgJiYgKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj5cclxuXHRcdFx0XHRcdHtjaGlsZHJlbi5tYXAoKGRhdGEpID0+IChcclxuXHRcdFx0XHRcdFx0PE5vZGVcclxuXHRcdFx0XHRcdFx0XHRrZXk9e2RhdGEuaWR9XHJcblx0XHRcdFx0XHRcdFx0ZGF0YT17ZGF0YX1cclxuXHRcdFx0XHRcdFx0XHR0b3BfcGF5bG9hZD17dG9wX3BheWxvYWR9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGF5bG9hZCgpIHt9XHJcblxyXG5jb25zdCBGbGF0Tm9kZSA9IGZvcndhcmRSZWYoXHJcblx0KHsgaXRlbV90eXBlLCBsZXZlbCA9IDAsIHByb3BzID0ge30sIC4uLnJlc3QgfSA9IHt9LCByZWYpID0+IHtcclxuXHRcdGNvbnN0IEl0ZW0gPSBpdGVtX3R5cGU7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vZGVcIiByZWY9e3JlZn0+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGl0bGVcIlxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ0xlZnQ6IGAke2xldmVsICogMjB9cHhgIH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEl0ZW0gey4uLnByb3BzfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG4pO1xyXG5cclxuY29uc3QgbGluZUhlaWdodCA9IDIwO1xyXG5cclxuZnVuY3Rpb24gQXJyYXlNYXBwZXIoYXJyYXkpIHtcclxuXHRmdW5jdGlvbiBjb25zdHJ1Y3Rvcih7IGxpc3QsIG1hcCA9IHt9IH0pIHtcclxuXHRcdGxpc3QubWFwKChpdGVtKSA9PiAobWFwW2l0ZW0uaWRdID0gaXRlbSkpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNsb25lKCkge1xyXG5cdFx0XHRyZXR1cm4gY29uc3RydWN0b3IoeyBsaXN0OiBsaXN0LnNsaWNlKCksIG1hcDoge30gfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcmVtb3ZlKGlkKSB7XHJcblx0XHRcdGRlbGV0ZSBtYXBbaWRdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNwbGljZShzdGFydF9wb3NpdGlvbiwgZGVsZXRlX2NvdW50LCAuLi5hcHBlbmRfaXRlbXMpIHtcclxuXHRcdFx0Y29uc3QgYmVfY3VsbGVkID0gbGlzdC5zcGxpY2UoXHJcblx0XHRcdFx0c3RhcnRfcG9zaXRpb24sXHJcblx0XHRcdFx0ZGVsZXRlX2NvdW50LFxyXG5cdFx0XHRcdC4uLmFwcGVuZF9pdGVtc1xyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0YmVfY3VsbGVkLm1hcCgoeyBpZCB9KSA9PiByZW1vdmUoaWQpKTtcclxuXHJcblx0XHRcdHJldHVybiBiZV9jdWxsZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gbWFwKC4uLmFyZ3MpIHtcclxuXHRcdFx0cmV0dXJuIGxpc3QubWFwKC4uLmFyZ3MpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldChpZCkge1xyXG5cdFx0XHRyZXR1cm4gbWFwW2lkXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRnZXQsXHJcblx0XHRcdGNsb25lLFxyXG5cdFx0XHRyZW1vdmUsXHJcblx0XHRcdHNwbGljZSxcclxuXHRcdFx0bGlzdCxcclxuXHRcdFx0bWFwLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBjb25zdHJ1Y3Rvcih7IGxpc3Q6IGFycmF5IH0pO1xyXG59XHJcblxyXG4vLyB0eXBlIFBheWxvYWQgeyBpZCwgbGV2ZWwsIGNhbl9leHBhbmQsIHR5cGVfc2VsZiwgcHJvcHMgfVxyXG4vLyB0eXBlIFBheWxvYWRMaXN0IFtdUGF5bG9hZFxyXG5leHBvcnQgY29uc3QgbWFrZU91dGxpbmVTdGF0ZSA9ICh7XHJcblx0aXRlbV90eXBlID0gbnVsbCxcclxuXHRwYXlsb2FkcyA9IFtdLFxyXG5cdHJlbGF5ZWQgPSBuZXcgU2V0KFtcImlkXCIsIFwibGV2ZWxcIl0pLFxyXG59ID0ge30pID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0aGllcmFyY2h5X21hcDoge30sXHJcblx0XHRpdGVtX3R5cGUsXHJcblx0XHRwYXlsb2FkczogQXJyYXlNYXBwZXIocGF5bG9hZHMpLFxyXG5cdFx0cmVsYXllZCxcclxuXHRcdHJlY29yZHM6IG5ldyBNYXAoKSxcclxuXHR9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gUmVsYXRpb24oaWQsIHsgLi4ucHJvcHMgfSkge1xyXG5cdHJldHVybiBPYmplY3QuYXNzaWduKFxyXG5cdFx0e1xyXG5cdFx0XHRpZCxcclxuXHRcdFx0bmV4dF9zaWJsaW5nOiB1bmRlZmluZWQsXHJcblx0XHRcdHByZXZfc2libGluZzogdW5kZWZpbmVkLFxyXG5cdFx0XHRwYXJlbnQ6IHVuZGVmaW5lZCxcclxuXHRcdFx0Y2hpbGQ6IHVuZGVmaW5lZCxcclxuXHRcdH0sXHJcblx0XHRwcm9wc1xyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbkhpZXJhcmNoeUFuYWx5emVyKHt9ID0ge30pIHtcclxuXHRmdW5jdGlvbiBjb25zdHJ1Y3Rvcih7IGhpZXJhcmNoeV9tYXAgPSB7IHJlbGF0aW9uOiB7fSwgc2l6ZToge30gfSB9ID0ge30pIHtcclxuXHRcdGxldCB7XHJcblx0XHRcdHJlbGF0aW9uOiBsaXZlX3JlbGF0aW9uX21hcCxcclxuXHRcdFx0c2l6ZTogbGl2ZV9zaXplX21hcCxcclxuXHRcdH0gPSBoaWVyYXJjaHlfbWFwO1xyXG5cclxuXHRcdC8vIGNvbnNvbGUubG9nKGxpdmVfc2l6ZV9tYXApO1xyXG5cclxuXHRcdC8vIHR5cGUgSGllcmFyY2h5Tm9kZSBQYXlsb2FkXHJcblx0XHRmdW5jdGlvbiBvbkluc2VydGVkKHsgbGV2ZWwsIGlkIH0sIGluZGV4LCBwYXlsb2Fkcykge1xyXG5cdFx0XHRjb25zdCBpc19maXJzdCA9IGluZGV4ID09PSAwO1xyXG5cdFx0XHRjb25zdCBpc190b3AgPSBsZXZlbCA9PT0gMDtcclxuXHRcdFx0Y29uc3QgaXNfbGFzdCA9IGluZGV4ID09PSBwYXlsb2Fkcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRjb25zdCBwcmV2X2luZGV4ID0gaW5kZXggLSAxO1xyXG5cdFx0XHRjb25zdCBuZXh0X2luZGV4ID0gaW5kZXggKyAxO1xyXG5cdFx0XHRjb25zdCBwcmV2X2lkID0gaXNfZmlyc3QgPyB1bmRlZmluZWQgOiBwYXlsb2Fkc1twcmV2X2luZGV4XS5pZDtcclxuXHRcdFx0Y29uc3QgbmV4dF9pZCA9IGlzX2xhc3QgPyB1bmRlZmluZWQgOiBwYXlsb2Fkc1tuZXh0X2luZGV4XS5pZDtcclxuXHRcdFx0Y29uc3QgcHJldl9wYXlsb2FkID0gcGF5bG9hZHNbcHJldl9pbmRleF07XHJcblx0XHRcdGNvbnN0IHByZXZfbGV2ZWwgPSAhaXNfZmlyc3QgJiYgcHJldl9wYXlsb2FkLmxldmVsO1xyXG5cdFx0XHRjb25zdCBkaWZmX2xldmVsID0gIWlzX2ZpcnN0ICYmIGxldmVsIC0gcHJldl9sZXZlbDtcclxuXHJcblx0XHRcdGNvbnN0IHByZXZfcmVsYXRpb24gPSBmYWxsYmFjayhSZWxhdGlvbihpZCkpKFxyXG5cdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfaWRdXHJcblx0XHRcdCk7XHJcblx0XHRcdGNvbnN0IG5leHRfcmVsYXRpb24gPSBmYWxsYmFjayhSZWxhdGlvbihpZCkpKFxyXG5cdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW25leHRfaWRdXHJcblx0XHRcdCk7XHJcblx0XHRcdGNvbnN0IHJlbGF0aW9uID0gZmFsbGJhY2soUmVsYXRpb24oaWQpKShsaXZlX3JlbGF0aW9uX21hcFtpZF0pO1xyXG5cclxuXHRcdFx0aWYgKGRpZmZfbGV2ZWwgPiAwKSB7XHJcblx0XHRcdFx0cHJldl9yZWxhdGlvbi5jaGlsZCA9IGlkO1xyXG5cdFx0XHRcdHJlbGF0aW9uLnBhcmVudCA9IGlzX2ZpcnN0IHx8IGlzX3RvcCA/IHVuZGVmaW5lZCA6IHByZXZfaWQ7XHJcblxyXG5cdFx0XHRcdGlmICghaXNfbGFzdCAmJiByZWxhdGlvbi5wYXJlbnQgPT09IG5leHRfcmVsYXRpb24ucGFyZW50KSB7XHJcblx0XHRcdFx0XHRuZXh0X3JlbGF0aW9uLnByZXZfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChkaWZmX2xldmVsID09PSAwKSB7XHJcblx0XHRcdFx0cmVsYXRpb24ucHJldl9zaWJsaW5nID0gcHJldl9pZDtcclxuXHRcdFx0XHRyZWxhdGlvbi5wYXJlbnQgPVxyXG5cdFx0XHRcdFx0aXNfZmlyc3QgfHwgaXNfdG9wID8gdW5kZWZpbmVkIDogcHJldl9yZWxhdGlvbi5wYXJlbnQ7XHJcblx0XHRcdFx0cHJldl9yZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBpZDtcclxuXHJcblx0XHRcdFx0aWYgKCFpc19sYXN0ICYmIG5leHRfcmVsYXRpb24ucGFyZW50ID09PSByZWxhdGlvbi5wYXJlbnQpIHtcclxuXHRcdFx0XHRcdHJlbGF0aW9uLm5leHRfc2libGluZyA9IG5leHRfaWQ7XHJcblx0XHRcdFx0XHRuZXh0X3JlbGF0aW9uLnByZXZfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBwcmV2X3NpYmxpbmdfaWQgPSBnZXRSZWN1cnNpdmVQYXJlbnQoXHJcblx0XHRcdFx0XHRwcmV2X2lkLFxyXG5cdFx0XHRcdFx0LWRpZmZfbGV2ZWxcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBwYXJlbnRfcmVsYXRpb24gPSBmYWxsYmFjayhSZWxhdGlvbihpZCkpKFxyXG5cdFx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9zaWJsaW5nX2lkXVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y29uc3QgcHJldl9zaWJsaW5nX3JlbGF0aW9uID1cclxuXHRcdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfc2libGluZ19pZF07XHJcblxyXG5cdFx0XHRcdHJlbGF0aW9uLnBhcmVudCA9XHJcblx0XHRcdFx0XHRpc19maXJzdCB8fCBpc190b3AgPyB1bmRlZmluZWQgOiBwYXJlbnRfcmVsYXRpb24ucGFyZW50O1xyXG5cdFx0XHRcdHJlbGF0aW9uLnByZXZfc2libGluZyA9IGlzX2xhc3QgPyB1bmRlZmluZWQgOiBwcmV2X3NpYmxpbmdfaWQ7XHJcblxyXG5cdFx0XHRcdGlmICghaXNfZmlyc3QpIHtcclxuXHRcdFx0XHRcdHByZXZfc2libGluZ19yZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICghaXNfbGFzdCAmJiByZWxhdGlvbi5wYXJlbnQgPT09IG5leHRfcmVsYXRpb24ucGFyZW50KSB7XHJcblx0XHRcdFx0XHRwYXJlbnRfcmVsYXRpb24ubmV4dF9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0XHRuZXh0X3JlbGF0aW9uLnByZXZfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCFpc19maXJzdCkge1xyXG5cdFx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9zaWJsaW5nX2lkXSA9IHBhcmVudF9yZWxhdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghaXNfdG9wKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2l6ZSA9IGZhbGxiYWNrKDApKGxpdmVfc2l6ZV9tYXBbcmVsYXRpb24ucGFyZW50XSk7XHJcblx0XHRcdFx0bGl2ZV9zaXplX21hcFtyZWxhdGlvbi5wYXJlbnRdID0gc2l6ZSArIDE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghaXNfZmlyc3QpIHtcclxuXHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X2lkXSA9IHByZXZfcmVsYXRpb247XHJcblx0XHRcdH1cclxuXHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbaWRdID0gcmVsYXRpb247XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0UmVjdXJzaXZlUGFyZW50KGlkLCBjb3VudCA9IDApIHtcclxuXHRcdFx0Y29uc3QgcGFyZW50X2lkID1cclxuXHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtpZF0gJiYgbGl2ZV9yZWxhdGlvbl9tYXBbaWRdLnBhcmVudDtcclxuXHRcdFx0aWYgKGNvdW50ID4gMSAmJiBwYXJlbnRfaWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZ2V0UmVjdXJzaXZlUGFyZW50KHBhcmVudF9pZCwgY291bnQgLSAxKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gcGFyZW50X2lkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gb25SZW1vdmVkKHsgaWQgfSwgaW5kZXgsIHBheWxvYWRzKSB7XHJcblx0XHRcdGNvbnN0IGlzX2ZpcnN0ID0gaW5kZXggPT09IDA7XHJcblx0XHRcdGNvbnN0IGlzX2xhc3QgPSBpbmRleCA9PT0gcGF5bG9hZHMubGVuZ3RoO1xyXG5cdFx0XHRjb25zdCBwcmV2X2luZGV4ID0gaW5kZXggLSAxO1xyXG5cdFx0XHRjb25zdCBuZXh0X2luZGV4ID0gaW5kZXg7XHJcblx0XHRcdGNvbnN0IHByZXZfaWQgPSBpc19maXJzdCA/IHVuZGVmaW5lZCA6IHBheWxvYWRzW3ByZXZfaW5kZXhdLmlkO1xyXG5cdFx0XHRjb25zdCBuZXh0X2lkID0gaXNfbGFzdCA/IHVuZGVmaW5lZCA6IHBheWxvYWRzW25leHRfaW5kZXhdLmlkO1xyXG5cclxuXHRcdFx0Y29uc3QgcHJldl9yZWxhdGlvbiA9IGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfaWRdO1xyXG5cdFx0XHRjb25zdCBuZXh0X3JlbGF0aW9uID0gbGl2ZV9yZWxhdGlvbl9tYXBbbmV4dF9pZF07XHJcblx0XHRcdGNvbnN0IHJlbGF0aW9uID0gbGl2ZV9yZWxhdGlvbl9tYXBbaWRdO1xyXG5cclxuXHRcdFx0Y29uc3QgeyBwcmV2X3NpYmxpbmcsIG5leHRfc2libGluZywgcGFyZW50IH0gPSByZWxhdGlvbjtcclxuXHJcblx0XHRcdGNvbnN0IHByZXZfc2libGluZ19yZWxhdGlvbiA9IGlzTm90RW1wdHkocHJldl9zaWJsaW5nKVxyXG5cdFx0XHRcdD8gbGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9zaWJsaW5nXVxyXG5cdFx0XHRcdDogdW5kZWZpbmVkO1xyXG5cdFx0XHRjb25zdCBuZXh0X3NpYmxpbmdfcmVsYXRpb24gPSBpc05vdEVtcHR5KG5leHRfc2libGluZylcclxuXHRcdFx0XHQ/IGxpdmVfcmVsYXRpb25fbWFwW25leHRfc2libGluZ11cclxuXHRcdFx0XHQ6IHVuZGVmaW5lZDtcclxuXHRcdFx0Y29uc3QgcGFyZW50X3JlbGF0aW9uID0gaXNOb3RFbXB0eShwYXJlbnQpXHJcblx0XHRcdFx0PyBsaXZlX3JlbGF0aW9uX21hcFtwYXJlbnRdXHJcblx0XHRcdFx0OiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHRpZiAoaXNOb3RFbXB0eShwcmV2X3NpYmxpbmdfcmVsYXRpb24pKSB7XHJcblx0XHRcdFx0cHJldl9yZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBuZXh0X3NpYmxpbmc7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGlzTm90RW1wdHkobmV4dF9zaWJsaW5nX3JlbGF0aW9uKSkge1xyXG5cdFx0XHRcdG5leHRfcmVsYXRpb24ucHJldl9zaWJsaW5nID0gcHJldl9zaWJsaW5nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChpc05vdEVtcHR5KHBhcmVudF9yZWxhdGlvbikgJiYgcGFyZW50X3JlbGF0aW9uLmNoaWxkID09PSBpZCkge1xyXG5cdFx0XHRcdHBhcmVudF9yZWxhdGlvbi5jaGlsZCA9IG5leHRfc2libGluZztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZGVsZXRlIGxpdmVfcmVsYXRpb25fbWFwW2lkXTtcclxuXHJcblx0XHRcdGxpdmVfc2l6ZV9tYXBbcmVsYXRpb24ucGFyZW50XS0tO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNsb25lKCkge1xyXG5cdFx0XHRyZXR1cm4gY29uc3RydWN0b3Ioe1xyXG5cdFx0XHRcdGhpZXJhcmNoeV9tYXA6IHtcclxuXHRcdFx0XHRcdHJlbGF0aW9uOiB7IC4uLmxpdmVfcmVsYXRpb25fbWFwIH0sXHJcblx0XHRcdFx0XHRzaXplOiB7IC4uLmxpdmVfc2l6ZV9tYXAgfSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBhcHBseSh7IGhpZXJhcmNoeV9tYXAgfSkge1xyXG5cdFx0XHRsaXZlX3JlbGF0aW9uX21hcCA9IGhpZXJhcmNoeV9tYXAucmVsYXRpb247XHJcblx0XHRcdGxpdmVfc2l6ZV9tYXAgPSBoaWVyYXJjaHlfbWFwLnNpemU7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0SGllcmFyY2h5TWFwKCkge1xyXG5cdFx0XHRyZXR1cm4gaGllcmFyY2h5X21hcDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBleHBvcnRzID0ge1xyXG5cdFx0XHRjbG9uZSxcclxuXHRcdFx0YXBwbHksXHJcblx0XHRcdG9uSW5zZXJ0ZWQsXHJcblx0XHRcdG9uUmVtb3ZlZCxcclxuXHRcdFx0Z2V0SGllcmFyY2h5TWFwLFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihbZXhwb3J0c10sIGV4cG9ydHMpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNvbnN0cnVjdG9yKHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU91dGxpbmVSZWR1Y2VyID0gKHtcclxuXHRzdGF0ZSA9IG1ha2VPdXRsaW5lU3RhdGUoKSxcclxuXHRoaWVyYXJjaHlfYW5hbHl6ZXIgPSBnZW5IaWVyYXJjaHlBbmFseXplcigpLFxyXG59ID0ge30pID0+IHtcclxuXHRzdGF0ZS5oaWVyYXJjaHlfYW5hbHl6ZXIgPSBoaWVyYXJjaHlfYW5hbHl6ZXI7XHJcblxyXG5cdHVzZU1lbW8oKCkgPT4ge1xyXG5cdFx0c3RhdGUucGF5bG9hZHMubWFwKGhpZXJhcmNoeV9hbmFseXplci5vbkluc2VydGVkKTtcclxuXHR9LCBbc3RhdGUucGF5bG9hZHNdKTtcclxuXHJcblx0Y29uc3QgcmVkdWNlciA9IHVzZVJlZHVjZXIoKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHRcdGlmIChhY3Rpb24udHlwZSA9PT0gXCJkZWxldGVcIikge1xyXG5cdFx0XHRjb25zdCB7IGluZGV4IH0gPSBhY3Rpb247XHJcblx0XHRcdGNvbnN0IHsgcGF5bG9hZHMgfSA9IHN0YXRlO1xyXG5cdFx0XHRzdGF0ZS5wYXlsb2Fkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcGF5bG9hZHMgfTtcclxuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFwic2F2ZVwiKSB7XHJcblx0XHRcdGNvbnN0IHsgaWQsIGV4dHJhID0gKCkgPT4gKHt9KSB9ID0gYWN0aW9uO1xyXG5cdFx0XHRjb25zdCB7IHJlY29yZHMsIHBheWxvYWRzIH0gPSBzdGF0ZTtcclxuXHRcdFx0Y29uc3QgZXh0cmFfZGF0YSA9IGV4dHJhKHN0YXRlKTtcclxuXHJcblx0XHRcdHJlY29yZHMuc2V0KGlkLCBwYXlsb2Fkcy5jbG9uZSgpKTtcclxuXHRcdFx0T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhleHRyYV9kYXRhKS5tYXAoKHN5bSkgPT4ge1xyXG5cdFx0XHRcdHJlY29yZHMuc2V0KHN5bSwgZXh0cmFfZGF0YVtzeW1dKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcmVjb3JkcyB9O1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJyZXN0b3JlXCIpIHtcclxuXHRcdFx0Y29uc3QgeyBpZCA9IFtdLCBleHRyYSA9IFtdIH0gPSBhY3Rpb247XHJcblx0XHRcdGNvbnN0IHsgcmVjb3JkcyB9ID0gc3RhdGU7XHJcblxyXG5cdFx0XHRyZWNvcmRzLmRlbGV0ZShpZCk7XHJcblx0XHRcdGV4dHJhLm1hcCgoaWQpID0+IHJlY29yZHMuZGVsZXRlKGlkKSk7XHJcblxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcmVjb3JkcyB9O1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJzZXRCYXNlZE9uXCIpIHtcclxuXHRcdFx0Y29uc3QgeyBpZCwgYWZmZWN0IH0gPSBhY3Rpb247XHJcblx0XHRcdGNvbnN0IHBheWxvYWRzID0gYWZmZWN0KHN0YXRlLnJlY29yZHMuZ2V0KGlkKS5jbG9uZSgpLCBzdGF0ZSk7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBwYXlsb2FkcyB9O1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJzZXRcIikge1xyXG5cdFx0XHRjb25zdCB7IGFmZmVjdCB9ID0gYWN0aW9uO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWZmZWN0KHN0YXRlKSB9O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fVxyXG5cdH0sIHN0YXRlKTtcclxuXHJcblx0cmV0dXJuIHJlZHVjZXI7XHJcbn07XHJcblxyXG5jb25zdCBFbXB0eU5vZGUgPSBmb3J3YXJkUmVmKCh7IC4uLnJlc3QgfSwgcmVmKSA9PiAoXHJcblx0PGRpdiByZWY9e3JlZn0gey4uLnJlc3R9PjwvZGl2PlxyXG4pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7XHJcblx0cmVkdWNlciA9IHVzZU91dGxpbmVSZWR1Y2VyKCksXHJcblx0Y2xhc3NOYW1lLFxyXG5cdHN0eWxlLFxyXG5cdC4uLnJlc3RcclxufSkgPT4ge1xyXG5cdGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG5cdGNvbnN0IGNscyA9IGpvaW5CeVNwYWNlKGNsYXNzTmFtZSwgXCJPdXRsaW5lXCIpO1xyXG5cdGNvbnN0IFtOb2RlLCBtYXBwZXJdID0gdXNlQ29tcG9uZW50SW5kZXhlcihGbGF0Tm9kZSk7XHJcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSByZWR1Y2VyO1xyXG5cdGNvbnN0IFt0aHVtYl9wcm9wcywgc2V0VGh1bWJQcm9wc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRvZmZzZXQ6IDAsXHJcblx0XHRub2RlX3Byb3BzOiB7IGl0ZW1fdHlwZTogRW1wdHlOb2RlIH0sXHJcblx0fSk7XHJcblx0Y29uc3QgcGF5bG9hZHMgPSB1c2VSZWYoKTtcclxuXHRjb25zdCBoaWVyYXJjaHlfYW5hbHl6ZXIgPSB1c2VSZWYoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHBheWxvYWRzLmN1cnJlbnQgPSBzdGF0ZS5wYXlsb2FkcztcclxuXHR9LCBbc3RhdGUucGF5bG9hZHNdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGhpZXJhcmNoeV9hbmFseXplci5jdXJyZW50ID0gc3RhdGUuaGllcmFyY2h5X2FuYWx5emVyO1xyXG5cdH0sIFtzdGF0ZS5oaWVyYXJjaHlfYW5hbHl6ZXJdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghcmVmKSByZXR1cm47XHJcblx0XHRjb25zdCB0b3Bfbm9kZV9kb20gPSByZWYuY3VycmVudDtcclxuXHRcdGNvbnN0IHRvcF9ib3VuZCA9IHRvcF9ub2RlX2RvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiBsaXN0ZW4oXHJcblx0XHRcdFwibW91c2Vkb3duXCIsXHJcblx0XHRcdHRvcF9ub2RlX2RvbVxyXG5cdFx0KSgoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHBhdGgsIGNsaWVudFgsIGNsaWVudFkgfSA9IGU7XHJcblxyXG5cdFx0XHRjb25zdCBsb2NhbF9vZmZzZXQgPSAoY2xpZW50WSAtIHRvcF9ib3VuZC55KSAlIGxpbmVIZWlnaHQ7XHJcblx0XHRcdGNvbnN0IGluaXRfaW5kZXggPVxyXG5cdFx0XHRcdChjbGllbnRZIC0gdG9wX2JvdW5kLnkgLSBsb2NhbF9vZmZzZXQpIC8gbGluZUhlaWdodDtcclxuXHJcblx0XHRcdGNvbnN0IGluaXRfcGF5bG9hZF9ub2RlX3Bvc2l0aW9uID1cclxuXHRcdFx0XHRpbml0X2luZGV4ICogbGluZUhlaWdodCArIGxvY2FsX29mZnNldDtcclxuXHJcblx0XHRcdC8vIGRpc3BhdGNoKHtcclxuXHRcdFx0Ly8gXHR0eXBlOiBcInNhdmVcIixcclxuXHRcdFx0Ly8gXHRpZCxcclxuXHRcdFx0Ly8gXHRleHRyYTogKHsgcGF5bG9hZHMsIGhpZXJhcmNoeV9hbmFseXplciB9KSA9PiAoe1xyXG5cdFx0XHQvLyBcdFx0W2luaXRfcGF5bG9hZF9sZXZlbF9pZF06IHBheWxvYWRzLmxpc3RbaW5pdF9pbmRleF0ubGV2ZWwsXHJcblx0XHRcdC8vIFx0XHRbaW5pdF9oaWVyYXJjaHlfYW5hbHl6ZXJfaWRdOiBoaWVyYXJjaHlfYW5hbHl6ZXIuY2xvbmUoKSxcclxuXHRcdFx0Ly8gXHR9KSxcclxuXHRcdFx0Ly8gfSk7XHJcblxyXG5cdFx0XHQvLyBkaXNwYXRjaCh7XHJcblx0XHRcdC8vIFx0dHlwZTogXCJzZXRcIixcclxuXHRcdFx0Ly8gXHRhZmZlY3Q6ICh7IHBheWxvYWRzLCBoaWVyYXJjaHlfYW5hbHl6ZXIgfSkgPT4ge1xyXG5cdFx0XHQvLyBcdFx0Y29uc3QgW3BheWxvYWRdID0gcGF5bG9hZHMuc3BsaWNlKGluaXRfaW5kZXgsIDEpO1xyXG5cdFx0XHQvLyBcdFx0aGllcmFyY2h5X2FuYWx5emVyLm9uUmVtb3ZlZChcclxuXHRcdFx0Ly8gXHRcdFx0cGF5bG9hZCxcclxuXHRcdFx0Ly8gXHRcdFx0aW5pdF9pbmRleCxcclxuXHRcdFx0Ly8gXHRcdFx0cGF5bG9hZHMubGlzdFxyXG5cdFx0XHQvLyBcdFx0KTtcclxuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHBheWxvYWRzLCBoaWVyYXJjaHlfYW5hbHl6ZXIgfTtcclxuXHRcdFx0Ly8gXHR9LFxyXG5cdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdGNvbnN0IGl4ID0gY2xpZW50WCxcclxuXHRcdFx0XHRpeSA9IGNsaWVudFk7XHJcblxyXG5cdFx0XHRjb25zdCBwYXlsb2Fkc19sb2NrZWQgPSBwYXlsb2Fkcy5jdXJyZW50LmNsb25lKCk7XHJcblx0XHRcdGNvbnN0IGhpZXJhcmNoeV9hbmFseXplcl9sb2NrZWQgPSBoaWVyYXJjaHlfYW5hbHl6ZXIuY3VycmVudC5jbG9uZSgpO1xyXG5cdFx0XHRjb25zdCBpbml0X3BheWxvYWQgPSBwYXlsb2Fkc19sb2NrZWQubGlzdFtpbml0X2luZGV4XTtcclxuXHJcblx0XHRcdGNvbnN0IGNsZWFuX21vdmUgPSBsaXN0ZW4oXCJtb3VzZW1vdmVcIikoKHsgY2xpZW50WCwgY2xpZW50WSB9KSA9PiB7XHJcblx0XHRcdFx0bGV0IHN0YXJ0X3N0YW1wID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHQvLyBjb25zdCBwYXlsb2Fkc19saXZlID0gcGF5bG9hZHNfbG9ja2VkLmNsb25lKCk7XHJcblx0XHRcdFx0Ly8gY29uc3QgaGllcmFyY2h5X2FuYWx5emVyX2xpdmUgPSBoaWVyYXJjaHlfYW5hbHl6ZXJfbG9ja2VkLmNsb25lKCk7XHJcblx0XHRcdFx0Ly8gY29uc3QgaGllcmFyY2h5X21hcCA9IGhpZXJhcmNoeV9hbmFseXplcl9saXZlLmdldEhpZXJhcmNoeU1hcCgpO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBsb2NhbF9vZmZzZXQgPSAoY2xpZW50WSAtIHRvcF9ib3VuZC55KSAlIGxpbmVIZWlnaHQ7XHJcblx0XHRcdFx0Ly8gY29uc3QgbGl2ZV9pbmRleCA9XHJcblx0XHRcdFx0Ly8gXHQoY2xpZW50WSAtIHRvcF9ib3VuZC55IC0gbG9jYWxfb2Zmc2V0KSAvIGxpbmVIZWlnaHQ7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfaW5kZXggPSBsaXZlX2luZGV4IC0gMTtcclxuXHRcdFx0XHQvLyBjb25zdCBuZXh0X2luZGV4ID0gbGl2ZV9pbmRleCArIDE7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHByZXZfaW5kZXgsIG5leHRfaW5kZXgpO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBpc19maXJzdCA9IGxpdmVfaW5kZXggPT09IDA7XHJcblx0XHRcdFx0Ly8gY29uc3QgaXNfbGFzdCA9IGxpdmVfaW5kZXggPT09IHBheWxvYWRzX2xpdmUubGVuZ3RoIC0gMTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgaW5pdF9yZWxhdGlvbiA9IGhpZXJhcmNoeV9tYXAucmVsYXRpb25baW5pdF9wYXlsb2FkLmlkXTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9wYXlsb2FkID0gcGF5bG9hZHNfbGl2ZS5saXN0W3ByZXZfaW5kZXhdO1xyXG5cdFx0XHRcdC8vIGNvbnN0IG5leHRfcGF5bG9hZCA9IHBheWxvYWRzX2xpdmUubGlzdFtuZXh0X2luZGV4XTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9yZWxhdGlvbiA9IGhpZXJhcmNoeV9tYXAucmVsYXRpb25bcHJldl9wYXlsb2FkLmlkXTtcclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X2xldmVsID0gcHJldl9wYXlsb2FkLmxldmVsO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X3BhcmVudF9wYXlsb2FkID0gcGF5bG9hZHNfbGl2ZS5nZXQoXHJcblx0XHRcdFx0Ly8gXHRwcmV2X3JlbGF0aW9uLnBhcmVudFxyXG5cdFx0XHRcdC8vICk7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfaXNfcGFyZW50ID0gcHJldl9wYXlsb2FkLmlkIGluIGhpZXJhcmNoeV9tYXAuc2l6ZTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgaW5pdF9sZXZlbCA9IGluaXRfcGF5bG9hZC5sZXZlbDtcclxuXHRcdFx0XHQvLyBjb25zdCBtYXliZV9sZXZlbCA9XHJcblx0XHRcdFx0Ly8gXHQocHJldl9pc19wYXJlbnRcclxuXHRcdFx0XHQvLyBcdFx0PyBwcmV2X3BheWxvYWQubGV2ZWxcclxuXHRcdFx0XHQvLyBcdFx0OiBwcmV2X3BhcmVudF9wYXlsb2FkLmxldmVsKSArIDE7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHggPSBjbGllbnRYIC0gaXg7XHJcblx0XHRcdFx0Ly8gY29uc3Qgc2hvdWxkX2xldmVsID0gaW5pdF9sZXZlbCArIHggLyAyMDtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3Qgb2Zmc2V0ID0gaW5pdF9wYXlsb2FkX25vZGVfcG9zaXRpb24gKyBjbGllbnRZIC0gaXk7XHJcblxyXG5cdFx0XHRcdC8vIHNldFRodW1iUHJvcHMoe1xyXG5cdFx0XHRcdC8vIFx0bm9kZV9wcm9wczogZ2V0Tm9kZVByb3BzKFxyXG5cdFx0XHRcdC8vIFx0XHR7IC4uLmluaXRfcGF5bG9hZCwgbGV2ZWw6IHNob3VsZF9sZXZlbCB9LFxyXG5cdFx0XHRcdC8vIFx0XHRzdGF0ZVxyXG5cdFx0XHRcdC8vIFx0KSxcclxuXHRcdFx0XHQvLyBcdG9mZnNldCxcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHQvLyBzZXRUaHVtYlByb3BzKHtcclxuXHRcdFx0XHQvLyBcdG5vZGVfcHJvcHM6IGdldE5vZGVQcm9wcyhcclxuXHRcdFx0XHQvLyBcdFx0eyAuLi5pbml0X3BheWxvYWQsIGxldmVsOiBjbGllbnRYIC8gMjAgfSxcclxuXHRcdFx0XHQvLyBcdFx0c3RhdGVcclxuXHRcdFx0XHQvLyBcdCksXHJcblx0XHRcdFx0Ly8gXHRvZmZzZXQsXHJcblx0XHRcdFx0Ly8gfSk7XHJcblxyXG5cdFx0XHRcdC8vIGlmIChcclxuXHRcdFx0XHQvLyBcdGlzRW1wdHkocHJldl9yZWxhdGlvbi5uZXh0X3NpYmxpbmcpICYmXHJcblx0XHRcdFx0Ly8gXHQhcHJldl9pc19wYXJlbnRcclxuXHRcdFx0XHQvLyApIHtcclxuXHRcdFx0XHQvLyBcdGlmIChzaG91bGRfbGV2ZWwgPCBtYXliZV9sZXZlbCkge1xyXG5cdFx0XHRcdC8vIFx0XHRpbml0X3BheWxvYWQubGV2ZWwgPSBzaG91bGRfbGV2ZWw7XHJcblx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0Ly8gfSBlbHNlIHtcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0Ly8gaW5pdF9wYXlsb2FkLmxldmVsID0gbWF5YmVfbGV2ZWw7XHJcblxyXG5cdFx0XHRcdHBheWxvYWRzX2xpdmUuc3BsaWNlKGluaXRfaW5kZXgsIDEpO1xyXG5cdFx0XHRcdGhpZXJhcmNoeV9hbmFseXplcl9saXZlLm9uUmVtb3ZlZChcclxuXHRcdFx0XHRcdGluaXRfcGF5bG9hZCxcclxuXHRcdFx0XHRcdGluaXRfaW5kZXgsXHJcblx0XHRcdFx0XHRwYXlsb2Fkc19saXZlLmxpc3RcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRwYXlsb2Fkc19saXZlLnNwbGljZShsaXZlX2luZGV4ID4+IDAsIDAsIGluaXRfcGF5bG9hZCk7XHJcblx0XHRcdFx0aGllcmFyY2h5X2FuYWx5emVyX2xpdmUub25JbnNlcnRlZChcclxuXHRcdFx0XHRcdGluaXRfcGF5bG9hZCxcclxuXHRcdFx0XHRcdGxpdmVfaW5kZXggPj4gMCxcclxuXHRcdFx0XHRcdHBheWxvYWRzX2xpdmUubGlzdFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGxldCBzdGFydF9zdGFtcF9kaXNwYXRjaCA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdFx0dHlwZTogXCJzZXRcIixcclxuXHRcdFx0XHRcdGFmZmVjdDogKCkgPT4gKHtcclxuXHRcdFx0XHRcdFx0cGF5bG9hZHM6IHBheWxvYWRzX2xpdmUsXHJcblx0XHRcdFx0XHRcdGhpZXJhcmNoeV9hbmFseXplcjogaGllcmFyY2h5X2FuYWx5emVyX2xpdmUsXHJcblx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdERhdGUubm93KCkgLSBzdGFydF9zdGFtcCxcclxuXHRcdFx0XHRcdERhdGUubm93KCkgLSBzdGFydF9zdGFtcF9kaXNwYXRjaFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgY2xlYW5fdXAgPSBsaXN0ZW4oXCJtb3VzZXVwXCIpKCgpID0+IHtcclxuXHRcdFx0XHRjbGVhbl9tb3ZlKCk7XHJcblx0XHRcdFx0Y2xlYW5fdXAoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9LCBbcmVmLmN1cnJlbnRdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN9IHJlZj17cmVmfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0aHVtYlwiXHJcblx0XHRcdFx0XHRzdHlsZT17eyB0b3A6IHRodW1iX3Byb3BzLm9mZnNldCArIFwicHhcIiB9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxOb2RlIHsuLi50aHVtYl9wcm9wcy5ub2RlX3Byb3BzfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XHJcblx0XHRcdFx0e3N0YXRlLnBheWxvYWRzLm1hcCgocGF5bG9hZCkgPT4gKFxyXG5cdFx0XHRcdFx0PE5vZGUga2V5PXtwYXlsb2FkLmlkfSB7Li4uZ2V0Tm9kZVByb3BzKHBheWxvYWQsIHN0YXRlKX0gLz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0Tm9kZVByb3BzKHBheWxvYWQsIHN0YXRlKSB7XHJcblx0Y29uc3QgcmVkdWNlciA9IChyZWxheWVkLCBba2V5LCB2YWx1ZV0pID0+IHtcclxuXHRcdGlmIChzdGF0ZS5yZWxheWVkLmhhcyhrZXkpKSB7XHJcblx0XHRcdHJlbGF5ZWRba2V5XSA9IHZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlbGF5ZWQ7XHJcblx0fTtcclxuXHRjb25zdCByZWxheWVkX3Byb3BzID0gT2JqZWN0LmVudHJpZXMocGF5bG9hZCkucmVkdWNlKHJlZHVjZXIsIHt9KTtcclxuXHRjb25zdCBwYXlsb2FkX3Byb3BzID0gcGF5bG9hZC5wcm9wcztcclxuXHRjb25zdCBtZXRhX3Byb3BzID0ge1xyXG5cdFx0aWQ6IHBheWxvYWQuaWQsXHJcblx0XHRsZXZlbDogcGF5bG9hZC5sZXZlbCxcclxuXHRcdGNhbl9leHBhbmQ6IHBheWxvYWQuY2FuX2V4cGFuZCxcclxuXHR9O1xyXG5cclxuXHRpZiAoXCJ0eXBlX3NlbGZcIiBpbiBwYXlsb2FkKSB7XHJcblx0XHRtZXRhX3Byb3BzLml0ZW1fdHlwZSA9IHBheWxvYWQudHlwZV9zZWxmO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRtZXRhX3Byb3BzLml0ZW1fdHlwZSA9IHN0YXRlLml0ZW1fdHlwZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczogeyAuLi5wYXlsb2FkX3Byb3BzLCAuLi5yZWxheWVkX3Byb3BzIH0sXHJcblx0XHQuLi5tZXRhX3Byb3BzLFxyXG5cdH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==