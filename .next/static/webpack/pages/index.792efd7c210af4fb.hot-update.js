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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_components_TopRanked_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/components/TopRanked.module.css */ \"./styles/components/TopRanked.module.css\");\n/* harmony import */ var _styles_components_TopRanked_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_TopRanked_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TopRanked = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var goNext = function() {\n        if (ref.current !== null && ref.current.swiper !== null) {\n            ref.current.swiper.slideNext();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_components_TopRanked_module_css__WEBPACK_IMPORTED_MODULE_5___default().TopRanked),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Les 10 meilleurs films\"\n            }, void 0, false, {\n                fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/images/sliderpreviousarrow.svg\",\n                            alt: \"silder previous arrow\",\n                            width: 25,\n                            height: 15\n                        }, void 0, false, {\n                            fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                            ref: ref,\n                            spaceBetween: 50,\n                            slidesPerView: 4,\n                            children: data.map(function(movie, index) {\n                                if (index < 10) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"https://image.tmdb.org/t/p/w500\".concat(movie.poster_path),\n                                                    alt: \"movie image\",\n                                                    width: 138,\n                                                    height: 200\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 23\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: movie.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 23\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: movie.release_date && data[0].release_date.split(\"-\")[0]\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 23\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 21\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 19\n                                    }, _this1);\n                                }\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: goNext,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: \"/images/slidernextarrow.svg\",\n                            alt: \"silder next arrow\",\n                            width: 25,\n                            height: 15\n                        }, void 0, false, {\n                            fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(TopRanked, \"QMBuJFIdzLIeqBcFwhMf246mjOM=\");\n_c = TopRanked;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopRanked);\nvar _c;\n$RefreshReg$(_c, \"TopRanked\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcFJhbmtlZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBc0M7QUFDYTtBQUVyQjtBQUVWO0FBQ3lDOztBQUU3RCxJQUFNTSxTQUFTLEdBQUcsZ0JBQWM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJOzs7SUFDdkIsSUFBTUMsR0FBRyxHQUFHUCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUV4QixJQUFNUSxNQUFNLEdBQUcsV0FBTTtRQUNuQixJQUFJRCxHQUFHLENBQUNFLE9BQU8sS0FBSyxJQUFJLElBQUlGLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3ZESCxHQUFHLENBQUNFLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLEVBQUUsQ0FBQztTQUNoQztLQUNGO0lBQ0QscUJBQ0UsOERBQUNDLFNBQU87UUFBQ0MsU0FBUyxFQUFFVCwwRkFBZ0I7OzBCQUNsQyw4REFBQ1UsSUFBRTswQkFBQyx3QkFBc0I7Ozs7O3FCQUFLOzBCQUMvQiw4REFBQ0MsU0FBTzs7a0NBQ04sOERBQUNDLFFBQU07a0NBQ0wsNEVBQUNiLG1EQUFLOzRCQUFDYyxHQUFHLEVBQUMsaUNBQWlDOzRCQUFDQyxHQUFHLEVBQUMsdUJBQXVCOzRCQUFDQyxLQUFLLEVBQUUsRUFBRTs0QkFBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7O2lDQUFJOzs7Ozs2QkFDM0Y7a0NBQ1QsOERBQUNSLFNBQU87a0NBQ04sNEVBQUNYLGdEQUFNOzRCQUNMTSxHQUFHLEVBQUVBLEdBQUc7NEJBQ1JjLFlBQVksRUFBRSxFQUFFOzRCQUNoQkMsYUFBYSxFQUFFLENBQUM7c0NBRWZoQixJQUFJLENBQUNpQixHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUs7Z0NBQzFCLElBQUlBLEtBQUssR0FBRyxFQUFFLEVBQUU7b0NBQ2QscUJBQ0UsOERBQUN2QixxREFBVztrREFDViw0RUFBQ3dCLEtBQUc7OzhEQUNGLDhEQUFDQyxLQUFHO29EQUFDVixHQUFHLEVBQUUsaUNBQWdDLENBQW9CLE9BQWxCTyxLQUFLLENBQUNJLFdBQVcsQ0FBRTtvREFBRVYsR0FBRyxFQUFDLGFBQWE7b0RBQUNDLEtBQUssRUFBRSxHQUFHO29EQUFFQyxNQUFNLEVBQUUsR0FBRzs7Ozs7MERBQUk7OERBQzlHLDhEQUFDUyxJQUFFOzhEQUFFTCxLQUFLLENBQUNNLEtBQUs7Ozs7OzBEQUFNOzhEQUN0Qiw4REFBQ0MsTUFBSTs4REFBRVAsS0FBSyxDQUFDUSxZQUFZLElBQUkxQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMwQixZQUFZLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7OzBEQUFROzs7Ozs7a0RBQ25FOzs7Ozs4Q0FDTSxDQUNmO2lDQUNGOzZCQUNGLENBQUM7Ozs7O2lDQUNLOzs7Ozs2QkFDRDtrQ0FDViw4REFBQ2pCLFFBQU07d0JBQUNrQixPQUFPLEVBQUUxQixNQUFNO2tDQUNyQiw0RUFBQ0wsbURBQUs7NEJBQUNjLEdBQUcsRUFBQyw2QkFBNkI7NEJBQUNDLEdBQUcsRUFBQyxtQkFBbUI7NEJBQUNDLEtBQUssRUFBRSxFQUFFOzRCQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7aUNBQUk7Ozs7OzZCQUNuRjs7Ozs7O3FCQUNEOzs7Ozs7YUFDRixDQUNYO0NBQ0Y7R0ExQ0tmLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQTRDZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvcFJhbmtlZC5qcz9jM2I3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcblxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL2NvbXBvbmVudHMvVG9wUmFua2VkLm1vZHVsZS5jc3MnXG5cbmNvbnN0IFRvcFJhbmtlZCA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgZ29OZXh0ID0gKCkgPT4ge1xuICAgIGlmIChyZWYuY3VycmVudCAhPT0gbnVsbCAmJiByZWYuY3VycmVudC5zd2lwZXIgIT09IG51bGwpIHtcbiAgICAgIHJlZi5jdXJyZW50LnN3aXBlci5zbGlkZU5leHQoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5Ub3BSYW5rZWR9PlxuICAgICAgPGgyPkxlcyAxMCBtZWlsbGV1cnMgZmlsbXM8L2gyPlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxidXR0b24+XG4gICAgICAgICAgPEltYWdlIHNyYz0nL2ltYWdlcy9zbGlkZXJwcmV2aW91c2Fycm93LnN2ZycgYWx0PSdzaWxkZXIgcHJldmlvdXMgYXJyb3cnIHdpZHRoPXsyNX0gaGVpZ2h0PXsxNX0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxTd2lwZXJcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuPXs1MH1cbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2RhdGEubWFwKChtb3ZpZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGluZGV4IDwgMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7bW92aWUucG9zdGVyX3BhdGh9YH0gYWx0PSdtb3ZpZSBpbWFnZScgd2lkdGg9ezEzOH0gaGVpZ2h0PXsyMDB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPnttb3ZpZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttb3ZpZS5yZWxlYXNlX2RhdGUgJiYgZGF0YVswXS5yZWxlYXNlX2RhdGUuc3BsaXQoJy0nKVswXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU3dpcGVyPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z29OZXh0fT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1hZ2VzL3NsaWRlcm5leHRhcnJvdy5zdmcnIGFsdD0nc2lsZGVyIG5leHQgYXJyb3cnIHdpZHRoPXsyNX0gaGVpZ2h0PXsxNX0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcFJhbmtlZCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiSW1hZ2UiLCJzdHlsZXMiLCJUb3BSYW5rZWQiLCJkYXRhIiwicmVmIiwiZ29OZXh0IiwiY3VycmVudCIsInN3aXBlciIsInNsaWRlTmV4dCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMiIsImFydGljbGUiLCJidXR0b24iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJtYXAiLCJtb3ZpZSIsImluZGV4IiwiZGl2IiwiaW1nIiwicG9zdGVyX3BhdGgiLCJoMyIsInRpdGxlIiwic3BhbiIsInJlbGVhc2VfZGF0ZSIsInNwbGl0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopRanked.js\n"));

/***/ })

});