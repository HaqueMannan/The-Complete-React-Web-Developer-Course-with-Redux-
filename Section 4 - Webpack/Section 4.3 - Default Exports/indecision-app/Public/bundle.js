/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person_js__ = __webpack_require__(2);
// import './utils.js';




console.log('app.js is running!');
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["c" /* square */](5));
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* add */](100, 50));
console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["c" /* isAdult */](11));
console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["a" /* canSmoke */](21));
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["b" /* default */](100, 50));
console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["b" /* default */](65));


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subtract; });
console.log('utils.js is running.');

const square = (x) => x * x;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Two types of Exports: 
// 1. default export, and

// Alternatively, we can add the export default inline - this must be a single expression. We would declare the variable/function above and then write the single expression as see below to declare a export default:
// export default subtract;
// To make this inline we could get rid of the subtract variable/function above and add the function to the export default below:
// export default (a, b) => a - b;


// 2. named exports
// export { square, add };
// Alternatively, we can add the export keyword inline of the variable/function, which is the same as the above statement. The export name will be the name of the variable/function.
// export const square = (x) => x * x;
// export const add = (a, b) => a + b;


//--------------------------------
// Challenge:
//--------------------------------
// Setup default export and function for isSenior(age) in person.js
// Import the default and call it within the app.js file.

//--------------------------------
// Answer:
//--------------------------------
// Answers added to the app.js and person.js files.

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAdult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canSmoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isSenior; });
console.log('person.js is running.');

const isAdult = (age) => age >= 16;
const canSmoke = (age) => age >= 18;
const isSenior = (age) => age >= 60;



// Alternative:
// export default isSenior;
// export default (age) => age >= 60;


// Alternative named export:
// export const isAdult = (age) => age >= 16;
// export const canSmoke = (age) => age >= 18;

/***/ })
/******/ ]);