'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = require('material-ui/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jianhaotan/Documents/Programming/secondwind/secondwindnation/components/Shared/Footer.js';


var styleSheet = (0, _styles.createStyleSheet)({
  root: {
    height: '10px'
  },
  img: {
    maxWidth: '5%',
    margin: [[20, 0]]
  }
});

function Footer(props) {
  var classes = props.classes;

  return _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_Grid2.default, { container: true, direction: 'row', justify: 'center', align: 'center', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('img', { src: '/static/secondwind.png', className: classes.img, alt: 'footer_logo', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  })));
}

Footer.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styleSheet)(Footer);