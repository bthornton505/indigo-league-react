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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideNav\": function() { return /* binding */ SideNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Drawer */ \"./node_modules/@mui/material/Drawer/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Divider */ \"./node_modules/@mui/material/Divider/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"./node_modules/@mui/material/ListItemIcon/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var _mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/MoveToInbox */ \"./node_modules/@mui/icons-material/MoveToInbox.js\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"./node_modules/@mui/icons-material/Mail.js\");\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar navOptions = [\n    \"Inbox\",\n    \"Starred\",\n    \"Send email\",\n    \"Drafts\"\n];\nvar SideNav = function(_param) {\n    var _this1 = _this;\n    var props = _extends({}, _param);\n    var state = props.state, toggleDrawer = props.toggleDrawer;\n    var list = function(anchor) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            sx: {\n                width: 250,\n                marginTop: \"4rem\"\n            },\n            role: \"presentation\",\n            onClick: toggleDrawer(anchor, false),\n            onKeyDown: toggleDrawer(anchor, false),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: navOptions.map(function(text, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            button: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 34\n                                    }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 50\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    primary: text\n                                }, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, text, true, {\n                            fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        \"All mail\",\n                        \"Trash\",\n                        \"Spam\"\n                    ].map(function(text, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            button: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 34\n                                    }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 50\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    primary: text\n                                }, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, text, true, {\n                            fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        anchor: \"left\",\n        open: state[\"left\"],\n        onClose: toggleDrawer(\"left\", false),\n        children: list(\"left\")\n    }, void 0, false, {\n        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, _this);\n};\n\n_c = SideNav;\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9vcmdhbmlzbXMvU2lkZU5hdi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNKO0FBQ007QUFDSjtBQUNNO0FBQ0U7QUFDUTtBQUNBO0FBQ0U7QUFDUjtBQUloRCxJQUFNVSxVQUFVLEdBQWE7SUFBRSxPQUFPO0lBQUUsU0FBUztJQUFFLFlBQVk7SUFBRSxRQUFRO0NBQUM7SUFFN0RDLE9BQU8sR0FBRyxpQkFBa0I7O1FBQVpDLEtBQUs7SUFDaEMsSUFBUUMsS0FBSyxHQUFtQkQsS0FBSyxDQUE3QkMsS0FBSyxFQUFFQyxZQUFZLEdBQUtGLEtBQUssQ0FBdEJFLFlBQVk7SUFFM0IsSUFBTUMsSUFBSSxHQUFHLFNBQUNDLE1BQWM7NkJBQzFCLDhEQUFDZix5REFBRztZQUNGZ0IsRUFBRSxFQUFFO2dCQUFFQyxLQUFLLEVBQUUsR0FBRztnQkFBRUMsU0FBUyxFQUFFLE1BQU07YUFBRTtZQUNyQ0MsSUFBSSxFQUFDLGNBQWM7WUFDbkJDLE9BQU8sRUFBRVAsWUFBWSxDQUFDRSxNQUFNLEVBQUUsS0FBSyxDQUFDO1lBQ3BDTSxTQUFTLEVBQUVSLFlBQVksQ0FBQ0UsTUFBTSxFQUFFLEtBQUssQ0FBQzs7OEJBRXRDLDhEQUFDYiwwREFBSTs4QkFDRk8sVUFBVSxDQUFDYSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLOzZDQUMxQiw4REFBQ3BCLDhEQUFROzRCQUFDcUIsTUFBTTs7OENBQ2QsOERBQUNwQixrRUFBWTs4Q0FDVm1CLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBRyw4REFBQ2pCLHVFQUFTOzs7OzhDQUFHLGlCQUFHLDhEQUFDQyxnRUFBUTs7Ozs4Q0FBRzs7Ozs7MENBQ2xDOzhDQUNmLDhEQUFDRixrRUFBWTtvQ0FBQ29CLE9BQU8sRUFBRUgsSUFBSTs7Ozs7MENBQUk7OzJCQUpYQSxJQUFJOzs7O2tDQUtmO3FCQUNaLENBQUM7Ozs7OzBCQUNHOzhCQUNQLDhEQUFDcEIsNkRBQU87Ozs7MEJBQUc7OEJBQ1gsOERBQUNELDBEQUFJOzhCQUNGO3dCQUFDLFVBQVU7d0JBQUUsT0FBTzt3QkFBRSxNQUFNO3FCQUFDLENBQUNvQixHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLOzZDQUM3Qyw4REFBQ3BCLDhEQUFROzRCQUFDcUIsTUFBTTs7OENBQ2QsOERBQUNwQixrRUFBWTs4Q0FDVm1CLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBRyw4REFBQ2pCLHVFQUFTOzs7OzhDQUFHLGlCQUFHLDhEQUFDQyxnRUFBUTs7Ozs4Q0FBRzs7Ozs7MENBQ2xDOzhDQUNmLDhEQUFDRixrRUFBWTtvQ0FBQ29CLE9BQU8sRUFBRUgsSUFBSTs7Ozs7MENBQUk7OzJCQUpYQSxJQUFJOzs7O2tDQUtmO3FCQUNaLENBQUM7Ozs7OzBCQUNHOzs7Ozs7a0JBQ0g7S0FDUDtJQUVELHFCQUNFLDhEQUFDdEIsNkRBQU07UUFDTGMsTUFBTSxFQUFFLE1BQU07UUFDZFksSUFBSSxFQUFFZixLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ25CZ0IsT0FBTyxFQUFFZixZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztrQkFFbkNDLElBQUksQ0FBQyxNQUFNLENBQUM7Ozs7O2FBQ04sQ0FDVDtDQUNIO0FBQUE7QUEzQ1lKLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vb3JnYW5pc21zL1NpZGVOYXYudHN4PzY3NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBJbmJveEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3ZlVG9JbmJveCc7XG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NYWlsJztcblxudHlwZSBBbmNob3IgPSAndG9wJyB8ICdsZWZ0JyB8ICdib3R0b20nIHwgJ3JpZ2h0JztcblxuY29uc3QgbmF2T3B0aW9uczogc3RyaW5nW10gPSBbICdJbmJveCcsICdTdGFycmVkJywgJ1NlbmQgZW1haWwnLCAnRHJhZnRzJ11cblxuZXhwb3J0IGNvbnN0IFNpZGVOYXYgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIHRvZ2dsZURyYXdlciB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbGlzdCA9IChhbmNob3I6IEFuY2hvcikgPT4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXt7IHdpZHRoOiAyNTAsIG1hcmdpblRvcDogJzRyZW0nIH19XG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cbiAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxuICAgID5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7bmF2T3B0aW9ucy5tYXAoKHRleHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e3RleHR9PlxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICAgIDxEaXZpZGVyIC8+XG4gICAgICA8TGlzdD5cbiAgICAgICAge1snQWxsIG1haWwnLCAnVHJhc2gnLCAnU3BhbSddLm1hcCgodGV4dCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17dGV4dH0+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICB7aW5kZXggJSAyID09PSAwID8gPEluYm94SWNvbiAvPiA6IDxNYWlsSWNvbiAvPn1cbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0PlxuICAgIDwvQm94PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPERyYXdlclxuICAgICAgYW5jaG9yPXsnbGVmdCd9XG4gICAgICBvcGVuPXtzdGF0ZVsnbGVmdCddfVxuICAgICAgb25DbG9zZT17dG9nZ2xlRHJhd2VyKCdsZWZ0JywgZmFsc2UpfVxuICAgID5cbiAgICAgIHtsaXN0KCdsZWZ0Jyl9XG4gICAgPC9EcmF3ZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiRHJhd2VyIiwiTGlzdCIsIkRpdmlkZXIiLCJMaXN0SXRlbSIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIkluYm94SWNvbiIsIk1haWxJY29uIiwibmF2T3B0aW9ucyIsIlNpZGVOYXYiLCJwcm9wcyIsInN0YXRlIiwidG9nZ2xlRHJhd2VyIiwibGlzdCIsImFuY2hvciIsInN4Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJyb2xlIiwib25DbGljayIsIm9uS2V5RG93biIsIm1hcCIsInRleHQiLCJpbmRleCIsImJ1dHRvbiIsInByaW1hcnkiLCJvcGVuIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./organisms/SideNav.tsx\n");

/***/ })

});