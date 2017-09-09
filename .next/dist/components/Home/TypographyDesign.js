'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Hidden = require('material-ui/Hidden');

var _Hidden2 = _interopRequireDefault(_Hidden);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jianhaotan/Documents/Programming/secondwind/secondwindnation/components/Home/TypographyDesign.js';


var styleSheet = (0, _styles.createStyleSheet)({
  subheading: {
    marginTop: '10vh',
    letterSpacing: '-0.03em',
    fontSize: 32,
    color: '#322',
    lineHeight: 1.2,
    fontWeight: '300',
    position: 'relative',
    right: '32vw'
  },
  mobileSubHeading: {
    marginTop: 20,
    letterSpacing: '-0.03em',
    fontSize: 32,
    color: '#322',
    lineHeight: 1.2,
    fontWeight: '300'
  }
});

var TypographyDesign = function TypographyDesign(props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_Hidden2.default, { smDown: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_Typography2.default, { className: props.classes.subheading, type: 'title', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Our Latest Articles')), _react2.default.createElement(_Hidden2.default, { mdUp: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(_Typography2.default, { className: props.classes.mobileSubHeading, type: 'title', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, 'Our Latest Articles')));
};

TypographyDesign.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styleSheet)(TypographyDesign);