'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _styles = require('material-ui/styles');

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Progress = require('material-ui/Progress');

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

var _withWidth = require('material-ui/utils/withWidth');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jianhaotan/Documents/Programming/secondwind/secondwindnation/components/Home/ArticlesGrid.js';


var styleSheet = (0, _styles.createStyleSheet)({
  container: {
    position: 'relative',
    marginTop: 100
  },
  listOfArticles: {},
  card: {
    margin: '10',
    textAlign: 'center',
    boxShadow: 'none',
    backgroundColor: 'transparent'
  },
  cardImage: {
    width: '80%',
    height: 'auto',
    opacity: 1,
    borderRadius: '1%',
    '&:hover': {
      opacity: 0.8,
      cursor: 'pointer',
      transition: '0.3s ease-in-out',
      transform: 'scale(1.1)'
    }
  },
  title: {
    fontSize: '20px',
    lineHeight: '1.2',
    letterSpacing: '-0.05em',
    textAlign: 'center',
    fontWeight: 500
  },
  date: {
    letterSpacing: '0.02em',
    fontSize: '15px',
    color: '#999',
    fontWeight: 300,
    lineHeight: 1.47,
    pointerEvents: 'auto'
  }
});

function ArticlesGrid(props) {
  var articles = props.articles,
      classes = props.classes;

  var renderLoading = function renderLoading(props) {
    if (props.isInfiniteLoading) {
      return _react2.default.createElement('div', { style: { width: '100%', marginTop: 30 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_Progress.LinearProgress, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }));
    }
  };

  var renderArticles = function renderArticles(listofArticles) {
    return listofArticles.map(function (article) {
      return (
        /* eslint-disable max-len */
        _react2.default.createElement(_Grid2.default, { key: article.slug, item: true, className: classes.listOfArticles, xs: 6, __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, _react2.default.createElement(_Card2.default, { key: article.slug, className: classes.card, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, _react2.default.createElement(_link2.default, { href: '/post?slug=' + article.slug, prefetch: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, _react2.default.createElement(_Card.CardMedia, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, _react2.default.createElement('img', { className: classes.cardImage, src: article.metadata.header_image.imgix_url, alt: article.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }))), _react2.default.createElement(_Card.CardContent, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, _react2.default.createElement(_Typography2.default, { classes: { title: classes.title }, component: 'h2', type: 'title', gutterBottom: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, article.title), _react2.default.createElement(_Typography2.default, { className: classes.date, type: 'subheading', gutterBottom: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }, article.metadata.date))))
      );
    });
  };
  /* eslint-enable max-len */

  return _react2.default.createElement(_Grid2.default, { container: true, id: 'ArticlesGrid', className: classes.container, justify: 'center', direction: 'row', spacing: 0, __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, renderArticles(articles), renderLoading(props));
}

exports.default = (0, _compose2.default)((0, _styles.withStyles)(styleSheet), (0, _withWidth2.default)())(ArticlesGrid);


ArticlesGrid.propTypes = {
  articles: _propTypes2.default.array.isRequired,
  classes: _propTypes2.default.object.isRequired,
  isInfiniteLoading: _propTypes2.default.bool.isRequired
};