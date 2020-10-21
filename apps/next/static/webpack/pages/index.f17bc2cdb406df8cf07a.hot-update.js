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
  console.log("---", Date.now() - start_stamp);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3V0bGluZS9PdXRsaW5lLmpzeCJdLCJuYW1lcyI6WyJub2RlX21hcCIsImRvbV9wYXlsb2FkX21hcCIsIk1hcCIsIk5vZGUiLCJkYXRhIiwidG9wX3BheWxvYWQiLCJuYW1lIiwiaWQiLCJsZXZlbCIsImNoaWxkcmVuIiwidG9wX25vZGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwYXlsb2FkIiwiZG9tIiwiY3VycmVudCIsInJhdyIsInRvcCIsInNldCIsInBhZGRpbmdMZWZ0IiwibGVuZ3RoIiwibWFwIiwiZ2V0UGF5bG9hZCIsIkZsYXROb2RlIiwiZm9yd2FyZFJlZiIsInJlZiIsIml0ZW1fdHlwZSIsInByb3BzIiwicmVzdCIsIkl0ZW0iLCJsaW5lSGVpZ2h0IiwiQXJyYXlNYXBwZXIiLCJhcnJheSIsImNvbnN0cnVjdG9yIiwibGlzdCIsIml0ZW0iLCJjbG9uZSIsInNsaWNlIiwicmVtb3ZlIiwic3BsaWNlIiwic3RhcnRfcG9zaXRpb24iLCJkZWxldGVfY291bnQiLCJhcHBlbmRfaXRlbXMiLCJiZV9jdWxsZWQiLCJnZXQiLCJtYWtlT3V0bGluZVN0YXRlIiwicGF5bG9hZHMiLCJyZWxheWVkIiwiU2V0IiwiaGllcmFyY2h5X21hcCIsInJlY29yZHMiLCJSZWxhdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsIm5leHRfc2libGluZyIsInVuZGVmaW5lZCIsInByZXZfc2libGluZyIsInBhcmVudCIsImNoaWxkIiwiZ2VuSGllcmFyY2h5QW5hbHl6ZXIiLCJyZWxhdGlvbiIsInNpemUiLCJsaXZlX3JlbGF0aW9uX21hcCIsImxpdmVfc2l6ZV9tYXAiLCJvbkluc2VydGVkIiwiaW5kZXgiLCJpc19maXJzdCIsImlzX3RvcCIsImlzX2xhc3QiLCJwcmV2X2luZGV4IiwibmV4dF9pbmRleCIsInByZXZfaWQiLCJuZXh0X2lkIiwicHJldl9wYXlsb2FkIiwicHJldl9sZXZlbCIsImRpZmZfbGV2ZWwiLCJwcmV2X3JlbGF0aW9uIiwiZmFsbGJhY2siLCJuZXh0X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX2lkIiwiZ2V0UmVjdXJzaXZlUGFyZW50IiwicGFyZW50X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX3JlbGF0aW9uIiwiY291bnQiLCJwYXJlbnRfaWQiLCJvblJlbW92ZWQiLCJpc05vdEVtcHR5IiwibmV4dF9zaWJsaW5nX3JlbGF0aW9uIiwiYXBwbHkiLCJnZXRIaWVyYXJjaHlNYXAiLCJleHBvcnRzIiwidXNlT3V0bGluZVJlZHVjZXIiLCJzdGF0ZSIsImhpZXJhcmNoeV9hbmFseXplciIsInN0YXJ0X3N0YW1wIiwiRGF0ZSIsIm5vdyIsInVzZU1lbW8iLCJyZWR1Y2VyIiwidXNlUmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJleHRyYSIsImV4dHJhX2RhdGEiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW0iLCJhZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiRW1wdHlOb2RlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjbHMiLCJqb2luQnlTcGFjZSIsInVzZUNvbXBvbmVudEluZGV4ZXIiLCJtYXBwZXIiLCJkaXNwYXRjaCIsInVzZVN0YXRlIiwib2Zmc2V0Iiwibm9kZV9wcm9wcyIsInRodW1iX3Byb3BzIiwic2V0VGh1bWJQcm9wcyIsInRvcF9ub2RlX2RvbSIsInRvcF9ib3VuZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxpc3RlbiIsImUiLCJwYXRoIiwiY2xpZW50WCIsImNsaWVudFkiLCJsb2NhbF9vZmZzZXQiLCJ5IiwiaW5pdF9pbmRleCIsImluaXRfcGF5bG9hZF9ub2RlX3Bvc2l0aW9uIiwiaXgiLCJpeSIsInBheWxvYWRzX2xvY2tlZCIsImhpZXJhcmNoeV9hbmFseXplcl9sb2NrZWQiLCJpbml0X3BheWxvYWQiLCJjbGVhbl9tb3ZlIiwicGF5bG9hZHNfbGl2ZSIsImhpZXJhcmNoeV9hbmFseXplcl9saXZlIiwibGl2ZV9pbmRleCIsImNsZWFuX3VwIiwiZ2V0Tm9kZVByb3BzIiwia2V5IiwidmFsdWUiLCJoYXMiLCJyZWxheWVkX3Byb3BzIiwiZW50cmllcyIsInJlZHVjZSIsInBheWxvYWRfcHJvcHMiLCJtZXRhX3Byb3BzIiwiY2FuX2V4cGFuZCIsInR5cGVfc2VsZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLElBQUlDLEdBQUosRUFBeEI7O0FBRVAsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsSUFBd0IsUUFBeEJBLElBQXdCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUFBLG1CQUNTRCxJQURULENBQy9CRSxJQUQrQjtBQUFBLE1BQy9CQSxJQUQrQiwyQkFDeEIsRUFEd0I7QUFBQSxNQUNwQkMsRUFEb0IsR0FDU0gsSUFEVCxDQUNwQkcsRUFEb0I7QUFBQSxNQUNoQkMsS0FEZ0IsR0FDU0osSUFEVCxDQUNoQkksS0FEZ0I7QUFBQSx1QkFDU0osSUFEVCxDQUNUSyxRQURTO0FBQUEsTUFDVEEsUUFEUywrQkFDRSxFQURGO0FBRXZDLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTUMsT0FBTyxHQUFHO0FBQ2ZQLFVBQUksRUFBSkEsSUFEZTtBQUVmQyxRQUFFLEVBQUZBLEVBRmU7QUFHZkUsY0FBUSxFQUFSQSxRQUhlO0FBSWZLLFNBQUcsRUFBRUosUUFBUSxDQUFDSyxPQUpDO0FBS2ZDLFNBQUcsRUFBRVosSUFMVTtBQU1mYSxTQUFHLEVBQUVaO0FBTlUsS0FBaEI7QUFRQUwsWUFBUSxDQUFDTyxFQUFELENBQVIsR0FBZU0sT0FBZjtBQUNBWixtQkFBZSxDQUFDaUIsR0FBaEIsQ0FBb0JSLFFBQVEsQ0FB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QitFLEtBQS9CLEVBQXNDO0FBQ3JDLE1BQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNuRCxPQUFELFVBQTJCO0FBQUE7QUFBQSxRQUFoQmtHLEdBQWdCO0FBQUEsUUFBWEMsS0FBVzs7QUFDMUMsUUFBSXRELEtBQUssQ0FBQzdDLE9BQU4sQ0FBY29HLEdBQWQsQ0FBa0JGLEdBQWxCLENBQUosRUFBNEI7QUFDM0JsRyxhQUFPLENBQUNrRyxHQUFELENBQVAsR0FBZUMsS0FBZjtBQUNBOztBQUNELFdBQU9uRyxPQUFQO0FBQ0EsR0FMRDs7QUFNQSxNQUFNcUcsYUFBYSxHQUFHaEcsTUFBTSxDQUFDaUcsT0FBUCxDQUFleEksT0FBZixFQUF3QnlJLE1BQXhCLENBQStCcEQsT0FBL0IsRUFBd0MsRUFBeEMsQ0FBdEI7QUFDQSxNQUFNcUQsYUFBYSxHQUFHMUksT0FBTyxDQUFDYyxLQUE5QjtBQUNBLE1BQU02SCxVQUFVLEdBQUc7QUFDbEJqSixNQUFFLEVBQUVNLE9BQU8sQ0FBQ04sRUFETTtBQUVsQkMsU0FBSyxFQUFFSyxPQUFPLENBQUNMLEtBRkc7QUFHbEJpSixjQUFVLEVBQUU1SSxPQUFPLENBQUM0STtBQUhGLEdBQW5COztBQU1BLE1BQUksZUFBZTVJLE9BQW5CLEVBQTRCO0FBQzNCMkksY0FBVSxDQUFDOUgsU0FBWCxHQUF1QmIsT0FBTyxDQUFDNkksU0FBL0I7QUFDQSxHQUZELE1BRU87QUFDTkYsY0FBVSxDQUFDOUgsU0FBWCxHQUF1QmtFLEtBQUssQ0FBQ2xFLFNBQTdCO0FBQ0E7O0FBRUQ7QUFDQ0MsU0FBSyxrQ0FBTzRILGFBQVAsR0FBeUJILGFBQXpCO0FBRE4sS0FFSUksVUFGSjtBQUlBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYxN2JjMmNkYjQwNmRmOGNmMDdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqb2luQnlTcGFjZSwgaW5Cb3VuZCwgaW5BcnJheUJvdW5kIH0gZnJvbSBcIkAvdXRpbHMvYXJyYXlcIjtcclxuaW1wb3J0IHsgZmFsbGJhY2ssIGxpc3RlbiB9IGZyb20gXCJAL3V0aWxzL2ZuXCI7XHJcbmltcG9ydCB7XHJcblx0dXNlUmVmLFxyXG5cdHVzZUVmZmVjdCxcclxuXHRmb3J3YXJkUmVmLFxyXG5cdHVzZVN0YXRlLFxyXG5cdHVzZVJlZHVjZXIsXHJcblx0dXNlQ2FsbGJhY2ssXHJcblx0dXNlTWVtbyxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9PdXRsaW5lLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VDb21wb25lbnRJbmRleGVyIH0gZnJvbSBcIkAvdXRpbHMvdXNlcy9tYXBwZXJcIjtcclxuaW1wb3J0IHsgVGltaW5nSW5kZXggfSBmcm9tIFwiQC91dGlscy9pbmRpY2VzL3RpbWluZ1wiO1xyXG5pbXBvcnQgeyBpc0VtcHR5LCBpc05vdEVtcHR5IH0gZnJvbSBcIkAvdXRpbHMvYXNzZXJ0c1wiO1xyXG5pbXBvcnQgbmV4dCBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBsYXN0IH0gZnJvbSBcIkAvdXRpbHMvYXJyYXlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBub2RlX21hcCA9IHt9O1xyXG5leHBvcnQgY29uc3QgZG9tX3BheWxvYWRfbWFwID0gbmV3IE1hcCgpO1xyXG5cclxuY29uc3QgTm9kZSA9ICh7IGRhdGEsIHRvcF9wYXlsb2FkIH0pID0+IHtcclxuXHRjb25zdCB7IG5hbWUgPSBcIlwiLCBpZCwgbGV2ZWwsIGNoaWxkcmVuID0gW10gfSA9IGRhdGE7XHJcblx0Y29uc3QgdG9wX25vZGUgPSB1c2VSZWYoKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgcGF5bG9hZCA9IHtcclxuXHRcdFx0bmFtZSxcclxuXHRcdFx0aWQsXHJcblx0XHRcdGNoaWxkcmVuLFxyXG5cdFx0XHRkb206IHRvcF9ub2RlLmN1cnJlbnQsXHJcblx0XHRcdHJhdzogZGF0YSxcclxuXHRcdFx0dG9wOiB0b3BfcGF5bG9hZCxcclxuXHRcdH07XHJcblx0XHRub2RlX21hcFtpZF0gPSBwYXlsb2FkO1xyXG5cdFx0ZG9tX3BheWxvYWRfbWFwLnNldCh0b3Bfbm9kZS5jdXJyZW50LCBwYXlsb2FkKTtcclxuXHRcdHJldHVybiAoKSA9PiB7XHJcblx0XHRcdGRvbV9wYXlsb2FkX21hcC5kZWxldGUodG9wX25vZGUuY3VycmVudCk7XHJcblx0XHRcdGRlbGV0ZSBub2RlX21hcFtpZF07XHJcblx0XHR9O1xyXG5cdH0sIFt0b3Bfbm9kZS5jdXJyZW50LCBkYXRhXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgcmVmPXt0b3Bfbm9kZX0gY2xhc3NOYW1lPVwibm9kZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IGAke2xldmVsICogMjB9cHhgIH19PlxyXG5cdFx0XHRcdHtuYW1lfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0e2NoaWxkcmVuLmxlbmd0aCA+IDAgJiYgKFxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRyZW5cIj5cclxuXHRcdFx0XHRcdHtjaGlsZHJlbi5tYXAoKGRhdGEpID0+IChcclxuXHRcdFx0XHRcdFx0PE5vZGVcclxuXHRcdFx0XHRcdFx0XHRrZXk9e2RhdGEuaWR9XHJcblx0XHRcdFx0XHRcdFx0ZGF0YT17ZGF0YX1cclxuXHRcdFx0XHRcdFx0XHR0b3BfcGF5bG9hZD17dG9wX3BheWxvYWR9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0KX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGF5bG9hZCgpIHt9XHJcblxyXG5jb25zdCBGbGF0Tm9kZSA9IGZvcndhcmRSZWYoXHJcblx0KHsgaXRlbV90eXBlLCBsZXZlbCA9IDAsIHByb3BzID0ge30sIC4uLnJlc3QgfSA9IHt9LCByZWYpID0+IHtcclxuXHRcdGNvbnN0IEl0ZW0gPSBpdGVtX3R5cGU7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vZGVcIiByZWY9e3JlZn0+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGl0bGVcIlxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgcGFkZGluZ0xlZnQ6IGAke2xldmVsICogMjB9cHhgIH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEl0ZW0gey4uLnByb3BzfSAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG4pO1xyXG5cclxuY29uc3QgbGluZUhlaWdodCA9IDIwO1xyXG5cclxuZnVuY3Rpb24gQXJyYXlNYXBwZXIoYXJyYXkpIHtcclxuXHRmdW5jdGlvbiBjb25zdHJ1Y3Rvcih7IGxpc3QsIG1hcCA9IHt9IH0pIHtcclxuXHRcdGxpc3QubWFwKChpdGVtKSA9PiAobWFwW2l0ZW0uaWRdID0gaXRlbSkpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNsb25lKCkge1xyXG5cdFx0XHRyZXR1cm4gY29uc3RydWN0b3IoeyBsaXN0OiBsaXN0LnNsaWNlKCksIG1hcDoge30gfSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcmVtb3ZlKGlkKSB7XHJcblx0XHRcdGRlbGV0ZSBtYXBbaWRdO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNwbGljZShzdGFydF9wb3NpdGlvbiwgZGVsZXRlX2NvdW50LCAuLi5hcHBlbmRfaXRlbXMpIHtcclxuXHRcdFx0Y29uc3QgYmVfY3VsbGVkID0gbGlzdC5zcGxpY2UoXHJcblx0XHRcdFx0c3RhcnRfcG9zaXRpb24sXHJcblx0XHRcdFx0ZGVsZXRlX2NvdW50LFxyXG5cdFx0XHRcdC4uLmFwcGVuZF9pdGVtc1xyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0YmVfY3VsbGVkLm1hcCgoeyBpZCB9KSA9PiByZW1vdmUoaWQpKTtcclxuXHJcblx0XHRcdHJldHVybiBiZV9jdWxsZWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gbWFwKC4uLmFyZ3MpIHtcclxuXHRcdFx0cmV0dXJuIGxpc3QubWFwKC4uLmFyZ3MpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldChpZCkge1xyXG5cdFx0XHRyZXR1cm4gbWFwW2lkXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRnZXQsXHJcblx0XHRcdGNsb25lLFxyXG5cdFx0XHRyZW1vdmUsXHJcblx0XHRcdHNwbGljZSxcclxuXHRcdFx0bGlzdCxcclxuXHRcdFx0bWFwLFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBjb25zdHJ1Y3Rvcih7IGxpc3Q6IGFycmF5IH0pO1xyXG59XHJcblxyXG4vLyB0eXBlIFBheWxvYWQgeyBpZCwgbGV2ZWwsIGNhbl9leHBhbmQsIHR5cGVfc2VsZiwgcHJvcHMgfVxyXG4vLyB0eXBlIFBheWxvYWRMaXN0IFtdUGF5bG9hZFxyXG5leHBvcnQgY29uc3QgbWFrZU91dGxpbmVTdGF0ZSA9ICh7XHJcblx0aXRlbV90eXBlID0gbnVsbCxcclxuXHRwYXlsb2FkcyA9IFtdLFxyXG5cdHJlbGF5ZWQgPSBuZXcgU2V0KFtcImlkXCIsIFwibGV2ZWxcIl0pLFxyXG59ID0ge30pID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0aGllcmFyY2h5X21hcDoge30sXHJcblx0XHRpdGVtX3R5cGUsXHJcblx0XHRwYXlsb2FkczogQXJyYXlNYXBwZXIocGF5bG9hZHMpLFxyXG5cdFx0cmVsYXllZCxcclxuXHRcdHJlY29yZHM6IG5ldyBNYXAoKSxcclxuXHR9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gUmVsYXRpb24oaWQsIHsgLi4ucHJvcHMgfSkge1xyXG5cdHJldHVybiBPYmplY3QuYXNzaWduKFxyXG5cdFx0e1xyXG5cdFx0XHRpZCxcclxuXHRcdFx0bmV4dF9zaWJsaW5nOiB1bmRlZmluZWQsXHJcblx0XHRcdHByZXZfc2libGluZzogdW5kZWZpbmVkLFxyXG5cdFx0XHRwYXJlbnQ6IHVuZGVmaW5lZCxcclxuXHRcdFx0Y2hpbGQ6IHVuZGVmaW5lZCxcclxuXHRcdH0sXHJcblx0XHRwcm9wc1xyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbkhpZXJhcmNoeUFuYWx5emVyKHt9ID0ge30pIHtcclxuXHRmdW5jdGlvbiBjb25zdHJ1Y3Rvcih7IGhpZXJhcmNoeV9tYXAgPSB7IHJlbGF0aW9uOiB7fSwgc2l6ZToge30gfSB9ID0ge30pIHtcclxuXHRcdGxldCB7XHJcblx0XHRcdHJlbGF0aW9uOiBsaXZlX3JlbGF0aW9uX21hcCxcclxuXHRcdFx0c2l6ZTogbGl2ZV9zaXplX21hcCxcclxuXHRcdH0gPSBoaWVyYXJjaHlfbWFwO1xyXG5cclxuXHRcdC8vIGNvbnNvbGUubG9nKGxpdmVfc2l6ZV9tYXApO1xyXG5cclxuXHRcdC8vIHR5cGUgSGllcmFyY2h5Tm9kZSBQYXlsb2FkXHJcblx0XHRmdW5jdGlvbiBvbkluc2VydGVkKHsgbGV2ZWwsIGlkIH0sIGluZGV4LCBwYXlsb2Fkcykge1xyXG5cdFx0XHRjb25zdCBpc19maXJzdCA9IGluZGV4ID09PSAwO1xyXG5cdFx0XHRjb25zdCBpc190b3AgPSBsZXZlbCA9PT0gMDtcclxuXHRcdFx0Y29uc3QgaXNfbGFzdCA9IGluZGV4ID09PSBwYXlsb2Fkcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRjb25zdCBwcmV2X2luZGV4ID0gaW5kZXggLSAxO1xyXG5cdFx0XHRjb25zdCBuZXh0X2luZGV4ID0gaW5kZXggKyAxO1xyXG5cdFx0XHRjb25zdCBwcmV2X2lkID0gaXNfZmlyc3QgPyB1bmRlZmluZWQgOiBwYXlsb2Fkc1twcmV2X2luZGV4XS5pZDtcclxuXHRcdFx0Y29uc3QgbmV4dF9pZCA9IGlzX2xhc3QgPyB1bmRlZmluZWQgOiBwYXlsb2Fkc1tuZXh0X2luZGV4XS5pZDtcclxuXHRcdFx0Y29uc3QgcHJldl9wYXlsb2FkID0gcGF5bG9hZHNbcHJldl9pbmRleF07XHJcblx0XHRcdGNvbnN0IHByZXZfbGV2ZWwgPSAhaXNfZmlyc3QgJiYgcHJldl9wYXlsb2FkLmxldmVsO1xyXG5cdFx0XHRjb25zdCBkaWZmX2xldmVsID0gIWlzX2ZpcnN0ICYmIGxldmVsIC0gcHJldl9sZXZlbDtcclxuXHJcblx0XHRcdGNvbnN0IHByZXZfcmVsYXRpb24gPSBmYWxsYmFjayhSZWxhdGlvbihpZCkpKFxyXG5cdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfaWRdXHJcblx0XHRcdCk7XHJcblx0XHRcdGNvbnN0IG5leHRfcmVsYXRpb24gPSBmYWxsYmFjayhSZWxhdGlvbihpZCkpKFxyXG5cdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW25leHRfaWRdXHJcblx0XHRcdCk7XHJcblx0XHRcdGNvbnN0IHJlbGF0aW9uID0gZmFsbGJhY2soUmVsYXRpb24oaWQpKShsaXZlX3JlbGF0aW9uX21hcFtpZF0pO1xyXG5cclxuXHRcdFx0aWYgKGRpZmZfbGV2ZWwgPiAwKSB7XHJcblx0XHRcdFx0cHJldl9yZWxhdGlvbi5jaGlsZCA9IGlkO1xyXG5cdFx0XHRcdHJlbGF0aW9uLnBhcmVudCA9IGlzX2ZpcnN0IHx8IGlzX3RvcCA/IHVuZGVmaW5lZCA6IHByZXZfaWQ7XHJcblxyXG5cdFx0XHRcdGlmICghaXNfbGFzdCAmJiByZWxhdGlvbi5wYXJlbnQgPT09IG5leHRfcmVsYXRpb24ucGFyZW50KSB7XHJcblx0XHRcdFx0XHRuZXh0X3JlbGF0aW9uLnByZXZfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChkaWZmX2xldmVsID09PSAwKSB7XHJcblx0XHRcdFx0cmVsYXRpb24ucHJldl9zaWJsaW5nID0gcHJldl9pZDtcclxuXHRcdFx0XHRyZWxhdGlvbi5wYXJlbnQgPVxyXG5cdFx0XHRcdFx0aXNfZmlyc3QgfHwgaXNfdG9wID8gdW5kZWZpbmVkIDogcHJldl9yZWxhdGlvbi5wYXJlbnQ7XHJcblx0XHRcdFx0cHJldl9yZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBpZDtcclxuXHJcblx0XHRcdFx0aWYgKCFpc19sYXN0ICYmIG5leHRfcmVsYXRpb24ucGFyZW50ID09PSByZWxhdGlvbi5wYXJlbnQpIHtcclxuXHRcdFx0XHRcdHJlbGF0aW9uLm5leHRfc2libGluZyA9IG5leHRfaWQ7XHJcblx0XHRcdFx0XHRuZXh0X3JlbGF0aW9uLnByZXZfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBwcmV2X3NpYmxpbmdfaWQgPSBnZXRSZWN1cnNpdmVQYXJlbnQoXHJcblx0XHRcdFx0XHRwcmV2X2lkLFxyXG5cdFx0XHRcdFx0LWRpZmZfbGV2ZWxcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBwYXJlbnRfcmVsYXRpb24gPSBmYWxsYmFjayhSZWxhdGlvbihpZCkpKFxyXG5cdFx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9zaWJsaW5nX2lkXVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0Y29uc3QgcHJldl9zaWJsaW5nX3JlbGF0aW9uID1cclxuXHRcdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfc2libGluZ19pZF07XHJcblxyXG5cdFx0XHRcdHJlbGF0aW9uLnBhcmVudCA9XHJcblx0XHRcdFx0XHRpc19maXJzdCB8fCBpc190b3AgPyB1bmRlZmluZWQgOiBwYXJlbnRfcmVsYXRpb24ucGFyZW50O1xyXG5cdFx0XHRcdHJlbGF0aW9uLnByZXZfc2libGluZyA9IGlzX2xhc3QgPyB1bmRlZmluZWQgOiBwcmV2X3NpYmxpbmdfaWQ7XHJcblxyXG5cdFx0XHRcdGlmICghaXNfZmlyc3QpIHtcclxuXHRcdFx0XHRcdHByZXZfc2libGluZ19yZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICghaXNfbGFzdCAmJiByZWxhdGlvbi5wYXJlbnQgPT09IG5leHRfcmVsYXRpb24ucGFyZW50KSB7XHJcblx0XHRcdFx0XHRwYXJlbnRfcmVsYXRpb24ubmV4dF9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0XHRuZXh0X3JlbGF0aW9uLnByZXZfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKCFpc19maXJzdCkge1xyXG5cdFx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9zaWJsaW5nX2lkXSA9IHBhcmVudF9yZWxhdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghaXNfdG9wKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2l6ZSA9IGZhbGxiYWNrKDApKGxpdmVfc2l6ZV9tYXBbcmVsYXRpb24ucGFyZW50XSk7XHJcblx0XHRcdFx0bGl2ZV9zaXplX21hcFtyZWxhdGlvbi5wYXJlbnRdID0gc2l6ZSArIDE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghaXNfZmlyc3QpIHtcclxuXHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X2lkXSA9IHByZXZfcmVsYXRpb247XHJcblx0XHRcdH1cclxuXHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbaWRdID0gcmVsYXRpb247XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0UmVjdXJzaXZlUGFyZW50KGlkLCBjb3VudCA9IDApIHtcclxuXHRcdFx0Y29uc3QgcGFyZW50X2lkID1cclxuXHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtpZF0gJiYgbGl2ZV9yZWxhdGlvbl9tYXBbaWRdLnBhcmVudDtcclxuXHRcdFx0aWYgKGNvdW50ID4gMSAmJiBwYXJlbnRfaWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZ2V0UmVjdXJzaXZlUGFyZW50KHBhcmVudF9pZCwgY291bnQgLSAxKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gcGFyZW50X2lkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gb25SZW1vdmVkKHsgaWQgfSwgaW5kZXgsIHBheWxvYWRzKSB7XHJcblx0XHRcdGNvbnN0IGlzX2ZpcnN0ID0gaW5kZXggPT09IDA7XHJcblx0XHRcdGNvbnN0IGlzX2xhc3QgPSBpbmRleCA9PT0gcGF5bG9hZHMubGVuZ3RoO1xyXG5cdFx0XHRjb25zdCBwcmV2X2luZGV4ID0gaW5kZXggLSAxO1xyXG5cdFx0XHRjb25zdCBuZXh0X2luZGV4ID0gaW5kZXg7XHJcblx0XHRcdGNvbnN0IHByZXZfaWQgPSBpc19maXJzdCA/IHVuZGVmaW5lZCA6IHBheWxvYWRzW3ByZXZfaW5kZXhdLmlkO1xyXG5cdFx0XHRjb25zdCBuZXh0X2lkID0gaXNfbGFzdCA/IHVuZGVmaW5lZCA6IHBheWxvYWRzW25leHRfaW5kZXhdLmlkO1xyXG5cclxuXHRcdFx0Y29uc3QgcHJldl9yZWxhdGlvbiA9IGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfaWRdO1xyXG5cdFx0XHRjb25zdCBuZXh0X3JlbGF0aW9uID0gbGl2ZV9yZWxhdGlvbl9tYXBbbmV4dF9pZF07XHJcblx0XHRcdGNvbnN0IHJlbGF0aW9uID0gbGl2ZV9yZWxhdGlvbl9tYXBbaWRdO1xyXG5cclxuXHRcdFx0Y29uc3QgeyBwcmV2X3NpYmxpbmcsIG5leHRfc2libGluZywgcGFyZW50IH0gPSByZWxhdGlvbjtcclxuXHJcblx0XHRcdGNvbnN0IHByZXZfc2libGluZ19yZWxhdGlvbiA9IGlzTm90RW1wdHkocHJldl9zaWJsaW5nKVxyXG5cdFx0XHRcdD8gbGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9zaWJsaW5nXVxyXG5cdFx0XHRcdDogdW5kZWZpbmVkO1xyXG5cdFx0XHRjb25zdCBuZXh0X3NpYmxpbmdfcmVsYXRpb24gPSBpc05vdEVtcHR5KG5leHRfc2libGluZylcclxuXHRcdFx0XHQ/IGxpdmVfcmVsYXRpb25fbWFwW25leHRfc2libGluZ11cclxuXHRcdFx0XHQ6IHVuZGVmaW5lZDtcclxuXHRcdFx0Y29uc3QgcGFyZW50X3JlbGF0aW9uID0gaXNOb3RFbXB0eShwYXJlbnQpXHJcblx0XHRcdFx0PyBsaXZlX3JlbGF0aW9uX21hcFtwYXJlbnRdXHJcblx0XHRcdFx0OiB1bmRlZmluZWQ7XHJcblxyXG5cdFx0XHRpZiAoaXNOb3RFbXB0eShwcmV2X3NpYmxpbmdfcmVsYXRpb24pKSB7XHJcblx0XHRcdFx0cHJldl9yZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBuZXh0X3NpYmxpbmc7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGlzTm90RW1wdHkobmV4dF9zaWJsaW5nX3JlbGF0aW9uKSkge1xyXG5cdFx0XHRcdG5leHRfcmVsYXRpb24ucHJldl9zaWJsaW5nID0gcHJldl9zaWJsaW5nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChpc05vdEVtcHR5KHBhcmVudF9yZWxhdGlvbikgJiYgcGFyZW50X3JlbGF0aW9uLmNoaWxkID09PSBpZCkge1xyXG5cdFx0XHRcdHBhcmVudF9yZWxhdGlvbi5jaGlsZCA9IG5leHRfc2libGluZztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZGVsZXRlIGxpdmVfcmVsYXRpb25fbWFwW2lkXTtcclxuXHJcblx0XHRcdGxpdmVfc2l6ZV9tYXBbcmVsYXRpb24ucGFyZW50XS0tO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGNsb25lKCkge1xyXG5cdFx0XHRyZXR1cm4gY29uc3RydWN0b3Ioe1xyXG5cdFx0XHRcdGhpZXJhcmNoeV9tYXA6IHtcclxuXHRcdFx0XHRcdHJlbGF0aW9uOiB7IC4uLmxpdmVfcmVsYXRpb25fbWFwIH0sXHJcblx0XHRcdFx0XHRzaXplOiB7IC4uLmxpdmVfc2l6ZV9tYXAgfSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBhcHBseSh7IGhpZXJhcmNoeV9tYXAgfSkge1xyXG5cdFx0XHRsaXZlX3JlbGF0aW9uX21hcCA9IGhpZXJhcmNoeV9tYXAucmVsYXRpb247XHJcblx0XHRcdGxpdmVfc2l6ZV9tYXAgPSBoaWVyYXJjaHlfbWFwLnNpemU7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZ2V0SGllcmFyY2h5TWFwKCkge1xyXG5cdFx0XHRyZXR1cm4gaGllcmFyY2h5X21hcDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBleHBvcnRzID0ge1xyXG5cdFx0XHRjbG9uZSxcclxuXHRcdFx0YXBwbHksXHJcblx0XHRcdG9uSW5zZXJ0ZWQsXHJcblx0XHRcdG9uUmVtb3ZlZCxcclxuXHRcdFx0Z2V0SGllcmFyY2h5TWFwLFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihbZXhwb3J0c10sIGV4cG9ydHMpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGNvbnN0cnVjdG9yKHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZU91dGxpbmVSZWR1Y2VyID0gKHtcclxuXHRzdGF0ZSA9IG1ha2VPdXRsaW5lU3RhdGUoKSxcclxuXHRoaWVyYXJjaHlfYW5hbHl6ZXIgPSBnZW5IaWVyYXJjaHlBbmFseXplcigpLFxyXG59ID0ge30pID0+IHtcclxuXHRzdGF0ZS5oaWVyYXJjaHlfYW5hbHl6ZXIgPSBoaWVyYXJjaHlfYW5hbHl6ZXI7XHJcblxyXG5cdGNvbnN0IHN0YXJ0X3N0YW1wID0gRGF0ZS5ub3coKTtcclxuXHJcblx0dXNlTWVtbygoKSA9PiB7XHJcblx0XHRzdGF0ZS5wYXlsb2Fkcy5tYXAoaGllcmFyY2h5X2FuYWx5emVyLm9uSW5zZXJ0ZWQpO1xyXG5cdH0sIFtzdGF0ZS5wYXlsb2Fkc10pO1xyXG5cclxuXHRjb25zdCByZWR1Y2VyID0gdXNlUmVkdWNlcigoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cdFx0aWYgKGFjdGlvbi50eXBlID09PSBcImRlbGV0ZVwiKSB7XHJcblx0XHRcdGNvbnN0IHsgaW5kZXggfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgeyBwYXlsb2FkcyB9ID0gc3RhdGU7XHJcblx0XHRcdHN0YXRlLnBheWxvYWRzLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCBwYXlsb2FkcyB9O1xyXG5cdFx0fSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gXCJzYXZlXCIpIHtcclxuXHRcdFx0Y29uc3QgeyBpZCwgZXh0cmEgPSAoKSA9PiAoe30pIH0gPSBhY3Rpb247XHJcblx0XHRcdGNvbnN0IHsgcmVjb3JkcywgcGF5bG9hZHMgfSA9IHN0YXRlO1xyXG5cdFx0XHRjb25zdCBleHRyYV9kYXRhID0gZXh0cmEoc3RhdGUpO1xyXG5cclxuXHRcdFx0cmVjb3Jkcy5zZXQoaWQsIHBheWxvYWRzLmNsb25lKCkpO1xyXG5cdFx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV4dHJhX2RhdGEpLm1hcCgoc3ltKSA9PiB7XHJcblx0XHRcdFx0cmVjb3Jkcy5zZXQoc3ltLCBleHRyYV9kYXRhW3N5bV0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCByZWNvcmRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInJlc3RvcmVcIikge1xyXG5cdFx0XHRjb25zdCB7IGlkID0gW10sIGV4dHJhID0gW10gfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgeyByZWNvcmRzIH0gPSBzdGF0ZTtcclxuXHJcblx0XHRcdHJlY29yZHMuZGVsZXRlKGlkKTtcclxuXHRcdFx0ZXh0cmEubWFwKChpZCkgPT4gcmVjb3Jkcy5kZWxldGUoaWQpKTtcclxuXHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCByZWNvcmRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInNldEJhc2VkT25cIikge1xyXG5cdFx0XHRjb25zdCB7IGlkLCBhZmZlY3QgfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgcGF5bG9hZHMgPSBhZmZlY3Qoc3RhdGUucmVjb3Jkcy5nZXQoaWQpLmNsb25lKCksIHN0YXRlKTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBheWxvYWRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInNldFwiKSB7XHJcblx0XHRcdGNvbnN0IHsgYWZmZWN0IH0gPSBhY3Rpb247XHJcblx0XHRcdHJldHVybiB7IC4uLnN0YXRlLCAuLi5hZmZlY3Qoc3RhdGUpIH07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9XHJcblx0fSwgc3RhdGUpO1xyXG5cclxuXHRjb25zb2xlLmxvZyhcIi0tLVwiLCBEYXRlLm5vdygpIC0gc3RhcnRfc3RhbXApO1xyXG5cdHJldHVybiByZWR1Y2VyO1xyXG59O1xyXG5cclxuY29uc3QgRW1wdHlOb2RlID0gZm9yd2FyZFJlZigoeyAuLi5yZXN0IH0sIHJlZikgPT4gKFxyXG5cdDxkaXYgcmVmPXtyZWZ9IHsuLi5yZXN0fT48L2Rpdj5cclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoe1xyXG5cdHJlZHVjZXIgPSB1c2VPdXRsaW5lUmVkdWNlcigpLFxyXG5cdGNsYXNzTmFtZSxcclxuXHRzdHlsZSxcclxuXHQuLi5yZXN0XHJcbn0pID0+IHtcclxuXHRjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuXHRjb25zdCBjbHMgPSBqb2luQnlTcGFjZShjbGFzc05hbWUsIFwiT3V0bGluZVwiKTtcclxuXHRjb25zdCBbTm9kZSwgbWFwcGVyXSA9IHVzZUNvbXBvbmVudEluZGV4ZXIoRmxhdE5vZGUpO1xyXG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gcmVkdWNlcjtcclxuXHRjb25zdCBbdGh1bWJfcHJvcHMsIHNldFRodW1iUHJvcHNdID0gdXNlU3RhdGUoe1xyXG5cdFx0b2Zmc2V0OiAwLFxyXG5cdFx0bm9kZV9wcm9wczogeyBpdGVtX3R5cGU6IEVtcHR5Tm9kZSB9LFxyXG5cdH0pO1xyXG5cdGNvbnN0IHBheWxvYWRzID0gdXNlUmVmKCk7XHJcblx0Y29uc3QgaGllcmFyY2h5X2FuYWx5emVyID0gdXNlUmVmKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRwYXlsb2Fkcy5jdXJyZW50ID0gc3RhdGUucGF5bG9hZHM7XHJcblx0fSwgW3N0YXRlLnBheWxvYWRzXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRoaWVyYXJjaHlfYW5hbHl6ZXIuY3VycmVudCA9IHN0YXRlLmhpZXJhcmNoeV9hbmFseXplcjtcclxuXHR9LCBbc3RhdGUuaGllcmFyY2h5X2FuYWx5emVyXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoIXJlZikgcmV0dXJuO1xyXG5cdFx0Y29uc3QgdG9wX25vZGVfZG9tID0gcmVmLmN1cnJlbnQ7XHJcblx0XHRjb25zdCB0b3BfYm91bmQgPSB0b3Bfbm9kZV9kb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gbGlzdGVuKFxyXG5cdFx0XHRcIm1vdXNlZG93blwiLFxyXG5cdFx0XHR0b3Bfbm9kZV9kb21cclxuXHRcdCkoKGUpID0+IHtcclxuXHRcdFx0Y29uc3QgeyBwYXRoLCBjbGllbnRYLCBjbGllbnRZIH0gPSBlO1xyXG5cclxuXHRcdFx0Y29uc3QgbG9jYWxfb2Zmc2V0ID0gKGNsaWVudFkgLSB0b3BfYm91bmQueSkgJSBsaW5lSGVpZ2h0O1xyXG5cdFx0XHRjb25zdCBpbml0X2luZGV4ID1cclxuXHRcdFx0XHQoY2xpZW50WSAtIHRvcF9ib3VuZC55IC0gbG9jYWxfb2Zmc2V0KSAvIGxpbmVIZWlnaHQ7XHJcblxyXG5cdFx0XHRjb25zdCBpbml0X3BheWxvYWRfbm9kZV9wb3NpdGlvbiA9XHJcblx0XHRcdFx0aW5pdF9pbmRleCAqIGxpbmVIZWlnaHQgKyBsb2NhbF9vZmZzZXQ7XHJcblxyXG5cdFx0XHQvLyBkaXNwYXRjaCh7XHJcblx0XHRcdC8vIFx0dHlwZTogXCJzYXZlXCIsXHJcblx0XHRcdC8vIFx0aWQsXHJcblx0XHRcdC8vIFx0ZXh0cmE6ICh7IHBheWxvYWRzLCBoaWVyYXJjaHlfYW5hbHl6ZXIgfSkgPT4gKHtcclxuXHRcdFx0Ly8gXHRcdFtpbml0X3BheWxvYWRfbGV2ZWxfaWRdOiBwYXlsb2Fkcy5saXN0W2luaXRfaW5kZXhdLmxldmVsLFxyXG5cdFx0XHQvLyBcdFx0W2luaXRfaGllcmFyY2h5X2FuYWx5emVyX2lkXTogaGllcmFyY2h5X2FuYWx5emVyLmNsb25lKCksXHJcblx0XHRcdC8vIFx0fSksXHJcblx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdFx0Ly8gZGlzcGF0Y2goe1xyXG5cdFx0XHQvLyBcdHR5cGU6IFwic2V0XCIsXHJcblx0XHRcdC8vIFx0YWZmZWN0OiAoeyBwYXlsb2FkcywgaGllcmFyY2h5X2FuYWx5emVyIH0pID0+IHtcclxuXHRcdFx0Ly8gXHRcdGNvbnN0IFtwYXlsb2FkXSA9IHBheWxvYWRzLnNwbGljZShpbml0X2luZGV4LCAxKTtcclxuXHRcdFx0Ly8gXHRcdGhpZXJhcmNoeV9hbmFseXplci5vblJlbW92ZWQoXHJcblx0XHRcdC8vIFx0XHRcdHBheWxvYWQsXHJcblx0XHRcdC8vIFx0XHRcdGluaXRfaW5kZXgsXHJcblx0XHRcdC8vIFx0XHRcdHBheWxvYWRzLmxpc3RcclxuXHRcdFx0Ly8gXHRcdCk7XHJcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBwYXlsb2FkcywgaGllcmFyY2h5X2FuYWx5emVyIH07XHJcblx0XHRcdC8vIFx0fSxcclxuXHRcdFx0Ly8gfSk7XHJcblxyXG5cdFx0XHRjb25zdCBpeCA9IGNsaWVudFgsXHJcblx0XHRcdFx0aXkgPSBjbGllbnRZO1xyXG5cclxuXHRcdFx0Y29uc3QgcGF5bG9hZHNfbG9ja2VkID0gcGF5bG9hZHMuY3VycmVudC5jbG9uZSgpO1xyXG5cdFx0XHRjb25zdCBoaWVyYXJjaHlfYW5hbHl6ZXJfbG9ja2VkID0gaGllcmFyY2h5X2FuYWx5emVyLmN1cnJlbnQuY2xvbmUoKTtcclxuXHRcdFx0Y29uc3QgaW5pdF9wYXlsb2FkID0gcGF5bG9hZHNfbG9ja2VkLmxpc3RbaW5pdF9pbmRleF07XHJcblxyXG5cdFx0XHRjb25zdCBjbGVhbl9tb3ZlID0gbGlzdGVuKFwibW91c2Vtb3ZlXCIpKCh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xyXG5cdFx0XHRcdGxldCBzdGFydF9zdGFtcCA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0Y29uc3QgcGF5bG9hZHNfbGl2ZSA9IHBheWxvYWRzX2xvY2tlZC5jbG9uZSgpO1xyXG5cdFx0XHRcdGNvbnN0IGhpZXJhcmNoeV9hbmFseXplcl9saXZlID0gaGllcmFyY2h5X2FuYWx5emVyX2xvY2tlZC5jbG9uZSgpO1xyXG5cdFx0XHRcdC8vIGNvbnN0IGhpZXJhcmNoeV9tYXAgPSBoaWVyYXJjaHlfYW5hbHl6ZXJfbGl2ZS5nZXRIaWVyYXJjaHlNYXAoKTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgbG9jYWxfb2Zmc2V0ID0gKGNsaWVudFkgLSB0b3BfYm91bmQueSkgJSBsaW5lSGVpZ2h0O1xyXG5cdFx0XHRcdGNvbnN0IGxpdmVfaW5kZXggPVxyXG5cdFx0XHRcdFx0KGNsaWVudFkgLSB0b3BfYm91bmQueSAtIGxvY2FsX29mZnNldCkgLyBsaW5lSGVpZ2h0O1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X2luZGV4ID0gbGl2ZV9pbmRleCAtIDE7XHJcblx0XHRcdFx0Ly8gY29uc3QgbmV4dF9pbmRleCA9IGxpdmVfaW5kZXggKyAxO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwcmV2X2luZGV4LCBuZXh0X2luZGV4KTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgaXNfZmlyc3QgPSBsaXZlX2luZGV4ID09PSAwO1xyXG5cdFx0XHRcdC8vIGNvbnN0IGlzX2xhc3QgPSBsaXZlX2luZGV4ID09PSBwYXlsb2Fkc19saXZlLmxlbmd0aCAtIDE7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IGluaXRfcmVsYXRpb24gPSBoaWVyYXJjaHlfbWFwLnJlbGF0aW9uW2luaXRfcGF5bG9hZC5pZF07XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfcGF5bG9hZCA9IHBheWxvYWRzX2xpdmUubGlzdFtwcmV2X2luZGV4XTtcclxuXHRcdFx0XHQvLyBjb25zdCBuZXh0X3BheWxvYWQgPSBwYXlsb2Fkc19saXZlLmxpc3RbbmV4dF9pbmRleF07XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfcmVsYXRpb24gPSBoaWVyYXJjaHlfbWFwLnJlbGF0aW9uW3ByZXZfcGF5bG9hZC5pZF07XHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9sZXZlbCA9IHByZXZfcGF5bG9hZC5sZXZlbDtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9wYXJlbnRfcGF5bG9hZCA9IHBheWxvYWRzX2xpdmUuZ2V0KFxyXG5cdFx0XHRcdC8vIFx0cHJldl9yZWxhdGlvbi5wYXJlbnRcclxuXHRcdFx0XHQvLyApO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X2lzX3BhcmVudCA9IHByZXZfcGF5bG9hZC5pZCBpbiBoaWVyYXJjaHlfbWFwLnNpemU7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IGluaXRfbGV2ZWwgPSBpbml0X3BheWxvYWQubGV2ZWw7XHJcblx0XHRcdFx0Ly8gY29uc3QgbWF5YmVfbGV2ZWwgPVxyXG5cdFx0XHRcdC8vIFx0KHByZXZfaXNfcGFyZW50XHJcblx0XHRcdFx0Ly8gXHRcdD8gcHJldl9wYXlsb2FkLmxldmVsXHJcblx0XHRcdFx0Ly8gXHRcdDogcHJldl9wYXJlbnRfcGF5bG9hZC5sZXZlbCkgKyAxO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCB4ID0gY2xpZW50WCAtIGl4O1xyXG5cdFx0XHRcdC8vIGNvbnN0IHNob3VsZF9sZXZlbCA9IGluaXRfbGV2ZWwgKyB4IC8gMjA7XHJcblxyXG5cdFx0XHRcdGNvbnN0IG9mZnNldCA9IGluaXRfcGF5bG9hZF9ub2RlX3Bvc2l0aW9uICsgY2xpZW50WSAtIGl5O1xyXG5cclxuXHRcdFx0XHQvLyBzZXRUaHVtYlByb3BzKHtcclxuXHRcdFx0XHQvLyBcdG5vZGVfcHJvcHM6IGdldE5vZGVQcm9wcyhcclxuXHRcdFx0XHQvLyBcdFx0eyAuLi5pbml0X3BheWxvYWQsIGxldmVsOiBzaG91bGRfbGV2ZWwgfSxcclxuXHRcdFx0XHQvLyBcdFx0c3RhdGVcclxuXHRcdFx0XHQvLyBcdCksXHJcblx0XHRcdFx0Ly8gXHRvZmZzZXQsXHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0Ly8gc2V0VGh1bWJQcm9wcyh7XHJcblx0XHRcdFx0Ly8gXHRub2RlX3Byb3BzOiBnZXROb2RlUHJvcHMoXHJcblx0XHRcdFx0Ly8gXHRcdHsgLi4uaW5pdF9wYXlsb2FkLCBsZXZlbDogY2xpZW50WCAvIDIwIH0sXHJcblx0XHRcdFx0Ly8gXHRcdHN0YXRlXHJcblx0XHRcdFx0Ly8gXHQpLFxyXG5cdFx0XHRcdC8vIFx0b2Zmc2V0LFxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdFx0XHQvLyBpZiAoXHJcblx0XHRcdFx0Ly8gXHRpc0VtcHR5KHByZXZfcmVsYXRpb24ubmV4dF9zaWJsaW5nKSAmJlxyXG5cdFx0XHRcdC8vIFx0IXByZXZfaXNfcGFyZW50XHJcblx0XHRcdFx0Ly8gKSB7XHJcblx0XHRcdFx0Ly8gXHRpZiAoc2hvdWxkX2xldmVsIDwgbWF5YmVfbGV2ZWwpIHtcclxuXHRcdFx0XHQvLyBcdFx0aW5pdF9wYXlsb2FkLmxldmVsID0gc2hvdWxkX2xldmVsO1xyXG5cdFx0XHRcdC8vIFx0fVxyXG5cdFx0XHRcdC8vIH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdC8vIGluaXRfcGF5bG9hZC5sZXZlbCA9IG1heWJlX2xldmVsO1xyXG5cclxuXHRcdFx0XHRwYXlsb2Fkc19saXZlLnNwbGljZShpbml0X2luZGV4LCAxKTtcclxuXHRcdFx0XHRoaWVyYXJjaHlfYW5hbHl6ZXJfbGl2ZS5vblJlbW92ZWQoXHJcblx0XHRcdFx0XHRpbml0X3BheWxvYWQsXHJcblx0XHRcdFx0XHRpbml0X2luZGV4LFxyXG5cdFx0XHRcdFx0cGF5bG9hZHNfbGl2ZS5saXN0XHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0cGF5bG9hZHNfbGl2ZS5zcGxpY2UobGl2ZV9pbmRleCA+PiAwLCAwLCBpbml0X3BheWxvYWQpO1xyXG5cdFx0XHRcdGhpZXJhcmNoeV9hbmFseXplcl9saXZlLm9uSW5zZXJ0ZWQoXHJcblx0XHRcdFx0XHRpbml0X3BheWxvYWQsXHJcblx0XHRcdFx0XHRsaXZlX2luZGV4ID4+IDAsXHJcblx0XHRcdFx0XHRwYXlsb2Fkc19saXZlLmxpc3RcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRkaXNwYXRjaCh7XHJcblx0XHRcdFx0XHR0eXBlOiBcInNldFwiLFxyXG5cdFx0XHRcdFx0YWZmZWN0OiAoKSA9PiAoe1xyXG5cdFx0XHRcdFx0XHRwYXlsb2FkczogcGF5bG9hZHNfbGl2ZSxcclxuXHRcdFx0XHRcdFx0aGllcmFyY2h5X2FuYWx5emVyOiBoaWVyYXJjaHlfYW5hbHl6ZXJfbGl2ZSxcclxuXHRcdFx0XHRcdH0pLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKERhdGUubm93KCkgLSBzdGFydF9zdGFtcCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgY2xlYW5fdXAgPSBsaXN0ZW4oXCJtb3VzZXVwXCIpKCgpID0+IHtcclxuXHRcdFx0XHRjbGVhbl9tb3ZlKCk7XHJcblx0XHRcdFx0Y2xlYW5fdXAoKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9LCBbcmVmLmN1cnJlbnQsIGRpc3BhdGNoXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xzfSByZWY9e3JlZn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9sZGVyXCI+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGh1bWJcIlxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgdG9wOiB0aHVtYl9wcm9wcy5vZmZzZXQgKyBcInB4XCIgfX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Tm9kZSB7Li4udGh1bWJfcHJvcHMubm9kZV9wcm9wc30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG5cdFx0XHRcdHtzdGF0ZS5wYXlsb2Fkcy5tYXAoKHBheWxvYWQpID0+IChcclxuXHRcdFx0XHRcdDxOb2RlIGtleT17cGF5bG9hZC5pZH0gey4uLmdldE5vZGVQcm9wcyhwYXlsb2FkLCBzdGF0ZSl9IC8+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldE5vZGVQcm9wcyhwYXlsb2FkLCBzdGF0ZSkge1xyXG5cdGNvbnN0IHJlZHVjZXIgPSAocmVsYXllZCwgW2tleSwgdmFsdWVdKSA9PiB7XHJcblx0XHRpZiAoc3RhdGUucmVsYXllZC5oYXMoa2V5KSkge1xyXG5cdFx0XHRyZWxheWVkW2tleV0gPSB2YWx1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZWxheWVkO1xyXG5cdH07XHJcblx0Y29uc3QgcmVsYXllZF9wcm9wcyA9IE9iamVjdC5lbnRyaWVzKHBheWxvYWQpLnJlZHVjZShyZWR1Y2VyLCB7fSk7XHJcblx0Y29uc3QgcGF5bG9hZF9wcm9wcyA9IHBheWxvYWQucHJvcHM7XHJcblx0Y29uc3QgbWV0YV9wcm9wcyA9IHtcclxuXHRcdGlkOiBwYXlsb2FkLmlkLFxyXG5cdFx0bGV2ZWw6IHBheWxvYWQubGV2ZWwsXHJcblx0XHRjYW5fZXhwYW5kOiBwYXlsb2FkLmNhbl9leHBhbmQsXHJcblx0fTtcclxuXHJcblx0aWYgKFwidHlwZV9zZWxmXCIgaW4gcGF5bG9hZCkge1xyXG5cdFx0bWV0YV9wcm9wcy5pdGVtX3R5cGUgPSBwYXlsb2FkLnR5cGVfc2VsZjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bWV0YV9wcm9wcy5pdGVtX3R5cGUgPSBzdGF0ZS5pdGVtX3R5cGU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHsgLi4ucGF5bG9hZF9wcm9wcywgLi4ucmVsYXllZF9wcm9wcyB9LFxyXG5cdFx0Li4ubWV0YV9wcm9wcyxcclxuXHR9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=