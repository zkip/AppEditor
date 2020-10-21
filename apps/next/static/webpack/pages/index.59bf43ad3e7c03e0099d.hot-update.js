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
    var start_stamp = Date.now();

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
      lineNumber: 376,
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
      lineNumber: 551,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "holder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
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
      lineNumber: 553,
      columnNumber: 5
    }
  }, __jsx(Node, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, thumb_props.node_props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 6
    }
  })))), __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 4
    }
  }, state.payloads.map(function (payload) {
    return __jsx(Node, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      key: payload.id
    }, getNodeProps(payload, state), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3V0bGluZS9PdXRsaW5lLmpzeCJdLCJuYW1lcyI6WyJub2RlX21hcCIsImRvbV9wYXlsb2FkX21hcCIsIk1hcCIsIk5vZGUiLCJkYXRhIiwidG9wX3BheWxvYWQiLCJuYW1lIiwiaWQiLCJsZXZlbCIsImNoaWxkcmVuIiwidG9wX25vZGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwYXlsb2FkIiwiZG9tIiwiY3VycmVudCIsInJhdyIsInRvcCIsInNldCIsInBhZGRpbmdMZWZ0IiwibGVuZ3RoIiwibWFwIiwiZ2V0UGF5bG9hZCIsIkZsYXROb2RlIiwiZm9yd2FyZFJlZiIsInJlZiIsIml0ZW1fdHlwZSIsInByb3BzIiwicmVzdCIsIkl0ZW0iLCJsaW5lSGVpZ2h0IiwiQXJyYXlNYXBwZXIiLCJhcnJheSIsImNvbnN0cnVjdG9yIiwibGlzdCIsIml0ZW0iLCJjbG9uZSIsInNsaWNlIiwicmVtb3ZlIiwic3BsaWNlIiwic3RhcnRfcG9zaXRpb24iLCJkZWxldGVfY291bnQiLCJhcHBlbmRfaXRlbXMiLCJiZV9jdWxsZWQiLCJnZXQiLCJtYWtlT3V0bGluZVN0YXRlIiwicGF5bG9hZHMiLCJyZWxheWVkIiwiU2V0IiwiaGllcmFyY2h5X21hcCIsInJlY29yZHMiLCJSZWxhdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsIm5leHRfc2libGluZyIsInVuZGVmaW5lZCIsInByZXZfc2libGluZyIsInBhcmVudCIsImNoaWxkIiwiZ2VuSGllcmFyY2h5QW5hbHl6ZXIiLCJyZWxhdGlvbiIsInNpemUiLCJsaXZlX3JlbGF0aW9uX21hcCIsImxpdmVfc2l6ZV9tYXAiLCJvbkluc2VydGVkIiwiaW5kZXgiLCJpc19maXJzdCIsImlzX3RvcCIsImlzX2xhc3QiLCJwcmV2X2luZGV4IiwibmV4dF9pbmRleCIsInByZXZfaWQiLCJuZXh0X2lkIiwicHJldl9wYXlsb2FkIiwicHJldl9sZXZlbCIsImRpZmZfbGV2ZWwiLCJwcmV2X3JlbGF0aW9uIiwiZmFsbGJhY2siLCJuZXh0X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX2lkIiwiZ2V0UmVjdXJzaXZlUGFyZW50IiwicGFyZW50X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX3JlbGF0aW9uIiwiY291bnQiLCJwYXJlbnRfaWQiLCJvblJlbW92ZWQiLCJpc05vdEVtcHR5IiwibmV4dF9zaWJsaW5nX3JlbGF0aW9uIiwiYXBwbHkiLCJnZXRIaWVyYXJjaHlNYXAiLCJleHBvcnRzIiwidXNlT3V0bGluZVJlZHVjZXIiLCJzdGF0ZSIsImhpZXJhcmNoeV9hbmFseXplciIsInVzZU1lbW8iLCJyZWR1Y2VyIiwidXNlUmVkdWNlciIsImFjdGlvbiIsInN0YXJ0X3N0YW1wIiwiRGF0ZSIsIm5vdyIsInR5cGUiLCJleHRyYSIsImV4dHJhX2RhdGEiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW0iLCJhZmZlY3QiLCJFbXB0eU5vZGUiLCJjbGFzc05hbWUiLCJzdHlsZSIsImNscyIsImpvaW5CeVNwYWNlIiwidXNlQ29tcG9uZW50SW5kZXhlciIsIm1hcHBlciIsImRpc3BhdGNoIiwidXNlU3RhdGUiLCJvZmZzZXQiLCJub2RlX3Byb3BzIiwidGh1bWJfcHJvcHMiLCJzZXRUaHVtYlByb3BzIiwidG9wX25vZGVfZG9tIiwidG9wX2JvdW5kIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGlzdGVuIiwiZSIsInBhdGgiLCJjbGllbnRYIiwiY2xpZW50WSIsImxvY2FsX29mZnNldCIsInkiLCJpbml0X2luZGV4IiwiaW5pdF9wYXlsb2FkX25vZGVfcG9zaXRpb24iLCJpeCIsIml5IiwicGF5bG9hZHNfbG9ja2VkIiwiaGllcmFyY2h5X2FuYWx5emVyX2xvY2tlZCIsImluaXRfcGF5bG9hZCIsImNsZWFuX21vdmUiLCJwYXlsb2Fkc19saXZlIiwiaGllcmFyY2h5X2FuYWx5emVyX2xpdmUiLCJsaXZlX2luZGV4IiwiY2xlYW5fdXAiLCJnZXROb2RlUHJvcHMiLCJrZXkiLCJ2YWx1ZSIsImhhcyIsInJlbGF5ZWRfcHJvcHMiLCJlbnRyaWVzIiwicmVkdWNlIiwicGF5bG9hZF9wcm9wcyIsIm1ldGFfcHJvcHMiLCJjYW5fZXhwYW5kIiwidHlwZV9zZWxmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxRQUFRLEdBQUcsRUFBakI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsSUFBSUMsR0FBSixFQUF4Qjs7QUFFUCxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQUEsbUJBQ1NELElBRFQsQ0FDL0JFLElBRCtCO0FBQUEsTUFDL0JBLElBRCtCLDJCQUN4QixFQUR3QjtBQUFBLE1BQ3BCQyxFQURvQixHQUNTSCxJQURULENBQ3BCRyxFQURvQjtBQUFBLE1BQ2hCQyxLQURnQixHQUNTSixJQURULENBQ2hCSSxLQURnQjtBQUFBLHVCQUNTSixJQURULENBQ1RLLFFBRFM7QUFBQSxNQUNUQSxRQURTLCtCQUNFLEVBREY7QUFFdkMsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxPQUFPLEdBQUc7QUFDZlAsVUFBSSxFQUFKQSxJQURlO0FBRWZDLFFBQUUsRUFBRkEsRUFGZTtBQUdmRSxjQUFRLEVBQVJBLFFBSGU7QUFJZkssU0FBRyxFQUFFSixRQUFRLENBQUNLLE9BSkM7QUFLZkMsU0FBRyxFQUFFWixJQUxVO0FBTWZhLFNBQUcsRUFBRVo7QUFOVSxLQUFoQjtBQVFBTCxZQUFRLENBQUNPLEVBQUQsQ0FBUixHQUFlTSxPQUFmO0FBQ0FaLG1CQUFlLENBQUNpQixHQUFoQixDQUFvQlIsUUFBUSxDQUFDSyxPQUE3QixFQUFzQ0Ys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Z0csR0FBZ0I7QUFBQSxRQUFYQyxLQUFXOztBQUMxQyxRQUFJcEQsS0FBSyxDQUFDN0MsT0FBTixDQUFja0csR0FBZCxDQUFrQkYsR0FBbEIsQ0FBSixFQUE0QjtBQUMzQmhHLGFBQU8sQ0FBQ2dHLEdBQUQsQ0FBUCxHQUFlQyxLQUFmO0FBQ0E7O0FBQ0QsV0FBT2pHLE9BQVA7QUFDQSxHQUxEOztBQU1BLE1BQU1tRyxhQUFhLEdBQUc5RixNQUFNLENBQUMrRixPQUFQLENBQWV0SSxPQUFmLEVBQXdCdUksTUFBeEIsQ0FBK0JyRCxPQUEvQixFQUF3QyxFQUF4QyxDQUF0QjtBQUNBLE1BQU1zRCxhQUFhLEdBQUd4SSxPQUFPLENBQUNjLEtBQTlCO0FBQ0EsTUFBTTJILFVBQVUsR0FBRztBQUNsQi9JLE1BQUUsRUFBRU0sT0FBTyxDQUFDTixFQURNO0FBRWxCQyxTQUFLLEVBQUVLLE9BQU8sQ0FBQ0wsS0FGRztBQUdsQitJLGNBQVUsRUFBRTFJLE9BQU8sQ0FBQzBJO0FBSEYsR0FBbkI7O0FBTUEsTUFBSSxlQUFlMUksT0FBbkIsRUFBNEI7QUFDM0J5SSxjQUFVLENBQUM1SCxTQUFYLEdBQXVCYixPQUFPLENBQUMySSxTQUEvQjtBQUNBLEdBRkQsTUFFTztBQUNORixjQUFVLENBQUM1SCxTQUFYLEdBQXVCa0UsS0FBSyxDQUFDbEUsU0FBN0I7QUFDQTs7QUFFRDtBQUNDQyxTQUFLLGtDQUFPMEgsYUFBUCxHQUF5QkgsYUFBekI7QUFETixLQUVJSSxVQUZKO0FBSUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTliZjQzYWQzZTdjMDNlMDA5OWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpvaW5CeVNwYWNlLCBpbkJvdW5kLCBpbkFycmF5Qm91bmQgfSBmcm9tIFwiQC91dGlscy9hcnJheVwiO1xyXG5pbXBvcnQgeyBmYWxsYmFjaywgbGlzdGVuIH0gZnJvbSBcIkAvdXRpbHMvZm5cIjtcclxuaW1wb3J0IHtcclxuXHR1c2VSZWYsXHJcblx0dXNlRWZmZWN0LFxyXG5cdGZvcndhcmRSZWYsXHJcblx0dXNlU3RhdGUsXHJcblx0dXNlUmVkdWNlcixcclxuXHR1c2VDYWxsYmFjayxcclxuXHR1c2VNZW1vLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL091dGxpbmUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZUNvbXBvbmVudEluZGV4ZXIgfSBmcm9tIFwiQC91dGlscy91c2VzL21hcHBlclwiO1xyXG5pbXBvcnQgeyBUaW1pbmdJbmRleCB9IGZyb20gXCJAL3V0aWxzL2luZGljZXMvdGltaW5nXCI7XHJcbmltcG9ydCB7IGlzRW1wdHksIGlzTm90RW1wdHkgfSBmcm9tIFwiQC91dGlscy9hc3NlcnRzXCI7XHJcbmltcG9ydCBuZXh0IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiQC91dGlscy9hcnJheVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vZGVfbWFwID0ge307XHJcbmV4cG9ydCBjb25zdCBkb21fcGF5bG9hZF9tYXAgPSBuZXcgTWFwKCk7XHJcblxyXG5jb25zdCBOb2RlID0gKHsgZGF0YSwgdG9wX3BheWxvYWQgfSkgPT4ge1xyXG5cdGNvbnN0IHsgbmFtZSA9IFwiXCIsIGlkLCBsZXZlbCwgY2hpbGRyZW4gPSBbXSB9ID0gZGF0YTtcclxuXHRjb25zdCB0b3Bfbm9kZSA9IHVzZVJlZigpO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBwYXlsb2FkID0ge1xyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHRpZCxcclxuXHRcdFx0Y2hpbGRyZW4sXHJcblx0XHRcdGRvbTogdG9wX25vZGUuY3VycmVudCxcclxuXHRcdFx0cmF3OiBkYXRhLFxyXG5cdFx0XHR0b3A6IHRvcF9wYXlsb2FkLFxyXG5cdFx0fTtcclxuXHRcdG5vZGVfbWFwW2lkXSA9IHBheWxvYWQ7XHJcblx0XHRkb21fcGF5bG9hZF9tYXAuc2V0KHRvcF9ub2RlLmN1cnJlbnQsIHBheWxvYWQpO1xyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0ZG9tX3BheWxvYWRfbWFwLmRlbGV0ZSh0b3Bfbm9kZS5jdXJyZW50KTtcclxuXHRcdFx0ZGVsZXRlIG5vZGVfbWFwW2lkXTtcclxuXHRcdH07XHJcblx0fSwgW3RvcF9ub2RlLmN1cnJlbnQsIGRhdGFdKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiByZWY9e3RvcF9ub2RlfSBjbGFzc05hbWU9XCJub2RlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogYCR7bGV2ZWwgKiAyMH1weGAgfX0+XHJcblx0XHRcdFx0e25hbWV9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7Y2hpbGRyZW4ubGVuZ3RoID4gMCAmJiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGlsZHJlblwiPlxyXG5cdFx0XHRcdFx0e2NoaWxkcmVuLm1hcCgoZGF0YSkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8Tm9kZVxyXG5cdFx0XHRcdFx0XHRcdGtleT17ZGF0YS5pZH1cclxuXHRcdFx0XHRcdFx0XHRkYXRhPXtkYXRhfVxyXG5cdFx0XHRcdFx0XHRcdHRvcF9wYXlsb2FkPXt0b3BfcGF5bG9hZH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXlsb2FkKCkge31cclxuXHJcbmNvbnN0IEZsYXROb2RlID0gZm9yd2FyZFJlZihcclxuXHQoeyBpdGVtX3R5cGUsIGxldmVsID0gMCwgcHJvcHMgPSB7fSwgLi4ucmVzdCB9ID0ge30sIHJlZikgPT4ge1xyXG5cdFx0Y29uc3QgSXRlbSA9IGl0ZW1fdHlwZTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm9kZVwiIHJlZj17cmVmfT5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0aXRsZVwiXHJcblx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nTGVmdDogYCR7bGV2ZWwgKiAyMH1weGAgfX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8SXRlbSB7Li4ucHJvcHN9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbik7XHJcblxyXG5jb25zdCBsaW5lSGVpZ2h0ID0gMjA7XHJcblxyXG5mdW5jdGlvbiBBcnJheU1hcHBlcihhcnJheSkge1xyXG5cdGZ1bmN0aW9uIGNvbnN0cnVjdG9yKHsgbGlzdCwgbWFwID0ge30gfSkge1xyXG5cdFx0bGlzdC5tYXAoKGl0ZW0pID0+IChtYXBbaXRlbS5pZF0gPSBpdGVtKSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xvbmUoKSB7XHJcblx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvcih7IGxpc3Q6IGxpc3Quc2xpY2UoKSwgbWFwOiB7fSB9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiByZW1vdmUoaWQpIHtcclxuXHRcdFx0ZGVsZXRlIG1hcFtpZF07XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc3BsaWNlKHN0YXJ0X3Bvc2l0aW9uLCBkZWxldGVfY291bnQsIC4uLmFwcGVuZF9pdGVtcykge1xyXG5cdFx0XHRjb25zdCBiZV9jdWxsZWQgPSBsaXN0LnNwbGljZShcclxuXHRcdFx0XHRzdGFydF9wb3NpdGlvbixcclxuXHRcdFx0XHRkZWxldGVfY291bnQsXHJcblx0XHRcdFx0Li4uYXBwZW5kX2l0ZW1zXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRiZV9jdWxsZWQubWFwKCh7IGlkIH0pID0+IHJlbW92ZShpZCkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIGJlX2N1bGxlZDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBtYXAoLi4uYXJncykge1xyXG5cdFx0XHRyZXR1cm4gbGlzdC5tYXAoLi4uYXJncyk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0KGlkKSB7XHJcblx0XHRcdHJldHVybiBtYXBbaWRdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGdldCxcclxuXHRcdFx0Y2xvbmUsXHJcblx0XHRcdHJlbW92ZSxcclxuXHRcdFx0c3BsaWNlLFxyXG5cdFx0XHRsaXN0LFxyXG5cdFx0XHRtYXAsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNvbnN0cnVjdG9yKHsgbGlzdDogYXJyYXkgfSk7XHJcbn1cclxuXHJcbi8vIHR5cGUgUGF5bG9hZCB7IGlkLCBsZXZlbCwgY2FuX2V4cGFuZCwgdHlwZV9zZWxmLCBwcm9wcyB9XHJcbi8vIHR5cGUgUGF5bG9hZExpc3QgW11QYXlsb2FkXHJcbmV4cG9ydCBjb25zdCBtYWtlT3V0bGluZVN0YXRlID0gKHtcclxuXHRpdGVtX3R5cGUgPSBudWxsLFxyXG5cdHBheWxvYWRzID0gW10sXHJcblx0cmVsYXllZCA9IG5ldyBTZXQoW1wiaWRcIiwgXCJsZXZlbFwiXSksXHJcbn0gPSB7fSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRoaWVyYXJjaHlfbWFwOiB7fSxcclxuXHRcdGl0ZW1fdHlwZSxcclxuXHRcdHBheWxvYWRzOiBBcnJheU1hcHBlcihwYXlsb2FkcyksXHJcblx0XHRyZWxheWVkLFxyXG5cdFx0cmVjb3JkczogbmV3IE1hcCgpLFxyXG5cdH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBSZWxhdGlvbihpZCwgeyAuLi5wcm9wcyB9KSB7XHJcblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcblx0XHR7XHJcblx0XHRcdGlkLFxyXG5cdFx0XHRuZXh0X3NpYmxpbmc6IHVuZGVmaW5lZCxcclxuXHRcdFx0cHJldl9zaWJsaW5nOiB1bmRlZmluZWQsXHJcblx0XHRcdHBhcmVudDogdW5kZWZpbmVkLFxyXG5cdFx0XHRjaGlsZDogdW5kZWZpbmVkLFxyXG5cdFx0fSxcclxuXHRcdHByb3BzXHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuSGllcmFyY2h5QW5hbHl6ZXIoe30gPSB7fSkge1xyXG5cdGZ1bmN0aW9uIGNvbnN0cnVjdG9yKHsgaGllcmFyY2h5X21hcCA9IHsgcmVsYXRpb246IHt9LCBzaXplOiB7fSB9IH0gPSB7fSkge1xyXG5cdFx0bGV0IHtcclxuXHRcdFx0cmVsYXRpb246IGxpdmVfcmVsYXRpb25fbWFwLFxyXG5cdFx0XHRzaXplOiBsaXZlX3NpemVfbWFwLFxyXG5cdFx0fSA9IGhpZXJhcmNoeV9tYXA7XHJcblxyXG5cdFx0Ly8gY29uc29sZS5sb2cobGl2ZV9zaXplX21hcCk7XHJcblxyXG5cdFx0Ly8gdHlwZSBIaWVyYXJjaHlOb2RlIFBheWxvYWRcclxuXHRcdGZ1bmN0aW9uIG9uSW5zZXJ0ZWQoeyBsZXZlbCwgaWQgfSwgaW5kZXgsIHBheWxvYWRzKSB7XHJcblx0XHRcdGNvbnN0IGlzX2ZpcnN0ID0gaW5kZXggPT09IDA7XHJcblx0XHRcdGNvbnN0IGlzX3RvcCA9IGxldmVsID09PSAwO1xyXG5cdFx0XHRjb25zdCBpc19sYXN0ID0gaW5kZXggPT09IHBheWxvYWRzLmxlbmd0aCAtIDE7XHJcblx0XHRcdGNvbnN0IHByZXZfaW5kZXggPSBpbmRleCAtIDE7XHJcblx0XHRcdGNvbnN0IG5leHRfaW5kZXggPSBpbmRleCArIDE7XHJcblx0XHRcdGNvbnN0IHByZXZfaWQgPSBpc19maXJzdCA/IHVuZGVmaW5lZCA6IHBheWxvYWRzW3ByZXZfaW5kZXhdLmlkO1xyXG5cdFx0XHRjb25zdCBuZXh0X2lkID0gaXNfbGFzdCA/IHVuZGVmaW5lZCA6IHBheWxvYWRzW25leHRfaW5kZXhdLmlkO1xyXG5cdFx0XHRjb25zdCBwcmV2X3BheWxvYWQgPSBwYXlsb2Fkc1twcmV2X2luZGV4XTtcclxuXHRcdFx0Y29uc3QgcHJldl9sZXZlbCA9ICFpc19maXJzdCAmJiBwcmV2X3BheWxvYWQubGV2ZWw7XHJcblx0XHRcdGNvbnN0IGRpZmZfbGV2ZWwgPSAhaXNfZmlyc3QgJiYgbGV2ZWwgLSBwcmV2X2xldmVsO1xyXG5cclxuXHRcdFx0Y29uc3QgcHJldl9yZWxhdGlvbiA9IGZhbGxiYWNrKFJlbGF0aW9uKGlkKSkoXHJcblx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9pZF1cclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgbmV4dF9yZWxhdGlvbiA9IGZhbGxiYWNrKFJlbGF0aW9uKGlkKSkoXHJcblx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbbmV4dF9pZF1cclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgcmVsYXRpb24gPSBmYWxsYmFjayhSZWxhdGlvbihpZCkpKGxpdmVfcmVsYXRpb25fbWFwW2lkXSk7XHJcblxyXG5cdFx0XHRpZiAoZGlmZl9sZXZlbCA+IDApIHtcclxuXHRcdFx0XHRwcmV2X3JlbGF0aW9uLmNoaWxkID0gaWQ7XHJcblx0XHRcdFx0cmVsYXRpb24ucGFyZW50ID0gaXNfZmlyc3QgfHwgaXNfdG9wID8gdW5kZWZpbmVkIDogcHJldl9pZDtcclxuXHJcblx0XHRcdFx0aWYgKCFpc19sYXN0ICYmIHJlbGF0aW9uLnBhcmVudCA9PT0gbmV4dF9yZWxhdGlvbi5wYXJlbnQpIHtcclxuXHRcdFx0XHRcdG5leHRfcmVsYXRpb24ucHJldl9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGRpZmZfbGV2ZWwgPT09IDApIHtcclxuXHRcdFx0XHRyZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBwcmV2X2lkO1xyXG5cdFx0XHRcdHJlbGF0aW9uLnBhcmVudCA9XHJcblx0XHRcdFx0XHRpc19maXJzdCB8fCBpc190b3AgPyB1bmRlZmluZWQgOiBwcmV2X3JlbGF0aW9uLnBhcmVudDtcclxuXHRcdFx0XHRwcmV2X3JlbGF0aW9uLm5leHRfc2libGluZyA9IGlkO1xyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2xhc3QgJiYgbmV4dF9yZWxhdGlvbi5wYXJlbnQgPT09IHJlbGF0aW9uLnBhcmVudCkge1xyXG5cdFx0XHRcdFx0cmVsYXRpb24ubmV4dF9zaWJsaW5nID0gbmV4dF9pZDtcclxuXHRcdFx0XHRcdG5leHRfcmVsYXRpb24ucHJldl9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0IHByZXZfc2libGluZ19pZCA9IGdldFJlY3Vyc2l2ZVBhcmVudChcclxuXHRcdFx0XHRcdHByZXZfaWQsXHJcblx0XHRcdFx0XHQtZGlmZl9sZXZlbFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHBhcmVudF9yZWxhdGlvbiA9IGZhbGxiYWNrKFJlbGF0aW9uKGlkKSkoXHJcblx0XHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X3NpYmxpbmdfaWRdXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRjb25zdCBwcmV2X3NpYmxpbmdfcmVsYXRpb24gPVxyXG5cdFx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9zaWJsaW5nX2lkXTtcclxuXHJcblx0XHRcdFx0cmVsYXRpb24ucGFyZW50ID1cclxuXHRcdFx0XHRcdGlzX2ZpcnN0IHx8IGlzX3RvcCA/IHVuZGVmaW5lZCA6IHBhcmVudF9yZWxhdGlvbi5wYXJlbnQ7XHJcblx0XHRcdFx0cmVsYXRpb24ucHJldl9zaWJsaW5nID0gaXNfbGFzdCA/IHVuZGVmaW5lZCA6IHByZXZfc2libGluZ19pZDtcclxuXHJcblx0XHRcdFx0aWYgKCFpc19maXJzdCkge1xyXG5cdFx0XHRcdFx0cHJldl9zaWJsaW5nX3JlbGF0aW9uLm5leHRfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCFpc19sYXN0ICYmIHJlbGF0aW9uLnBhcmVudCA9PT0gbmV4dF9yZWxhdGlvbi5wYXJlbnQpIHtcclxuXHRcdFx0XHRcdHBhcmVudF9yZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHRcdG5leHRfcmVsYXRpb24ucHJldl9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2ZpcnN0KSB7XHJcblx0XHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X3NpYmxpbmdfaWRdID0gcGFyZW50X3JlbGF0aW9uO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFpc190b3ApIHtcclxuXHRcdFx0XHRjb25zdCBzaXplID0gZmFsbGJhY2soMCkobGl2ZV9zaXplX21hcFtyZWxhdGlvbi5wYXJlbnRdKTtcclxuXHRcdFx0XHRsaXZlX3NpemVfbWFwW3JlbGF0aW9uLnBhcmVudF0gPSBzaXplICsgMTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFpc19maXJzdCkge1xyXG5cdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfaWRdID0gcHJldl9yZWxhdGlvbjtcclxuXHRcdFx0fVxyXG5cdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtpZF0gPSByZWxhdGlvbjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXRSZWN1cnNpdmVQYXJlbnQoaWQsIGNvdW50ID0gMCkge1xyXG5cdFx0XHRjb25zdCBwYXJlbnRfaWQgPVxyXG5cdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW2lkXSAmJiBsaXZlX3JlbGF0aW9uX21hcFtpZF0ucGFyZW50O1xyXG5cdFx0XHRpZiAoY291bnQgPiAxICYmIHBhcmVudF9pZCkge1xyXG5cdFx0XHRcdHJldHVybiBnZXRSZWN1cnNpdmVQYXJlbnQocGFyZW50X2lkLCBjb3VudCAtIDEpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBwYXJlbnRfaWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBvblJlbW92ZWQoeyBpZCB9LCBpbmRleCwgcGF5bG9hZHMpIHtcclxuXHRcdFx0Y29uc3QgaXNfZmlyc3QgPSBpbmRleCA9PT0gMDtcclxuXHRcdFx0Y29uc3QgaXNfbGFzdCA9IGluZGV4ID09PSBwYXlsb2Fkcy5sZW5ndGg7XHJcblx0XHRcdGNvbnN0IHByZXZfaW5kZXggPSBpbmRleCAtIDE7XHJcblx0XHRcdGNvbnN0IG5leHRfaW5kZXggPSBpbmRleDtcclxuXHRcdFx0Y29uc3QgcHJldl9pZCA9IGlzX2ZpcnN0ID8gdW5kZWZpbmVkIDogcGF5bG9hZHNbcHJldl9pbmRleF0uaWQ7XHJcblx0XHRcdGNvbnN0IG5leHRfaWQgPSBpc19sYXN0ID8gdW5kZWZpbmVkIDogcGF5bG9hZHNbbmV4dF9pbmRleF0uaWQ7XHJcblxyXG5cdFx0XHRjb25zdCBwcmV2X3JlbGF0aW9uID0gbGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9pZF07XHJcblx0XHRcdGNvbnN0IG5leHRfcmVsYXRpb24gPSBsaXZlX3JlbGF0aW9uX21hcFtuZXh0X2lkXTtcclxuXHRcdFx0Y29uc3QgcmVsYXRpb24gPSBsaXZlX3JlbGF0aW9uX21hcFtpZF07XHJcblxyXG5cdFx0XHRjb25zdCB7IHByZXZfc2libGluZywgbmV4dF9zaWJsaW5nLCBwYXJlbnQgfSA9IHJlbGF0aW9uO1xyXG5cclxuXHRcdFx0Y29uc3QgcHJldl9zaWJsaW5nX3JlbGF0aW9uID0gaXNOb3RFbXB0eShwcmV2X3NpYmxpbmcpXHJcblx0XHRcdFx0PyBsaXZlX3JlbGF0aW9uX21hcFtwcmV2X3NpYmxpbmddXHJcblx0XHRcdFx0OiB1bmRlZmluZWQ7XHJcblx0XHRcdGNvbnN0IG5leHRfc2libGluZ19yZWxhdGlvbiA9IGlzTm90RW1wdHkobmV4dF9zaWJsaW5nKVxyXG5cdFx0XHRcdD8gbGl2ZV9yZWxhdGlvbl9tYXBbbmV4dF9zaWJsaW5nXVxyXG5cdFx0XHRcdDogdW5kZWZpbmVkO1xyXG5cdFx0XHRjb25zdCBwYXJlbnRfcmVsYXRpb24gPSBpc05vdEVtcHR5KHBhcmVudClcclxuXHRcdFx0XHQ/IGxpdmVfcmVsYXRpb25fbWFwW3BhcmVudF1cclxuXHRcdFx0XHQ6IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdGlmIChpc05vdEVtcHR5KHByZXZfc2libGluZ19yZWxhdGlvbikpIHtcclxuXHRcdFx0XHRwcmV2X3JlbGF0aW9uLm5leHRfc2libGluZyA9IG5leHRfc2libGluZztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoaXNOb3RFbXB0eShuZXh0X3NpYmxpbmdfcmVsYXRpb24pKSB7XHJcblx0XHRcdFx0bmV4dF9yZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBwcmV2X3NpYmxpbmc7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGlzTm90RW1wdHkocGFyZW50X3JlbGF0aW9uKSAmJiBwYXJlbnRfcmVsYXRpb24uY2hpbGQgPT09IGlkKSB7XHJcblx0XHRcdFx0cGFyZW50X3JlbGF0aW9uLmNoaWxkID0gbmV4dF9zaWJsaW5nO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkZWxldGUgbGl2ZV9yZWxhdGlvbl9tYXBbaWRdO1xyXG5cclxuXHRcdFx0bGl2ZV9zaXplX21hcFtyZWxhdGlvbi5wYXJlbnRdLS07XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xvbmUoKSB7XHJcblx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvcih7XHJcblx0XHRcdFx0aGllcmFyY2h5X21hcDoge1xyXG5cdFx0XHRcdFx0cmVsYXRpb246IHsgLi4ubGl2ZV9yZWxhdGlvbl9tYXAgfSxcclxuXHRcdFx0XHRcdHNpemU6IHsgLi4ubGl2ZV9zaXplX21hcCB9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGFwcGx5KHsgaGllcmFyY2h5X21hcCB9KSB7XHJcblx0XHRcdGxpdmVfcmVsYXRpb25fbWFwID0gaGllcmFyY2h5X21hcC5yZWxhdGlvbjtcclxuXHRcdFx0bGl2ZV9zaXplX21hcCA9IGhpZXJhcmNoeV9tYXAuc2l6ZTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXRIaWVyYXJjaHlNYXAoKSB7XHJcblx0XHRcdHJldHVybiBoaWVyYXJjaHlfbWFwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGV4cG9ydHMgPSB7XHJcblx0XHRcdGNsb25lLFxyXG5cdFx0XHRhcHBseSxcclxuXHRcdFx0b25JbnNlcnRlZCxcclxuXHRcdFx0b25SZW1vdmVkLFxyXG5cdFx0XHRnZXRIaWVyYXJjaHlNYXAsXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKFtleHBvcnRzXSwgZXhwb3J0cyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY29uc3RydWN0b3Ioe30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlT3V0bGluZVJlZHVjZXIgPSAoe1xyXG5cdHN0YXRlID0gbWFrZU91dGxpbmVTdGF0ZSgpLFxyXG5cdGhpZXJhcmNoeV9hbmFseXplciA9IGdlbkhpZXJhcmNoeUFuYWx5emVyKCksXHJcbn0gPSB7fSkgPT4ge1xyXG5cdHN0YXRlLmhpZXJhcmNoeV9hbmFseXplciA9IGhpZXJhcmNoeV9hbmFseXplcjtcclxuXHJcblx0dXNlTWVtbygoKSA9PiB7XHJcblx0XHRzdGF0ZS5wYXlsb2Fkcy5tYXAoaGllcmFyY2h5X2FuYWx5emVyLm9uSW5zZXJ0ZWQpO1xyXG5cdH0sIFtzdGF0ZS5wYXlsb2Fkc10pO1xyXG5cclxuXHRjb25zdCByZWR1Y2VyID0gdXNlUmVkdWNlcigoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdFx0Y29uc3Qgc3RhcnRfc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cdFx0aWYgKGFjdGlvbi50eXBlID09PSBcImRlbGV0ZVwiKSB7XHJcblx0XHRcdGNvbnN0IHsgaW5kZXggfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgeyBwYXlsb2FkcyB9ID0gc3RhdGU7XHJcblx0XHRcdHN0YXRlLnBheWxvYWRzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBwYXlsb2FkcyB9O1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJzYXZlXCIpIHtcclxuXHRcdFx0Y29uc3QgeyBpZCwgZXh0cmEgPSAoKSA9PiAoe30pIH0gPSBhY3Rpb247XHJcblx0XHRcdGNvbnN0IHsgcmVjb3JkcywgcGF5bG9hZHMgfSA9IHN0YXRlO1xyXG5cdFx0XHRjb25zdCBleHRyYV9kYXRhID0gZXh0cmEoc3RhdGUpO1xyXG5cclxuXHRcdFx0cmVjb3Jkcy5zZXQoaWQsIHBheWxvYWRzLmNsb25lKCkpO1xyXG5cdFx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV4dHJhX2RhdGEpLm1hcCgoc3ltKSA9PiB7XHJcblx0XHRcdFx0cmVjb3Jkcy5zZXQoc3ltLCBleHRyYV9kYXRhW3N5bV0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCByZWNvcmRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInJlc3RvcmVcIikge1xyXG5cdFx0XHRjb25zdCB7IGlkID0gW10sIGV4dHJhID0gW10gfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgeyByZWNvcmRzIH0gPSBzdGF0ZTtcclxuXHJcblx0XHRcdHJlY29yZHMuZGVsZXRlKGlkKTtcclxuXHRcdFx0ZXh0cmEubWFwKChpZCkgPT4gcmVjb3Jkcy5kZWxldGUoaWQpKTtcclxuXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCByZWNvcmRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInNldEJhc2VkT25cIikge1xyXG5cdFx0XHRjb25zdCB7IGlkLCBhZmZlY3QgfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgcGF5bG9hZHMgPSBhZmZlY3Qoc3RhdGUucmVjb3Jkcy5nZXQoaWQpLmNsb25lKCksIHN0YXRlKTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBheWxvYWRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInNldFwiKSB7XHJcblx0XHRcdGNvbnN0IHsgYWZmZWN0IH0gPSBhY3Rpb247XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCAuLi5hZmZlY3Qoc3RhdGUpIH07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fSwgc3RhdGUpO1xyXG5cclxuXHRyZXR1cm4gcmVkdWNlcjtcclxufTtcclxuXHJcbmNvbnN0IEVtcHR5Tm9kZSA9IGZvcndhcmRSZWYoKHsgLi4ucmVzdCB9LCByZWYpID0+IChcclxuXHQ8ZGl2IHJlZj17cmVmfSB7Li4ucmVzdH0+PC9kaXY+XHJcbikpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtcclxuXHRyZWR1Y2VyID0gdXNlT3V0bGluZVJlZHVjZXIoKSxcclxuXHRjbGFzc05hbWUsXHJcblx0c3R5bGUsXHJcblx0Li4ucmVzdFxyXG59KSA9PiB7XHJcblx0Y29uc3QgcmVmID0gdXNlUmVmKCk7XHJcblx0Y29uc3QgY2xzID0gam9pbkJ5U3BhY2UoY2xhc3NOYW1lLCBcIk91dGxpbmVcIik7XHJcblx0Y29uc3QgW05vZGUsIG1hcHBlcl0gPSB1c2VDb21wb25lbnRJbmRleGVyKEZsYXROb2RlKTtcclxuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHJlZHVjZXI7XHJcblx0Y29uc3QgW3RodW1iX3Byb3BzLCBzZXRUaHVtYlByb3BzXSA9IHVzZVN0YXRlKHtcclxuXHRcdG9mZnNldDogMCxcclxuXHRcdG5vZGVfcHJvcHM6IHsgaXRlbV90eXBlOiBFbXB0eU5vZGUgfSxcclxuXHR9KTtcclxuXHRjb25zdCBwYXlsb2FkcyA9IHVzZVJlZigpO1xyXG5cdGNvbnN0IGhpZXJhcmNoeV9hbmFseXplciA9IHVzZVJlZigpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0cGF5bG9hZHMuY3VycmVudCA9IHN0YXRlLnBheWxvYWRzO1xyXG5cdH0sIFtzdGF0ZS5wYXlsb2Fkc10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aGllcmFyY2h5X2FuYWx5emVyLmN1cnJlbnQgPSBzdGF0ZS5oaWVyYXJjaHlfYW5hbHl6ZXI7XHJcblx0fSwgW3N0YXRlLmhpZXJhcmNoeV9hbmFseXplcl0pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFyZWYpIHJldHVybjtcclxuXHRcdGNvbnN0IHRvcF9ub2RlX2RvbSA9IHJlZi5jdXJyZW50O1xyXG5cdFx0Y29uc3QgdG9wX2JvdW5kID0gdG9wX25vZGVfZG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmV0dXJuIGxpc3RlbihcclxuXHRcdFx0XCJtb3VzZWRvd25cIixcclxuXHRcdFx0dG9wX25vZGVfZG9tXHJcblx0XHQpKChlKSA9PiB7XHJcblx0XHRcdGNvbnN0IHsgcGF0aCwgY2xpZW50WCwgY2xpZW50WSB9ID0gZTtcclxuXHJcblx0XHRcdGNvbnN0IGxvY2FsX29mZnNldCA9IChjbGllbnRZIC0gdG9wX2JvdW5kLnkpICUgbGluZUhlaWdodDtcclxuXHRcdFx0Y29uc3QgaW5pdF9pbmRleCA9XHJcblx0XHRcdFx0KGNsaWVudFkgLSB0b3BfYm91bmQueSAtIGxvY2FsX29mZnNldCkgLyBsaW5lSGVpZ2h0O1xyXG5cclxuXHRcdFx0Y29uc3QgaW5pdF9wYXlsb2FkX25vZGVfcG9zaXRpb24gPVxyXG5cdFx0XHRcdGluaXRfaW5kZXggKiBsaW5lSGVpZ2h0ICsgbG9jYWxfb2Zmc2V0O1xyXG5cclxuXHRcdFx0Ly8gZGlzcGF0Y2goe1xyXG5cdFx0XHQvLyBcdHR5cGU6IFwic2F2ZVwiLFxyXG5cdFx0XHQvLyBcdGlkLFxyXG5cdFx0XHQvLyBcdGV4dHJhOiAoeyBwYXlsb2FkcywgaGllcmFyY2h5X2FuYWx5emVyIH0pID0+ICh7XHJcblx0XHRcdC8vIFx0XHRbaW5pdF9wYXlsb2FkX2xldmVsX2lkXTogcGF5bG9hZHMubGlzdFtpbml0X2luZGV4XS5sZXZlbCxcclxuXHRcdFx0Ly8gXHRcdFtpbml0X2hpZXJhcmNoeV9hbmFseXplcl9pZF06IGhpZXJhcmNoeV9hbmFseXplci5jbG9uZSgpLFxyXG5cdFx0XHQvLyBcdH0pLFxyXG5cdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdC8vIGRpc3BhdGNoKHtcclxuXHRcdFx0Ly8gXHR0eXBlOiBcInNldFwiLFxyXG5cdFx0XHQvLyBcdGFmZmVjdDogKHsgcGF5bG9hZHMsIGhpZXJhcmNoeV9hbmFseXplciB9KSA9PiB7XHJcblx0XHRcdC8vIFx0XHRjb25zdCBbcGF5bG9hZF0gPSBwYXlsb2Fkcy5zcGxpY2UoaW5pdF9pbmRleCwgMSk7XHJcblx0XHRcdC8vIFx0XHRoaWVyYXJjaHlfYW5hbHl6ZXIub25SZW1vdmVkKFxyXG5cdFx0XHQvLyBcdFx0XHRwYXlsb2FkLFxyXG5cdFx0XHQvLyBcdFx0XHRpbml0X2luZGV4LFxyXG5cdFx0XHQvLyBcdFx0XHRwYXlsb2Fkcy5saXN0XHJcblx0XHRcdC8vIFx0XHQpO1xyXG5cdFx0XHQvLyBcdFx0cmV0dXJuIHsgcGF5bG9hZHMsIGhpZXJhcmNoeV9hbmFseXplciB9O1xyXG5cdFx0XHQvLyBcdH0sXHJcblx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgaXggPSBjbGllbnRYLFxyXG5cdFx0XHRcdGl5ID0gY2xpZW50WTtcclxuXHJcblx0XHRcdGNvbnN0IHBheWxvYWRzX2xvY2tlZCA9IHBheWxvYWRzLmN1cnJlbnQuY2xvbmUoKTtcclxuXHRcdFx0Y29uc3QgaGllcmFyY2h5X2FuYWx5emVyX2xvY2tlZCA9IGhpZXJhcmNoeV9hbmFseXplci5jdXJyZW50LmNsb25lKCk7XHJcblx0XHRcdGNvbnN0IGluaXRfcGF5bG9hZCA9IHBheWxvYWRzX2xvY2tlZC5saXN0W2luaXRfaW5kZXhdO1xyXG5cclxuXHRcdFx0Y29uc3QgY2xlYW5fbW92ZSA9IGxpc3RlbihcIm1vdXNlbW92ZVwiKSgoeyBjbGllbnRYLCBjbGllbnRZIH0pID0+IHtcclxuXHRcdFx0XHRsZXQgc3RhcnRfc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdGNvbnN0IHBheWxvYWRzX2xpdmUgPSBwYXlsb2Fkc19sb2NrZWQuY2xvbmUoKTtcclxuXHRcdFx0XHRjb25zdCBoaWVyYXJjaHlfYW5hbHl6ZXJfbGl2ZSA9IGhpZXJhcmNoeV9hbmFseXplcl9sb2NrZWQuY2xvbmUoKTtcclxuXHRcdFx0XHQvLyBjb25zdCBoaWVyYXJjaHlfbWFwID0gaGllcmFyY2h5X2FuYWx5emVyX2xpdmUuZ2V0SGllcmFyY2h5TWFwKCk7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IGxvY2FsX29mZnNldCA9IChjbGllbnRZIC0gdG9wX2JvdW5kLnkpICUgbGluZUhlaWdodDtcclxuXHRcdFx0XHRjb25zdCBsaXZlX2luZGV4ID1cclxuXHRcdFx0XHRcdChjbGllbnRZIC0gdG9wX2JvdW5kLnkgLSBsb2NhbF9vZmZzZXQpIC8gbGluZUhlaWdodDtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9pbmRleCA9IGxpdmVfaW5kZXggLSAxO1xyXG5cdFx0XHRcdC8vIGNvbnN0IG5leHRfaW5kZXggPSBsaXZlX2luZGV4ICsgMTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocHJldl9pbmRleCwgbmV4dF9pbmRleCk7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IGlzX2ZpcnN0ID0gbGl2ZV9pbmRleCA9PT0gMDtcclxuXHRcdFx0XHQvLyBjb25zdCBpc19sYXN0ID0gbGl2ZV9pbmRleCA9PT0gcGF5bG9hZHNfbGl2ZS5sZW5ndGggLSAxO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBpbml0X3JlbGF0aW9uID0gaGllcmFyY2h5X21hcC5yZWxhdGlvbltpbml0X3BheWxvYWQuaWRdO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X3BheWxvYWQgPSBwYXlsb2Fkc19saXZlLmxpc3RbcHJldl9pbmRleF07XHJcblx0XHRcdFx0Ly8gY29uc3QgbmV4dF9wYXlsb2FkID0gcGF5bG9hZHNfbGl2ZS5saXN0W25leHRfaW5kZXhdO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X3JlbGF0aW9uID0gaGllcmFyY2h5X21hcC5yZWxhdGlvbltwcmV2X3BheWxvYWQuaWRdO1xyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfbGV2ZWwgPSBwcmV2X3BheWxvYWQubGV2ZWw7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfcGFyZW50X3BheWxvYWQgPSBwYXlsb2Fkc19saXZlLmdldChcclxuXHRcdFx0XHQvLyBcdHByZXZfcmVsYXRpb24ucGFyZW50XHJcblx0XHRcdFx0Ly8gKTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9pc19wYXJlbnQgPSBwcmV2X3BheWxvYWQuaWQgaW4gaGllcmFyY2h5X21hcC5zaXplO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBpbml0X2xldmVsID0gaW5pdF9wYXlsb2FkLmxldmVsO1xyXG5cdFx0XHRcdC8vIGNvbnN0IG1heWJlX2xldmVsID1cclxuXHRcdFx0XHQvLyBcdChwcmV2X2lzX3BhcmVudFxyXG5cdFx0XHRcdC8vIFx0XHQ/IHByZXZfcGF5bG9hZC5sZXZlbFxyXG5cdFx0XHRcdC8vIFx0XHQ6IHByZXZfcGFyZW50X3BheWxvYWQubGV2ZWwpICsgMTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgeCA9IGNsaWVudFggLSBpeDtcclxuXHRcdFx0XHQvLyBjb25zdCBzaG91bGRfbGV2ZWwgPSBpbml0X2xldmVsICsgeCAvIDIwO1xyXG5cclxuXHRcdFx0XHRjb25zdCBvZmZzZXQgPSBpbml0X3BheWxvYWRfbm9kZV9wb3NpdGlvbiArIGNsaWVudFkgLSBpeTtcclxuXHJcblx0XHRcdFx0Ly8gc2V0VGh1bWJQcm9wcyh7XHJcblx0XHRcdFx0Ly8gXHRub2RlX3Byb3BzOiBnZXROb2RlUHJvcHMoXHJcblx0XHRcdFx0Ly8gXHRcdHsgLi4uaW5pdF9wYXlsb2FkLCBsZXZlbDogc2hvdWxkX2xldmVsIH0sXHJcblx0XHRcdFx0Ly8gXHRcdHN0YXRlXHJcblx0XHRcdFx0Ly8gXHQpLFxyXG5cdFx0XHRcdC8vIFx0b2Zmc2V0LFxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdC8vIHNldFRodW1iUHJvcHMoe1xyXG5cdFx0XHRcdC8vIFx0bm9kZV9wcm9wczogZ2V0Tm9kZVByb3BzKFxyXG5cdFx0XHRcdC8vIFx0XHR7IC4uLmluaXRfcGF5bG9hZCwgbGV2ZWw6IGNsaWVudFggLyAyMCB9LFxyXG5cdFx0XHRcdC8vIFx0XHRzdGF0ZVxyXG5cdFx0XHRcdC8vIFx0KSxcclxuXHRcdFx0XHQvLyBcdG9mZnNldCxcclxuXHRcdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgKFxyXG5cdFx0XHRcdC8vIFx0aXNFbXB0eShwcmV2X3JlbGF0aW9uLm5leHRfc2libGluZykgJiZcclxuXHRcdFx0XHQvLyBcdCFwcmV2X2lzX3BhcmVudFxyXG5cdFx0XHRcdC8vICkge1xyXG5cdFx0XHRcdC8vIFx0aWYgKHNob3VsZF9sZXZlbCA8IG1heWJlX2xldmVsKSB7XHJcblx0XHRcdFx0Ly8gXHRcdGluaXRfcGF5bG9hZC5sZXZlbCA9IHNob3VsZF9sZXZlbDtcclxuXHRcdFx0XHQvLyBcdH1cclxuXHRcdFx0XHQvLyB9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHQvLyBpbml0X3BheWxvYWQubGV2ZWwgPSBtYXliZV9sZXZlbDtcclxuXHJcblx0XHRcdFx0cGF5bG9hZHNfbGl2ZS5zcGxpY2UoaW5pdF9pbmRleCwgMSk7XHJcblx0XHRcdFx0aGllcmFyY2h5X2FuYWx5emVyX2xpdmUub25SZW1vdmVkKFxyXG5cdFx0XHRcdFx0aW5pdF9wYXlsb2FkLFxyXG5cdFx0XHRcdFx0aW5pdF9pbmRleCxcclxuXHRcdFx0XHRcdHBheWxvYWRzX2xpdmUubGlzdFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdHBheWxvYWRzX2xpdmUuc3BsaWNlKGxpdmVfaW5kZXggPj4gMCwgMCwgaW5pdF9wYXlsb2FkKTtcclxuXHRcdFx0XHRoaWVyYXJjaHlfYW5hbHl6ZXJfbGl2ZS5vbkluc2VydGVkKFxyXG5cdFx0XHRcdFx0aW5pdF9wYXlsb2FkLFxyXG5cdFx0XHRcdFx0bGl2ZV9pbmRleCA+PiAwLFxyXG5cdFx0XHRcdFx0cGF5bG9hZHNfbGl2ZS5saXN0XHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0ZGlzcGF0Y2goe1xyXG5cdFx0XHRcdFx0dHlwZTogXCJzZXRcIixcclxuXHRcdFx0XHRcdGFmZmVjdDogKCkgPT4gKHtcclxuXHRcdFx0XHRcdFx0cGF5bG9hZHM6IHBheWxvYWRzX2xpdmUsXHJcblx0XHRcdFx0XHRcdGhpZXJhcmNoeV9hbmFseXplcjogaGllcmFyY2h5X2FuYWx5emVyX2xpdmUsXHJcblx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhEYXRlLm5vdygpIC0gc3RhcnRfc3RhbXApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IGNsZWFuX3VwID0gbGlzdGVuKFwibW91c2V1cFwiKSgoKSA9PiB7XHJcblx0XHRcdFx0Y2xlYW5fbW92ZSgpO1xyXG5cdFx0XHRcdGNsZWFuX3VwKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSwgW3JlZi5jdXJyZW50LCBkaXNwYXRjaF0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Nsc30gcmVmPXtyZWZ9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhvbGRlclwiPlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInRodW1iXCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHRvcDogdGh1bWJfcHJvcHMub2Zmc2V0ICsgXCJweFwiIH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PE5vZGUgey4uLnRodW1iX3Byb3BzLm5vZGVfcHJvcHN9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpc3RcIj5cclxuXHRcdFx0XHR7c3RhdGUucGF5bG9hZHMubWFwKChwYXlsb2FkKSA9PiAoXHJcblx0XHRcdFx0XHQ8Tm9kZSBrZXk9e3BheWxvYWQuaWR9IHsuLi5nZXROb2RlUHJvcHMocGF5bG9hZCwgc3RhdGUpfSAvPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXROb2RlUHJvcHMocGF5bG9hZCwgc3RhdGUpIHtcclxuXHRjb25zdCByZWR1Y2VyID0gKHJlbGF5ZWQsIFtrZXksIHZhbHVlXSkgPT4ge1xyXG5cdFx0aWYgKHN0YXRlLnJlbGF5ZWQuaGFzKGtleSkpIHtcclxuXHRcdFx0cmVsYXllZFtrZXldID0gdmFsdWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVsYXllZDtcclxuXHR9O1xyXG5cdGNvbnN0IHJlbGF5ZWRfcHJvcHMgPSBPYmplY3QuZW50cmllcyhwYXlsb2FkKS5yZWR1Y2UocmVkdWNlciwge30pO1xyXG5cdGNvbnN0IHBheWxvYWRfcHJvcHMgPSBwYXlsb2FkLnByb3BzO1xyXG5cdGNvbnN0IG1ldGFfcHJvcHMgPSB7XHJcblx0XHRpZDogcGF5bG9hZC5pZCxcclxuXHRcdGxldmVsOiBwYXlsb2FkLmxldmVsLFxyXG5cdFx0Y2FuX2V4cGFuZDogcGF5bG9hZC5jYW5fZXhwYW5kLFxyXG5cdH07XHJcblxyXG5cdGlmIChcInR5cGVfc2VsZlwiIGluIHBheWxvYWQpIHtcclxuXHRcdG1ldGFfcHJvcHMuaXRlbV90eXBlID0gcGF5bG9hZC50eXBlX3NlbGY7XHJcblx0fSBlbHNlIHtcclxuXHRcdG1ldGFfcHJvcHMuaXRlbV90eXBlID0gc3RhdGUuaXRlbV90eXBlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7IC4uLnBheWxvYWRfcHJvcHMsIC4uLnJlbGF5ZWRfcHJvcHMgfSxcclxuXHRcdC4uLm1ldGFfcHJvcHMsXHJcblx0fTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9