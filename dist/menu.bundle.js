/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _regular_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regular.jpeg */ \"./src/regular.jpeg\");\n/* harmony import */ var _mexican_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mexican.jpeg */ \"./src/mexican.jpeg\");\n/* harmony import */ var _icecream_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icecream.jpeg */ \"./src/icecream.jpeg\");\n\n\n\n\nfunction menu(){\n    const main = document.querySelector(\".main\");\n    main.innerHTML = '';\n    const heading = document.createElement(\"h1\")\n    heading.textContent = \"Our World-class menu!\";\n    main.appendChild(heading);\n    const item1 = document.createElement(\"div\");\n    item1.classList.add(\"item\");\n    const text1 = document.createElement(\"div\");\n    text1.textContent = \"Regular PB&J - $4.99\";\n    const img1 = new Image();\n    img1.src = _regular_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    item1.appendChild(text1);\n    item1.appendChild(img1);\n    main.appendChild(item1);\n\n    const item2 = document.createElement(\"div\");\n    item2.classList.add(\"item\");\n    const text2 = document.createElement(\"div\");\n    text2.textContent = \"PB&J Quesadilla- $7.99\";\n    const img2 = new Image();\n    img2.src = _mexican_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n    item2.appendChild(text2);\n    item2.appendChild(img2);\n    main.appendChild(item2);\n\n    const item3 = document.createElement(\"div\");\n    item3.classList.add(\"item\");\n    const text3 = document.createElement(\"div\");\n    text3.textContent = \"Ice Cream PB&J - $9.99\";\n    const img3 = new Image();\n    img3.src = _icecream_jpeg__WEBPACK_IMPORTED_MODULE_2__;\n    item3.appendChild(text3);\n    item3.appendChild(img3);\n    main.appendChild(item3);\n\n};\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/icecream.jpeg":
/*!***************************!*\
  !*** ./src/icecream.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e1ca2006c4a02222002.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/icecream.jpeg?");

/***/ }),

/***/ "./src/mexican.jpeg":
/*!**************************!*\
  !*** ./src/mexican.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dbcab7c50e910713e621.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/mexican.jpeg?");

/***/ }),

/***/ "./src/regular.jpeg":
/*!**************************!*\
  !*** ./src/regular.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d7c27d73ea62663a2ca.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/regular.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;