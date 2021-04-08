module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Q0q4");


/***/ }),

/***/ "4NZ1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  favorites: [],
  films: []
};
const actionTypes = {
  ADD_DATA: "ADD_DATA",
  ADD_FAVORITES: "ADD_FAVORITES",
  DELETE_FAVORITES: "DELETE_FAVORITES"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        films: action.data
      });

    case actionTypes.ADD_FAVORITES:
      const exist = state.favorites.find(item => item.imdbID == action.favorite.imdbID);

      if (exist) {
        return _objectSpread({}, state);
      } else {
        return _objectSpread(_objectSpread({}, state), {}, {
          favorites: [...state.favorites, action.favorite]
        });
      }

    case actionTypes.DELETE_FAVORITES:
      console.log("hola estoy en el reducer delete");
      return _objectSpread(_objectSpread({}, state), {}, {
        favorites: state.favorites.filter(item => item !== action.film)
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["b"] = (reducer);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Q0q4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: ./src/styles/globals.js

const GlobalStyles = external_styled_components_["createGlobalStyle"]`
  h2,h3{
    color: ${({
  theme
}) => theme.colors.white} !important;
  }
  html {
  box-sizing: border-box;
  font-family: sans-serif;
  font-size: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body,
figure {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary,
picture {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
progress {
  vertical-align: baseline;
}
template,
[hidden] {
  display: none;
}
a {
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
}
a:active,
a:hover,
:focus {
  outline: 0;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
b,
strong,
em {
  font-weight: 700;
}
dfn {
  font-style: italic;
}
h1 {
  font-size: 2rem;
  margin: 0.67rem 0;
}

small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25rem;
}
sup {
  top: -0.5rem;
}
img,
video,
iframe {
  border: 0;
  max-width: 100%;
  height: auto;
  display: inline-block;
  vertical-align: middle;
  -ms-interpolation-mode: bicubic;
}
svg:not(:root) {
  overflow: hidden;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1rem;
}
pre {
  padding: 1rem;
  max-width: 100%;
  position: relative;
  white-space: pre-wrap;
}
pre:after {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  opacity: 0.2;
  content: '';
}
figure img {
  vertical-align: top;
}
.jm15 {
  color: ${({
  theme
}) => theme.colors.black};
}
hr {
  background-color: currentColor;
  border: 0;
  height: 1px;
  overflow: visible;
  opacity: 0.2;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
caption {
  margin-bottom: -1px;
}
caption,
td,
th {
  border: 0;
  padding: 0.937rem;
  text-align: left;
}
button,
input,
select,
textarea {
  font: inherit;
  margin: 0;
}
optgroup {
  font-weight: bold;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html [type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 0;
}
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}
legend {
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
textarea {
  overflow: auto;
  resize: vertical;
}
[type='checkbox'],
[type='radio'] {
  padding: 0;
}
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline: 0;
}
[type='search']::-webkit-search-cancel-button,
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.8;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
::-moz-selection {
  background: #b3d4fc;
  text-shadow: none;
}
::selection {
  background: #b3d4fc;
  text-shadow: none;
}
@media ${({
  theme
}) => theme.device.laptop} {
  ::-webkit-scrollbar-thumb {
    background-color: ${({
  theme
}) => theme.colors.primary};
    border-radius: 15px;
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 3px;
  }
  ::-webkit-scrollbar-thumb:horizontal{
      border-radius: 10px;
  }
}
/*02 - .Print*/
@media print {
  *,
  *:before,
  *:after,
  *:first-letter,
  *:first-line {
    background: transparent !important;
    color: ${({
  theme
}) => theme.colors.black} !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: '(' attr(href) ')';
  }
  abbr[title]:after {
    content: '(' attr(title) ')';
  }
  a[href^='#']:after,
  a[href^='javascript:']:after {
    content: '';
  }
  pre,

  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
}
/*04 - .Typography*/
body {
  font-size: 0.875rem;
  line-height: 1.5625rem;
  font-family: 'Source Sans Pro', sans-serif;
  word-wrap: break-word;
  background-color: ${({
  theme
}) => theme.colors.bg}
}
dl dt {
  font-weight: 700;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6,
h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a,
h1 {
  font-size: 1.5rem;
}
h2 {
  font-size: 1.25rem;
}
h3 {
  font-size: 1.187rem;
}
h4 {
  font-size: 1.125rem;
}
h5 {
  font-size: 1.0625rem;
}
h6 {
  font-size: 1rem;
}
/*05 - .Layout*/
*,
:before,
:after {
  box-sizing: inherit;
}
html {
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
}

hr {
  margin: 1.87rem 0;
}
ul,
ol,
dl {
  list-style-position: outside;
}
ul ul {
  list-style-type: inherit;
}
ul ul,
ul ol,
ol ol,
ol ul {
  margin-left: 0.937rem;
  margin-bottom: 0;
}

ul,
ol {
  margin-left: 0.937rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}

ul {
  list-style:none;
}

button,
input,
.Form-Select select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
}
button,
input,
select,
textarea {
  font: inherit;
  width: 100%;
  vertical-align: middle;
  line-height: normal;
}
fieldset {
  border: 1px solid currentColor;
  padding: 0.937rem;
}
legend {
  border: 0;
  padding: 0 1rem;
}
label {
  display: inline-block;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  line-height: normal;
  margin-bottom: 0;
}
label[for] {
  cursor: pointer;
}
[class*='Form-'] label {
  display: block;
}
/*(Input/textarea/select)*/
input,
textarea,
select,
.Form-Select label {
  border: 0;
  color: inherit;
  border-radius: 6px;
}
input,
textarea,
select,
.Form-Select label {
  display: block;
  padding: 0.5rem 1rem;
  width: 100%;
}
input,
select {
  height: 2.5rem;
  line-height: normal;
}
textarea {
  overflow: auto;
  max-width: 100%;
  height: auto;
  resize: vertical;
  padding: 1rem 1rem;
  max-height: 300px;
}
input,
textarea,
select,
.Form-Select label {
  opacity: 0.7;
}
input:focus,
textarea:focus,
select:focus,
.Form-Select select:focus + label {
  opacity: 1;
}
`;
// CONCATENATED MODULE: ./src/styles/theme.js
const colors = {
  bg: "#1a191f",
  bg2: "#212026",
  gray: "#313036",
  text: "#ffff",
  black: "#000000",
  white: "#ffffff",
  primary: "#de1212",
  tinyWhite: "#e0e0e0",
  tinyBlack: "#111111",
  tinyBg: "#151419",
  backg: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  foreng: "#999999",
  greenBg: "#dff0d8",
  green1: "#3c763d",
  green2: "#5c763d"
};
const breakpoints = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileXL: "560px",
  tablet: "768px",
  tabletM: "900px",
  laptop: "1024px",
  laptopS: "1150px",
  laptopM: "1260px",
  laptopL: "1440px",
  desktop: "1650px",
  desktopM: "1950px",
  desktopL: "2560px"
};
const device = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileM: `(min-width: ${breakpoints.mobileM})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  mobileXL: `(min-width: ${breakpoints.mobileXL})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  tabletM: `(min-width: ${breakpoints.tabletM})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  laptopS: `(min-width: ${breakpoints.laptopS})`,
  laptopM: `(min-width: ${breakpoints.laptopM})`,
  laptopL: `(min-width: ${breakpoints.laptopL})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  desktopM: `(min-width: ${breakpoints.desktopM})`,
  desktopL: `(min-width: ${breakpoints.desktopL})`
};
/* harmony default export */ var theme = ({
  colors,
  breakpoints,
  device
});
// EXTERNAL MODULE: ./src/store/stateProvider.js
var stateProvider = __webpack_require__("dDrI");

// EXTERNAL MODULE: ./src/store/reducer.js
var reducer = __webpack_require__("4NZ1");

// CONCATENATED MODULE: ./src/pages/_app.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import App from 'next/app'







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_styled_components_["ThemeProvider"], {
    theme: theme,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(stateProvider["a" /* StateProvider */], {
      initialState: reducer["c" /* initialState */],
      reducer: reducer["b" /* default */],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/lux/bootstrap.min.css"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.15.3/css/all.css",
          integrity: "sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk",
          crossorigin: "anonymous"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(GlobalStyles, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dDrI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StateContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useStateValue; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const StateProvider = ({
  reducer,
  initialState,
  children
}) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(StateContext.Provider, {
  value: Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, initialState),
  children: children
});
const useStateValue = () => Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StateContext);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });