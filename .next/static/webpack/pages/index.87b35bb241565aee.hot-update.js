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

/***/ "./components/TopRanked.js":
/*!*********************************!*\
  !*** ./components/TopRanked.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_components_TopRanked_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/components/TopRanked.module.css */ \"./styles/components/TopRanked.module.css\");\n/* harmony import */ var _styles_components_TopRanked_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_TopRanked_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar TopRanked = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_components_TopRanked_module_css__WEBPACK_IMPORTED_MODULE_5___default().TopRanked),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Les 10 meilleurs films\"\n            }, void 0, false, {\n                fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/images/sliderpreviousarrow.svg\",\n                            alt: \"silder previous arrow\",\n                            width: 25,\n                            height: 15\n                        }, void 0, false, {\n                            fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                            modules: [\n                                swiper_react__WEBPACK_IMPORTED_MODULE_2__.Navigation\n                            ],\n                            navigation: true,\n                            spaceBetween: 50,\n                            slidesPerView: 4,\n                            children: data.map(function(movie, index) {\n                                if (index < 10) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"https://image.tmdb.org/t/p/w500\".concat(movie.poster_path),\n                                                    alt: \"movie image\",\n                                                    width: 138,\n                                                    height: 200\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                                    lineNumber: 30,\n                                                    columnNumber: 23\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: movie.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 23\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: movie.release_date && data[0].release_date.split(\"-\")[0]\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 23\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 21\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 19\n                                    }, _this1);\n                                }\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/images/slidernextarrow.svg\",\n                            alt: \"silder next arrow\",\n                            width: 25,\n                            height: 15\n                        }, void 0, false, {\n                            fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = TopRanked;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopRanked);\nvar _c;\n$RefreshReg$(_c, \"TopRanked\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcFJhbmtlZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFFZ0M7QUFFakM7QUFFVjtBQUN5QztBQUU3RCxJQUFNTSxTQUFTLEdBQUcsZ0JBQWM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJOztJQUN2QixxQkFDRSw4REFBQ0MsU0FBTztRQUFDQyxTQUFTLEVBQUVKLDBGQUFnQjs7MEJBQ2xDLDhEQUFDSyxJQUFFOzBCQUFDLHdCQUFzQjs7Ozs7cUJBQUs7MEJBQy9CLDhEQUFDQyxTQUFPOztrQ0FDTiw4REFBQ0MsUUFBTTtrQ0FDTCw0RUFBQ1IsbURBQUs7NEJBQUNTLEdBQUcsRUFBQyxpQ0FBaUM7NEJBQUNDLEdBQUcsRUFBQyx1QkFBdUI7NEJBQUNDLEtBQUssRUFBRSxFQUFFOzRCQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7aUNBQUk7Ozs7OzZCQUMzRjtrQ0FDVCw4REFBQ1IsU0FBTztrQ0FDTiw0RUFBQ1AsZ0RBQU07NEJBQ0xnQixPQUFPLEVBQUU7Z0NBQUNkLG9EQUFVOzZCQUFDOzRCQUNyQmUsVUFBVTs0QkFDVkMsWUFBWSxFQUFFLEVBQUU7NEJBQ2hCQyxhQUFhLEVBQUUsQ0FBQztzQ0FFZmIsSUFBSSxDQUFDYyxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUs7Z0NBQzFCLElBQUlBLEtBQUssR0FBRyxFQUFFLEVBQUU7b0NBQ2QscUJBQ0UsOERBQUNyQixxREFBVztrREFDViw0RUFBQ3NCLEtBQUc7OzhEQUNGLDhEQUFDQyxLQUFHO29EQUFDWixHQUFHLEVBQUUsaUNBQWdDLENBQW9CLE9BQWxCUyxLQUFLLENBQUNJLFdBQVcsQ0FBRTtvREFBRVosR0FBRyxFQUFDLGFBQWE7b0RBQUNDLEtBQUssRUFBRSxHQUFHO29EQUFFQyxNQUFNLEVBQUUsR0FBRzs7Ozs7MERBQUk7OERBQzlHLDhEQUFDVyxJQUFFOzhEQUFFTCxLQUFLLENBQUNNLEtBQUs7Ozs7OzBEQUFNOzhEQUN0Qiw4REFBQ0MsTUFBSTs4REFBRVAsS0FBSyxDQUFDUSxZQUFZLElBQUl2QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUN1QixZQUFZLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OzBEQUFROzs7Ozs7a0RBQ25FOzs7Ozs4Q0FDTSxDQUNmO2lDQUNGOzZCQUNGLENBQUM7Ozs7O2lDQUNLOzs7Ozs2QkFDRDtrQ0FDViw4REFBQ25CLFFBQU07a0NBQ0wsNEVBQUNSLG1EQUFLOzRCQUFDUyxHQUFHLEVBQUMsNkJBQTZCOzRCQUFDQyxHQUFHLEVBQUMsbUJBQW1COzRCQUFDQyxLQUFLLEVBQUUsRUFBRTs0QkFBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7O2lDQUFJOzs7Ozs2QkFDbkY7Ozs7OztxQkFDRDs7Ozs7O2FBQ0YsQ0FDWDtDQUNGO0FBcENLVixLQUFBQSxTQUFTO0FBc0NmLCtEQUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wUmFua2VkLmpzP2MzYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUsIE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvY29tcG9uZW50cy9Ub3BSYW5rZWQubW9kdWxlLmNzcydcblxuY29uc3QgVG9wUmFua2VkID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuVG9wUmFua2VkfT5cbiAgICAgIDxoMj5MZXMgMTAgbWVpbGxldXJzIGZpbG1zPC9oMj5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbWFnZXMvc2xpZGVycHJldmlvdXNhcnJvdy5zdmcnIGFsdD0nc2lsZGVyIHByZXZpb3VzIGFycm93JyB3aWR0aD17MjV9IGhlaWdodD17MTV9IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgICBtb2R1bGVzPXtbTmF2aWdhdGlvbl19XG4gICAgICAgICAgICBuYXZpZ2F0aW9uXG4gICAgICAgICAgICBzcGFjZUJldHdlZW49ezUwfVxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17NH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZGF0YS5tYXAoKG1vdmllLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaW5kZXggPCAxMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJHttb3ZpZS5wb3N0ZXJfcGF0aH1gfSBhbHQ9J21vdmllIGltYWdlJyB3aWR0aD17MTM4fSBoZWlnaHQ9ezIwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDM+e21vdmllLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21vdmllLnJlbGVhc2VfZGF0ZSAmJiBkYXRhWzBdLnJlbGVhc2VfZGF0ZS5zcGxpdCgnLScpWzBdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9Td2lwZXI+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1hZ2VzL3NsaWRlcm5leHRhcnJvdy5zdmcnIGFsdD0nc2lsZGVyIG5leHQgYXJyb3cnIHdpZHRoPXsyNX0gaGVpZ2h0PXsxNX0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcFJhbmtlZCJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIk5hdmlnYXRpb24iLCJJbWFnZSIsInN0eWxlcyIsIlRvcFJhbmtlZCIsImRhdGEiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDIiLCJhcnRpY2xlIiwiYnV0dG9uIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJtb2R1bGVzIiwibmF2aWdhdGlvbiIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJtYXAiLCJtb3ZpZSIsImluZGV4IiwiZGl2IiwiaW1nIiwicG9zdGVyX3BhdGgiLCJoMyIsInRpdGxlIiwic3BhbiIsInJlbGVhc2VfZGF0ZSIsInNwbGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TopRanked.js\n"));

/***/ })

});