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
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["b" /* square */](5));
console.log(__WEBPACK_IMPORTED_MODULE_0__utils_js__["a" /* add */](100, 50));
console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["b" /* isAdult */](11));
console.log(__WEBPACK_IMPORTED_MODULE_1__person_js__["a" /* canSmoke */](21));

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
console.log('utils.js is running.');

const square = (x) => x * x;
const add = (a, b) => a + b;

// Two types of Exports: 
// 1. default export, and

// 2. named exports

// Alternatively we can add the export keyword inline of the variable/function, which is the same as the above statement. The export name will be the name of the variable/function.
// export const square = (x) => x * x;
// export const add = (a, b) => a + b;


//--------------------------------
// Challenge:
//--------------------------------
// create a person.js file that sits alongside the app.js file.
// person.js export 2 named exports:
//    isAdult(age) - true if adult, otherwise false.
//    canSmoke(age) - true if 18 and over, otherwise false.
// import isAdult and canSmoke in app.js
// use both functions, printing results to the console.


//--------------------------------
// Answer:
//--------------------------------
// Answers added to person.js file and app.js

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isAdult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canSmoke; });
console.log('person.js is running.');

const isAdult = (age) => age >= 16;
const canSmoke = (age) => age >= 18;




// Alternative named export:
// export const isAdult = (age) => age >= 16;
// export const canSmoke = (age) => age >= 18;

/***/ })
/******/ ]);