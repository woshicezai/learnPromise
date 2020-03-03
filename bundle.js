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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../usr/local/lib/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/Y2VkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../../../../usr/local/lib/node_modules/webpack/buildin/module.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _secondePromise = __webpack_require__(/*! ./secondePromise */ \"./secondePromise.js\");\n\nvar _secondePromise2 = _interopRequireDefault(_secondePromise);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar p = new _secondePromise2.default(function (resolve, reject) {\n    resolve(2);\n});\n\np.then(function (value) {\n    return value + 4;\n});\n\nsetTimeout(function () {\n    console.log(p.state);\n    if (p.state == 'fullfilled') {\n        p.then(function (value) {\n            console.log('value', value);\n            return value + 2;\n        }).then(function (value) {\n            console.log('value2', value);\n        });\n    }\n}, 2000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9pbmRleC5qcz8wNDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWNvbmRQcm9taXNlIGZyb20gXCIuL3NlY29uZGVQcm9taXNlXCI7XG5cbmxldCBwID0gbmV3IFNlY29uZFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICByZXNvbHZlKDIpO1xufSk7XG5cbnAudGhlbih2YWx1ZT0+e1xuICAgIHJldHVybiB2YWx1ZSs0O1xufSlcblxuc2V0VGltZW91dCgoKT0+e1xuICAgIGNvbnNvbGUubG9nKHAuc3RhdGUpO1xuICAgIGlmKHAuc3RhdGUgPT0gJ2Z1bGxmaWxsZWQnKXtcbiAgICAgICAgcC50aGVuKHZhbHVlPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmFsdWUnLHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSsyO1xuICAgICAgICB9KS50aGVuKHZhbHVlPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmFsdWUyJyx2YWx1ZSk7XG4gICAgICAgIH0pXG4gICAgfVxufSwyMDAwKTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\nexports.default = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcz84ODI3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-runtime/helpers/classCallCheck.js\n");

/***/ }),

/***/ "./secondePromise.js":
/*!***************************!*\
  !*** ./secondePromise.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"./node_modules/babel-runtime/helpers/classCallCheck.js\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PENDING = \"pending\";\nvar FULLFILLED = \"fullfilled\";\nvar REJECTED = \"rejected\";\n\nfunction resolvePromise(newPromise, value, resolve, reject) {\n  resolve(value);\n}\n\nvar AjPromise = function AjPromise(fn) {\n  (0, _classCallCheck3.default)(this, AjPromise);\n\n  _initialiseProps.call(this);\n\n  this.value = \"\";\n  this.reason = \"\";\n  this.state = PENDING;\n  this.resolveCallbackArrays = [];\n  this.rejectCallbackArrays = [];\n  try {\n    fn(this.resovle, this.reject);\n  } catch (e) {\n    console.log('cathe', e);\n    this.reject(e);\n  }\n};\n\nvar _initialiseProps = function _initialiseProps() {\n  var _this = this;\n\n  this.resovle = function (value) {\n    _this.value = value;\n    _this.state = FULLFILLED;\n    setTimeout(function () {\n      _this.resolveCallbackArrays.forEach(function (fn) {\n        _this.value = fn(_this.value);\n      });\n    });\n  };\n\n  this.reject = function (reason) {\n    _this.reason = reason;\n    _this.state = REJECTED;\n    setTimeout(function () {\n      _this.rejectCallbackArrays.forEach(function (fn) {\n        _this.reason = fn(_this.reason);\n      });\n    });\n  };\n\n  this.then = function (fn) {\n    var newPromise = void 0;\n    return newPromise = new AjPromise(function (resolve, reject) {\n      if (_this.state == FULLFILLED) {\n        var x = fn(_this.value);\n        resolvePromise(newPromise, x, resolve, reject);\n      } else if (_this.state == PENDING) {\n        _this.resolveCallbackArrays.push(function (value) {\n          var newValue = fn(value);\n          //解决过程 resolvePromise\n          resolvePromise(newPromise, newValue, resolve, reject);\n        });\n      }\n    });\n  };\n};\n\nexports.default = AjPromise;\n\n\nmodule.export = AjPromise;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../usr/local/lib/node_modules/webpack/buildin/module.js */ \"../../../../../usr/local/lib/node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWNvbmRlUHJvbWlzZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zZWNvbmRlUHJvbWlzZS5qcz9hYzMxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBFTkRJTkcgPSBcInBlbmRpbmdcIjtcbmNvbnN0IEZVTExGSUxMRUQgPSBcImZ1bGxmaWxsZWRcIjtcbmNvbnN0IFJFSkVDVEVEID0gXCJyZWplY3RlZFwiO1xuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZShuZXdQcm9taXNlLHZhbHVlLHJlc29sdmUscmVqZWN0KXtcbiAgcmVzb2x2ZSh2YWx1ZSk7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBalByb21pc2Uge1xuICBjb25zdHJ1Y3Rvcihmbikge1xuICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgIHRoaXMucmVhc29uID0gXCJcIjtcbiAgICB0aGlzLnN0YXRlID0gUEVORElORztcbiAgICB0aGlzLnJlc29sdmVDYWxsYmFja0FycmF5cyA9IFtdO1xuICAgIHRoaXMucmVqZWN0Q2FsbGJhY2tBcnJheXMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm4odGhpcy5yZXNvdmxlLCB0aGlzLnJlamVjdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2NhdGhlJyxlKTtcbiAgICAgIHRoaXMucmVqZWN0KGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlc292bGUgPSB2YWx1ZSA9PiB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuc3RhdGUgPSBGVUxMRklMTEVEO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlQ2FsbGJhY2tBcnJheXMuZm9yRWFjaChmbiA9PiB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBmbih0aGlzLnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlamVjdCA9IHJlYXNvbiA9PiB7XG4gICAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gICAgdGhpcy5zdGF0ZSA9IFJFSkVDVEVEO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZWplY3RDYWxsYmFja0FycmF5cy5mb3JFYWNoKGZuID0+IHtcbiAgICAgICAgdGhpcy5yZWFzb24gPSBmbih0aGlzLnJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB0aGVuID0gZm4gPT4ge1xuICAgIGxldCBuZXdQcm9taXNlO1xuICAgIHJldHVybiAobmV3UHJvbWlzZSA9IG5ldyBBalByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gRlVMTEZJTExFRCkge1xuICAgICAgICBsZXQgeCA9IGZuKHRoaXMudmFsdWUpO1xuICAgICAgICByZXNvbHZlUHJvbWlzZShuZXdQcm9taXNlLCB4LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IFBFTkRJTkcpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlQ2FsbGJhY2tBcnJheXMucHVzaCh2YWx1ZSA9PiB7XG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gZm4odmFsdWUpO1xuICAgICAgICAgIC8v6Kej5Yaz6L+H56iLIHJlc29sdmVQcm9taXNlXG4gICAgICAgICAgcmVzb2x2ZVByb21pc2UobmV3UHJvbWlzZSwgbmV3VmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydCA9IEFqUHJvbWlzZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWpEQTtBQUNBO0FBQ0E7QUFrREE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./secondePromise.js\n");

/***/ })

/******/ });