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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_components_TopRanked_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/components/TopRanked.module.css */ \"./styles/components/TopRanked.module.css\");\n/* harmony import */ var _styles_components_TopRanked_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_TopRanked_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TopRanked = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    _s();\n    var swiper = (0,swiper_react__WEBPACK_IMPORTED_MODULE_2__.useSwiper)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_components_TopRanked_module_css__WEBPACK_IMPORTED_MODULE_5___default().TopRanked),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Les 10 meilleurs films\"\n            }, void 0, false, {\n                fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                    modules: [\n                        swiper_react__WEBPACK_IMPORTED_MODULE_2__.Navigation\n                    ],\n                    navigation: true,\n                    spaceBetween: 50,\n                    slidesPerView: 4,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return swiper.slideNext();\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/images/sliderpreviousarrow.svg\",\n                                alt: \"silder previous arrow\",\n                                width: 25,\n                                height: 15\n                            }, void 0, false, {\n                                fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            children: data.map(function(movie, index) {\n                                if (index < 10) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"https://image.tmdb.org/t/p/w500\".concat(movie.poster_path),\n                                                    alt: \"movie image\",\n                                                    width: 138,\n                                                    height: 200\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 23\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: movie.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 23\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: movie.release_date && data[0].release_date.split(\"-\")[0]\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 23\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 21\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 19\n                                    }, _this1);\n                                }\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/images/slidernextarrow.svg\",\n                                alt: \"silder next arrow\",\n                                width: 25,\n                                height: 15\n                            }, void 0, false, {\n                                fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jessy/Desktop/movieFinder/components/TopRanked.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(TopRanked, \"7yKpomHFPHyHiOpTV4g/MTjgI7I=\", false, function() {\n    return [\n        swiper_react__WEBPACK_IMPORTED_MODULE_2__.useSwiper\n    ];\n});\n_c = TopRanked;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopRanked);\nvar _c;\n$RefreshReg$(_c, \"TopRanked\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcFJhbmtlZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUFpQztBQUV5QztBQUU1QztBQUVWO0FBQ3lDOztBQUU3RCxJQUFNTyxTQUFTLEdBQUcsZ0JBQWM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJOzs7SUFDdkIsSUFBTUMsTUFBTSxHQUFHTCx1REFBUyxFQUFFO0lBQzFCLHFCQUNFLDhEQUFDTSxTQUFPO1FBQUNDLFNBQVMsRUFBRUwsMEZBQWdCOzswQkFDbEMsOERBQUNNLElBQUU7MEJBQUMsd0JBQXNCOzs7OztxQkFBSzswQkFDL0IsOERBQUNDLFNBQU87MEJBQ04sNEVBQUNaLGdEQUFNO29CQUNMYSxPQUFPLEVBQUU7d0JBQUNYLG9EQUFVO3FCQUFDO29CQUNyQlksVUFBVTtvQkFDVkMsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCQyxhQUFhLEVBQUUsQ0FBQzs7c0NBRWhCLDhEQUFDQyxRQUFNOzRCQUFDQyxPQUFPLEVBQUU7dUNBQU1WLE1BQU0sQ0FBQ1csU0FBUyxFQUFFOzZCQUFBO3NDQUN2Qyw0RUFBQ2YsbURBQUs7Z0NBQUNnQixHQUFHLEVBQUMsaUNBQWlDO2dDQUFDQyxHQUFHLEVBQUMsdUJBQXVCO2dDQUFDQyxLQUFLLEVBQUUsRUFBRTtnQ0FBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7O3FDQUFJOzs7OztpQ0FDM0Y7c0NBQ1QsOERBQUNkLFNBQU87c0NBQ0xGLElBQUksQ0FBQ2lCLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBSztnQ0FDMUIsSUFBSUEsS0FBSyxHQUFHLEVBQUUsRUFBRTtvQ0FDZCxxQkFDRSw4REFBQ3pCLHFEQUFXO2tEQUNWLDRFQUFDMEIsS0FBRzs7OERBQ0YsOERBQUNDLEtBQUc7b0RBQUNSLEdBQUcsRUFBRSxpQ0FBZ0MsQ0FBb0IsT0FBbEJLLEtBQUssQ0FBQ0ksV0FBVyxDQUFFO29EQUFFUixHQUFHLEVBQUMsYUFBYTtvREFBQ0MsS0FBSyxFQUFFLEdBQUc7b0RBQUVDLE1BQU0sRUFBRSxHQUFHOzs7OzswREFBSTs4REFDOUcsOERBQUNPLElBQUU7OERBQUVMLEtBQUssQ0FBQ00sS0FBSzs7Ozs7MERBQU07OERBQ3RCLDhEQUFDQyxNQUFJOzhEQUFFUCxLQUFLLENBQUNRLFlBQVksSUFBSTFCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzBCLFlBQVksQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7MERBQVE7Ozs7OztrREFDbkU7Ozs7OzhDQUNNLENBQ2Y7aUNBQ0Y7NkJBQ0YsQ0FBQzs7Ozs7aUNBRU07c0NBQ1YsOERBQUNqQixRQUFNO3NDQUNMLDRFQUFDYixtREFBSztnQ0FBQ2dCLEdBQUcsRUFBQyw2QkFBNkI7Z0NBQUNDLEdBQUcsRUFBQyxtQkFBbUI7Z0NBQUNDLEtBQUssRUFBRSxFQUFFO2dDQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7cUNBQUk7Ozs7O2lDQUNuRjs7Ozs7O3lCQUNGOzs7OztxQkFDRDs7Ozs7O2FBQ0YsQ0FDWDtDQUNGO0dBdENLakIsU0FBUzs7UUFDRUgsbURBQVM7OztBQURwQkcsS0FBQUEsU0FBUztBQXdDZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvcFJhbmtlZC5qcz9jM2I3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5cbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUsIE5hdmlnYXRpb24sIHVzZVN3aXBlciB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9jb21wb25lbnRzL1RvcFJhbmtlZC5tb2R1bGUuY3NzJ1xuXG5jb25zdCBUb3BSYW5rZWQgPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3Qgc3dpcGVyID0gdXNlU3dpcGVyKCk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuVG9wUmFua2VkfT5cbiAgICAgIDxoMj5MZXMgMTAgbWVpbGxldXJzIGZpbG1zPC9oMj5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgbW9kdWxlcz17W05hdmlnYXRpb25dfVxuICAgICAgICAgIG5hdmlnYXRpb25cbiAgICAgICAgICBzcGFjZUJldHdlZW49ezUwfVxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezR9XG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHN3aXBlci5zbGlkZU5leHQoKX0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1hZ2VzL3NsaWRlcnByZXZpb3VzYXJyb3cuc3ZnJyBhbHQ9J3NpbGRlciBwcmV2aW91cyBhcnJvdycgd2lkdGg9ezI1fSBoZWlnaHQ9ezE1fSAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAge2RhdGEubWFwKChtb3ZpZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGluZGV4IDwgMTApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7bW92aWUucG9zdGVyX3BhdGh9YH0gYWx0PSdtb3ZpZSBpbWFnZScgd2lkdGg9ezEzOH0gaGVpZ2h0PXsyMDB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPnttb3ZpZS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttb3ZpZS5yZWxlYXNlX2RhdGUgJiYgZGF0YVswXS5yZWxlYXNlX2RhdGUuc3BsaXQoJy0nKVswXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW1hZ2VzL3NsaWRlcm5leHRhcnJvdy5zdmcnIGFsdD0nc2lsZGVyIG5leHQgYXJyb3cnIHdpZHRoPXsyNX0gaGVpZ2h0PXsxNX0gLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Td2lwZXI+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcFJhbmtlZCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIk5hdmlnYXRpb24iLCJ1c2VTd2lwZXIiLCJJbWFnZSIsInN0eWxlcyIsIlRvcFJhbmtlZCIsImRhdGEiLCJzd2lwZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDIiLCJhcnRpY2xlIiwibW9kdWxlcyIsIm5hdmlnYXRpb24iLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwiYnV0dG9uIiwib25DbGljayIsInNsaWRlTmV4dCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibWFwIiwibW92aWUiLCJpbmRleCIsImRpdiIsImltZyIsInBvc3Rlcl9wYXRoIiwiaDMiLCJ0aXRsZSIsInNwYW4iLCJyZWxlYXNlX2RhdGUiLCJzcGxpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopRanked.js\n"));

/***/ })

});