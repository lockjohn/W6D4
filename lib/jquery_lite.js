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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nclass DOMNodeCollection {\n  constructor (arrayNodes) {\n    this.arrayNodes = arrayNodes;\n  }\n  \n  empty () {\n    this.html(\"\"); \n  }\n  \n  append(addition){\n    if(addition instanceof String){\n      this.arrayNodes.forEach( el => el.innerHTML += addition);\n    }else if(addition.constructor.name === 'DOMNodeCollection') {\n      this.arrayNodes.forEach (el => {\n        addition.forEach(addr => el.innerHTML += addr.outerHTML);\n      });\n    }else if(addition instanceof HTMLElement){\n      this.arrayNodes.forEach( el => el.innerHTML += addition.outerHTML);\n    }\n  }\n  \n  remove() {}\n  \n  attr (key, value) {\n    if(!key && !value){\n      let answer = [];\n      this.arrayNodes.forEach(el => answer.push(el.getAttribute(key)));\n      return answer; \n    }\n    this.arrayNodes.forEach( el => el.setAttribute(key, value));\n  }\n  \n  addClass (className) {\n    if(!className){\n      return this.arrayNodes.map(el => el.className);\n    } \n    this.arrayNodes.forEach( el => el.className = className);\n  }\n  \n  removeClass () {\n    return this.arrayNodes.forEach( el => el.className = \"\");\n    // return this.arrayNodes.map(el => el.className);\n  }\n  \n  html (string) {\n    if (string === undefined) {\n      return this.arrayNodes[0].innerHTML;\n    } else {\n      this.arrayNodes.forEach( (el) => el.innerHTML = string);\n    }\n  }\n\n  children () {\n    return this.arrayNodes.map( el => new DOMNodeCollection(el.children));\n  }\n  \n  parent () {}\n  \n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./lib/dom_node_collection.js\");\n\nwindow.$l = $l;\nwindow.d = DOMNodeCollection;\n\nfunction $l(selector) {\n  let nodeList;\n  if(selector.constructor.name === \"String\"){\n    nodeList = document.querySelectorAll(selector);\n    nodeList = Array.from(nodeList);\n    return new DOMNodeCollection(nodeList);\n  } else if (selector instanceof HTMLElement) {\n    nodeList = [selector];\n    return nodeList;\n    // return new DOMNodeCollection(nodeList); \n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });