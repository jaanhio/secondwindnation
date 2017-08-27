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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/YewWee/app/components/Home/HomeLargeImageCard.js';


function HomeLargeImageCard(props) {
  var article = props.article,
      classes = props.classes;

  var handleClick = function handleClick() {
    return _index2.default.push('/post?slug=' + article.slug);
  };
  return _react2.default.createElement(_Grid2.default, { container: true, className: classes.root, direction: 'row', wrap: 'wrap', spacing: 40, align: 'center', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_Grid2.default, { item: true, xs: 4, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_Grid2.default, { container: true, direction: 'column', wrap: 'wrap-reverse', spacing: 0, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_Grid2.default, { item: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_Typography2.default, { className: classes.title, type: 'title', component: 'h2', onClick: handleClick, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, article.title)), _react2.default.createElement(_Grid2.default, { item: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_Typography2.default, { className: classes.caption, type: 'subheading', onClick: handleClick, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, article.metadata.article_caption)))), _react2.default.createElement(_Grid2.default, { item: true, xs: 8, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('img', { className: classes.img, src: article.metadata.header_image.imgix_url, alt: article.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  })));
}

var styleSheet = (0, _styles.createStyleSheet)({
  root: {
    marginTop: 100,
    left: '10vw',
    position: 'relative',
    display: 'flex'
  },
  title: {
    fontWeight: '200',
    position: 'relative',
    letterSpacing: '-0.03em',
    fontSize: '3em',
    lineHeight: '1.2',
    opacity: '1',
    margin: '0 .15em 0 0',
    padding: 5,
    cursor: 'pointer'
  },
  caption: {
    fontWeight: 100,
    color: '#9ea0a6',
    letterSpacing: '-0.03em',
    lineHeight: '1.2',
    fontSize: '2.7em',
    padding: 5,
    transition: 'all .2s ease-out 50ms',
    cursor: 'pointer',
    '&:hover': {
      color: '#74EBD5',
      borderBottom: 'solid 3px #74EBD5'
    }
  },
  img: {
    maxWidth: '40vw',
    minWidth: '30vw',
    height: 'auto',
    position: 'relative',
    borderRadius: '5%',
    opacity: 1,
    '&:hover': {
      opacity: 0.8,
      cursor: 'pointer',
      transition: '0.6s ease-in-out'
    }
  }
});

exports.default = (0, _styles.withStyles)(styleSheet)(HomeLargeImageCard);


HomeLargeImageCard.propTypes = {
  article: _propTypes2.default.object.isRequired,
  classes: _propTypes2.default.object.isRequired
};