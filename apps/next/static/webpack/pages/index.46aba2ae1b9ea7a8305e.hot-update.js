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

    console.log("---", Date.now() - start_stamp);
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
      lineNumber: 377,
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
      lineNumber: 552,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "holder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553,
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
      lineNumber: 554,
      columnNumber: 5
    }
  }, __jsx(Node, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, thumb_props.node_props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 6
    }
  })))), __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 4
    }
  }, state.payloads.map(function (payload) {
    return __jsx(Node, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      key: payload.id
    }, getNodeProps(payload, state), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3V0bGluZS9PdXRsaW5lLmpzeCJdLCJuYW1lcyI6WyJub2RlX21hcCIsImRvbV9wYXlsb2FkX21hcCIsIk1hcCIsIk5vZGUiLCJkYXRhIiwidG9wX3BheWxvYWQiLCJuYW1lIiwiaWQiLCJsZXZlbCIsImNoaWxkcmVuIiwidG9wX25vZGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwYXlsb2FkIiwiZG9tIiwiY3VycmVudCIsInJhdyIsInRvcCIsInNldCIsInBhZGRpbmdMZWZ0IiwibGVuZ3RoIiwibWFwIiwiZ2V0UGF5bG9hZCIsIkZsYXROb2RlIiwiZm9yd2FyZFJlZiIsInJlZiIsIml0ZW1fdHlwZSIsInByb3BzIiwicmVzdCIsIkl0ZW0iLCJsaW5lSGVpZ2h0IiwiQXJyYXlNYXBwZXIiLCJhcnJheSIsImNvbnN0cnVjdG9yIiwibGlzdCIsIml0ZW0iLCJjbG9uZSIsInNsaWNlIiwicmVtb3ZlIiwic3BsaWNlIiwic3RhcnRfcG9zaXRpb24iLCJkZWxldGVfY291bnQiLCJhcHBlbmRfaXRlbXMiLCJiZV9jdWxsZWQiLCJnZXQiLCJtYWtlT3V0bGluZVN0YXRlIiwicGF5bG9hZHMiLCJyZWxheWVkIiwiU2V0IiwiaGllcmFyY2h5X21hcCIsInJlY29yZHMiLCJSZWxhdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsIm5leHRfc2libGluZyIsInVuZGVmaW5lZCIsInByZXZfc2libGluZyIsInBhcmVudCIsImNoaWxkIiwiZ2VuSGllcmFyY2h5QW5hbHl6ZXIiLCJyZWxhdGlvbiIsInNpemUiLCJsaXZlX3JlbGF0aW9uX21hcCIsImxpdmVfc2l6ZV9tYXAiLCJvbkluc2VydGVkIiwiaW5kZXgiLCJpc19maXJzdCIsImlzX3RvcCIsImlzX2xhc3QiLCJwcmV2X2luZGV4IiwibmV4dF9pbmRleCIsInByZXZfaWQiLCJuZXh0X2lkIiwicHJldl9wYXlsb2FkIiwicHJldl9sZXZlbCIsImRpZmZfbGV2ZWwiLCJwcmV2X3JlbGF0aW9uIiwiZmFsbGJhY2siLCJuZXh0X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX2lkIiwiZ2V0UmVjdXJzaXZlUGFyZW50IiwicGFyZW50X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX3JlbGF0aW9uIiwiY291bnQiLCJwYXJlbnRfaWQiLCJvblJlbW92ZWQiLCJpc05vdEVtcHR5IiwibmV4dF9zaWJsaW5nX3JlbGF0aW9uIiwiYXBwbHkiLCJnZXRIaWVyYXJjaHlNYXAiLCJleHBvcnRzIiwidXNlT3V0bGluZVJlZHVjZXIiLCJzdGF0ZSIsImhpZXJhcmNoeV9hbmFseXplciIsInVzZU1lbW8iLCJyZWR1Y2VyIiwidXNlUmVkdWNlciIsImFjdGlvbiIsInN0YXJ0X3N0YW1wIiwiRGF0ZSIsIm5vdyIsInR5cGUiLCJleHRyYSIsImV4dHJhX2RhdGEiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW0iLCJhZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiRW1wdHlOb2RlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjbHMiLCJqb2luQnlTcGFjZSIsInVzZUNvbXBvbmVudEluZGV4ZXIiLCJtYXBwZXIiLCJkaXNwYXRjaCIsInVzZVN0YXRlIiwib2Zmc2V0Iiwibm9kZV9wcm9wcyIsInRodW1iX3Byb3BzIiwic2V0VGh1bWJQcm9wcyIsInRvcF9ub2RlX2RvbSIsInRvcF9ib3VuZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxpc3RlbiIsImUiLCJwYXRoIiwiY2xpZW50WCIsImNsaWVudFkiLCJsb2NhbF9vZmZzZXQiLCJ5IiwiaW5pdF9pbmRleCIsImluaXRfcGF5bG9hZF9ub2RlX3Bvc2l0aW9uIiwiaXgiLCJpeSIsInBheWxvYWRzX2xvY2tlZCIsImhpZXJhcmNoeV9hbmFseXplcl9sb2NrZWQiLCJpbml0X3BheWxvYWQiLCJjbGVhbl9tb3ZlIiwicGF5bG9hZHNfbGl2ZSIsImhpZXJhcmNoeV9hbmFseXplcl9saXZlIiwibGl2ZV9pbmRleCIsImNsZWFuX3VwIiwiZ2V0Tm9kZVByb3BzIiwia2V5IiwidmFsdWUiLCJoYXMiLCJyZWxheWVkX3Byb3BzIiwiZW50cmllcyIsInJlZHVjZSIsInBheWxvYWRfcHJvcHMiLCJtZXRhX3Byb3BzIiwiY2FuX2V4cGFuZCIsInR5cGVfc2VsZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLElBQUlDLEdBQUosRUFBeEI7O0FBRVAsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUFBLG1CQUNTRCxJQURULENBQy9CRSxJQUQrQjtBQUFBLE1BQy9CQSxJQUQrQiwyQkFDeEIsRUFEd0I7QUFBQSxNQUNwQkMsRUFEb0IsR0FDU0gsSUFEVCxDQUNwQkcsRUFEb0I7QUFBQSxNQUNoQkMsS0FEZ0IsR0FDU0osSUFEVCxDQUNoQkksS0FEZ0I7QUFBQSx1QkFDU0osSUFEVCxDQUNUSyxRQURTO0FBQUEsTUFDVEEsUUFEUywrQkFDRSxFQURGO0FBRXZDLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTUMsT0FBTyxHQUFHO0FBQ2ZQLFVBQUksRUFBSkEsSUFEZTtBQUVmQyxRQUFFLEVBQUZBLEVBRmU7QUFHZkUsY0FBUSxFQUFSQSxRQUhlO0FBSWZLLFNBQUcsRUFBRUosUUFBUSxDQUFDSyxPQUpDO0FBS2ZDLFNBQUcsRUFBRVosSUFMVTtBQU1mYSxTQUFHLEVBQUVaO0FBTlUsS0FBaEI7QUFRQUwsWUFBUSxDQUFDTyxFQUFELENBQVIsR0FBZU0sT0FBZjtBQUNBWixtQkFBZSxDQUFDaUIsR0FBaEIsQ0FBb0JSLFFBQVEsQ0FB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QStCK0UsS0FBL0IsRUFBc0M7QUFDckMsTUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ2hELE9BQUQsVUFBMkI7QUFBQTtBQUFBLFFBQWhCa0csR0FBZ0I7QUFBQSxRQUFYQyxLQUFXOztBQUMxQyxRQUFJdEQsS0FBSyxDQUFDN0MsT0FBTixDQUFjb0csR0FBZCxDQUFrQkYsR0FBbEIsQ0FBSixFQUE0QjtBQUMzQmxHLGFBQU8sQ0FBQ2tHLEdBQUQsQ0FBUCxHQUFlQyxLQUFmO0FBQ0E7O0FBQ0QsV0FBT25HLE9BQVA7QUFDQSxHQUxEOztBQU1BLE1BQU1xRyxhQUFhLEdBQUdoRyxNQUFNLENBQUNpRyxPQUFQLENBQWV4SSxPQUFmLEVBQXdCeUksTUFBeEIsQ0FBK0J2RCxPQUEvQixFQUF3QyxFQUF4QyxDQUF0QjtBQUNBLE1BQU13RCxhQUFhLEdBQUcxSSxPQUFPLENBQUNjLEtBQTlCO0FBQ0EsTUFBTTZILFVBQVUsR0FBRztBQUNsQmpKLE1BQUUsRUFBRU0sT0FBTyxDQUFDTixFQURNO0FBRWxCQyxTQUFLLEVBQUVLLE9BQU8sQ0FBQ0wsS0FGRztBQUdsQmlKLGNBQVUsRUFBRTVJLE9BQU8sQ0FBQzRJO0FBSEYsR0FBbkI7O0FBTUEsTUFBSSxlQUFlNUksT0FBbkIsRUFBNEI7QUFDM0IySSxjQUFVLENBQUM5SCxTQUFYLEdBQXVCYixPQUFPLENBQUM2SSxTQUEvQjtBQUNBLEdBRkQsTUFFTztBQUNORixjQUFVLENBQUM5SCxTQUFYLEdBQXVCa0UsS0FBSyxDQUFDbEUsU0FBN0I7QUFDQTs7QUFFRDtBQUNDQyxTQUFLLGtDQUFPNEgsYUFBUCxHQUF5QkgsYUFBekI7QUFETixLQUVJSSxVQUZKO0FBSUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDZhYmEyYWUxYjllYTdhODMwNWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpvaW5CeVNwYWNlLCBpbkJvdW5kLCBpbkFycmF5Qm91bmQgfSBmcm9tIFwiQC91dGlscy9hcnJheVwiO1xyXG5pbXBvcnQgeyBmYWxsYmFjaywgbGlzdGVuIH0gZnJvbSBcIkAvdXRpbHMvZm5cIjtcclxuaW1wb3J0IHtcclxuXHR1c2VSZWYsXHJcblx0dXNlRWZmZWN0LFxyXG5cdGZvcndhcmRSZWYsXHJcblx0dXNlU3RhdGUsXHJcblx0dXNlUmVkdWNlcixcclxuXHR1c2VDYWxsYmFjayxcclxuXHR1c2VNZW1vLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL091dGxpbmUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZUNvbXBvbmVudEluZGV4ZXIgfSBmcm9tIFwiQC91dGlscy91c2VzL21hcHBlclwiO1xyXG5pbXBvcnQgeyBUaW1pbmdJbmRleCB9IGZyb20gXCJAL3V0aWxzL2luZGljZXMvdGltaW5nXCI7XHJcbmltcG9ydCB7IGlzRW1wdHksIGlzTm90RW1wdHkgfSBmcm9tIFwiQC91dGlscy9hc3NlcnRzXCI7XHJcbmltcG9ydCBuZXh0IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IGxhc3QgfSBmcm9tIFwiQC91dGlscy9hcnJheVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vZGVfbWFwID0ge307XHJcbmV4cG9ydCBjb25zdCBkb21fcGF5bG9hZF9tYXAgPSBuZXcgTWFwKCk7XHJcblxyXG5jb25zdCBOb2RlID0gKHsgZGF0YSwgdG9wX3BheWxvYWQgfSkgPT4ge1xyXG5cdGNvbnN0IHsgbmFtZSA9IFwiXCIsIGlkLCBsZXZlbCwgY2hpbGRyZW4gPSBbXSB9ID0gZGF0YTtcclxuXHRjb25zdCB0b3Bfbm9kZSA9IHVzZVJlZigpO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBwYXlsb2FkID0ge1xyXG5cdFx0XHRuYW1lLFxyXG5cdFx0XHRpZCxcclxuXHRcdFx0Y2hpbGRyZW4sXHJcblx0XHRcdGRvbTogdG9wX25vZGUuY3VycmVudCxcclxuXHRcdFx0cmF3OiBkYXRhLFxyXG5cdFx0XHR0b3A6IHRvcF9wYXlsb2FkLFxyXG5cdFx0fTtcclxuXHRcdG5vZGVfbWFwW2lkXSA9IHBheWxvYWQ7XHJcblx0XHRkb21fcGF5bG9hZF9tYXAuc2V0KHRvcF9ub2RlLmN1cnJlbnQsIHBheWxvYWQpO1xyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0ZG9tX3BheWxvYWRfbWFwLmRlbGV0ZSh0b3Bfbm9kZS5jdXJyZW50KTtcclxuXHRcdFx0ZGVsZXRlIG5vZGVfbWFwW2lkXTtcclxuXHRcdH07XHJcblx0fSwgW3RvcF9ub2RlLmN1cnJlbnQsIGRhdGFdKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiByZWY9e3RvcF9ub2RlfSBjbGFzc05hbWU9XCJub2RlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIiBzdHlsZT17eyBwYWRkaW5nTGVmdDogYCR7bGV2ZWwgKiAyMH1weGAgfX0+XHJcblx0XHRcdFx0e25hbWV9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHR7Y2hpbGRyZW4ubGVuZ3RoID4gMCAmJiAoXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjaGlsZHJlblwiPlxyXG5cdFx0XHRcdFx0e2NoaWxkcmVuLm1hcCgoZGF0YSkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8Tm9kZVxyXG5cdFx0XHRcdFx0XHRcdGtleT17ZGF0YS5pZH1cclxuXHRcdFx0XHRcdFx0XHRkYXRhPXtkYXRhfVxyXG5cdFx0XHRcdFx0XHRcdHRvcF9wYXlsb2FkPXt0b3BfcGF5bG9hZH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXlsb2FkKCkge31cclxuXHJcbmNvbnN0IEZsYXROb2RlID0gZm9yd2FyZFJlZihcclxuXHQoeyBpdGVtX3R5cGUsIGxldmVsID0gMCwgcHJvcHMgPSB7fSwgLi4ucmVzdCB9ID0ge30sIHJlZikgPT4ge1xyXG5cdFx0Y29uc3QgSXRlbSA9IGl0ZW1fdHlwZTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm9kZVwiIHJlZj17cmVmfT5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0aXRsZVwiXHJcblx0XHRcdFx0XHRzdHlsZT17eyBwYWRkaW5nTGVmdDogYCR7bGV2ZWwgKiAyMH1weGAgfX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8SXRlbSB7Li4ucHJvcHN9IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbik7XHJcblxyXG5jb25zdCBsaW5lSGVpZ2h0ID0gMjA7XHJcblxyXG5mdW5jdGlvbiBBcnJheU1hcHBlcihhcnJheSkge1xyXG5cdGZ1bmN0aW9uIGNvbnN0cnVjdG9yKHsgbGlzdCwgbWFwID0ge30gfSkge1xyXG5cdFx0bGlzdC5tYXAoKGl0ZW0pID0+IChtYXBbaXRlbS5pZF0gPSBpdGVtKSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xvbmUoKSB7XHJcblx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvcih7IGxpc3Q6IGxpc3Quc2xpY2UoKSwgbWFwOiB7fSB9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiByZW1vdmUoaWQpIHtcclxuXHRcdFx0ZGVsZXRlIG1hcFtpZF07XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc3BsaWNlKHN0YXJ0X3Bvc2l0aW9uLCBkZWxldGVfY291bnQsIC4uLmFwcGVuZF9pdGVtcykge1xyXG5cdFx0XHRjb25zdCBiZV9jdWxsZWQgPSBsaXN0LnNwbGljZShcclxuXHRcdFx0XHRzdGFydF9wb3NpdGlvbixcclxuXHRcdFx0XHRkZWxldGVfY291bnQsXHJcblx0XHRcdFx0Li4uYXBwZW5kX2l0ZW1zXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHRiZV9jdWxsZWQubWFwKCh7IGlkIH0pID0+IHJlbW92ZShpZCkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIGJlX2N1bGxlZDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBtYXAoLi4uYXJncykge1xyXG5cdFx0XHRyZXR1cm4gbGlzdC5tYXAoLi4uYXJncyk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0KGlkKSB7XHJcblx0XHRcdHJldHVybiBtYXBbaWRdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGdldCxcclxuXHRcdFx0Y2xvbmUsXHJcblx0XHRcdHJlbW92ZSxcclxuXHRcdFx0c3BsaWNlLFxyXG5cdFx0XHRsaXN0LFxyXG5cdFx0XHRtYXAsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNvbnN0cnVjdG9yKHsgbGlzdDogYXJyYXkgfSk7XHJcbn1cclxuXHJcbi8vIHR5cGUgUGF5bG9hZCB7IGlkLCBsZXZlbCwgY2FuX2V4cGFuZCwgdHlwZV9zZWxmLCBwcm9wcyB9XHJcbi8vIHR5cGUgUGF5bG9hZExpc3QgW11QYXlsb2FkXHJcbmV4cG9ydCBjb25zdCBtYWtlT3V0bGluZVN0YXRlID0gKHtcclxuXHRpdGVtX3R5cGUgPSBudWxsLFxyXG5cdHBheWxvYWRzID0gW10sXHJcblx0cmVsYXllZCA9IG5ldyBTZXQoW1wiaWRcIiwgXCJsZXZlbFwiXSksXHJcbn0gPSB7fSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRoaWVyYXJjaHlfbWFwOiB7fSxcclxuXHRcdGl0ZW1fdHlwZSxcclxuXHRcdHBheWxvYWRzOiBBcnJheU1hcHBlcihwYXlsb2FkcyksXHJcblx0XHRyZWxheWVkLFxyXG5cdFx0cmVjb3JkczogbmV3IE1hcCgpLFxyXG5cdH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBSZWxhdGlvbihpZCwgeyAuLi5wcm9wcyB9KSB7XHJcblx0cmV0dXJuIE9iamVjdC5hc3NpZ24oXHJcblx0XHR7XHJcblx0XHRcdGlkLFxyXG5cdFx0XHRuZXh0X3NpYmxpbmc6IHVuZGVmaW5lZCxcclxuXHRcdFx0cHJldl9zaWJsaW5nOiB1bmRlZmluZWQsXHJcblx0XHRcdHBhcmVudDogdW5kZWZpbmVkLFxyXG5cdFx0XHRjaGlsZDogdW5kZWZpbmVkLFxyXG5cdFx0fSxcclxuXHRcdHByb3BzXHJcblx0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuSGllcmFyY2h5QW5hbHl6ZXIoe30gPSB7fSkge1xyXG5cdGZ1bmN0aW9uIGNvbnN0cnVjdG9yKHsgaGllcmFyY2h5X21hcCA9IHsgcmVsYXRpb246IHt9LCBzaXplOiB7fSB9IH0gPSB7fSkge1xyXG5cdFx0bGV0IHtcclxuXHRcdFx0cmVsYXRpb246IGxpdmVfcmVsYXRpb25fbWFwLFxyXG5cdFx0XHRzaXplOiBsaXZlX3NpemVfbWFwLFxyXG5cdFx0fSA9IGhpZXJhcmNoeV9tYXA7XHJcblxyXG5cdFx0Ly8gY29uc29sZS5sb2cobGl2ZV9zaXplX21hcCk7XHJcblxyXG5cdFx0Ly8gdHlwZSBIaWVyYXJjaHlOb2RlIFBheWxvYWRcclxuXHRcdGZ1bmN0aW9uIG9uSW5zZXJ0ZWQoeyBsZXZlbCwgaWQgfSwgaW5kZXgsIHBheWxvYWRzKSB7XHJcblx0XHRcdGNvbnN0IGlzX2ZpcnN0ID0gaW5kZXggPT09IDA7XHJcblx0XHRcdGNvbnN0IGlzX3RvcCA9IGxldmVsID09PSAwO1xyXG5cdFx0XHRjb25zdCBpc19sYXN0ID0gaW5kZXggPT09IHBheWxvYWRzLmxlbmd0aCAtIDE7XHJcblx0XHRcdGNvbnN0IHByZXZfaW5kZXggPSBpbmRleCAtIDE7XHJcblx0XHRcdGNvbnN0IG5leHRfaW5kZXggPSBpbmRleCArIDE7XHJcblx0XHRcdGNvbnN0IHByZXZfaWQgPSBpc19maXJzdCA/IHVuZGVmaW5lZCA6IHBheWxvYWRzW3ByZXZfaW5kZXhdLmlkO1xyXG5cdFx0XHRjb25zdCBuZXh0X2lkID0gaXNfbGFzdCA/IHVuZGVmaW5lZCA6IHBheWxvYWRzW25leHRfaW5kZXhdLmlkO1xyXG5cdFx0XHRjb25zdCBwcmV2X3BheWxvYWQgPSBwYXlsb2Fkc1twcmV2X2luZGV4XTtcclxuXHRcdFx0Y29uc3QgcHJldl9sZXZlbCA9ICFpc19maXJzdCAmJiBwcmV2X3BheWxvYWQubGV2ZWw7XHJcblx0XHRcdGNvbnN0IGRpZmZfbGV2ZWwgPSAhaXNfZmlyc3QgJiYgbGV2ZWwgLSBwcmV2X2xldmVsO1xyXG5cclxuXHRcdFx0Y29uc3QgcHJldl9yZWxhdGlvbiA9IGZhbGxiYWNrKFJlbGF0aW9uKGlkKSkoXHJcblx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9pZF1cclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgbmV4dF9yZWxhdGlvbiA9IGZhbGxiYWNrKFJlbGF0aW9uKGlkKSkoXHJcblx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbbmV4dF9pZF1cclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgcmVsYXRpb24gPSBmYWxsYmFjayhSZWxhdGlvbihpZCkpKGxpdmVfcmVsYXRpb25fbWFwW2lkXSk7XHJcblxyXG5cdFx0XHRpZiAoZGlmZl9sZXZlbCA+IDApIHtcclxuXHRcdFx0XHRwcmV2X3JlbGF0aW9uLmNoaWxkID0gaWQ7XHJcblx0XHRcdFx0cmVsYXRpb24ucGFyZW50ID0gaXNfZmlyc3QgfHwgaXNfdG9wID8gdW5kZWZpbmVkIDogcHJldl9pZDtcclxuXHJcblx0XHRcdFx0aWYgKCFpc19sYXN0ICYmIHJlbGF0aW9uLnBhcmVudCA9PT0gbmV4dF9yZWxhdGlvbi5wYXJlbnQpIHtcclxuXHRcdFx0XHRcdG5leHRfcmVsYXRpb24ucHJldl9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGRpZmZfbGV2ZWwgPT09IDApIHtcclxuXHRcdFx0XHRyZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBwcmV2X2lkO1xyXG5cdFx0XHRcdHJlbGF0aW9uLnBhcmVudCA9XHJcblx0XHRcdFx0XHRpc19maXJzdCB8fCBpc190b3AgPyB1bmRlZmluZWQgOiBwcmV2X3JlbGF0aW9uLnBhcmVudDtcclxuXHRcdFx0XHRwcmV2X3JlbGF0aW9uLm5leHRfc2libGluZyA9IGlkO1xyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2xhc3QgJiYgbmV4dF9yZWxhdGlvbi5wYXJlbnQgPT09IHJlbGF0aW9uLnBhcmVudCkge1xyXG5cdFx0XHRcdFx0cmVsYXRpb24ubmV4dF9zaWJsaW5nID0gbmV4dF9pZDtcclxuXHRcdFx0XHRcdG5leHRfcmVsYXRpb24ucHJldl9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0IHByZXZfc2libGluZ19pZCA9IGdldFJlY3Vyc2l2ZVBhcmVudChcclxuXHRcdFx0XHRcdHByZXZfaWQsXHJcblx0XHRcdFx0XHQtZGlmZl9sZXZlbFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0IHBhcmVudF9yZWxhdGlvbiA9IGZhbGxiYWNrKFJlbGF0aW9uKGlkKSkoXHJcblx0XHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X3NpYmxpbmdfaWRdXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHRjb25zdCBwcmV2X3NpYmxpbmdfcmVsYXRpb24gPVxyXG5cdFx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9zaWJsaW5nX2lkXTtcclxuXHJcblx0XHRcdFx0cmVsYXRpb24ucGFyZW50ID1cclxuXHRcdFx0XHRcdGlzX2ZpcnN0IHx8IGlzX3RvcCA/IHVuZGVmaW5lZCA6IHBhcmVudF9yZWxhdGlvbi5wYXJlbnQ7XHJcblx0XHRcdFx0cmVsYXRpb24ucHJldl9zaWJsaW5nID0gaXNfbGFzdCA/IHVuZGVmaW5lZCA6IHByZXZfc2libGluZ19pZDtcclxuXHJcblx0XHRcdFx0aWYgKCFpc19maXJzdCkge1xyXG5cdFx0XHRcdFx0cHJldl9zaWJsaW5nX3JlbGF0aW9uLm5leHRfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCFpc19sYXN0ICYmIHJlbGF0aW9uLnBhcmVudCA9PT0gbmV4dF9yZWxhdGlvbi5wYXJlbnQpIHtcclxuXHRcdFx0XHRcdHBhcmVudF9yZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHRcdG5leHRfcmVsYXRpb24ucHJldl9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2ZpcnN0KSB7XHJcblx0XHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X3NpYmxpbmdfaWRdID0gcGFyZW50X3JlbGF0aW9uO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFpc190b3ApIHtcclxuXHRcdFx0XHRjb25zdCBzaXplID0gZmFsbGJhY2soMCkobGl2ZV9zaXplX21hcFtyZWxhdGlvbi5wYXJlbnRdKTtcclxuXHRcdFx0XHRsaXZlX3NpemVfbWFwW3JlbGF0aW9uLnBhcmVudF0gPSBzaXplICsgMTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFpc19maXJzdCkge1xyXG5cdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfaWRdID0gcHJldl9yZWxhdGlvbjtcclxuXHRcdFx0fVxyXG5cdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtpZF0gPSByZWxhdGlvbjtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXRSZWN1cnNpdmVQYXJlbnQoaWQsIGNvdW50ID0gMCkge1xyXG5cdFx0XHRjb25zdCBwYXJlbnRfaWQgPVxyXG5cdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW2lkXSAmJiBsaXZlX3JlbGF0aW9uX21hcFtpZF0ucGFyZW50O1xyXG5cdFx0XHRpZiAoY291bnQgPiAxICYmIHBhcmVudF9pZCkge1xyXG5cdFx0XHRcdHJldHVybiBnZXRSZWN1cnNpdmVQYXJlbnQocGFyZW50X2lkLCBjb3VudCAtIDEpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBwYXJlbnRfaWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBvblJlbW92ZWQoeyBpZCB9LCBpbmRleCwgcGF5bG9hZHMpIHtcclxuXHRcdFx0Y29uc3QgaXNfZmlyc3QgPSBpbmRleCA9PT0gMDtcclxuXHRcdFx0Y29uc3QgaXNfbGFzdCA9IGluZGV4ID09PSBwYXlsb2Fkcy5sZW5ndGg7XHJcblx0XHRcdGNvbnN0IHByZXZfaW5kZXggPSBpbmRleCAtIDE7XHJcblx0XHRcdGNvbnN0IG5leHRfaW5kZXggPSBpbmRleDtcclxuXHRcdFx0Y29uc3QgcHJldl9pZCA9IGlzX2ZpcnN0ID8gdW5kZWZpbmVkIDogcGF5bG9hZHNbcHJldl9pbmRleF0uaWQ7XHJcblx0XHRcdGNvbnN0IG5leHRfaWQgPSBpc19sYXN0ID8gdW5kZWZpbmVkIDogcGF5bG9hZHNbbmV4dF9pbmRleF0uaWQ7XHJcblxyXG5cdFx0XHRjb25zdCBwcmV2X3JlbGF0aW9uID0gbGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9pZF07XHJcblx0XHRcdGNvbnN0IG5leHRfcmVsYXRpb24gPSBsaXZlX3JlbGF0aW9uX21hcFtuZXh0X2lkXTtcclxuXHRcdFx0Y29uc3QgcmVsYXRpb24gPSBsaXZlX3JlbGF0aW9uX21hcFtpZF07XHJcblxyXG5cdFx0XHRjb25zdCB7IHByZXZfc2libGluZywgbmV4dF9zaWJsaW5nLCBwYXJlbnQgfSA9IHJlbGF0aW9uO1xyXG5cclxuXHRcdFx0Y29uc3QgcHJldl9zaWJsaW5nX3JlbGF0aW9uID0gaXNOb3RFbXB0eShwcmV2X3NpYmxpbmcpXHJcblx0XHRcdFx0PyBsaXZlX3JlbGF0aW9uX21hcFtwcmV2X3NpYmxpbmddXHJcblx0XHRcdFx0OiB1bmRlZmluZWQ7XHJcblx0XHRcdGNvbnN0IG5leHRfc2libGluZ19yZWxhdGlvbiA9IGlzTm90RW1wdHkobmV4dF9zaWJsaW5nKVxyXG5cdFx0XHRcdD8gbGl2ZV9yZWxhdGlvbl9tYXBbbmV4dF9zaWJsaW5nXVxyXG5cdFx0XHRcdDogdW5kZWZpbmVkO1xyXG5cdFx0XHRjb25zdCBwYXJlbnRfcmVsYXRpb24gPSBpc05vdEVtcHR5KHBhcmVudClcclxuXHRcdFx0XHQ/IGxpdmVfcmVsYXRpb25fbWFwW3BhcmVudF1cclxuXHRcdFx0XHQ6IHVuZGVmaW5lZDtcclxuXHJcblx0XHRcdGlmIChpc05vdEVtcHR5KHByZXZfc2libGluZ19yZWxhdGlvbikpIHtcclxuXHRcdFx0XHRwcmV2X3JlbGF0aW9uLm5leHRfc2libGluZyA9IG5leHRfc2libGluZztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoaXNOb3RFbXB0eShuZXh0X3NpYmxpbmdfcmVsYXRpb24pKSB7XHJcblx0XHRcdFx0bmV4dF9yZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBwcmV2X3NpYmxpbmc7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGlzTm90RW1wdHkocGFyZW50X3JlbGF0aW9uKSAmJiBwYXJlbnRfcmVsYXRpb24uY2hpbGQgPT09IGlkKSB7XHJcblx0XHRcdFx0cGFyZW50X3JlbGF0aW9uLmNoaWxkID0gbmV4dF9zaWJsaW5nO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRkZWxldGUgbGl2ZV9yZWxhdGlvbl9tYXBbaWRdO1xyXG5cclxuXHRcdFx0bGl2ZV9zaXplX21hcFtyZWxhdGlvbi5wYXJlbnRdLS07XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2xvbmUoKSB7XHJcblx0XHRcdHJldHVybiBjb25zdHJ1Y3Rvcih7XHJcblx0XHRcdFx0aGllcmFyY2h5X21hcDoge1xyXG5cdFx0XHRcdFx0cmVsYXRpb246IHsgLi4ubGl2ZV9yZWxhdGlvbl9tYXAgfSxcclxuXHRcdFx0XHRcdHNpemU6IHsgLi4ubGl2ZV9zaXplX21hcCB9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGFwcGx5KHsgaGllcmFyY2h5X21hcCB9KSB7XHJcblx0XHRcdGxpdmVfcmVsYXRpb25fbWFwID0gaGllcmFyY2h5X21hcC5yZWxhdGlvbjtcclxuXHRcdFx0bGl2ZV9zaXplX21hcCA9IGhpZXJhcmNoeV9tYXAuc2l6ZTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXRIaWVyYXJjaHlNYXAoKSB7XHJcblx0XHRcdHJldHVybiBoaWVyYXJjaHlfbWFwO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGV4cG9ydHMgPSB7XHJcblx0XHRcdGNsb25lLFxyXG5cdFx0XHRhcHBseSxcclxuXHRcdFx0b25JbnNlcnRlZCxcclxuXHRcdFx0b25SZW1vdmVkLFxyXG5cdFx0XHRnZXRIaWVyYXJjaHlNYXAsXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKFtleHBvcnRzXSwgZXhwb3J0cyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY29uc3RydWN0b3Ioe30pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlT3V0bGluZVJlZHVjZXIgPSAoe1xyXG5cdHN0YXRlID0gbWFrZU91dGxpbmVTdGF0ZSgpLFxyXG5cdGhpZXJhcmNoeV9hbmFseXplciA9IGdlbkhpZXJhcmNoeUFuYWx5emVyKCksXHJcbn0gPSB7fSkgPT4ge1xyXG5cdHN0YXRlLmhpZXJhcmNoeV9hbmFseXplciA9IGhpZXJhcmNoeV9hbmFseXplcjtcclxuXHJcblx0dXNlTWVtbygoKSA9PiB7XHJcblx0XHRzdGF0ZS5wYXlsb2Fkcy5tYXAoaGllcmFyY2h5X2FuYWx5emVyLm9uSW5zZXJ0ZWQpO1xyXG5cdH0sIFtzdGF0ZS5wYXlsb2Fkc10pO1xyXG5cclxuXHRjb25zdCByZWR1Y2VyID0gdXNlUmVkdWNlcigoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdFx0Y29uc3Qgc3RhcnRfc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cdFx0aWYgKGFjdGlvbi50eXBlID09PSBcImRlbGV0ZVwiKSB7XHJcblx0XHRcdGNvbnN0IHsgaW5kZXggfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgeyBwYXlsb2FkcyB9ID0gc3RhdGU7XHJcblx0XHRcdHN0YXRlLnBheWxvYWRzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBwYXlsb2FkcyB9O1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJzYXZlXCIpIHtcclxuXHRcdFx0Y29uc3QgeyBpZCwgZXh0cmEgPSAoKSA9PiAoe30pIH0gPSBhY3Rpb247XHJcblx0XHRcdGNvbnN0IHsgcmVjb3JkcywgcGF5bG9hZHMgfSA9IHN0YXRlO1xyXG5cdFx0XHRjb25zdCBleHRyYV9kYXRhID0gZXh0cmEoc3RhdGUpO1xyXG5cclxuXHRcdFx0cmVjb3Jkcy5zZXQoaWQsIHBheWxvYWRzLmNsb25lKCkpO1xyXG5cdFx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV4dHJhX2RhdGEpLm1hcCgoc3ltKSA9PiB7XHJcblx0XHRcdFx0cmVjb3Jkcy5zZXQoc3ltLCBleHRyYV9kYXRhW3N5bV0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCByZWNvcmRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInJlc3RvcmVcIikge1xyXG5cdFx0XHRjb25zdCB7IGlkID0gW10sIGV4dHJhID0gW10gfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgeyByZWNvcmRzIH0gPSBzdGF0ZTtcclxuXHJcblx0XHRcdHJlY29yZHMuZGVsZXRlKGlkKTtcclxuXHRcdFx0ZXh0cmEubWFwKChpZCkgPT4gcmVjb3Jkcy5kZWxldGUoaWQpKTtcclxuXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCByZWNvcmRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInNldEJhc2VkT25cIikge1xyXG5cdFx0XHRjb25zdCB7IGlkLCBhZmZlY3QgfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgcGF5bG9hZHMgPSBhZmZlY3Qoc3RhdGUucmVjb3Jkcy5nZXQoaWQpLmNsb25lKCksIHN0YXRlKTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBheWxvYWRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInNldFwiKSB7XHJcblx0XHRcdGNvbnN0IHsgYWZmZWN0IH0gPSBhY3Rpb247XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCAuLi5hZmZlY3Qoc3RhdGUpIH07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0XHRjb25zb2xlLmxvZyhcIi0tLVwiLCBEYXRlLm5vdygpIC0gc3RhcnRfc3RhbXApO1xyXG5cdH0sIHN0YXRlKTtcclxuXHJcblx0cmV0dXJuIHJlZHVjZXI7XHJcbn07XHJcblxyXG5jb25zdCBFbXB0eU5vZGUgPSBmb3J3YXJkUmVmKCh7IC4uLnJlc3QgfSwgcmVmKSA9PiAoXHJcblx0PGRpdiByZWY9e3JlZn0gey4uLnJlc3R9PjwvZGl2PlxyXG4pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7XHJcblx0cmVkdWNlciA9IHVzZU91dGxpbmVSZWR1Y2VyKCksXHJcblx0Y2xhc3NOYW1lLFxyXG5cdHN0eWxlLFxyXG5cdC4uLnJlc3RcclxufSkgPT4ge1xyXG5cdGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG5cdGNvbnN0IGNscyA9IGpvaW5CeVNwYWNlKGNsYXNzTmFtZSwgXCJPdXRsaW5lXCIpO1xyXG5cdGNvbnN0IFtOb2RlLCBtYXBwZXJdID0gdXNlQ29tcG9uZW50SW5kZXhlcihGbGF0Tm9kZSk7XHJcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSByZWR1Y2VyO1xyXG5cdGNvbnN0IFt0aHVtYl9wcm9wcywgc2V0VGh1bWJQcm9wc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRvZmZzZXQ6IDAsXHJcblx0XHRub2RlX3Byb3BzOiB7IGl0ZW1fdHlwZTogRW1wdHlOb2RlIH0sXHJcblx0fSk7XHJcblx0Y29uc3QgcGF5bG9hZHMgPSB1c2VSZWYoKTtcclxuXHRjb25zdCBoaWVyYXJjaHlfYW5hbHl6ZXIgPSB1c2VSZWYoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHBheWxvYWRzLmN1cnJlbnQgPSBzdGF0ZS5wYXlsb2FkcztcclxuXHR9LCBbc3RhdGUucGF5bG9hZHNdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGhpZXJhcmNoeV9hbmFseXplci5jdXJyZW50ID0gc3RhdGUuaGllcmFyY2h5X2FuYWx5emVyO1xyXG5cdH0sIFtzdGF0ZS5oaWVyYXJjaHlfYW5hbHl6ZXJdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghcmVmKSByZXR1cm47XHJcblx0XHRjb25zdCB0b3Bfbm9kZV9kb20gPSByZWYuY3VycmVudDtcclxuXHRcdGNvbnN0IHRvcF9ib3VuZCA9IHRvcF9ub2RlX2RvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiBsaXN0ZW4oXHJcblx0XHRcdFwibW91c2Vkb3duXCIsXHJcblx0XHRcdHRvcF9ub2RlX2RvbVxyXG5cdFx0KSgoZSkgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHBhdGgsIGNsaWVudFgsIGNsaWVudFkgfSA9IGU7XHJcblxyXG5cdFx0XHRjb25zdCBsb2NhbF9vZmZzZXQgPSAoY2xpZW50WSAtIHRvcF9ib3VuZC55KSAlIGxpbmVIZWlnaHQ7XHJcblx0XHRcdGNvbnN0IGluaXRfaW5kZXggPVxyXG5cdFx0XHRcdChjbGllbnRZIC0gdG9wX2JvdW5kLnkgLSBsb2NhbF9vZmZzZXQpIC8gbGluZUhlaWdodDtcclxuXHJcblx0XHRcdGNvbnN0IGluaXRfcGF5bG9hZF9ub2RlX3Bvc2l0aW9uID1cclxuXHRcdFx0XHRpbml0X2luZGV4ICogbGluZUhlaWdodCArIGxvY2FsX29mZnNldDtcclxuXHJcblx0XHRcdC8vIGRpc3BhdGNoKHtcclxuXHRcdFx0Ly8gXHR0eXBlOiBcInNhdmVcIixcclxuXHRcdFx0Ly8gXHRpZCxcclxuXHRcdFx0Ly8gXHRleHRyYTogKHsgcGF5bG9hZHMsIGhpZXJhcmNoeV9hbmFseXplciB9KSA9PiAoe1xyXG5cdFx0XHQvLyBcdFx0W2luaXRfcGF5bG9hZF9sZXZlbF9pZF06IHBheWxvYWRzLmxpc3RbaW5pdF9pbmRleF0ubGV2ZWwsXHJcblx0XHRcdC8vIFx0XHRbaW5pdF9oaWVyYXJjaHlfYW5hbHl6ZXJfaWRdOiBoaWVyYXJjaHlfYW5hbHl6ZXIuY2xvbmUoKSxcclxuXHRcdFx0Ly8gXHR9KSxcclxuXHRcdFx0Ly8gfSk7XHJcblxyXG5cdFx0XHQvLyBkaXNwYXRjaCh7XHJcblx0XHRcdC8vIFx0dHlwZTogXCJzZXRcIixcclxuXHRcdFx0Ly8gXHRhZmZlY3Q6ICh7IHBheWxvYWRzLCBoaWVyYXJjaHlfYW5hbHl6ZXIgfSkgPT4ge1xyXG5cdFx0XHQvLyBcdFx0Y29uc3QgW3BheWxvYWRdID0gcGF5bG9hZHMuc3BsaWNlKGluaXRfaW5kZXgsIDEpO1xyXG5cdFx0XHQvLyBcdFx0aGllcmFyY2h5X2FuYWx5emVyLm9uUmVtb3ZlZChcclxuXHRcdFx0Ly8gXHRcdFx0cGF5bG9hZCxcclxuXHRcdFx0Ly8gXHRcdFx0aW5pdF9pbmRleCxcclxuXHRcdFx0Ly8gXHRcdFx0cGF5bG9hZHMubGlzdFxyXG5cdFx0XHQvLyBcdFx0KTtcclxuXHRcdFx0Ly8gXHRcdHJldHVybiB7IHBheWxvYWRzLCBoaWVyYXJjaHlfYW5hbHl6ZXIgfTtcclxuXHRcdFx0Ly8gXHR9LFxyXG5cdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdGNvbnN0IGl4ID0gY2xpZW50WCxcclxuXHRcdFx0XHRpeSA9IGNsaWVudFk7XHJcblxyXG5cdFx0XHRjb25zdCBwYXlsb2Fkc19sb2NrZWQgPSBwYXlsb2Fkcy5jdXJyZW50LmNsb25lKCk7XHJcblx0XHRcdGNvbnN0IGhpZXJhcmNoeV9hbmFseXplcl9sb2NrZWQgPSBoaWVyYXJjaHlfYW5hbHl6ZXIuY3VycmVudC5jbG9uZSgpO1xyXG5cdFx0XHRjb25zdCBpbml0X3BheWxvYWQgPSBwYXlsb2Fkc19sb2NrZWQubGlzdFtpbml0X2luZGV4XTtcclxuXHJcblx0XHRcdGNvbnN0IGNsZWFuX21vdmUgPSBsaXN0ZW4oXCJtb3VzZW1vdmVcIikoKHsgY2xpZW50WCwgY2xpZW50WSB9KSA9PiB7XHJcblx0XHRcdFx0bGV0IHN0YXJ0X3N0YW1wID0gRGF0ZS5ub3coKTtcclxuXHRcdFx0XHRjb25zdCBwYXlsb2Fkc19saXZlID0gcGF5bG9hZHNfbG9ja2VkLmNsb25lKCk7XHJcblx0XHRcdFx0Y29uc3QgaGllcmFyY2h5X2FuYWx5emVyX2xpdmUgPSBoaWVyYXJjaHlfYW5hbHl6ZXJfbG9ja2VkLmNsb25lKCk7XHJcblx0XHRcdFx0Ly8gY29uc3QgaGllcmFyY2h5X21hcCA9IGhpZXJhcmNoeV9hbmFseXplcl9saXZlLmdldEhpZXJhcmNoeU1hcCgpO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBsb2NhbF9vZmZzZXQgPSAoY2xpZW50WSAtIHRvcF9ib3VuZC55KSAlIGxpbmVIZWlnaHQ7XHJcblx0XHRcdFx0Y29uc3QgbGl2ZV9pbmRleCA9XHJcblx0XHRcdFx0XHQoY2xpZW50WSAtIHRvcF9ib3VuZC55IC0gbG9jYWxfb2Zmc2V0KSAvIGxpbmVIZWlnaHQ7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfaW5kZXggPSBsaXZlX2luZGV4IC0gMTtcclxuXHRcdFx0XHQvLyBjb25zdCBuZXh0X2luZGV4ID0gbGl2ZV9pbmRleCArIDE7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHByZXZfaW5kZXgsIG5leHRfaW5kZXgpO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBpc19maXJzdCA9IGxpdmVfaW5kZXggPT09IDA7XHJcblx0XHRcdFx0Ly8gY29uc3QgaXNfbGFzdCA9IGxpdmVfaW5kZXggPT09IHBheWxvYWRzX2xpdmUubGVuZ3RoIC0gMTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgaW5pdF9yZWxhdGlvbiA9IGhpZXJhcmNoeV9tYXAucmVsYXRpb25baW5pdF9wYXlsb2FkLmlkXTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9wYXlsb2FkID0gcGF5bG9hZHNfbGl2ZS5saXN0W3ByZXZfaW5kZXhdO1xyXG5cdFx0XHRcdC8vIGNvbnN0IG5leHRfcGF5bG9hZCA9IHBheWxvYWRzX2xpdmUubGlzdFtuZXh0X2luZGV4XTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9yZWxhdGlvbiA9IGhpZXJhcmNoeV9tYXAucmVsYXRpb25bcHJldl9wYXlsb2FkLmlkXTtcclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X2xldmVsID0gcHJldl9wYXlsb2FkLmxldmVsO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X3BhcmVudF9wYXlsb2FkID0gcGF5bG9hZHNfbGl2ZS5nZXQoXHJcblx0XHRcdFx0Ly8gXHRwcmV2X3JlbGF0aW9uLnBhcmVudFxyXG5cdFx0XHRcdC8vICk7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfaXNfcGFyZW50ID0gcHJldl9wYXlsb2FkLmlkIGluIGhpZXJhcmNoeV9tYXAuc2l6ZTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgaW5pdF9sZXZlbCA9IGluaXRfcGF5bG9hZC5sZXZlbDtcclxuXHRcdFx0XHQvLyBjb25zdCBtYXliZV9sZXZlbCA9XHJcblx0XHRcdFx0Ly8gXHQocHJldl9pc19wYXJlbnRcclxuXHRcdFx0XHQvLyBcdFx0PyBwcmV2X3BheWxvYWQubGV2ZWxcclxuXHRcdFx0XHQvLyBcdFx0OiBwcmV2X3BhcmVudF9wYXlsb2FkLmxldmVsKSArIDE7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHggPSBjbGllbnRYIC0gaXg7XHJcblx0XHRcdFx0Ly8gY29uc3Qgc2hvdWxkX2xldmVsID0gaW5pdF9sZXZlbCArIHggLyAyMDtcclxuXHJcblx0XHRcdFx0Y29uc3Qgb2Zmc2V0ID0gaW5pdF9wYXlsb2FkX25vZGVfcG9zaXRpb24gKyBjbGllbnRZIC0gaXk7XHJcblxyXG5cdFx0XHRcdC8vIHNldFRodW1iUHJvcHMoe1xyXG5cdFx0XHRcdC8vIFx0bm9kZV9wcm9wczogZ2V0Tm9kZVByb3BzKFxyXG5cdFx0XHRcdC8vIFx0XHR7IC4uLmluaXRfcGF5bG9hZCwgbGV2ZWw6IHNob3VsZF9sZXZlbCB9LFxyXG5cdFx0XHRcdC8vIFx0XHRzdGF0ZVxyXG5cdFx0XHRcdC8vIFx0KSxcclxuXHRcdFx0XHQvLyBcdG9mZnNldCxcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHQvLyBzZXRUaHVtYlByb3BzKHtcclxuXHRcdFx0XHQvLyBcdG5vZGVfcHJvcHM6IGdldE5vZGVQcm9wcyhcclxuXHRcdFx0XHQvLyBcdFx0eyAuLi5pbml0X3BheWxvYWQsIGxldmVsOiBjbGllbnRYIC8gMjAgfSxcclxuXHRcdFx0XHQvLyBcdFx0c3RhdGVcclxuXHRcdFx0XHQvLyBcdCksXHJcblx0XHRcdFx0Ly8gXHRvZmZzZXQsXHJcblx0XHRcdFx0Ly8gfSk7XHJcblxyXG5cdFx0XHRcdC8vIGlmIChcclxuXHRcdFx0XHQvLyBcdGlzRW1wdHkocHJldl9yZWxhdGlvbi5uZXh0X3NpYmxpbmcpICYmXHJcblx0XHRcdFx0Ly8gXHQhcHJldl9pc19wYXJlbnRcclxuXHRcdFx0XHQvLyApIHtcclxuXHRcdFx0XHQvLyBcdGlmIChzaG91bGRfbGV2ZWwgPCBtYXliZV9sZXZlbCkge1xyXG5cdFx0XHRcdC8vIFx0XHRpbml0X3BheWxvYWQubGV2ZWwgPSBzaG91bGRfbGV2ZWw7XHJcblx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0Ly8gfSBlbHNlIHtcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0Ly8gaW5pdF9wYXlsb2FkLmxldmVsID0gbWF5YmVfbGV2ZWw7XHJcblxyXG5cdFx0XHRcdHBheWxvYWRzX2xpdmUuc3BsaWNlKGluaXRfaW5kZXgsIDEpO1xyXG5cdFx0XHRcdGhpZXJhcmNoeV9hbmFseXplcl9saXZlLm9uUmVtb3ZlZChcclxuXHRcdFx0XHRcdGluaXRfcGF5bG9hZCxcclxuXHRcdFx0XHRcdGluaXRfaW5kZXgsXHJcblx0XHRcdFx0XHRwYXlsb2Fkc19saXZlLmxpc3RcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRwYXlsb2Fkc19saXZlLnNwbGljZShsaXZlX2luZGV4ID4+IDAsIDAsIGluaXRfcGF5bG9hZCk7XHJcblx0XHRcdFx0aGllcmFyY2h5X2FuYWx5emVyX2xpdmUub25JbnNlcnRlZChcclxuXHRcdFx0XHRcdGluaXRfcGF5bG9hZCxcclxuXHRcdFx0XHRcdGxpdmVfaW5kZXggPj4gMCxcclxuXHRcdFx0XHRcdHBheWxvYWRzX2xpdmUubGlzdFxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdHR5cGU6IFwic2V0XCIsXHJcblx0XHRcdFx0XHRhZmZlY3Q6ICgpID0+ICh7XHJcblx0XHRcdFx0XHRcdHBheWxvYWRzOiBwYXlsb2Fkc19saXZlLFxyXG5cdFx0XHRcdFx0XHRoaWVyYXJjaHlfYW5hbHl6ZXI6IGhpZXJhcmNoeV9hbmFseXplcl9saXZlLFxyXG5cdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coRGF0ZS5ub3coKSAtIHN0YXJ0X3N0YW1wKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb25zdCBjbGVhbl91cCA9IGxpc3RlbihcIm1vdXNldXBcIikoKCkgPT4ge1xyXG5cdFx0XHRcdGNsZWFuX21vdmUoKTtcclxuXHRcdFx0XHRjbGVhbl91cCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0sIFtyZWYuY3VycmVudCwgZGlzcGF0Y2hdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN9IHJlZj17cmVmfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJob2xkZXJcIj5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0aHVtYlwiXHJcblx0XHRcdFx0XHRzdHlsZT17eyB0b3A6IHRodW1iX3Byb3BzLm9mZnNldCArIFwicHhcIiB9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxOb2RlIHsuLi50aHVtYl9wcm9wcy5ub2RlX3Byb3BzfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsaXN0XCI+XHJcblx0XHRcdFx0e3N0YXRlLnBheWxvYWRzLm1hcCgocGF5bG9hZCkgPT4gKFxyXG5cdFx0XHRcdFx0PE5vZGUga2V5PXtwYXlsb2FkLmlkfSB7Li4uZ2V0Tm9kZVByb3BzKHBheWxvYWQsIHN0YXRlKX0gLz5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0Tm9kZVByb3BzKHBheWxvYWQsIHN0YXRlKSB7XHJcblx0Y29uc3QgcmVkdWNlciA9IChyZWxheWVkLCBba2V5LCB2YWx1ZV0pID0+IHtcclxuXHRcdGlmIChzdGF0ZS5yZWxheWVkLmhhcyhrZXkpKSB7XHJcblx0XHRcdHJlbGF5ZWRba2V5XSA9IHZhbHVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlbGF5ZWQ7XHJcblx0fTtcclxuXHRjb25zdCByZWxheWVkX3Byb3BzID0gT2JqZWN0LmVudHJpZXMocGF5bG9hZCkucmVkdWNlKHJlZHVjZXIsIHt9KTtcclxuXHRjb25zdCBwYXlsb2FkX3Byb3BzID0gcGF5bG9hZC5wcm9wcztcclxuXHRjb25zdCBtZXRhX3Byb3BzID0ge1xyXG5cdFx0aWQ6IHBheWxvYWQuaWQsXHJcblx0XHRsZXZlbDogcGF5bG9hZC5sZXZlbCxcclxuXHRcdGNhbl9leHBhbmQ6IHBheWxvYWQuY2FuX2V4cGFuZCxcclxuXHR9O1xyXG5cclxuXHRpZiAoXCJ0eXBlX3NlbGZcIiBpbiBwYXlsb2FkKSB7XHJcblx0XHRtZXRhX3Byb3BzLml0ZW1fdHlwZSA9IHBheWxvYWQudHlwZV9zZWxmO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRtZXRhX3Byb3BzLml0ZW1fdHlwZSA9IHN0YXRlLml0ZW1fdHlwZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczogeyAuLi5wYXlsb2FkX3Byb3BzLCAuLi5yZWxheWVkX3Byb3BzIH0sXHJcblx0XHQuLi5tZXRhX3Byb3BzLFxyXG5cdH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==