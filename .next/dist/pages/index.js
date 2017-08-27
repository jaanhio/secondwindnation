'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('next/node_modules/babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _toArray2 = require('next/node_modules/babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

var _background = require('../components/Home/background');

var _background2 = _interopRequireDefault(_background);

var _HomeContainer = require('../components/Home/HomeContainer');

var _HomeContainer2 = _interopRequireDefault(_HomeContainer);

var _withRoot = require('../components/withRoot');

var _withRoot2 = _interopRequireDefault(_withRoot);

var _HeaderTabs = require('../components/Shared/HeaderTabs');

var _HeaderTabs2 = _interopRequireDefault(_HeaderTabs);

var _Footer = require('../components/Shared/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Constants = require('../utils/Constants');

var _cosmic = require('../model/cosmic');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/YewWee/app/pages/index.js?entry';


var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  (0, _createClass3.default)(Index, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _cosmic.getAllObjectsByType)();

              case 2:
                data = _context.sent;
                return _context.abrupt('return', { data: data });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    var all = props.data.objects.all;

    var _all = (0, _toArray3.default)(all),
        featuredArticle = _all[0],
        arrayOfArticles = _all.slice(1);

    _this.state = {
      featuredArticle: featuredArticle,
      arrayOfArticles: arrayOfArticles,
      isInfiniteLoading: false,
      number: _Constants.homePageNumOfRenderedArticles
    };
    _this.getMoreData = _this.getMoreData.bind(_this);
    _this.checkIfEndOfPage = _this.checkIfEndOfPage.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', (0, _lodash2.default)(this.checkIfEndOfPage, 800));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.checkIfEndOfPage);
    }
  }, {
    key: 'getMoreData',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var nextListOfArticles;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState(function (prevState) {
                  return {
                    number: prevState.number + 4,
                    isInfiniteLoading: !prevState.isInfiniteLoading };
                });
                _context2.next = 3;
                return (0, _cosmic.getAllObjectsByType)(undefined, this.state.number, 4);

              case 3:
                nextListOfArticles = _context2.sent;

                this.setState(function (prevState) {
                  return {
                    arrayOfArticles: [].concat((0, _toConsumableArray3.default)(prevState.arrayOfArticles), (0, _toConsumableArray3.default)(nextListOfArticles.objects.all)),
                    isInfiniteLoading: !prevState.isInfiniteLoading };
                });
                console.dir(this.state);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getMoreData() {
        return _ref2.apply(this, arguments);
      }

      return getMoreData;
    }()
  }, {
    key: 'checkIfEndOfPage',
    value: function checkIfEndOfPage() {
      if (window.innerHeight + window.pageYOffset >= 0.95 * document.body.scrollHeight) {
        this.getMoreData();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: { position: 'relative', overflow: 'hidden' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_HeaderTabs2.default, { pathname: this.props.url.pathname, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement(_background2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react2.default.createElement(_HomeContainer2.default, { featuredArticle: this.state.featuredArticle, arrayOfArticles: this.state.arrayOfArticles, isInfiniteLoading: this.state.isInfiniteLoading, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement(_Footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = (0, _withRoot2.default)(Index);


Index.propTypes = {
  data: _propTypes2.default.object.isRequired,
  url: _propTypes2.default.object.isRequired
};