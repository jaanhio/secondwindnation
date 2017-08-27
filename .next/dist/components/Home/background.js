'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/YewWee/app/components/Home/background.js';


var backgroundPattern = function backgroundPattern(props) {
  return _react2.default.createElement('div', { className: props.classes.pattern, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  });
};

var styleSheet = (0, _styles.createStyleSheet)({
  pattern: {
    backgroundColor: '#E1E3DF',
    backgroundImage: 'linear-gradient(90deg, #A9A8AA 0%, #E1E3DF 100%)',
    width: '100vw',
    height: '120vh',
    top: '-10vh',
    right: '-60vw',
    position: 'absolute',
    pointerEvents: 'all',
    opacity: 0.3
  }
});

exports.default = (0, _styles.withStyles)(styleSheet)(backgroundPattern);


backgroundPattern.propTypes = {
  classes: _propTypes2.default.object.isRequired
};