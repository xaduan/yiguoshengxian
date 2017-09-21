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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props, context) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props, context));

        _this.state = {
            news: []
        };
        return _this;
    }

    _createClass(Login, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "warp" },
                React.createElement(
                    "form",
                    { action: "" },
                    React.createElement(
                        "div",
                        { className: "input-item" },
                        React.createElement(Input, null),
                        React.createElement(Input, { type: 'password', placeholder: '请输入您的密码', className: 'upasslogo' }),
                        React.createElement(Input, { isHide: false, placeholder: '请输入验证码' })
                    ),
                    React.createElement(
                        "div",
                        { className: "login-options" },
                        React.createElement(
                            "span",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                "\u5FD8\u8BB0\u5BC6\u7801\uFF1F"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "btn-login" },
                        React.createElement(
                            "button",
                            null,
                            "\u767B\u5F55"
                        ),
                        React.createElement(
                            "button",
                            null,
                            "\u7ACB\u5373\u6CE8\u518C"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "login-other" },
                        React.createElement(
                            "dl",
                            null,
                            React.createElement(
                                "dt",
                                null,
                                "-----------\xA0\u5408\u4F5C\u8D26\u53F7\u767B\u5F55\xA0-----------"
                            ),
                            React.createElement("dd", null)
                        )
                    )
                ),
                React.createElement("div", { className: "footer" })
            );
        }
    }]);

    return Login;
}(React.Component);
//定义默认属性


Login.defaultProps = {};
//输入框

var Input = function (_React$Component2) {
    _inherits(Input, _React$Component2);

    function Input() {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
    }

    _createClass(Input, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "input-item-list" },
                this.props.isHide ? React.createElement("span", { className: this.props.className }) : '',
                React.createElement("input", { type: this.props.type, placeholder: this.props.placeholder })
            );
        }
    }]);

    return Input;
}(React.Component);

Input.defaultProps = {
    placeholder: '请输入您的用户名',
    type: 'text',
    isHide: true,
    className: 'unamelogo'
};

exports.default = Login;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Login = __webpack_require__(0);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(1);

ReactDOM.render(React.createElement(_Login2.default, null), document.getElementById("app"));

/***/ })
/******/ ]);