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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideNav\": function() { return /* binding */ SideNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/ArrowRight */ \"./node_modules/@mui/icons-material/ArrowRight.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\nfunction _extends() {\n    _extends = Object.assign || function(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source){\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\n                    target[key] = source[key];\n                }\n            }\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\nvar _this = undefined;\n\n\n\n\nvar navOptions = [\n    \"Roster\",\n    \"Schedule\",\n    \"Tier List\",\n    \"Leaderboard\",\n    \"Hall of Fame\"\n];\nvar SideNav = function(_param) {\n    var _this1 = _this;\n    var props = _extends({}, _param);\n    var state = props.state, toggleDrawer = props.toggleDrawer;\n    var navigateToPage = function() {\n        console.log(\"hello\");\n    // toggleDrawer(anchor, false)\n    };\n    var list = function(anchor) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            sx: {\n                width: 250,\n                marginTop: \"4rem\"\n            },\n            role: \"presentation\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {\n                children: navOptions.map(function(text, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemIcon, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowRight__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {\n                                primary: text\n                            }, void 0, false, {\n                                fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, text, true, {\n                        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this1)\n        }, void 0, false, {\n            fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n            lineNumber: 26,\n            columnNumber: 5\n        }, _this1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Drawer, {\n        anchor: \"left\",\n        open: state[\"left\"],\n        onClose: toggleDrawer(\"left\", false),\n        children: list(\"left\")\n    }, void 0, false, {\n        fileName: \"/Users/brendenthornton/brenden-dev/indigo-league-react/organisms/SideNav.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, _this);\n};\n\n_c = SideNav;\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9vcmdhbmlzbXMvU2lkZU5hdi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ29CO0FBU3JDO0FBSXZCLElBQU1RLFVBQVUsR0FBYTtJQUFFLFFBQVE7SUFBRSxVQUFVO0lBQUUsV0FBVztJQUFFLGFBQWE7SUFBRSxjQUFjO0NBQUM7SUFFbkZDLE9BQU8sR0FBRyxpQkFBa0I7O1FBQVpDLEtBQUs7SUFDaEMsSUFBUUMsS0FBSyxHQUFtQkQsS0FBSyxDQUE3QkMsS0FBSyxFQUFFQyxZQUFZLEdBQUtGLEtBQUssQ0FBdEJFLFlBQVk7SUFFM0IsSUFBTUMsY0FBYyxHQUFHLFdBQVk7UUFDakNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLDhCQUE4QjtLQUMvQjtJQUVELElBQU1DLElBQUksR0FBRyxTQUFDQyxNQUFjOzZCQUMxQiw4REFBQ2YsOENBQUc7WUFDRmdCLEVBQUUsRUFBRTtnQkFBRUMsS0FBSyxFQUFFLEdBQUc7Z0JBQUVDLFNBQVMsRUFBRSxNQUFNO2FBQUU7WUFDckNDLElBQUksRUFBQyxjQUFjO3NCQUVuQiw0RUFBQ2pCLCtDQUFJOzBCQUNGSSxVQUFVLENBQUNjLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUs7eUNBQzFCLDhEQUFDbkIsbURBQVE7OzBDQUNQLDhEQUFDQyx1REFBWTswQ0FDWCw0RUFBQ0wsc0VBQWM7Ozs7MENBQUU7Ozs7O3NDQUNKOzBDQUNmLDhEQUFDTSx1REFBWTtnQ0FBQ2tCLE9BQU8sRUFBRUYsSUFBSTs7Ozs7c0NBQUk7O3VCQUpsQkEsSUFBSTs7Ozs4QkFLUjtpQkFDWixDQUFDOzs7OztzQkFDRzs7Ozs7a0JBQ0g7S0FDUDtJQUVELHFCQUNFLDhEQUFDcEIsaURBQU07UUFDTGMsTUFBTSxFQUFFLE1BQU07UUFDZFMsSUFBSSxFQUFFZixLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ25CZ0IsT0FBTyxFQUFFZixZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztrQkFFbkNJLElBQUksQ0FBQyxNQUFNLENBQUM7Ozs7O2FBQ04sQ0FDVDtDQUNIO0FBQUE7QUFuQ1lQLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vb3JnYW5pc21zL1NpZGVOYXYudHN4PzY3NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFycm93UmlnaHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dSaWdodCc7XG5pbXBvcnQgeyBcbiAgQm94LFxuICBEcmF3ZXIsXG4gIExpc3QsXG4gIExpc3RJdGVtLFxuICBMaXN0SXRlbUljb24sXG4gIExpc3RJdGVtVGV4dCxcbiAgTGlzdEl0ZW1CdXR0b24sXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuXG50eXBlIEFuY2hvciA9ICd0b3AnIHwgJ2xlZnQnIHwgJ2JvdHRvbScgfCAncmlnaHQnO1xuXG5jb25zdCBuYXZPcHRpb25zOiBzdHJpbmdbXSA9IFsgJ1Jvc3RlcicsICdTY2hlZHVsZScsICdUaWVyIExpc3QnLCAnTGVhZGVyYm9hcmQnLCAnSGFsbCBvZiBGYW1lJ11cblxuZXhwb3J0IGNvbnN0IFNpZGVOYXYgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIHRvZ2dsZURyYXdlciB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmF2aWdhdGVUb1BhZ2UgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG4gICAgLy8gdG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpXG4gIH1cblxuICBjb25zdCBsaXN0ID0gKGFuY2hvcjogQW5jaG9yKSA9PiAoXG4gICAgPEJveFxuICAgICAgc3g9e3sgd2lkdGg6IDI1MCwgbWFyZ2luVG9wOiAnNHJlbScgfX1cbiAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgID5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7bmF2T3B0aW9ucy5tYXAoKHRleHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPExpc3RJdGVtIGtleT17dGV4dH0+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24vPlxuICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3RleHR9IC8+XG4gICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L0xpc3Q+XG4gICAgPC9Cb3g+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyXG4gICAgICBhbmNob3I9eydsZWZ0J31cbiAgICAgIG9wZW49e3N0YXRlWydsZWZ0J119XG4gICAgICBvbkNsb3NlPXt0b2dnbGVEcmF3ZXIoJ2xlZnQnLCBmYWxzZSl9XG4gICAgPlxuICAgICAge2xpc3QoJ2xlZnQnKX1cbiAgICA8L0RyYXdlcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJBcnJvd1JpZ2h0SWNvbiIsIkJveCIsIkRyYXdlciIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIm5hdk9wdGlvbnMiLCJTaWRlTmF2IiwicHJvcHMiLCJzdGF0ZSIsInRvZ2dsZURyYXdlciIsIm5hdmlnYXRlVG9QYWdlIiwiY29uc29sZSIsImxvZyIsImxpc3QiLCJhbmNob3IiLCJzeCIsIndpZHRoIiwibWFyZ2luVG9wIiwicm9sZSIsIm1hcCIsInRleHQiLCJpbmRleCIsInByaW1hcnkiLCJvcGVuIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./organisms/SideNav.tsx\n");

/***/ })

});