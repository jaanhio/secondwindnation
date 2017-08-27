'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Tabs = require('material-ui/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/YewWee/app/components/Shared/HeaderTabs.js';


var CenteredTabs = function (_Component) {
  (0, _inherits3.default)(CenteredTabs, _Component);

  function CenteredTabs(props) {
    (0, _classCallCheck3.default)(this, CenteredTabs);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CenteredTabs.__proto__ || (0, _getPrototypeOf2.default)(CenteredTabs)).call(this, props));

    var pathname = props.pathname;

    switch (pathname) {
      case '/':
        _this.state = { initalTab: 0 };
        break;
      case '/about':
        _this.state = { initalTab: 1 };
        break;
      case '/contact':
        _this.state = { initalTab: 2 };
        break;
      default:
        _this.state = { initalTab: 0 };
        break;
    }
    _this.state.urlRoute = ['/', '/about', '/contact'];
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(CenteredTabs, [{
    key: 'handleChange',
    value: function handleChange(event, index) {
      return _index2.default.push(this.state.urlRoute[index]);
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      return _react2.default.createElement(_Grid2.default, { container: true, direction: 'row', spacing: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_AppBar2.default, { className: classes.root, position: 'fixed', color: 'default', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_Grid2.default, { item: true, xs: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('img', { src: '/static/secondwind.png', alt: 'Second Wind Logo', className: classes.img, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }))), _react2.default.createElement(_Grid2.default, { item: true, xs: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_Tabs2.default, { className: classes.tabs, index: this.state.initalTab, onChange: this.handleChange, indicatorColor: 'black', textColor: 'default', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_Tabs.Tab, { className: classes.tab, label: 'Home', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(_Tabs.Tab, { className: classes.tab, label: 'About', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_Tabs.Tab, { className: classes.tab, label: 'Contact', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })))));
    }
  }]);

  return CenteredTabs;
}(_react.Component);

CenteredTabs.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  pathname: _propTypes2.default.string.isRequired
};

var styleSheet = (0, _styles.createStyleSheet)(function (theme) {
  return {
    root: {
      flex: '1 1 auto',
      minHeight: '64px',
      backgroundColor: theme.palette.common.fullWhite,
      flexDirection: 'row'
    },
    tab: {
      fontWeight: 300,
      marginTop: '10px'
    },
    tabs: {
      position: 'relative',
      left: '20%'
    },
    img: {
      width: '88px',
      height: 'auto',
      position: 'relative',
      top: '5px',
      cursor: 'pointer'
    }
  };
});

exports.default = (0, _styles.withStyles)(styleSheet)(CenteredTabs);