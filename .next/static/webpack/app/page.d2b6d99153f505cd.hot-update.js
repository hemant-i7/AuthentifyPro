"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst PlagiarismDetection = ()=>{\n    _s();\n    const [document1, setDocument1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [document2, setDocument2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [similarityPercentage, setSimilarityPercentage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const calculateSimilarity = ()=>{\n        const lcsLength = longestCommonSubsequence(document1, document2);\n        const maxLength = Math.max(document1.length, document2.length);\n        const percentage = lcsLength / maxLength * 100;\n        setSimilarityPercentage(percentage);\n    };\n    const longestCommonSubsequence = (text1, text2)=>{\n        const m = text1.length;\n        const n = text2.length;\n        const dp = [];\n        // Initialize dp array\n        for(let i = 0; i <= m; i++){\n            dp[i] = [];\n            for(let j = 0; j <= n; j++){\n                dp[i][j] = 0;\n            }\n        }\n        // Fill dp array\n        for(let i = 1; i <= m; i++){\n            for(let j = 1; j <= n; j++){\n                if (text1[i - 1] === text2[j - 1]) {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                } else {\n                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n                }\n            }\n        }\n        return dp[m][n];\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-800 text-white min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto py-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-bold text-center mb-8\",\n                    children: \"Plagiarism Detection System\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 gap-6 md:grid-cols-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-4\",\n                                    children: \"Document 1\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    value: document1,\n                                    onChange: (e)=>setDocument1(e.target.value),\n                                    className: \"w-full h-48 p-4 bg-gray-700 border border-gray-600 rounded shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-white\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-4\",\n                                    children: \"Document 2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    value: document2,\n                                    onChange: (e)=>setDocument2(e.target.value),\n                                    className: \"w-full h-48 p-4 bg-gray-700 border border-gray-600 rounded shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-white\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: calculateSimilarity,\n                    className: \"glassmorphism-btn btn btn-blue mt-6 mx-auto block\",\n                    children: \"Calculate Similarity\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6 text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-xl font-semibold mb-2\",\n                            children: \"Similarity Percentage\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-2xl font-bold\",\n                            children: [\n                                similarityPercentage.toFixed(2),\n                                \"%\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Mern\\\\next-kruskal-mst\\\\app\\\\page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlagiarismDetection, \"EvpvmrqUjis1+IamXVmOl2XclZg=\");\n_c = PlagiarismDetection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlagiarismDetection);\nvar _c;\n$RefreshReg$(_c, \"PlagiarismDetection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0ExRU1sQztLQUFBQTtBQTRFTiwrREFBZUEsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBQbGFnaWFyaXNtRGV0ZWN0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2RvY3VtZW50MSwgc2V0RG9jdW1lbnQxXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtkb2N1bWVudDIsIHNldERvY3VtZW50Ml0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbc2ltaWxhcml0eVBlcmNlbnRhZ2UsIHNldFNpbWlsYXJpdHlQZXJjZW50YWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc3QgY2FsY3VsYXRlU2ltaWxhcml0eSA9ICgpID0+IHtcbiAgICBjb25zdCBsY3NMZW5ndGggPSBsb25nZXN0Q29tbW9uU3Vic2VxdWVuY2UoZG9jdW1lbnQxLCBkb2N1bWVudDIpO1xuICAgIGNvbnN0IG1heExlbmd0aCA9IE1hdGgubWF4KGRvY3VtZW50MS5sZW5ndGgsIGRvY3VtZW50Mi5sZW5ndGgpO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAobGNzTGVuZ3RoIC8gbWF4TGVuZ3RoKSAqIDEwMDtcbiAgICBzZXRTaW1pbGFyaXR5UGVyY2VudGFnZShwZXJjZW50YWdlKTtcbiAgfTtcblxuICBjb25zdCBsb25nZXN0Q29tbW9uU3Vic2VxdWVuY2UgPSAodGV4dDE6IHN0cmluZywgdGV4dDI6IHN0cmluZyk6IG51bWJlciA9PiB7XG4gICAgY29uc3QgbSA9IHRleHQxLmxlbmd0aDtcbiAgICBjb25zdCBuID0gdGV4dDIubGVuZ3RoO1xuICAgIGNvbnN0IGRwOiBudW1iZXJbXVtdID0gW107XG5cbiAgICAvLyBJbml0aWFsaXplIGRwIGFycmF5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbTsgaSsrKSB7XG4gICAgICBkcFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gbjsgaisrKSB7XG4gICAgICAgIGRwW2ldW2pdID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaWxsIGRwIGFycmF5XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBuOyBqKyspIHtcbiAgICAgICAgaWYgKHRleHQxW2kgLSAxXSA9PT0gdGV4dDJbaiAtIDFdKSB7XG4gICAgICAgICAgZHBbaV1bal0gPSBkcFtpIC0gMV1baiAtIDFdICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkcFtpXVtqXSA9IE1hdGgubWF4KGRwW2kgLSAxXVtqXSwgZHBbaV1baiAtIDFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkcFttXVtuXTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC13aGl0ZSBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktOFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLThcIj5cbiAgICAgICAgICBQbGFnaWFyaXNtIERldGVjdGlvbiBTeXN0ZW1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC02IG1kOmdyaWQtY29scy0yXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPkRvY3VtZW50IDE8L2gyPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIHZhbHVlPXtkb2N1bWVudDF9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RG9jdW1lbnQxKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDggcC00IGJnLWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS02MDAgcm91bmRlZCBzaGFkb3ctbWQgcmVzaXplLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00XCI+RG9jdW1lbnQgMjwvaDI+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgdmFsdWU9e2RvY3VtZW50Mn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREb2N1bWVudDIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00OCBwLTQgYmctZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTYwMCByb3VuZGVkIHNoYWRvdy1tZCByZXNpemUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjYWxjdWxhdGVTaW1pbGFyaXR5fSBjbGFzc05hbWU9XCJnbGFzc21vcnBoaXNtLWJ0biBidG4gYnRuLWJsdWUgbXQtNiBteC1hdXRvIGJsb2NrXCI+Q2FsY3VsYXRlIFNpbWlsYXJpdHk8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTJcIj5TaW1pbGFyaXR5IFBlcmNlbnRhZ2U8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAge3NpbWlsYXJpdHlQZXJjZW50YWdlLnRvRml4ZWQoMil9JVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYWdpYXJpc21EZXRlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBsYWdpYXJpc21EZXRlY3Rpb24iLCJkb2N1bWVudDEiLCJzZXREb2N1bWVudDEiLCJkb2N1bWVudDIiLCJzZXREb2N1bWVudDIiLCJzaW1pbGFyaXR5UGVyY2VudGFnZSIsInNldFNpbWlsYXJpdHlQZXJjZW50YWdlIiwiY2FsY3VsYXRlU2ltaWxhcml0eSIsImxjc0xlbmd0aCIsImxvbmdlc3RDb21tb25TdWJzZXF1ZW5jZSIsIm1heExlbmd0aCIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJwZXJjZW50YWdlIiwidGV4dDEiLCJ0ZXh0MiIsIm0iLCJuIiwiZHAiLCJpIiwiaiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJ0ZXh0YXJlYSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInAiLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});