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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("material-ui/colors");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(5);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(6);

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _serializeJavascript = __webpack_require__(11);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactRouterDom = __webpack_require__(12);

var _routes = __webpack_require__(13);

var _routes2 = _interopRequireDefault(_routes);

var _jss = __webpack_require__(14);

var _JssProvider = __webpack_require__(15);

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _styles = __webpack_require__(0);

var _theme = __webpack_require__(16);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

app.use(_express2.default.static("public"));

app.get("*", handleRender);

app.listen(3000, function () {
  console.log("Server is listening on port: 3000");
});

function renderFullPage(html, css, data) {
  return "\n    <!doctype html>\n    <html>\n      <head>\n        <title>Mail tool</title>\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"css/index.css\" media=\"screen\" /> \n        <script src=\"bundle.js\" defer></script>\n        <script>window.__INITIAL_DATA__ = " + (0, _serializeJavascript2.default)(data) + "</script>\n      </head>\n      <body>\n        <div id=\"root\">" + html + "</div>\n        <style id=\"jss-server-side\">" + css + "</style>\n      </body>\n    </html>\n  ";
}

function handleRender(req, res, next) {

  var data = { title: "First Mail", content: 'Bonjour %%{"type":"text", "id": "name", "default" : "etudiant"}%%, je suis Flavien', form: {} };
  var data1 = { title: "First contact", content: 'Bonjour %%{"type":"text", "id": "name", "default" : "etudiant"}%%, je suis Flavien', form: {}

    // Create a sheetsRegistry instance.
  };var sheetsRegistry = new _jss.SheetsRegistry();

  // Create a theme instance.


  var generateClassName = (0, _styles.createGenerateClassName)();

  // Render the component to a string.
  var html = (0, _server.renderToString)(_react2.default.createElement(
    _JssProvider2.default,
    { registry: sheetsRegistry, generateClassName: generateClassName },
    _react2.default.createElement(
      _styles.MuiThemeProvider,
      { theme: _theme2.default, sheetsManager: new Map() },
      _react2.default.createElement(_App2.default, { data: data })
    )
  ));

  // Grab the CSS from our sheetsRegistry.
  var css = sheetsRegistry.toString();

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css, data));
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _styles = __webpack_require__(0);

var _colors = __webpack_require__(2);

var _AppBar = __webpack_require__(9);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Grid = __webpack_require__(10);

var _Grid2 = _interopRequireDefault(_Grid);

var _materialUi = __webpack_require__(17);

var _TextInput = __webpack_require__(18);

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            title: props.data.title,
            form: {},
            formDescription: _this.generateForm(props.data.content),
            baseContent: props.data.content,
            content: props.data.content
        };
        console.log("COMPONENT CONSTRUCT");
        return _this;
    }

    _createClass(App, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.setState({ content: this.generateContent(this.state.baseContent) });
        }
    }, {
        key: "generateForm",
        value: function generateForm(content) {
            var inputs = content.split("%%");
            for (var i = inputs.length - 1; i >= 0; i -= 2) {
                inputs.splice(i, 1);
            }

            inputs = inputs.map(function (item) {
                return JSON.parse(item);
            });

            return inputs;
        }
    }, {
        key: "createInput",
        value: function createInput(input) {
            switch (input.type) {
                case "text":
                    return _react2.default.createElement(_TextInput2.default, {
                        key: input.id,
                        id: input.id,
                        "default": input.default,
                        onChange: this.handleTextChange.bind(this)
                    });
                    break;
                default:
                    throw "Sorry we run I a problem, please reload the page. INFO : no match type for " + input.type;
            }
        }
    }, {
        key: "handleTextChange",
        value: function handleTextChange(e) {
            var _this2 = this;

            var form = this.state.form;
            form[e.target.id] = e.target.value;
            this.setState(function () {
                return {
                    form: form,
                    content: _this2.generateContent(_this2.state.baseContent)
                };
            });
        }
    }, {
        key: "generateContent",
        value: function generateContent(content) {
            var inputs = content.split("%%");
            for (var i = inputs.length - 2; i >= 0; i -= 2) {
                var parsedinputs = JSON.parse(inputs[i]);
                if (this.state.form[parsedinputs.id] !== undefined) {
                    inputs[i] = this.state.form[parsedinputs.id];
                } else {
                    inputs[i] = parsedinputs.default;
                }
            }

            return inputs.join("");
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    _Grid2.default,
                    { container: true },
                    _react2.default.createElement(
                        _Grid2.default,
                        { item: true, container: true, xs: 12 },
                        _react2.default.createElement(
                            _AppBar2.default,
                            { className: "header", elevation: 10 },
                            _react2.default.createElement(
                                _materialUi.Typography,
                                { align: "center", variant: "title" },
                                this.state.title
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _Grid2.default,
                        { item: true, xs: 4 },
                        _react2.default.createElement(
                            _materialUi.Paper,
                            { square: true, className: "sideForm", elevation: 5 },
                            this.state.formDescription.map(function (item) {
                                return _this3.createInput(item);
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _Grid2.default,
                        { item: true, xs: 8 },
                        _react2.default.createElement(
                            _materialUi.Paper,
                            { square: true, elevation: 0, className: "mailContainer" },
                            this.state.content
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Grid");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var routes = [{
    path: '/'
}, {
    path: '/first',
    model: 'first.json'
}, {
    path: '/change',
    model: 'change.json'
}];

exports.default = routes;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/jss");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _styles = __webpack_require__(0);

var _colors = __webpack_require__(2);

var theme = (0, _styles.createMuiTheme)({
    palette: {
        primary: _colors.green,
        accent: _colors.red,
        type: "light"
    }
});

exports.default = theme;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("material-ui");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _materialUi = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextInput = function (_Component) {
    _inherits(TextInput, _Component);

    function TextInput() {
        _classCallCheck(this, TextInput);

        return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
    }

    _createClass(TextInput, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(_materialUi.TextField, { id: this.props.id, type: "text", defaultValue: this.props.default, onChange: this.props.onChange });
        }
    }]);

    return TextInput;
}(_react.Component);

exports.default = TextInput;

/***/ })
/******/ ]);