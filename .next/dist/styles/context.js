'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setContext = setContext;
exports.getContext = getContext;

var _weakMap = require('next/node_modules/babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

var _jss = require('jss');

var _jssPresetDefault = require('jss-preset-default');

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

var _reactJss = require('react-jss');

var _palette = require('material-ui/styles/palette');

var _palette2 = _interopRequireDefault(_palette);

var _theme = require('material-ui/styles/theme');

var _theme2 = _interopRequireDefault(_theme);

var _colors = require('material-ui/colors');

var _createGenerateClassName = require('material-ui/styles/createGenerateClassName');

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _theme2.default)({
  palette: (0, _palette2.default)({
    primary: _colors.cyan, // Purple and green play nicely together.
    secondary: _colors.blueGrey,
    accent: _colors.orange,
    error: _colors.red
  })
});

// Configure JSS
var jss = (0, _jss.create)((0, _jssPresetDefault2.default)());
jss.options.createGenerateClassName = _createGenerateClassName2.default;

function createContext() {
  return {
    jss: jss,
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new _weakMap2.default(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new _reactJss.SheetsRegistry()
  };
}

/* eslint-disable no-underscore-dangle */
function setContext() {
  // Singleton hack as there is no way to pass variables from _document.js to pages yet.
  global.__INIT_MATERIAL_UI__ = createContext();
}

function getContext() {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return global.__INIT_MATERIAL_UI__;
  }

  // Reuse context on the client-side
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createContext();
  }

  return global.__INIT_MATERIAL_UI__;
}