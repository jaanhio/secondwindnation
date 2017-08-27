'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TypographyDesign = require('./TypographyDesign');

var _TypographyDesign2 = _interopRequireDefault(_TypographyDesign);

var _HomeLargeImageCard = require('./HomeLargeImageCard');

var _HomeLargeImageCard2 = _interopRequireDefault(_HomeLargeImageCard);

var _ArticlesGrid = require('./ArticlesGrid');

var _ArticlesGrid2 = _interopRequireDefault(_ArticlesGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/YewWee/app/components/Home/HomeContainer.js';


function HomeContainer(props) {
  console.log(props.arrayOfArticles);
  return _react2.default.createElement(_Grid2.default, { container: true, justify: 'center', spacing: 0, style: { position: 'relative' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_HomeLargeImageCard2.default, { article: props.featuredArticle, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement(_TypographyDesign2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_ArticlesGrid2.default, { articles: props.arrayOfArticles, isInfiniteLoading: props.isInfiniteLoading, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
}

exports.default = HomeContainer;


HomeContainer.propTypes = {
  isInfiniteLoading: _propTypes2.default.bool.isRequired
};