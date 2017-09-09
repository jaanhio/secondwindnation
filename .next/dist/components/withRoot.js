'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _styles = require('material-ui/styles');

var _context = require('../styles/context');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jianhaotan/Documents/Programming/secondwind/secondwindnation/components/withRoot.js';


// Apply some reset
var styleSheet = (0, _styles.createStyleSheet)(function (theme) {
  return {
    '@global': {
      html: {
        background: theme.palette.common.fullWhite,
        WebkitFontSmoothing: 'antialiased', // Antialiasing.
        MozOsxFontSmoothing: 'grayscale' // Antialiasing.
      },
      body: {
        margin: 0
      }
    }
  };
});

var AppWrapper = function AppWrapper(props) {
  return props.children;
};

AppWrapper = (0, _styles.withStyles)(styleSheet)(AppWrapper);

function withRoot(BaseComponent) {
  var WithRoot = function (_Component) {
    (0, _inherits3.default)(WithRoot, _Component);

    function WithRoot() {
      (0, _classCallCheck3.default)(this, WithRoot);

      return (0, _possibleConstructorReturn3.default)(this, (WithRoot.__proto__ || (0, _getPrototypeOf2.default)(WithRoot)).apply(this, arguments));
    }

    (0, _createClass3.default)(WithRoot, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var context = (0, _context.getContext)();

        return _react2.default.createElement(_reactJss.JssProvider, { registry: context.sheetsRegistry, jss: context.jss, __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, _react2.default.createElement(_styles.MuiThemeProvider, { theme: context.theme, sheetsManager: context.sheetsManager, __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, _react2.default.createElement(AppWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        })))));
      }
    }], [{
      key: 'getInitialProps',
      value: function getInitialProps(ctx) {
        var url = ctx.url;

        if (BaseComponent.getInitialProps) {
          return BaseComponent.getInitialProps(ctx);
        }
        return { url: url };
      }
    }]);

    return WithRoot;
  }(_react.Component);

  WithRoot.displayName = 'withRoot(' + BaseComponent.displayName + ')';

  return WithRoot;
}

exports.default = withRoot;