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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _home_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.jpeg */ \"./src/home.jpeg\");\n\n\nfunction home(){\n    const main = document.querySelector(\".main\");\n    main.innerHTML = '';\n    const heading1 = document.createElement(\"h1\");\n    heading1.textContent = \"Papa Joe's PB&J's\";\n    main.appendChild(heading1);\n    const welcome = document.createElement(\"p\");\n    welcome.textContent = \"Well yeeeehaaaawww do we got some great dang ol' Peanut and Butter Jelly Sandwiches for you today! Best in the business! Peanut butter from fresh picked Peruvian peanuts. Jelly just like mama used to make. Bread imported from the Amish. Best PB&J sandwich you've ever had or your money back!\"\n    main.appendChild(welcome);\n\n    const hours = document.createElement(\"div\");\n    const heading2 = document.createElement(\"h2\");\n    heading2.textContent = \"Hours\";\n    hours.appendChild(heading2);\n    const list = document.createElement(\"ul\");\n\n    let liArray = [];\n    for(let i = 0; i<=6; i++){\n        liArray[i] = document.createElement(\"li\");\n    };\n\n    liArray[0].textContent = \"Sunday: 10am - 5pm\";\n    liArray[1].textContent = \"Monday: 8am - 8pm\";\n    liArray[2].textContent = \"Tuesday: 8am - 8pm\";\n    liArray[3].textContent = \"Wednesday: 8am - 8pm\";\n    liArray[4].textContent = \"Thursday: 8am - 8pm\";\n    liArray[5].textContent = \"Friday: 8am - 10pm\";\n    liArray[6].textContent = \"Saturday: 8am - 10pm\";\n\n    for(let i = 0; i<=6; i++){\n        list.appendChild(liArray[i]);\n    };\n\n    hours.appendChild(list);\n    main.appendChild(hours);\n\n    const location = document.createElement(\"div\");\n    const heading3 = document.createElement(\"h2\");\n    heading3.textContent = \"Location\";\n    location.appendChild(heading3);\n    const address = document.createElement(\"p\");\n    address.textContent = \"126 PBJ Lane\";\n    location.appendChild(address);\n    main.appendChild(location);\n\n    const img = new Image();\n    img.src = _home_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    main.appendChild(img);\n\n};\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/home.jpeg":
/*!***********************!*\
  !*** ./src/home.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a1918b018ec17339f312.jpeg\";\n\n//# sourceURL=webpack://restaurant/./src/home.jpeg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;