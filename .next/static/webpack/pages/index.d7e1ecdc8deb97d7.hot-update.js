"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./organisms/SideNav.tsx":
/*!*******************************!*\
  !*** ./organisms/SideNav.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideNav\": function() { return /* binding */ SideNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Drawer */ \"./node_modules/@mui/material/Drawer/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Divider */ \"./node_modules/@mui/material/Divider/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"./node_modules/@mui/material/ListItemIcon/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var _mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/MoveToInbox */ \"./node_modules/@mui/icons-material/MoveToInbox.js\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"./node_modules/@mui/icons-material/Mail.js\");\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar SideNav = function(_param) {\n    var _this1 = _this;\n    var props = _extends({}, _param);\n    var toggleDrawer = props.toggleDrawer;\n    var list = function(anchor) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            sx: {\n                width: anchor === \"top\" || anchor === \"bottom\" ? \"auto\" : 250\n            },\n            role: \"presentation\",\n            onClick: toggleDrawer(anchor, false),\n            onKeyDown: toggleDrawer(anchor, false),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        \"Inbox\",\n                        \"Starred\",\n                        \"Send email\",\n                        \"Drafts\"\n                    ].map(function(text, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            button: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 34\n                                    }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 50\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    primary: text\n                                }, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, text, true, {\n                            fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        \"All mail\",\n                        \"Trash\",\n                        \"Spam\"\n                    ].map(function(text, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            button: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 34\n                                    }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 50\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    primary: text\n                                }, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, text, true, {\n                            fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n            lineNumber: 19,\n            columnNumber: 5\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"left\",\n            \"right\",\n            \"top\",\n            \"bottom\"\n        ].map(function(anchor) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        onClick: toggleDrawer(anchor, true),\n                        children: anchor\n                    }, void 0, false, {\n                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        anchor: anchor,\n                        open: state[anchor],\n                        onClose: toggleDrawer(anchor, false),\n                        children: list(anchor)\n                    }, void 0, false, {\n                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, _this1)\n                ]\n            }, anchor, true, {\n                fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, _this);\n};\n\n_c = SideNav;\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9vcmdhbmlzbXMvU2lkZU5hdi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSjtBQUNNO0FBQ0E7QUFDSjtBQUNNO0FBQ0U7QUFDUTtBQUNBO0FBQ0U7QUFDUjtJQUluQ1csT0FBTyxHQUFHLGlCQUFrQjs7UUFBWkMsS0FBSztJQUNoQyxJQUFNLFlBQWMsR0FBS0EsS0FBSyxDQUF0QkMsWUFBWTtJQUVwQixJQUFNQyxJQUFJLEdBQUcsU0FBQ0MsTUFBYzs2QkFDMUIsOERBQUNkLHlEQUFHO1lBQ0ZlLEVBQUUsRUFBRTtnQkFBRUMsS0FBSyxFQUFFRixNQUFNLEtBQUssS0FBSyxJQUFJQSxNQUFNLEtBQUssUUFBUSxHQUFHLE1BQU0sR0FBRyxHQUFHO2FBQUU7WUFDckVHLElBQUksRUFBQyxjQUFjO1lBQ25CQyxPQUFPLEVBQUVOLFlBQVksQ0FBQ0UsTUFBTSxFQUFFLEtBQUssQ0FBQztZQUNwQ0ssU0FBUyxFQUFFUCxZQUFZLENBQUNFLE1BQU0sRUFBRSxLQUFLLENBQUM7OzhCQUV0Qyw4REFBQ1gsMERBQUk7OEJBQ0Y7d0JBQUMsT0FBTzt3QkFBRSxTQUFTO3dCQUFFLFlBQVk7d0JBQUUsUUFBUTtxQkFBQyxDQUFDaUIsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSzs2Q0FDNUQsOERBQUNqQiw4REFBUTs0QkFBQ2tCLE1BQU07OzhDQUNkLDhEQUFDakIsa0VBQVk7OENBQ1ZnQixLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQUcsOERBQUNkLHVFQUFTOzs7OzhDQUFHLGlCQUFHLDhEQUFDQyxnRUFBUTs7Ozs4Q0FBRzs7Ozs7MENBQ2xDOzhDQUNmLDhEQUFDRixrRUFBWTtvQ0FBQ2lCLE9BQU8sRUFBRUgsSUFBSTs7Ozs7MENBQUk7OzJCQUpYQSxJQUFJOzs7O2tDQUtmO3FCQUNaLENBQUM7Ozs7OzBCQUNHOzhCQUNQLDhEQUFDakIsNkRBQU87Ozs7MEJBQUc7OEJBQ1gsOERBQUNELDBEQUFJOzhCQUNGO3dCQUFDLFVBQVU7d0JBQUUsT0FBTzt3QkFBRSxNQUFNO3FCQUFDLENBQUNpQixHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLOzZDQUM3Qyw4REFBQ2pCLDhEQUFROzRCQUFDa0IsTUFBTTs7OENBQ2QsOERBQUNqQixrRUFBWTs4Q0FDVmdCLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBRyw4REFBQ2QsdUVBQVM7Ozs7OENBQUcsaUJBQUcsOERBQUNDLGdFQUFROzs7OzhDQUFHOzs7OzswQ0FDbEM7OENBQ2YsOERBQUNGLGtFQUFZO29DQUFDaUIsT0FBTyxFQUFFSCxJQUFJOzs7OzswQ0FBSTs7MkJBSlhBLElBQUk7Ozs7a0NBS2Y7cUJBQ1osQ0FBQzs7Ozs7MEJBQ0c7Ozs7OztrQkFDSDtLQUNQO0lBRUQscUJBQ0UsOERBQUNJLEtBQUc7a0JBQ0Q7WUFBRSxNQUFNO1lBQUUsT0FBTztZQUFFLEtBQUs7WUFBRSxRQUFRO1NBQUMsQ0FBV0wsR0FBRyxDQUFDLFNBQUNOLE1BQU07aUNBQ3hELDhEQUFDZix1REFBYzs7a0NBQ2IsOERBQUNHLDZEQUFNO3dCQUFDZ0IsT0FBTyxFQUFFTixZQUFZLENBQUNFLE1BQU0sRUFBRSxJQUFJLENBQUM7a0NBQUdBLE1BQU07Ozs7OzhCQUFVO2tDQUM5RCw4REFBQ2IsNkRBQU07d0JBQ0xhLE1BQU0sRUFBRUEsTUFBTTt3QkFDZGEsSUFBSSxFQUFFQyxLQUFLLENBQUNkLE1BQU0sQ0FBQzt3QkFDbkJlLE9BQU8sRUFBRWpCLFlBQVksQ0FBQ0UsTUFBTSxFQUFFLEtBQUssQ0FBQztrQ0FFbkNELElBQUksQ0FBQ0MsTUFBTSxDQUFDOzs7Ozs4QkFDTjs7ZUFSVUEsTUFBTTs7OztzQkFTVjtTQUNsQixDQUFDOzs7OzthQUNFLENBQ047Q0FDSDtBQUFBO0FBbERZSixLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL29yZ2FuaXNtcy9TaWRlTmF2LnRzeD82Nzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBJbmJveEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3ZlVG9JbmJveCc7XG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NYWlsJztcblxudHlwZSBBbmNob3IgPSAndG9wJyB8ICdsZWZ0JyB8ICdib3R0b20nIHwgJ3JpZ2h0JztcblxuZXhwb3J0IGNvbnN0IFNpZGVOYXYgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgdG9nZ2xlRHJhd2VyIH0gPSBwcm9wcztcbiAgXG4gIGNvbnN0IGxpc3QgPSAoYW5jaG9yOiBBbmNob3IpID0+IChcbiAgICA8Qm94XG4gICAgICBzeD17eyB3aWR0aDogYW5jaG9yID09PSAndG9wJyB8fCBhbmNob3IgPT09ICdib3R0b20nID8gJ2F1dG8nIDogMjUwIH19XG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cbiAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxuICAgID5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7WydJbmJveCcsICdTdGFycmVkJywgJ1NlbmQgZW1haWwnLCAnRHJhZnRzJ10ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXt0ZXh0fT5cbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgIHtpbmRleCAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fVxuICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XG4gICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L0xpc3Q+XG4gICAgICA8RGl2aWRlciAvPlxuICAgICAgPExpc3Q+XG4gICAgICAgIHtbJ0FsbCBtYWlsJywgJ1RyYXNoJywgJ1NwYW0nXS5tYXAoKHRleHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e3RleHR9PlxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L0JveD5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7KFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ10gYXMgY29uc3QpLm1hcCgoYW5jaG9yKSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2FuY2hvcn0+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX0+e2FuY2hvcn08L0J1dHRvbj5cbiAgICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgICBhbmNob3I9e2FuY2hvcn1cbiAgICAgICAgICAgIG9wZW49e3N0YXRlW2FuY2hvcl19XG4gICAgICAgICAgICBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xpc3QoYW5jaG9yKX1cbiAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkRyYXdlciIsIkJ1dHRvbiIsIkxpc3QiLCJEaXZpZGVyIiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJJbmJveEljb24iLCJNYWlsSWNvbiIsIlNpZGVOYXYiLCJwcm9wcyIsInRvZ2dsZURyYXdlciIsImxpc3QiLCJhbmNob3IiLCJzeCIsIndpZHRoIiwicm9sZSIsIm9uQ2xpY2siLCJvbktleURvd24iLCJtYXAiLCJ0ZXh0IiwiaW5kZXgiLCJidXR0b24iLCJwcmltYXJ5IiwiZGl2IiwiRnJhZ21lbnQiLCJvcGVuIiwic3RhdGUiLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./organisms/SideNav.tsx\n");

/***/ })

});