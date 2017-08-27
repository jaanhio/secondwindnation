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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/YewWee/app/components/Home/TypographyDesign.js';


var styleSheet = (0, _styles.createStyleSheet)({
  subheading: {
    marginTop: '10vh',
    letterSpacing: '-0.03em',
    fontSize: 32,
    color: '#322',
    lineHeight: 1.2,
    width: 2,
    fontWeight: '300',
    '&:before': {
      content: '""',
      width: 1,
      color: 'rgb(51, 51, 51)',
      height: '30vh',
      display: 'block',
      border: '0px none rgb(51, 51, 51)',
      background: 'rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box',
      transformOrigin: '0.5px 80px',
      caretColor: 'rgb(51, 51, 51)'
    }
  }
});

var TypographyDesign = function TypographyDesign(props) {
  return _react2.default.createElement(_Typography2.default, { className: props.classes.subheading, type: 'subheading', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, 'Our Latest Articles');
};

TypographyDesign.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styleSheet)(TypographyDesign);