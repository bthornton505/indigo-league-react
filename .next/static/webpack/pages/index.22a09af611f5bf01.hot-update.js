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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideNav\": function() { return /* binding */ SideNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Drawer */ \"./node_modules/@mui/material/Drawer/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Divider */ \"./node_modules/@mui/material/Divider/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"./node_modules/@mui/material/ListItemIcon/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var _mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/MoveToInbox */ \"./node_modules/@mui/icons-material/MoveToInbox.js\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"./node_modules/@mui/icons-material/Mail.js\");\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar SideNav = function(_param) {\n    var _this1 = _this;\n    var props = _extends({}, _param);\n    var state = props.state, toggleDrawer = props.toggleDrawer;\n    var list = function(anchor) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            sx: {\n                width: 250,\n                marginTop: \"5rem\"\n            },\n            role: \"presentation\",\n            onClick: toggleDrawer(anchor, false),\n            onKeyDown: toggleDrawer(anchor, false),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        \"Inbox\",\n                        \"Starred\",\n                        \"Send email\",\n                        \"Drafts\"\n                    ].map(function(text, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            button: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 34\n                                    }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 50\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    primary: text\n                                }, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, text, true, {\n                            fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: [\n                        \"All mail\",\n                        \"Trash\",\n                        \"Spam\"\n                    ].map(function(text, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            button: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 34\n                                    }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 50\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    primary: text\n                                }, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, text, true, {\n                            fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n            lineNumber: 18,\n            columnNumber: 5\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        anchor: \"left\",\n        open: state[\"left\"],\n        onClose: toggleDrawer(\"left\", false),\n        children: list(\"left\")\n    }, void 0, false, {\n        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n};\n\n_c = SideNav;\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9vcmdhbmlzbXMvU2lkZU5hdi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNKO0FBQ007QUFDSjtBQUNNO0FBQ0U7QUFDUTtBQUNBO0FBQ0U7QUFDUjtJQUluQ1UsT0FBTyxHQUFHLGlCQUFrQjs7UUFBWkMsS0FBSztJQUNoQyxJQUFRQyxLQUFLLEdBQW1CRCxLQUFLLENBQTdCQyxLQUFLLEVBQUVDLFlBQVksR0FBS0YsS0FBSyxDQUF0QkUsWUFBWTtJQUUzQixJQUFNQyxJQUFJLEdBQUcsU0FBQ0MsTUFBYzs2QkFDMUIsOERBQUNkLHlEQUFHO1lBQ0ZlLEVBQUUsRUFBRTtnQkFBRUMsS0FBSyxFQUFFLEdBQUc7Z0JBQUVDLFNBQVMsRUFBRSxNQUFNO2FBQUU7WUFDckNDLElBQUksRUFBQyxjQUFjO1lBQ25CQyxPQUFPLEVBQUVQLFlBQVksQ0FBQ0UsTUFBTSxFQUFFLEtBQUssQ0FBQztZQUNwQ00sU0FBUyxFQUFFUixZQUFZLENBQUNFLE1BQU0sRUFBRSxLQUFLLENBQUM7OzhCQUV0Qyw4REFBQ1osMERBQUk7OEJBQ0Y7d0JBQUMsT0FBTzt3QkFBRSxTQUFTO3dCQUFFLFlBQVk7d0JBQUUsUUFBUTtxQkFBQyxDQUFDbUIsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSzs2Q0FDNUQsOERBQUNuQiw4REFBUTs0QkFBQ29CLE1BQU07OzhDQUNkLDhEQUFDbkIsa0VBQVk7OENBQ1ZrQixLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQUcsOERBQUNoQix1RUFBUzs7Ozs4Q0FBRyxpQkFBRyw4REFBQ0MsZ0VBQVE7Ozs7OENBQUc7Ozs7OzBDQUNsQzs4Q0FDZiw4REFBQ0Ysa0VBQVk7b0NBQUNtQixPQUFPLEVBQUVILElBQUk7Ozs7OzBDQUFJOzsyQkFKWEEsSUFBSTs7OztrQ0FLZjtxQkFDWixDQUFDOzs7OzswQkFDRzs4QkFDUCw4REFBQ25CLDZEQUFPOzs7OzBCQUFHOzhCQUNYLDhEQUFDRCwwREFBSTs4QkFDRjt3QkFBQyxVQUFVO3dCQUFFLE9BQU87d0JBQUUsTUFBTTtxQkFBQyxDQUFDbUIsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSzs2Q0FDN0MsOERBQUNuQiw4REFBUTs0QkFBQ29CLE1BQU07OzhDQUNkLDhEQUFDbkIsa0VBQVk7OENBQ1ZrQixLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUJBQUcsOERBQUNoQix1RUFBUzs7Ozs4Q0FBRyxpQkFBRyw4REFBQ0MsZ0VBQVE7Ozs7OENBQUc7Ozs7OzBDQUNsQzs4Q0FDZiw4REFBQ0Ysa0VBQVk7b0NBQUNtQixPQUFPLEVBQUVILElBQUk7Ozs7OzBDQUFJOzsyQkFKWEEsSUFBSTs7OztrQ0FLZjtxQkFDWixDQUFDOzs7OzswQkFDRzs7Ozs7O2tCQUNIO0tBQ1A7SUFFRCxxQkFDRSw4REFBQ3JCLDZEQUFNO1FBQ0xhLE1BQU0sRUFBRSxNQUFNO1FBQ2RZLElBQUksRUFBRWYsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNuQmdCLE9BQU8sRUFBRWYsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7a0JBRW5DQyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7OzthQUNOLENBQ1Q7Q0FDSDtBQUFBO0FBM0NZSixLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL29yZ2FuaXNtcy9TaWRlTmF2LnRzeD82Nzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW92ZVRvSW5ib3gnO1xuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWFpbCc7XG5cbnR5cGUgQW5jaG9yID0gJ3RvcCcgfCAnbGVmdCcgfCAnYm90dG9tJyB8ICdyaWdodCc7XG5cbmV4cG9ydCBjb25zdCBTaWRlTmF2ID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCB0b2dnbGVEcmF3ZXIgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGxpc3QgPSAoYW5jaG9yOiBBbmNob3IpID0+IChcbiAgICA8Qm94XG4gICAgICBzeD17eyB3aWR0aDogMjUwLCBtYXJnaW5Ub3A6ICc1cmVtJyB9fVxuICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XG4gICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cbiAgICA+XG4gICAgICA8TGlzdD5cbiAgICAgICAge1snSW5ib3gnLCAnU3RhcnJlZCcsICdTZW5kIGVtYWlsJywgJ0RyYWZ0cyddLm1hcCgodGV4dCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17dGV4dH0+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICB7aW5kZXggJSAyID09PSAwID8gPEluYm94SWNvbiAvPiA6IDxNYWlsSWNvbiAvPn1cbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0PlxuICAgICAgPERpdmlkZXIgLz5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7WydBbGwgbWFpbCcsICdUcmFzaCcsICdTcGFtJ10ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXt0ZXh0fT5cbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgIHtpbmRleCAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fVxuICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XG4gICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L0xpc3Q+XG4gICAgPC9Cb3g+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyXG4gICAgICBhbmNob3I9eydsZWZ0J31cbiAgICAgIG9wZW49e3N0YXRlWydsZWZ0J119XG4gICAgICBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoJ2xlZnQnLCBmYWxzZSl9XG4gICAgPlxuICAgICAge2xpc3QoJ2xlZnQnKX1cbiAgICA8L0RyYXdlcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJEcmF3ZXIiLCJMaXN0IiwiRGl2aWRlciIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwiSW5ib3hJY29uIiwiTWFpbEljb24iLCJTaWRlTmF2IiwicHJvcHMiLCJzdGF0ZSIsInRvZ2dsZURyYXdlciIsImxpc3QiLCJhbmNob3IiLCJzeCIsIndpZHRoIiwibWFyZ2luVG9wIiwicm9sZSIsIm9uQ2xpY2siLCJvbktleURvd24iLCJtYXAiLCJ0ZXh0IiwiaW5kZXgiLCJidXR0b24iLCJwcmltYXJ5Iiwib3BlbiIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./organisms/SideNav.tsx\n");

/***/ })

});