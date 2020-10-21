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
      var _payloads3 = state.payloads; // console.log(state, "===");

      if (_payloads3.list.length > 0) {
        var _index = Math.random() * _payloads3.list.length >> 0;

        console.log("---", _index, _payloads3.list.length);

        _payloads3.splice(_index, 1);
      }

      state.payloads = ArrayMapper([]);
      return {
        payloads: ArrayMapper([])
      };
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
      lineNumber: 385,
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
          type: "xxx" // affect: () => ({
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
      lineNumber: 564,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "holder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
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
      lineNumber: 566,
      columnNumber: 5
    }
  }, __jsx(Node, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, thumb_props.node_props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 6
    }
  })))), __jsx("div", {
    className: "list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 4
    }
  }, state.payloads.map(function (payload) {
    return __jsx(Node, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
      key: payload.id
    }, getNodeProps(payload, state), {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvT3V0bGluZS9PdXRsaW5lLmpzeCJdLCJuYW1lcyI6WyJub2RlX21hcCIsImRvbV9wYXlsb2FkX21hcCIsIk1hcCIsIk5vZGUiLCJkYXRhIiwidG9wX3BheWxvYWQiLCJuYW1lIiwiaWQiLCJsZXZlbCIsImNoaWxkcmVuIiwidG9wX25vZGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwYXlsb2FkIiwiZG9tIiwiY3VycmVudCIsInJhdyIsInRvcCIsInNldCIsInBhZGRpbmdMZWZ0IiwibGVuZ3RoIiwibWFwIiwiZ2V0UGF5bG9hZCIsIkZsYXROb2RlIiwiZm9yd2FyZFJlZiIsInJlZiIsIml0ZW1fdHlwZSIsInByb3BzIiwicmVzdCIsIkl0ZW0iLCJsaW5lSGVpZ2h0IiwiQXJyYXlNYXBwZXIiLCJhcnJheSIsImNvbnN0cnVjdG9yIiwibGlzdCIsIml0ZW0iLCJjbG9uZSIsInNsaWNlIiwicmVtb3ZlIiwic3BsaWNlIiwic3RhcnRfcG9zaXRpb24iLCJkZWxldGVfY291bnQiLCJhcHBlbmRfaXRlbXMiLCJiZV9jdWxsZWQiLCJnZXQiLCJtYWtlT3V0bGluZVN0YXRlIiwicGF5bG9hZHMiLCJyZWxheWVkIiwiU2V0IiwiaGllcmFyY2h5X21hcCIsInJlY29yZHMiLCJSZWxhdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsIm5leHRfc2libGluZyIsInVuZGVmaW5lZCIsInByZXZfc2libGluZyIsInBhcmVudCIsImNoaWxkIiwiZ2VuSGllcmFyY2h5QW5hbHl6ZXIiLCJyZWxhdGlvbiIsInNpemUiLCJsaXZlX3JlbGF0aW9uX21hcCIsImxpdmVfc2l6ZV9tYXAiLCJvbkluc2VydGVkIiwiaW5kZXgiLCJpc19maXJzdCIsImlzX3RvcCIsImlzX2xhc3QiLCJwcmV2X2luZGV4IiwibmV4dF9pbmRleCIsInByZXZfaWQiLCJuZXh0X2lkIiwicHJldl9wYXlsb2FkIiwicHJldl9sZXZlbCIsImRpZmZfbGV2ZWwiLCJwcmV2X3JlbGF0aW9uIiwiZmFsbGJhY2siLCJuZXh0X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX2lkIiwiZ2V0UmVjdXJzaXZlUGFyZW50IiwicGFyZW50X3JlbGF0aW9uIiwicHJldl9zaWJsaW5nX3JlbGF0aW9uIiwiY291bnQiLCJwYXJlbnRfaWQiLCJvblJlbW92ZWQiLCJpc05vdEVtcHR5IiwibmV4dF9zaWJsaW5nX3JlbGF0aW9uIiwiYXBwbHkiLCJnZXRIaWVyYXJjaHlNYXAiLCJleHBvcnRzIiwidXNlT3V0bGluZVJlZHVjZXIiLCJzdGF0ZSIsImhpZXJhcmNoeV9hbmFseXplciIsInVzZU1lbW8iLCJyZWR1Y2VyIiwidXNlUmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJleHRyYSIsImV4dHJhX2RhdGEiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzeW0iLCJhZmZlY3QiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIkVtcHR5Tm9kZSIsImNsYXNzTmFtZSIsInN0eWxlIiwiY2xzIiwiam9pbkJ5U3BhY2UiLCJ1c2VDb21wb25lbnRJbmRleGVyIiwibWFwcGVyIiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm9mZnNldCIsIm5vZGVfcHJvcHMiLCJ0aHVtYl9wcm9wcyIsInNldFRodW1iUHJvcHMiLCJ0b3Bfbm9kZV9kb20iLCJ0b3BfYm91bmQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsaXN0ZW4iLCJlIiwicGF0aCIsImNsaWVudFgiLCJjbGllbnRZIiwibG9jYWxfb2Zmc2V0IiwieSIsImluaXRfaW5kZXgiLCJpbml0X3BheWxvYWRfbm9kZV9wb3NpdGlvbiIsIml4IiwiaXkiLCJwYXlsb2Fkc19sb2NrZWQiLCJoaWVyYXJjaHlfYW5hbHl6ZXJfbG9ja2VkIiwiaW5pdF9wYXlsb2FkIiwiY2xlYW5fbW92ZSIsInN0YXJ0X3N0YW1wIiwiRGF0ZSIsIm5vdyIsInN0YXJ0X3N0YW1wX2Rpc3BhdGNoIiwiY2xlYW5fdXAiLCJnZXROb2RlUHJvcHMiLCJrZXkiLCJ2YWx1ZSIsImhhcyIsInJlbGF5ZWRfcHJvcHMiLCJlbnRyaWVzIiwicmVkdWNlIiwicGF5bG9hZF9wcm9wcyIsIm1ldGFfcHJvcHMiLCJjYW5fZXhwYW5kIiwidHlwZV9zZWxmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxRQUFRLEdBQUcsRUFBakI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsSUFBSUMsR0FBSixFQUF4Qjs7QUFFUCxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQUEsbUJBQ1NELElBRFQsQ0FDL0JFLElBRCtCO0FBQUEsTUFDL0JBLElBRCtCLDJCQUN4QixFQUR3QjtBQUFBLE1BQ3BCQyxFQURvQixHQUNTSCxJQURULENBQ3BCRyxFQURvQjtBQUFBLE1BQ2hCQyxLQURnQixHQUNTSixJQURULENBQ2hCSSxLQURnQjtBQUFBLHVCQUNTSixJQURULENBQ1RLLFFBRFM7QUFBQSxNQUNUQSxRQURTLCtCQUNFLEVBREY7QUFFdkMsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxPQUFPLEdBQUc7QUFDZlAsVUFBSSxFQUFKQSxJQURlO0FBRWZDLFFBQUUsRUFBRkEsRUFGZTtBQUdmRSxjQUFRLEVBQVJBLFFBSGU7QUFJZkssU0FBRyxFQUFFSixRQUFRLENBQUNLLE9BSkM7QUFLZkMsU0FBRyxFQUFFWixJQUxVO0FBTWZhLFNBQUcsRUFBRVo7QUFOVSxLQUFoQjtBQVFBTCxZQUFRLENBQUNPLEVBQUQsQ0FBUixHQUFlTSxPQUFmO0FBQ0FaLG1CQUFlLENBQUNpQixHQUFoQixDQUFvQlIsUUFBUSxDQUFDSyxPQUE3QixFQUFzQ0Ys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O0FBQzFDLFFBQUl0RCxLQUFLLENBQUM3QyxPQUFOLENBQWNvRyxHQUFkLENBQWtCRixHQUFsQixDQUFKLEVBQTRCO0FBQzNCbEcsYUFBTyxDQUFDa0csR0FBRCxDQUFQLEdBQWVDLEtBQWY7QUFDQTs7QUFDRCxXQUFPbkcsT0FBUDtBQUNBLEdBTEQ7O0FBTUEsTUFBTXFHLGFBQWEsR0FBR2hHLE1BQU0sQ0FBQ2lHLE9BQVAsQ0FBZXhJLE9BQWYsRUFBd0J5SSxNQUF4QixDQUErQnZELE9BQS9CLEVBQXdDLEVBQXhDLENBQXRCO0FBQ0EsTUFBTXdELGFBQWEsR0FBRzFJLE9BQU8sQ0FBQ2MsS0FBOUI7QUFDQSxNQUFNNkgsVUFBVSxHQUFHO0FBQ2xCakosTUFBRSxFQUFFTSxPQUFPLENBQUNOLEVBRE07QUFFbEJDLFNBQUssRUFBRUssT0FBTyxDQUFDTCxLQUZHO0FBR2xCaUosY0FBVSxFQUFFNUksT0FBTyxDQUFDNEk7QUFIRixHQUFuQjs7QUFNQSxNQUFJLGVBQWU1SSxPQUFuQixFQUE0QjtBQUMzQjJJLGNBQVUsQ0FBQzlILFNBQVgsR0FBdUJiLE9BQU8sQ0FBQzZJLFNBQS9CO0FBQ0EsR0FGRCxNQUVPO0FBQ05GLGNBQVUsQ0FBQzlILFNBQVgsR0FBdUJrRSxLQUFLLENBQUNsRSxTQUE3QjtBQUNBOztBQUVEO0FBQ0NDLFNBQUssa0NBQU80SCxhQUFQLEdBQXlCSCxhQUF6QjtBQUROLEtBRUlJLFVBRko7QUFJQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ODQwMWU3ZjIyMGNiNWUyYjEzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgam9pbkJ5U3BhY2UsIGluQm91bmQsIGluQXJyYXlCb3VuZCB9IGZyb20gXCJAL3V0aWxzL2FycmF5XCI7XHJcbmltcG9ydCB7IGZhbGxiYWNrLCBsaXN0ZW4gfSBmcm9tIFwiQC91dGlscy9mblwiO1xyXG5pbXBvcnQge1xyXG5cdHVzZVJlZixcclxuXHR1c2VFZmZlY3QsXHJcblx0Zm9yd2FyZFJlZixcclxuXHR1c2VTdGF0ZSxcclxuXHR1c2VSZWR1Y2VyLFxyXG5cdHVzZUNhbGxiYWNrLFxyXG5cdHVzZU1lbW8sXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vT3V0bGluZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlQ29tcG9uZW50SW5kZXhlciB9IGZyb20gXCJAL3V0aWxzL3VzZXMvbWFwcGVyXCI7XHJcbmltcG9ydCB7IFRpbWluZ0luZGV4IH0gZnJvbSBcIkAvdXRpbHMvaW5kaWNlcy90aW1pbmdcIjtcclxuaW1wb3J0IHsgaXNFbXB0eSwgaXNOb3RFbXB0eSB9IGZyb20gXCJAL3V0aWxzL2Fzc2VydHNcIjtcclxuaW1wb3J0IG5leHQgZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCJAL3V0aWxzL2FycmF5XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgbm9kZV9tYXAgPSB7fTtcclxuZXhwb3J0IGNvbnN0IGRvbV9wYXlsb2FkX21hcCA9IG5ldyBNYXAoKTtcclxuXHJcbmNvbnN0IE5vZGUgPSAoeyBkYXRhLCB0b3BfcGF5bG9hZCB9KSA9PiB7XHJcblx0Y29uc3QgeyBuYW1lID0gXCJcIiwgaWQsIGxldmVsLCBjaGlsZHJlbiA9IFtdIH0gPSBkYXRhO1xyXG5cdGNvbnN0IHRvcF9ub2RlID0gdXNlUmVmKCk7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IHBheWxvYWQgPSB7XHJcblx0XHRcdG5hbWUsXHJcblx0XHRcdGlkLFxyXG5cdFx0XHRjaGlsZHJlbixcclxuXHRcdFx0ZG9tOiB0b3Bfbm9kZS5jdXJyZW50LFxyXG5cdFx0XHRyYXc6IGRhdGEsXHJcblx0XHRcdHRvcDogdG9wX3BheWxvYWQsXHJcblx0XHR9O1xyXG5cdFx0bm9kZV9tYXBbaWRdID0gcGF5bG9hZDtcclxuXHRcdGRvbV9wYXlsb2FkX21hcC5zZXQodG9wX25vZGUuY3VycmVudCwgcGF5bG9hZCk7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRkb21fcGF5bG9hZF9tYXAuZGVsZXRlKHRvcF9ub2RlLmN1cnJlbnQpO1xyXG5cdFx0XHRkZWxldGUgbm9kZV9tYXBbaWRdO1xyXG5cdFx0fTtcclxuXHR9LCBbdG9wX25vZGUuY3VycmVudCwgZGF0YV0pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHJlZj17dG9wX25vZGV9IGNsYXNzTmFtZT1cIm5vZGVcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBgJHtsZXZlbCAqIDIwfXB4YCB9fT5cclxuXHRcdFx0XHR7bmFtZX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHtjaGlsZHJlbi5sZW5ndGggPiAwICYmIChcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNoaWxkcmVuXCI+XHJcblx0XHRcdFx0XHR7Y2hpbGRyZW4ubWFwKChkYXRhKSA9PiAoXHJcblx0XHRcdFx0XHRcdDxOb2RlXHJcblx0XHRcdFx0XHRcdFx0a2V5PXtkYXRhLmlkfVxyXG5cdFx0XHRcdFx0XHRcdGRhdGE9e2RhdGF9XHJcblx0XHRcdFx0XHRcdFx0dG9wX3BheWxvYWQ9e3RvcF9wYXlsb2FkfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBheWxvYWQoKSB7fVxyXG5cclxuY29uc3QgRmxhdE5vZGUgPSBmb3J3YXJkUmVmKFxyXG5cdCh7IGl0ZW1fdHlwZSwgbGV2ZWwgPSAwLCBwcm9wcyA9IHt9LCAuLi5yZXN0IH0gPSB7fSwgcmVmKSA9PiB7XHJcblx0XHRjb25zdCBJdGVtID0gaXRlbV90eXBlO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub2RlXCIgcmVmPXtyZWZ9PlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInRpdGxlXCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBgJHtsZXZlbCAqIDIwfXB4YCB9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxJdGVtIHsuLi5wcm9wc30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxuKTtcclxuXHJcbmNvbnN0IGxpbmVIZWlnaHQgPSAyMDtcclxuXHJcbmZ1bmN0aW9uIEFycmF5TWFwcGVyKGFycmF5KSB7XHJcblx0ZnVuY3Rpb24gY29uc3RydWN0b3IoeyBsaXN0LCBtYXAgPSB7fSB9KSB7XHJcblx0XHRsaXN0Lm1hcCgoaXRlbSkgPT4gKG1hcFtpdGVtLmlkXSA9IGl0ZW0pKTtcclxuXHJcblx0XHRmdW5jdGlvbiBjbG9uZSgpIHtcclxuXHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yKHsgbGlzdDogbGlzdC5zbGljZSgpLCBtYXA6IHt9IH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlbW92ZShpZCkge1xyXG5cdFx0XHRkZWxldGUgbWFwW2lkXTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBzcGxpY2Uoc3RhcnRfcG9zaXRpb24sIGRlbGV0ZV9jb3VudCwgLi4uYXBwZW5kX2l0ZW1zKSB7XHJcblx0XHRcdGNvbnN0IGJlX2N1bGxlZCA9IGxpc3Quc3BsaWNlKFxyXG5cdFx0XHRcdHN0YXJ0X3Bvc2l0aW9uLFxyXG5cdFx0XHRcdGRlbGV0ZV9jb3VudCxcclxuXHRcdFx0XHQuLi5hcHBlbmRfaXRlbXNcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGJlX2N1bGxlZC5tYXAoKHsgaWQgfSkgPT4gcmVtb3ZlKGlkKSk7XHJcblxyXG5cdFx0XHRyZXR1cm4gYmVfY3VsbGVkO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG1hcCguLi5hcmdzKSB7XHJcblx0XHRcdHJldHVybiBsaXN0Lm1hcCguLi5hcmdzKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBnZXQoaWQpIHtcclxuXHRcdFx0cmV0dXJuIG1hcFtpZF07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Z2V0LFxyXG5cdFx0XHRjbG9uZSxcclxuXHRcdFx0cmVtb3ZlLFxyXG5cdFx0XHRzcGxpY2UsXHJcblx0XHRcdGxpc3QsXHJcblx0XHRcdG1hcCxcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY29uc3RydWN0b3IoeyBsaXN0OiBhcnJheSB9KTtcclxufVxyXG5cclxuLy8gdHlwZSBQYXlsb2FkIHsgaWQsIGxldmVsLCBjYW5fZXhwYW5kLCB0eXBlX3NlbGYsIHByb3BzIH1cclxuLy8gdHlwZSBQYXlsb2FkTGlzdCBbXVBheWxvYWRcclxuZXhwb3J0IGNvbnN0IG1ha2VPdXRsaW5lU3RhdGUgPSAoe1xyXG5cdGl0ZW1fdHlwZSA9IG51bGwsXHJcblx0cGF5bG9hZHMgPSBbXSxcclxuXHRyZWxheWVkID0gbmV3IFNldChbXCJpZFwiLCBcImxldmVsXCJdKSxcclxufSA9IHt9KSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGhpZXJhcmNoeV9tYXA6IHt9LFxyXG5cdFx0aXRlbV90eXBlLFxyXG5cdFx0cGF5bG9hZHM6IEFycmF5TWFwcGVyKHBheWxvYWRzKSxcclxuXHRcdHJlbGF5ZWQsXHJcblx0XHRyZWNvcmRzOiBuZXcgTWFwKCksXHJcblx0fTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFJlbGF0aW9uKGlkLCB7IC4uLnByb3BzIH0pIHtcclxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuXHRcdHtcclxuXHRcdFx0aWQsXHJcblx0XHRcdG5leHRfc2libGluZzogdW5kZWZpbmVkLFxyXG5cdFx0XHRwcmV2X3NpYmxpbmc6IHVuZGVmaW5lZCxcclxuXHRcdFx0cGFyZW50OiB1bmRlZmluZWQsXHJcblx0XHRcdGNoaWxkOiB1bmRlZmluZWQsXHJcblx0XHR9LFxyXG5cdFx0cHJvcHNcclxuXHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5IaWVyYXJjaHlBbmFseXplcih7fSA9IHt9KSB7XHJcblx0ZnVuY3Rpb24gY29uc3RydWN0b3IoeyBoaWVyYXJjaHlfbWFwID0geyByZWxhdGlvbjoge30sIHNpemU6IHt9IH0gfSA9IHt9KSB7XHJcblx0XHRsZXQge1xyXG5cdFx0XHRyZWxhdGlvbjogbGl2ZV9yZWxhdGlvbl9tYXAsXHJcblx0XHRcdHNpemU6IGxpdmVfc2l6ZV9tYXAsXHJcblx0XHR9ID0gaGllcmFyY2h5X21hcDtcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZyhsaXZlX3NpemVfbWFwKTtcclxuXHJcblx0XHQvLyB0eXBlIEhpZXJhcmNoeU5vZGUgUGF5bG9hZFxyXG5cdFx0ZnVuY3Rpb24gb25JbnNlcnRlZCh7IGxldmVsLCBpZCB9LCBpbmRleCwgcGF5bG9hZHMpIHtcclxuXHRcdFx0Y29uc3QgaXNfZmlyc3QgPSBpbmRleCA9PT0gMDtcclxuXHRcdFx0Y29uc3QgaXNfdG9wID0gbGV2ZWwgPT09IDA7XHJcblx0XHRcdGNvbnN0IGlzX2xhc3QgPSBpbmRleCA9PT0gcGF5bG9hZHMubGVuZ3RoIC0gMTtcclxuXHRcdFx0Y29uc3QgcHJldl9pbmRleCA9IGluZGV4IC0gMTtcclxuXHRcdFx0Y29uc3QgbmV4dF9pbmRleCA9IGluZGV4ICsgMTtcclxuXHRcdFx0Y29uc3QgcHJldl9pZCA9IGlzX2ZpcnN0ID8gdW5kZWZpbmVkIDogcGF5bG9hZHNbcHJldl9pbmRleF0uaWQ7XHJcblx0XHRcdGNvbnN0IG5leHRfaWQgPSBpc19sYXN0ID8gdW5kZWZpbmVkIDogcGF5bG9hZHNbbmV4dF9pbmRleF0uaWQ7XHJcblx0XHRcdGNvbnN0IHByZXZfcGF5bG9hZCA9IHBheWxvYWRzW3ByZXZfaW5kZXhdO1xyXG5cdFx0XHRjb25zdCBwcmV2X2xldmVsID0gIWlzX2ZpcnN0ICYmIHByZXZfcGF5bG9hZC5sZXZlbDtcclxuXHRcdFx0Y29uc3QgZGlmZl9sZXZlbCA9ICFpc19maXJzdCAmJiBsZXZlbCAtIHByZXZfbGV2ZWw7XHJcblxyXG5cdFx0XHRjb25zdCBwcmV2X3JlbGF0aW9uID0gZmFsbGJhY2soUmVsYXRpb24oaWQpKShcclxuXHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X2lkXVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCBuZXh0X3JlbGF0aW9uID0gZmFsbGJhY2soUmVsYXRpb24oaWQpKShcclxuXHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtuZXh0X2lkXVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCByZWxhdGlvbiA9IGZhbGxiYWNrKFJlbGF0aW9uKGlkKSkobGl2ZV9yZWxhdGlvbl9tYXBbaWRdKTtcclxuXHJcblx0XHRcdGlmIChkaWZmX2xldmVsID4gMCkge1xyXG5cdFx0XHRcdHByZXZfcmVsYXRpb24uY2hpbGQgPSBpZDtcclxuXHRcdFx0XHRyZWxhdGlvbi5wYXJlbnQgPSBpc19maXJzdCB8fCBpc190b3AgPyB1bmRlZmluZWQgOiBwcmV2X2lkO1xyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2xhc3QgJiYgcmVsYXRpb24ucGFyZW50ID09PSBuZXh0X3JlbGF0aW9uLnBhcmVudCkge1xyXG5cdFx0XHRcdFx0bmV4dF9yZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoZGlmZl9sZXZlbCA9PT0gMCkge1xyXG5cdFx0XHRcdHJlbGF0aW9uLnByZXZfc2libGluZyA9IHByZXZfaWQ7XHJcblx0XHRcdFx0cmVsYXRpb24ucGFyZW50ID1cclxuXHRcdFx0XHRcdGlzX2ZpcnN0IHx8IGlzX3RvcCA/IHVuZGVmaW5lZCA6IHByZXZfcmVsYXRpb24ucGFyZW50O1xyXG5cdFx0XHRcdHByZXZfcmVsYXRpb24ubmV4dF9zaWJsaW5nID0gaWQ7XHJcblxyXG5cdFx0XHRcdGlmICghaXNfbGFzdCAmJiBuZXh0X3JlbGF0aW9uLnBhcmVudCA9PT0gcmVsYXRpb24ucGFyZW50KSB7XHJcblx0XHRcdFx0XHRyZWxhdGlvbi5uZXh0X3NpYmxpbmcgPSBuZXh0X2lkO1xyXG5cdFx0XHRcdFx0bmV4dF9yZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc3QgcHJldl9zaWJsaW5nX2lkID0gZ2V0UmVjdXJzaXZlUGFyZW50KFxyXG5cdFx0XHRcdFx0cHJldl9pZCxcclxuXHRcdFx0XHRcdC1kaWZmX2xldmVsXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0Y29uc3QgcGFyZW50X3JlbGF0aW9uID0gZmFsbGJhY2soUmVsYXRpb24oaWQpKShcclxuXHRcdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfc2libGluZ19pZF1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGNvbnN0IHByZXZfc2libGluZ19yZWxhdGlvbiA9XHJcblx0XHRcdFx0XHRsaXZlX3JlbGF0aW9uX21hcFtwcmV2X3NpYmxpbmdfaWRdO1xyXG5cclxuXHRcdFx0XHRyZWxhdGlvbi5wYXJlbnQgPVxyXG5cdFx0XHRcdFx0aXNfZmlyc3QgfHwgaXNfdG9wID8gdW5kZWZpbmVkIDogcGFyZW50X3JlbGF0aW9uLnBhcmVudDtcclxuXHRcdFx0XHRyZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBpc19sYXN0ID8gdW5kZWZpbmVkIDogcHJldl9zaWJsaW5nX2lkO1xyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2ZpcnN0KSB7XHJcblx0XHRcdFx0XHRwcmV2X3NpYmxpbmdfcmVsYXRpb24ubmV4dF9zaWJsaW5nID0gaWQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIWlzX2xhc3QgJiYgcmVsYXRpb24ucGFyZW50ID09PSBuZXh0X3JlbGF0aW9uLnBhcmVudCkge1xyXG5cdFx0XHRcdFx0cGFyZW50X3JlbGF0aW9uLm5leHRfc2libGluZyA9IGlkO1xyXG5cdFx0XHRcdFx0bmV4dF9yZWxhdGlvbi5wcmV2X3NpYmxpbmcgPSBpZDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICghaXNfZmlyc3QpIHtcclxuXHRcdFx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfc2libGluZ19pZF0gPSBwYXJlbnRfcmVsYXRpb247XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWlzX3RvcCkge1xyXG5cdFx0XHRcdGNvbnN0IHNpemUgPSBmYWxsYmFjaygwKShsaXZlX3NpemVfbWFwW3JlbGF0aW9uLnBhcmVudF0pO1xyXG5cdFx0XHRcdGxpdmVfc2l6ZV9tYXBbcmVsYXRpb24ucGFyZW50XSA9IHNpemUgKyAxO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIWlzX2ZpcnN0KSB7XHJcblx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbcHJldl9pZF0gPSBwcmV2X3JlbGF0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxpdmVfcmVsYXRpb25fbWFwW2lkXSA9IHJlbGF0aW9uO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldFJlY3Vyc2l2ZVBhcmVudChpZCwgY291bnQgPSAwKSB7XHJcblx0XHRcdGNvbnN0IHBhcmVudF9pZCA9XHJcblx0XHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXBbaWRdICYmIGxpdmVfcmVsYXRpb25fbWFwW2lkXS5wYXJlbnQ7XHJcblx0XHRcdGlmIChjb3VudCA+IDEgJiYgcGFyZW50X2lkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGdldFJlY3Vyc2l2ZVBhcmVudChwYXJlbnRfaWQsIGNvdW50IC0gMSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcmVudF9pZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIG9uUmVtb3ZlZCh7IGlkIH0sIGluZGV4LCBwYXlsb2Fkcykge1xyXG5cdFx0XHRjb25zdCBpc19maXJzdCA9IGluZGV4ID09PSAwO1xyXG5cdFx0XHRjb25zdCBpc19sYXN0ID0gaW5kZXggPT09IHBheWxvYWRzLmxlbmd0aDtcclxuXHRcdFx0Y29uc3QgcHJldl9pbmRleCA9IGluZGV4IC0gMTtcclxuXHRcdFx0Y29uc3QgbmV4dF9pbmRleCA9IGluZGV4O1xyXG5cdFx0XHRjb25zdCBwcmV2X2lkID0gaXNfZmlyc3QgPyB1bmRlZmluZWQgOiBwYXlsb2Fkc1twcmV2X2luZGV4XS5pZDtcclxuXHRcdFx0Y29uc3QgbmV4dF9pZCA9IGlzX2xhc3QgPyB1bmRlZmluZWQgOiBwYXlsb2Fkc1tuZXh0X2luZGV4XS5pZDtcclxuXHJcblx0XHRcdGNvbnN0IHByZXZfcmVsYXRpb24gPSBsaXZlX3JlbGF0aW9uX21hcFtwcmV2X2lkXTtcclxuXHRcdFx0Y29uc3QgbmV4dF9yZWxhdGlvbiA9IGxpdmVfcmVsYXRpb25fbWFwW25leHRfaWRdO1xyXG5cdFx0XHRjb25zdCByZWxhdGlvbiA9IGxpdmVfcmVsYXRpb25fbWFwW2lkXTtcclxuXHJcblx0XHRcdGNvbnN0IHsgcHJldl9zaWJsaW5nLCBuZXh0X3NpYmxpbmcsIHBhcmVudCB9ID0gcmVsYXRpb247XHJcblxyXG5cdFx0XHRjb25zdCBwcmV2X3NpYmxpbmdfcmVsYXRpb24gPSBpc05vdEVtcHR5KHByZXZfc2libGluZylcclxuXHRcdFx0XHQ/IGxpdmVfcmVsYXRpb25fbWFwW3ByZXZfc2libGluZ11cclxuXHRcdFx0XHQ6IHVuZGVmaW5lZDtcclxuXHRcdFx0Y29uc3QgbmV4dF9zaWJsaW5nX3JlbGF0aW9uID0gaXNOb3RFbXB0eShuZXh0X3NpYmxpbmcpXHJcblx0XHRcdFx0PyBsaXZlX3JlbGF0aW9uX21hcFtuZXh0X3NpYmxpbmddXHJcblx0XHRcdFx0OiB1bmRlZmluZWQ7XHJcblx0XHRcdGNvbnN0IHBhcmVudF9yZWxhdGlvbiA9IGlzTm90RW1wdHkocGFyZW50KVxyXG5cdFx0XHRcdD8gbGl2ZV9yZWxhdGlvbl9tYXBbcGFyZW50XVxyXG5cdFx0XHRcdDogdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0aWYgKGlzTm90RW1wdHkocHJldl9zaWJsaW5nX3JlbGF0aW9uKSkge1xyXG5cdFx0XHRcdHByZXZfcmVsYXRpb24ubmV4dF9zaWJsaW5nID0gbmV4dF9zaWJsaW5nO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChpc05vdEVtcHR5KG5leHRfc2libGluZ19yZWxhdGlvbikpIHtcclxuXHRcdFx0XHRuZXh0X3JlbGF0aW9uLnByZXZfc2libGluZyA9IHByZXZfc2libGluZztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoaXNOb3RFbXB0eShwYXJlbnRfcmVsYXRpb24pICYmIHBhcmVudF9yZWxhdGlvbi5jaGlsZCA9PT0gaWQpIHtcclxuXHRcdFx0XHRwYXJlbnRfcmVsYXRpb24uY2hpbGQgPSBuZXh0X3NpYmxpbmc7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRlbGV0ZSBsaXZlX3JlbGF0aW9uX21hcFtpZF07XHJcblxyXG5cdFx0XHRsaXZlX3NpemVfbWFwW3JlbGF0aW9uLnBhcmVudF0tLTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjbG9uZSgpIHtcclxuXHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yKHtcclxuXHRcdFx0XHRoaWVyYXJjaHlfbWFwOiB7XHJcblx0XHRcdFx0XHRyZWxhdGlvbjogeyAuLi5saXZlX3JlbGF0aW9uX21hcCB9LFxyXG5cdFx0XHRcdFx0c2l6ZTogeyAuLi5saXZlX3NpemVfbWFwIH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gYXBwbHkoeyBoaWVyYXJjaHlfbWFwIH0pIHtcclxuXHRcdFx0bGl2ZV9yZWxhdGlvbl9tYXAgPSBoaWVyYXJjaHlfbWFwLnJlbGF0aW9uO1xyXG5cdFx0XHRsaXZlX3NpemVfbWFwID0gaGllcmFyY2h5X21hcC5zaXplO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGdldEhpZXJhcmNoeU1hcCgpIHtcclxuXHRcdFx0cmV0dXJuIGhpZXJhcmNoeV9tYXA7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZXhwb3J0cyA9IHtcclxuXHRcdFx0Y2xvbmUsXHJcblx0XHRcdGFwcGx5LFxyXG5cdFx0XHRvbkluc2VydGVkLFxyXG5cdFx0XHRvblJlbW92ZWQsXHJcblx0XHRcdGdldEhpZXJhcmNoeU1hcCxcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oW2V4cG9ydHNdLCBleHBvcnRzKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBjb25zdHJ1Y3Rvcih7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VPdXRsaW5lUmVkdWNlciA9ICh7XHJcblx0c3RhdGUgPSBtYWtlT3V0bGluZVN0YXRlKCksXHJcblx0aGllcmFyY2h5X2FuYWx5emVyID0gZ2VuSGllcmFyY2h5QW5hbHl6ZXIoKSxcclxufSA9IHt9KSA9PiB7XHJcblx0c3RhdGUuaGllcmFyY2h5X2FuYWx5emVyID0gaGllcmFyY2h5X2FuYWx5emVyO1xyXG5cclxuXHR1c2VNZW1vKCgpID0+IHtcclxuXHRcdHN0YXRlLnBheWxvYWRzLm1hcChoaWVyYXJjaHlfYW5hbHl6ZXIub25JbnNlcnRlZCk7XHJcblx0fSwgW3N0YXRlLnBheWxvYWRzXSk7XHJcblxyXG5cdGNvbnN0IHJlZHVjZXIgPSB1c2VSZWR1Y2VyKChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblx0XHRpZiAoYWN0aW9uLnR5cGUgPT09IFwiZGVsZXRlXCIpIHtcclxuXHRcdFx0Y29uc3QgeyBpbmRleCB9ID0gYWN0aW9uO1xyXG5cdFx0XHRjb25zdCB7IHBheWxvYWRzIH0gPSBzdGF0ZTtcclxuXHRcdFx0c3RhdGUucGF5bG9hZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHBheWxvYWRzIH07XHJcblx0XHR9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBcInNhdmVcIikge1xyXG5cdFx0XHRjb25zdCB7IGlkLCBleHRyYSA9ICgpID0+ICh7fSkgfSA9IGFjdGlvbjtcclxuXHRcdFx0Y29uc3QgeyByZWNvcmRzLCBwYXlsb2FkcyB9ID0gc3RhdGU7XHJcblx0XHRcdGNvbnN0IGV4dHJhX2RhdGEgPSBleHRyYShzdGF0ZSk7XHJcblxyXG5cdFx0XHRyZWNvcmRzLnNldChpZCwgcGF5bG9hZHMuY2xvbmUoKSk7XHJcblx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZXh0cmFfZGF0YSkubWFwKChzeW0pID0+IHtcclxuXHRcdFx0XHRyZWNvcmRzLnNldChzeW0sIGV4dHJhX2RhdGFbc3ltXSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHJlY29yZHMgfTtcclxuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFwicmVzdG9yZVwiKSB7XHJcblx0XHRcdGNvbnN0IHsgaWQgPSBbXSwgZXh0cmEgPSBbXSB9ID0gYWN0aW9uO1xyXG5cdFx0XHRjb25zdCB7IHJlY29yZHMgfSA9IHN0YXRlO1xyXG5cclxuXHRcdFx0cmVjb3Jkcy5kZWxldGUoaWQpO1xyXG5cdFx0XHRleHRyYS5tYXAoKGlkKSA9PiByZWNvcmRzLmRlbGV0ZShpZCkpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIHJlY29yZHMgfTtcclxuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFwic2V0QmFzZWRPblwiKSB7XHJcblx0XHRcdGNvbnN0IHsgaWQsIGFmZmVjdCB9ID0gYWN0aW9uO1xyXG5cdFx0XHRjb25zdCBwYXlsb2FkcyA9IGFmZmVjdChzdGF0ZS5yZWNvcmRzLmdldChpZCkuY2xvbmUoKSwgc3RhdGUpO1xyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgcGF5bG9hZHMgfTtcclxuXHRcdH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09IFwic2V0XCIpIHtcclxuXHRcdFx0Y29uc3QgeyBhZmZlY3QgfSA9IGFjdGlvbjtcclxuXHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFmZmVjdChzdGF0ZSkgfTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHsgcGF5bG9hZHMgfSA9IHN0YXRlO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhzdGF0ZSwgXCI9PT1cIik7XHJcblx0XHRcdGlmIChwYXlsb2Fkcy5saXN0Lmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRjb25zdCBpbmRleCA9IChNYXRoLnJhbmRvbSgpICogcGF5bG9hZHMubGlzdC5sZW5ndGgpID4+IDA7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCItLS1cIiwgaW5kZXgsIHBheWxvYWRzLmxpc3QubGVuZ3RoKTtcclxuXHRcdFx0XHRwYXlsb2Fkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzdGF0ZS5wYXlsb2FkcyA9IEFycmF5TWFwcGVyKFtdKTtcclxuXHJcblx0XHRcdHJldHVybiB7IHBheWxvYWRzOiBBcnJheU1hcHBlcihbXSkgfTtcclxuXHRcdH1cclxuXHR9LCBzdGF0ZSk7XHJcblxyXG5cdHJldHVybiByZWR1Y2VyO1xyXG59O1xyXG5cclxuY29uc3QgRW1wdHlOb2RlID0gZm9yd2FyZFJlZigoeyAuLi5yZXN0IH0sIHJlZikgPT4gKFxyXG5cdDxkaXYgcmVmPXtyZWZ9IHsuLi5yZXN0fT48L2Rpdj5cclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoe1xyXG5cdHJlZHVjZXIgPSB1c2VPdXRsaW5lUmVkdWNlcigpLFxyXG5cdGNsYXNzTmFtZSxcclxuXHRzdHlsZSxcclxuXHQuLi5yZXN0XHJcbn0pID0+IHtcclxuXHRjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuXHRjb25zdCBjbHMgPSBqb2luQnlTcGFjZShjbGFzc05hbWUsIFwiT3V0bGluZVwiKTtcclxuXHRjb25zdCBbTm9kZSwgbWFwcGVyXSA9IHVzZUNvbXBvbmVudEluZGV4ZXIoRmxhdE5vZGUpO1xyXG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gcmVkdWNlcjtcclxuXHRjb25zdCBbdGh1bWJfcHJvcHMsIHNldFRodW1iUHJvcHNdID0gdXNlU3RhdGUoe1xyXG5cdFx0b2Zmc2V0OiAwLFxyXG5cdFx0bm9kZV9wcm9wczogeyBpdGVtX3R5cGU6IEVtcHR5Tm9kZSB9LFxyXG5cdH0pO1xyXG5cdGNvbnN0IHBheWxvYWRzID0gdXNlUmVmKCk7XHJcblx0Y29uc3QgaGllcmFyY2h5X2FuYWx5emVyID0gdXNlUmVmKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRwYXlsb2Fkcy5jdXJyZW50ID0gc3RhdGUucGF5bG9hZHM7XHJcblx0fSwgW3N0YXRlLnBheWxvYWRzXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRoaWVyYXJjaHlfYW5hbHl6ZXIuY3VycmVudCA9IHN0YXRlLmhpZXJhcmNoeV9hbmFseXplcjtcclxuXHR9LCBbc3RhdGUuaGllcmFyY2h5X2FuYWx5emVyXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoIXJlZikgcmV0dXJuO1xyXG5cdFx0Y29uc3QgdG9wX25vZGVfZG9tID0gcmVmLmN1cnJlbnQ7XHJcblx0XHRjb25zdCB0b3BfYm91bmQgPSB0b3Bfbm9kZV9kb20uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gbGlzdGVuKFxyXG5cdFx0XHRcIm1vdXNlZG93blwiLFxyXG5cdFx0XHR0b3Bfbm9kZV9kb21cclxuXHRcdCkoKGUpID0+IHtcclxuXHRcdFx0Y29uc3QgeyBwYXRoLCBjbGllbnRYLCBjbGllbnRZIH0gPSBlO1xyXG5cclxuXHRcdFx0Y29uc3QgbG9jYWxfb2Zmc2V0ID0gKGNsaWVudFkgLSB0b3BfYm91bmQueSkgJSBsaW5lSGVpZ2h0O1xyXG5cdFx0XHRjb25zdCBpbml0X2luZGV4ID1cclxuXHRcdFx0XHQoY2xpZW50WSAtIHRvcF9ib3VuZC55IC0gbG9jYWxfb2Zmc2V0KSAvIGxpbmVIZWlnaHQ7XHJcblxyXG5cdFx0XHRjb25zdCBpbml0X3BheWxvYWRfbm9kZV9wb3NpdGlvbiA9XHJcblx0XHRcdFx0aW5pdF9pbmRleCAqIGxpbmVIZWlnaHQgKyBsb2NhbF9vZmZzZXQ7XHJcblxyXG5cdFx0XHQvLyBkaXNwYXRjaCh7XHJcblx0XHRcdC8vIFx0dHlwZTogXCJzYXZlXCIsXHJcblx0XHRcdC8vIFx0aWQsXHJcblx0XHRcdC8vIFx0ZXh0cmE6ICh7IHBheWxvYWRzLCBoaWVyYXJjaHlfYW5hbHl6ZXIgfSkgPT4gKHtcclxuXHRcdFx0Ly8gXHRcdFtpbml0X3BheWxvYWRfbGV2ZWxfaWRdOiBwYXlsb2Fkcy5saXN0W2luaXRfaW5kZXhdLmxldmVsLFxyXG5cdFx0XHQvLyBcdFx0W2luaXRfaGllcmFyY2h5X2FuYWx5emVyX2lkXTogaGllcmFyY2h5X2FuYWx5emVyLmNsb25lKCksXHJcblx0XHRcdC8vIFx0fSksXHJcblx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdFx0Ly8gZGlzcGF0Y2goe1xyXG5cdFx0XHQvLyBcdHR5cGU6IFwic2V0XCIsXHJcblx0XHRcdC8vIFx0YWZmZWN0OiAoeyBwYXlsb2FkcywgaGllcmFyY2h5X2FuYWx5emVyIH0pID0+IHtcclxuXHRcdFx0Ly8gXHRcdGNvbnN0IFtwYXlsb2FkXSA9IHBheWxvYWRzLnNwbGljZShpbml0X2luZGV4LCAxKTtcclxuXHRcdFx0Ly8gXHRcdGhpZXJhcmNoeV9hbmFseXplci5vblJlbW92ZWQoXHJcblx0XHRcdC8vIFx0XHRcdHBheWxvYWQsXHJcblx0XHRcdC8vIFx0XHRcdGluaXRfaW5kZXgsXHJcblx0XHRcdC8vIFx0XHRcdHBheWxvYWRzLmxpc3RcclxuXHRcdFx0Ly8gXHRcdCk7XHJcblx0XHRcdC8vIFx0XHRyZXR1cm4geyBwYXlsb2FkcywgaGllcmFyY2h5X2FuYWx5emVyIH07XHJcblx0XHRcdC8vIFx0fSxcclxuXHRcdFx0Ly8gfSk7XHJcblxyXG5cdFx0XHRjb25zdCBpeCA9IGNsaWVudFgsXHJcblx0XHRcdFx0aXkgPSBjbGllbnRZO1xyXG5cclxuXHRcdFx0Y29uc3QgcGF5bG9hZHNfbG9ja2VkID0gcGF5bG9hZHMuY3VycmVudC5jbG9uZSgpO1xyXG5cdFx0XHRjb25zdCBoaWVyYXJjaHlfYW5hbHl6ZXJfbG9ja2VkID0gaGllcmFyY2h5X2FuYWx5emVyLmN1cnJlbnQuY2xvbmUoKTtcclxuXHRcdFx0Y29uc3QgaW5pdF9wYXlsb2FkID0gcGF5bG9hZHNfbG9ja2VkLmxpc3RbaW5pdF9pbmRleF07XHJcblxyXG5cdFx0XHRjb25zdCBjbGVhbl9tb3ZlID0gbGlzdGVuKFwibW91c2Vtb3ZlXCIpKCh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xyXG5cdFx0XHRcdGxldCBzdGFydF9zdGFtcCA9IERhdGUubm93KCk7XHJcblx0XHRcdFx0Ly8gY29uc3QgcGF5bG9hZHNfbGl2ZSA9IHBheWxvYWRzX2xvY2tlZC5jbG9uZSgpO1xyXG5cdFx0XHRcdC8vIGNvbnN0IGhpZXJhcmNoeV9hbmFseXplcl9saXZlID0gaGllcmFyY2h5X2FuYWx5emVyX2xvY2tlZC5jbG9uZSgpO1xyXG5cdFx0XHRcdC8vIGNvbnN0IGhpZXJhcmNoeV9tYXAgPSBoaWVyYXJjaHlfYW5hbHl6ZXJfbGl2ZS5nZXRIaWVyYXJjaHlNYXAoKTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgbG9jYWxfb2Zmc2V0ID0gKGNsaWVudFkgLSB0b3BfYm91bmQueSkgJSBsaW5lSGVpZ2h0O1xyXG5cdFx0XHRcdC8vIGNvbnN0IGxpdmVfaW5kZXggPVxyXG5cdFx0XHRcdC8vIFx0KGNsaWVudFkgLSB0b3BfYm91bmQueSAtIGxvY2FsX29mZnNldCkgLyBsaW5lSGVpZ2h0O1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X2luZGV4ID0gbGl2ZV9pbmRleCAtIDE7XHJcblx0XHRcdFx0Ly8gY29uc3QgbmV4dF9pbmRleCA9IGxpdmVfaW5kZXggKyAxO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhwcmV2X2luZGV4LCBuZXh0X2luZGV4KTtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgaXNfZmlyc3QgPSBsaXZlX2luZGV4ID09PSAwO1xyXG5cdFx0XHRcdC8vIGNvbnN0IGlzX2xhc3QgPSBsaXZlX2luZGV4ID09PSBwYXlsb2Fkc19saXZlLmxlbmd0aCAtIDE7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IGluaXRfcmVsYXRpb24gPSBoaWVyYXJjaHlfbWFwLnJlbGF0aW9uW2luaXRfcGF5bG9hZC5pZF07XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfcGF5bG9hZCA9IHBheWxvYWRzX2xpdmUubGlzdFtwcmV2X2luZGV4XTtcclxuXHRcdFx0XHQvLyBjb25zdCBuZXh0X3BheWxvYWQgPSBwYXlsb2Fkc19saXZlLmxpc3RbbmV4dF9pbmRleF07XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IHByZXZfcmVsYXRpb24gPSBoaWVyYXJjaHlfbWFwLnJlbGF0aW9uW3ByZXZfcGF5bG9hZC5pZF07XHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9sZXZlbCA9IHByZXZfcGF5bG9hZC5sZXZlbDtcclxuXHJcblx0XHRcdFx0Ly8gY29uc3QgcHJldl9wYXJlbnRfcGF5bG9hZCA9IHBheWxvYWRzX2xpdmUuZ2V0KFxyXG5cdFx0XHRcdC8vIFx0cHJldl9yZWxhdGlvbi5wYXJlbnRcclxuXHRcdFx0XHQvLyApO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCBwcmV2X2lzX3BhcmVudCA9IHByZXZfcGF5bG9hZC5pZCBpbiBoaWVyYXJjaHlfbWFwLnNpemU7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IGluaXRfbGV2ZWwgPSBpbml0X3BheWxvYWQubGV2ZWw7XHJcblx0XHRcdFx0Ly8gY29uc3QgbWF5YmVfbGV2ZWwgPVxyXG5cdFx0XHRcdC8vIFx0KHByZXZfaXNfcGFyZW50XHJcblx0XHRcdFx0Ly8gXHRcdD8gcHJldl9wYXlsb2FkLmxldmVsXHJcblx0XHRcdFx0Ly8gXHRcdDogcHJldl9wYXJlbnRfcGF5bG9hZC5sZXZlbCkgKyAxO1xyXG5cclxuXHRcdFx0XHQvLyBjb25zdCB4ID0gY2xpZW50WCAtIGl4O1xyXG5cdFx0XHRcdC8vIGNvbnN0IHNob3VsZF9sZXZlbCA9IGluaXRfbGV2ZWwgKyB4IC8gMjA7XHJcblxyXG5cdFx0XHRcdC8vIGNvbnN0IG9mZnNldCA9IGluaXRfcGF5bG9hZF9ub2RlX3Bvc2l0aW9uICsgY2xpZW50WSAtIGl5O1xyXG5cclxuXHRcdFx0XHQvLyBzZXRUaHVtYlByb3BzKHtcclxuXHRcdFx0XHQvLyBcdG5vZGVfcHJvcHM6IGdldE5vZGVQcm9wcyhcclxuXHRcdFx0XHQvLyBcdFx0eyAuLi5pbml0X3BheWxvYWQsIGxldmVsOiBzaG91bGRfbGV2ZWwgfSxcclxuXHRcdFx0XHQvLyBcdFx0c3RhdGVcclxuXHRcdFx0XHQvLyBcdCksXHJcblx0XHRcdFx0Ly8gXHRvZmZzZXQsXHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0Ly8gc2V0VGh1bWJQcm9wcyh7XHJcblx0XHRcdFx0Ly8gXHRub2RlX3Byb3BzOiBnZXROb2RlUHJvcHMoXHJcblx0XHRcdFx0Ly8gXHRcdHsgLi4uaW5pdF9wYXlsb2FkLCBsZXZlbDogY2xpZW50WCAvIDIwIH0sXHJcblx0XHRcdFx0Ly8gXHRcdHN0YXRlXHJcblx0XHRcdFx0Ly8gXHQpLFxyXG5cdFx0XHRcdC8vIFx0b2Zmc2V0LFxyXG5cdFx0XHRcdC8vIH0pO1xyXG5cclxuXHRcdFx0XHQvLyBpZiAoXHJcblx0XHRcdFx0Ly8gXHRpc0VtcHR5KHByZXZfcmVsYXRpb24ubmV4dF9zaWJsaW5nKSAmJlxyXG5cdFx0XHRcdC8vIFx0IXByZXZfaXNfcGFyZW50XHJcblx0XHRcdFx0Ly8gKSB7XHJcblx0XHRcdFx0Ly8gXHRpZiAoc2hvdWxkX2xldmVsIDwgbWF5YmVfbGV2ZWwpIHtcclxuXHRcdFx0XHQvLyBcdFx0aW5pdF9wYXlsb2FkLmxldmVsID0gc2hvdWxkX2xldmVsO1xyXG5cdFx0XHRcdC8vIFx0fVxyXG5cdFx0XHRcdC8vIH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdC8vIGluaXRfcGF5bG9hZC5sZXZlbCA9IG1heWJlX2xldmVsO1xyXG5cclxuXHRcdFx0XHQvLyBwYXlsb2Fkc19saXZlLnNwbGljZShpbml0X2luZGV4LCAxKTtcclxuXHRcdFx0XHQvLyBoaWVyYXJjaHlfYW5hbHl6ZXJfbGl2ZS5vblJlbW92ZWQoXHJcblx0XHRcdFx0Ly8gXHRpbml0X3BheWxvYWQsXHJcblx0XHRcdFx0Ly8gXHRpbml0X2luZGV4LFxyXG5cdFx0XHRcdC8vIFx0cGF5bG9hZHNfbGl2ZS5saXN0XHJcblx0XHRcdFx0Ly8gKTtcclxuXHJcblx0XHRcdFx0Ly8gcGF5bG9hZHNfbGl2ZS5zcGxpY2UobGl2ZV9pbmRleCA+PiAwLCAwLCBpbml0X3BheWxvYWQpO1xyXG5cdFx0XHRcdC8vIGhpZXJhcmNoeV9hbmFseXplcl9saXZlLm9uSW5zZXJ0ZWQoXHJcblx0XHRcdFx0Ly8gXHRpbml0X3BheWxvYWQsXHJcblx0XHRcdFx0Ly8gXHRsaXZlX2luZGV4ID4+IDAsXHJcblx0XHRcdFx0Ly8gXHRwYXlsb2Fkc19saXZlLmxpc3RcclxuXHRcdFx0XHQvLyApO1xyXG5cclxuXHRcdFx0XHRsZXQgc3RhcnRfc3RhbXBfZGlzcGF0Y2ggPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRcdGRpc3BhdGNoKHtcclxuXHRcdFx0XHRcdHR5cGU6IFwieHh4XCIsXHJcblx0XHRcdFx0XHQvLyBhZmZlY3Q6ICgpID0+ICh7XHJcblx0XHRcdFx0XHQvLyBcdC8vIHBheWxvYWRzOiBwYXlsb2Fkc19saXZlLFxyXG5cdFx0XHRcdFx0Ly8gXHQvLyBoaWVyYXJjaHlfYW5hbHl6ZXI6IGhpZXJhcmNoeV9hbmFseXplcl9saXZlLFxyXG5cdFx0XHRcdFx0Ly8gfSksXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXHJcblx0XHRcdFx0XHREYXRlLm5vdygpIC0gc3RhcnRfc3RhbXAsXHJcblx0XHRcdFx0XHREYXRlLm5vdygpIC0gc3RhcnRfc3RhbXBfZGlzcGF0Y2hcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IGNsZWFuX3VwID0gbGlzdGVuKFwibW91c2V1cFwiKSgoKSA9PiB7XHJcblx0XHRcdFx0Y2xlYW5fbW92ZSgpO1xyXG5cdFx0XHRcdGNsZWFuX3VwKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSwgW3JlZi5jdXJyZW50XSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xzfSByZWY9e3JlZn0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaG9sZGVyXCI+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGh1bWJcIlxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgdG9wOiB0aHVtYl9wcm9wcy5vZmZzZXQgKyBcInB4XCIgfX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Tm9kZSB7Li4udGh1bWJfcHJvcHMubm9kZV9wcm9wc30gLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG5cdFx0XHRcdHtzdGF0ZS5wYXlsb2Fkcy5tYXAoKHBheWxvYWQpID0+IChcclxuXHRcdFx0XHRcdDxOb2RlIGtleT17cGF5bG9hZC5pZH0gey4uLmdldE5vZGVQcm9wcyhwYXlsb2FkLCBzdGF0ZSl9IC8+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldE5vZGVQcm9wcyhwYXlsb2FkLCBzdGF0ZSkge1xyXG5cdGNvbnN0IHJlZHVjZXIgPSAocmVsYXllZCwgW2tleSwgdmFsdWVdKSA9PiB7XHJcblx0XHRpZiAoc3RhdGUucmVsYXllZC5oYXMoa2V5KSkge1xyXG5cdFx0XHRyZWxheWVkW2tleV0gPSB2YWx1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZWxheWVkO1xyXG5cdH07XHJcblx0Y29uc3QgcmVsYXllZF9wcm9wcyA9IE9iamVjdC5lbnRyaWVzKHBheWxvYWQpLnJlZHVjZShyZWR1Y2VyLCB7fSk7XHJcblx0Y29uc3QgcGF5bG9hZF9wcm9wcyA9IHBheWxvYWQucHJvcHM7XHJcblx0Y29uc3QgbWV0YV9wcm9wcyA9IHtcclxuXHRcdGlkOiBwYXlsb2FkLmlkLFxyXG5cdFx0bGV2ZWw6IHBheWxvYWQubGV2ZWwsXHJcblx0XHRjYW5fZXhwYW5kOiBwYXlsb2FkLmNhbl9leHBhbmQsXHJcblx0fTtcclxuXHJcblx0aWYgKFwidHlwZV9zZWxmXCIgaW4gcGF5bG9hZCkge1xyXG5cdFx0bWV0YV9wcm9wcy5pdGVtX3R5cGUgPSBwYXlsb2FkLnR5cGVfc2VsZjtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bWV0YV9wcm9wcy5pdGVtX3R5cGUgPSBzdGF0ZS5pdGVtX3R5cGU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHsgLi4ucGF5bG9hZF9wcm9wcywgLi4ucmVsYXllZF9wcm9wcyB9LFxyXG5cdFx0Li4ubWV0YV9wcm9wcyxcclxuXHR9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=