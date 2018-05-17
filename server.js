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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react\"\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/styles\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"material-ui/styles\"\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22material-ui/styles%22?");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/colors\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"material-ui/colors\"\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22material-ui/colors%22?");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/AppBar\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"material-ui/AppBar\"\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22material-ui/AppBar%22?");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"material-ui\"\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22material-ui%22?");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-router-dom\"\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(7);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _cors = __webpack_require__(8);\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _server = __webpack_require__(9);\n\nvar _App = __webpack_require__(10);\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _serializeJavascript = __webpack_require__(15);\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _reactRouterDom = __webpack_require__(5);\n\nvar _routes = __webpack_require__(16);\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _jss = __webpack_require__(17);\n\nvar _JssProvider = __webpack_require__(18);\n\nvar _JssProvider2 = _interopRequireDefault(_JssProvider);\n\nvar _styles = __webpack_require__(1);\n\nvar _theme = __webpack_require__(19);\n\nvar _theme2 = _interopRequireDefault(_theme);\n\nvar _axios = __webpack_require__(20);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use((0, _cors2.default)());\n\napp.use(_express2.default.static(\"public\"));\n\napp.get(\"*\", handleRequest);\n\napp.listen(3000, function () {\n    console.log(\"Server is listening on port: 3000\");\n});\n\nfunction renderFullPage(html, css, data) {\n    return \"\\n    <!doctype html>\\n    <html>\\n      <head>\\n        <title>Mail tool</title>\\n        <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"css/index.css\\\" media=\\\"screen\\\" /> \\n        <script src=\\\"bundle.js\\\" defer></script>\\n        <script>window.__INITIAL_DATA__ = \" + (0, _serializeJavascript2.default)(data) + \"</script>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\" + html + \"</div>\\n        <style id=\\\"jss-server-side\\\">\" + css + \"</style>\\n      </body>\\n    </html>\\n  \";\n}\n\nfunction handleRequest(req, res, next) {\n    // Create a sheetsRegistry instance.\n    var sheetsRegistry = new _jss.SheetsRegistry();\n\n    // Create a theme instance.\n    var generateClassName = (0, _styles.createGenerateClassName)();\n\n    var activeRoute = _routes2.default.find(function (route) {\n        return (0, _reactRouterDom.matchPath)(req.url, route);\n    }) || {};\n\n    console.log(activeRoute.apiData);\n    var promise = activeRoute.apiData ? _axios2.default.get('http://localhost:3001' + activeRoute.apiData) : Promise.resolve();\n\n    promise.then(function (data) {\n        var html = void 0,\n            css = void 0;\n\n        html = (0, _server.renderToString)(_react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.url, context: {} },\n            _react2.default.createElement(\n                _JssProvider2.default,\n                {\n                    registry: sheetsRegistry,\n                    generateClassName: generateClassName\n                },\n                _react2.default.createElement(\n                    _styles.MuiThemeProvider,\n                    {\n                        theme: _theme2.default,\n                        sheetsManager: new Map()\n                    },\n                    _react2.default.createElement(_App2.default, { data: data.data })\n                )\n            )\n        ));\n        css = sheetsRegistry.toString();\n\n        res.send(renderFullPage(html, css, data.data));\n    }).catch(next);\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/server/index.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"express\"\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"cors\"\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-dom/server\"\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(11);\n\nvar _styles = __webpack_require__(1);\n\nvar _colors = __webpack_require__(2);\n\nvar _AppBar = __webpack_require__(3);\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Grid = __webpack_require__(12);\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _materialUi = __webpack_require__(4);\n\nvar _TextInput = __webpack_require__(13);\n\nvar _TextInput2 = _interopRequireDefault(_TextInput);\n\nvar _reactRouterDom = __webpack_require__(5);\n\nvar _MainMenu = __webpack_require__(14);\n\nvar _MainMenu2 = _interopRequireDefault(_MainMenu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n        _this.props = props;\n        _this.baseContent = props.data.content;\n\n        _this.state = {\n            title: \"loading\",\n            form: {},\n            formDescription: [],\n            content: \"loading\"\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: \"componentWillMount\",\n        value: function componentWillMount() {\n            this.setInitialState(this.props);\n        }\n    }, {\n        key: \"componentDidMount\",\n        value: function componentDidMount() {\n            console.log(\"test \" + this.state.title);\n        }\n    }, {\n        key: \"setInitialState\",\n        value: function setInitialState(data) {\n            this.setState({\n                title: data.data.title,\n                form: {},\n                formDescription: this.generateForm(this.baseContent),\n                content: this.generateContent(this.baseContent)\n            });\n        }\n    }, {\n        key: \"generateForm\",\n        value: function generateForm(content) {\n            var inputs = content.split(\"%%\");\n            for (var i = inputs.length - 1; i >= 0; i -= 2) {\n                inputs.splice(i, 1);\n            }\n\n            inputs = inputs.map(function (item) {\n                return JSON.parse(item);\n            });\n\n            return inputs;\n        }\n    }, {\n        key: \"createInput\",\n        value: function createInput(input) {\n            switch (input.type) {\n                case \"text\":\n                    return _react2.default.createElement(_TextInput2.default, {\n                        key: input.id,\n                        id: input.id,\n                        \"default\": input.default,\n                        onChange: this.handleTextChange.bind(this)\n                    });\n                    break;\n                default:\n                    throw \"Sorry we run I a problem, please reload the page. INFO : no match type for \" + input.type;\n            }\n        }\n    }, {\n        key: \"handleTextChange\",\n        value: function handleTextChange(e) {\n            var _this2 = this;\n\n            var form = this.state.form;\n            form[e.target.id] = e.target.value;\n            this.setState(function () {\n                return {\n                    form: form,\n                    content: _this2.generateContent(_this2.baseContent)\n                };\n            });\n        }\n    }, {\n        key: \"generateContent\",\n        value: function generateContent(content) {\n            var inputs = content.split(\"%%\");\n            for (var i = inputs.length - 2; i >= 0; i -= 2) {\n                var parsedinputs = JSON.parse(inputs[i]);\n                if (this.state.form[parsedinputs.id] !== undefined) {\n                    inputs[i] = this.state.form[parsedinputs.id];\n                } else {\n                    inputs[i] = parsedinputs.default;\n                }\n            }\n\n            return inputs.join(\"\");\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                \"div\",\n                null,\n                _react2.default.createElement(\n                    _Grid2.default,\n                    { container: true },\n                    _react2.default.createElement(_MainMenu2.default, null),\n                    _react2.default.createElement(\n                        _Grid2.default,\n                        { item: true, container: true, xs: 12 },\n                        _react2.default.createElement(\n                            _AppBar2.default,\n                            { className: \"header\", elevation: 10 },\n                            _react2.default.createElement(\n                                _materialUi.Typography,\n                                { align: \"center\", variant: \"title\" },\n                                this.state.title\n                            )\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _Grid2.default,\n                        { item: true, xs: 4 },\n                        _react2.default.createElement(\n                            _materialUi.Paper,\n                            { square: true, className: \"sideForm\", elevation: 5 },\n                            this.state.formDescription.map(function (item) {\n                                return _this3.createInput(item);\n                            })\n                        )\n                    ),\n                    _react2.default.createElement(\n                        _Grid2.default,\n                        { item: true, xs: 8 },\n                        _react2.default.createElement(\n                            _materialUi.Paper,\n                            { square: true, elevation: 0, className: \"mailContainer\" },\n                            this.state.content\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/common/components/App.js\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/common/components/App.js?");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-dom\"\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Grid\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"material-ui/Grid\"\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22material-ui/Grid%22?");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _materialUi = __webpack_require__(4);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TextInput = function (_Component) {\n    _inherits(TextInput, _Component);\n\n    function TextInput() {\n        _classCallCheck(this, TextInput);\n\n        return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));\n    }\n\n    _createClass(TextInput, [{\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(_materialUi.TextField, { id: this.props.id, type: \"text\", defaultValue: this.props.default, onChange: this.props.onChange });\n        }\n    }]);\n\n    return TextInput;\n}(_react.Component);\n\nexports.default = TextInput;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/common/components/TextInput.js\n// module id = 13\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/common/components/TextInput.js?");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AppBar = __webpack_require__(3);\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _reactRouterDom = __webpack_require__(5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MainMenu = function (_Component) {\n    _inherits(MainMenu, _Component);\n\n    function MainMenu() {\n        _classCallCheck(this, MainMenu);\n\n        return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).apply(this, arguments));\n    }\n\n    _createClass(MainMenu, [{\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(\n                \"div\",\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: \"/\" },\n                    \"FIRST\"\n                ),\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: \"/change\" },\n                    \"SECOND\"\n                )\n            );\n        }\n    }]);\n\n    return MainMenu;\n}(_react.Component);\n\nexports.default = MainMenu;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/common/components/MainMenu.js\n// module id = 14\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/common/components/MainMenu.js?");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"serialize-javascript\"\n// module id = 15\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar routes = [{\n    path: '/',\n    exact: true,\n    apiData: '/data'\n}, {\n    path: '/change',\n    apiData: '/data2'\n}];\n\nexports.default = routes;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/common/routes.js\n// module id = 16\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/common/routes.js?");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-jss/lib/jss\"\n// module id = 17\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"react-jss/lib/JssProvider\"\n// module id = 18\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _styles = __webpack_require__(1);\n\nvar _colors = __webpack_require__(2);\n\nvar theme = (0, _styles.createMuiTheme)({\n    palette: {\n        primary: _colors.green,\n        accent: _colors.red,\n        type: \"light\"\n    }\n});\n\nexports.default = theme;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/common/theme.js\n// module id = 19\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/common/theme.js?");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//////////////////\n// WEBPACK FOOTER\n// external \"axios\"\n// module id = 20\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ })
/******/ ]);