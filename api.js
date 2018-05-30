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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(1);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(2);\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar port = 3001;\n\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\n\napp.get('/first', function (req, res) {\n    var data = {\n        title: 'First Mail',\n        content: 'Bonjour %%{\"type\":\"text\", \"id\": \"name\", \"default\" : \"etudiant\"}%%, je suis Flavien %%{\"type\":\"schedule\", \"id\": \"planning\"}%%',\n        form: {}\n    };\n    res.send(data);\n});\n\napp.get('/demo', function (req, res) {\n    var data = {\n        title: 'Demo Mail',\n        content: 'Bonjour %%{\"type\":\"text\", \"id\": \"name\", \"default\" : \"etudiant\"}%%, %%{\"type\":\"space\"}%% je suis Flavien %%{\"type\":\"schedule\", \"id\": \"planning\"}%%',\n        form: {}\n    };\n    res.send(data);\n});\n\napp.get('/second', function (req, res) {\n    var data = {\n        title: 'Second Mail',\n        content: 'Bonjour %%{\"type\":\"text\", \"id\": \"name\", \"default\" : \"etudiant\"}%%, je suis Henri',\n        form: {}\n    };\n    res.send(data);\n});\n\napp.listen(port, function () {\n    console.log('API server is live on ' + port);\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/api/index.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/api/index.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"express\"\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"body-parser\"\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ })
/******/ ]);