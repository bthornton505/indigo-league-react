"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./organisms/SideNav.tsx":
/*!*******************************!*\
  !*** ./organisms/SideNav.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideNav\": function() { return /* binding */ SideNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Drawer */ \"./node_modules/@mui/material/Drawer/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"./node_modules/@mui/material/ListItemIcon/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ArrowRight */ \"./node_modules/@mui/icons-material/ArrowRight.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nvar _this = undefined;\n\n\n// import Box from '@mui/material/Box';\n\n\n\n\n\n\n\nvar navOptions = [\n    \"Roster\",\n    \"Schedule\",\n    \"Tier List\",\n    \"Leaderboard\",\n    \"Hall of Fame\"\n];\nvar SideNav = function(_param) {\n    var _this1 = _this;\n    var props = _extends({}, _param);\n    var state = props.state, toggleDrawer = props.toggleDrawer;\n    var navigateToPage = function() {\n        console.log(\"hello\");\n    // toggleDrawer(anchor, false)\n    };\n    var list = function(anchor) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            sx: {\n                width: 250,\n                marginTop: \"4rem\"\n            },\n            role: \"presentation\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: navOptions.map(function(text, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        button: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                primary: text\n                            }, void 0, false, {\n                                fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, text, true, {\n                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        anchor: \"left\",\n        open: state[\"left\"],\n        onClose: toggleDrawer(\"left\", false),\n        children: list(\"left\")\n    }, void 0, false, {\n        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this);\n};\n\n_c = SideNav;\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9vcmdhbmlzbXMvU2lkZU5hdi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDeEMsdUNBQXVDO0FBQ0c7QUFDSjtBQUNRO0FBQ1E7QUFDQTtBQUNNO0FBQ1I7QUFJcEQsSUFBTVEsVUFBVSxHQUFhO0lBQUUsUUFBUTtJQUFFLFVBQVU7SUFBRSxXQUFXO0lBQUUsYUFBYTtJQUFFLGNBQWM7Q0FBQztJQUVuRkMsT0FBTyxHQUFHLGlCQUFrQjs7UUFBWkMsS0FBSztJQUNoQyxJQUFRQyxLQUFLLEdBQW1CRCxLQUFLLENBQTdCQyxLQUFLLEVBQUVDLFlBQVksR0FBS0YsS0FBSyxDQUF0QkUsWUFBWTtJQUUzQixJQUFNQyxjQUFjLEdBQUcsV0FBWTtRQUNqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckIsOEJBQThCO0tBQy9CO0lBRUQsSUFBTUMsSUFBSSxHQUFHLFNBQUNDLE1BQWM7NkJBQzFCLDhEQUFDViw4Q0FBRztZQUNGVyxFQUFFLEVBQUU7Z0JBQUVDLEtBQUssRUFBRSxHQUFHO2dCQUFFQyxTQUFTLEVBQUUsTUFBTTthQUFFO1lBQ3JDQyxJQUFJLEVBQUMsY0FBYztzQkFFbkIsNEVBQUNuQiwwREFBSTswQkFDRk0sVUFBVSxDQUFDYyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLO3lDQUMxQiw4REFBQ3JCLDhEQUFRO3dCQUFDc0IsTUFBTTs7MENBQ2QsOERBQUNyQixrRUFBWTswQ0FDWCw0RUFBQ0Usc0VBQWM7Ozs7MENBQUU7Ozs7O3NDQUNKOzBDQUNmLDhEQUFDRCxrRUFBWTtnQ0FBQ3FCLE9BQU8sRUFBRUgsSUFBSTs7Ozs7c0NBQUk7O3VCQUpYQSxJQUFJOzs7OzhCQUtmO2lCQUNaLENBQUM7Ozs7O3NCQUNHOzs7OztrQkFDSDtLQUNQO0lBRUQscUJBQ0UsOERBQUN0Qiw0REFBTTtRQUNMZ0IsTUFBTSxFQUFFLE1BQU07UUFDZFUsSUFBSSxFQUFFaEIsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNuQmlCLE9BQU8sRUFBRWhCLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO2tCQUVuQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQzs7Ozs7YUFDTixDQUNUO0NBQ0g7QUFBQTtBQW5DWVAsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9vcmdhbmlzbXMvU2lkZU5hdi50c3g/Njc3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXJyb3dSaWdodEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd1JpZ2h0JztcbmltcG9ydCB7IEJveCwgTGlzdEl0ZW1CdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxudHlwZSBBbmNob3IgPSAndG9wJyB8ICdsZWZ0JyB8ICdib3R0b20nIHwgJ3JpZ2h0JztcblxuY29uc3QgbmF2T3B0aW9uczogc3RyaW5nW10gPSBbICdSb3N0ZXInLCAnU2NoZWR1bGUnLCAnVGllciBMaXN0JywgJ0xlYWRlcmJvYXJkJywgJ0hhbGwgb2YgRmFtZSddXG5cbmV4cG9ydCBjb25zdCBTaWRlTmF2ID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCB0b2dnbGVEcmF3ZXIgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG5hdmlnYXRlVG9QYWdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICAgIC8vIHRvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKVxuICB9XG5cbiAgY29uc3QgbGlzdCA9IChhbmNob3I6IEFuY2hvcikgPT4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXt7IHdpZHRoOiAyNTAsIG1hcmdpblRvcDogJzRyZW0nIH19XG4gICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICA+XG4gICAgICA8TGlzdD5cbiAgICAgICAge25hdk9wdGlvbnMubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXt0ZXh0fT5cbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbi8+XG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGV4dH0gLz5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L0JveD5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIGFuY2hvcj17J2xlZnQnfVxuICAgICAgb3Blbj17c3RhdGVbJ2xlZnQnXX1cbiAgICAgIG9uQ2xvc2U9e3RvZ2dsZURyYXdlcignbGVmdCcsIGZhbHNlKX1cbiAgICA+XG4gICAgICB7bGlzdCgnbGVmdCcpfVxuICAgIDwvRHJhd2VyPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkRyYXdlciIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIkFycm93UmlnaHRJY29uIiwiQm94IiwibmF2T3B0aW9ucyIsIlNpZGVOYXYiLCJwcm9wcyIsInN0YXRlIiwidG9nZ2xlRHJhd2VyIiwibmF2aWdhdGVUb1BhZ2UiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsImFuY2hvciIsInN4Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJyb2xlIiwibWFwIiwidGV4dCIsImluZGV4IiwiYnV0dG9uIiwicHJpbWFyeSIsIm9wZW4iLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./organisms/SideNav.tsx\n");

/***/ })

});