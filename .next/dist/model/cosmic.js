'use strict';

var _promise = require('next/node_modules/babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _cosmicjs = require('cosmicjs');

var _cosmicjs2 = _interopRequireDefault(_cosmicjs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable*/
var api_url = 'https://api.cosmicjs.com';
var api_version = 'v1';

function keyMetafields(object) {
  var metafields = object.metafields;
  if (metafields) {
    object.metafield = _lodash2.default.keyBy(metafields, 'key');
  }
  return object;
}
/*eslint-enable*/

function getAllObjectsByType() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'posts';
  var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
  var sort = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '-created_at';

  var params = {
    type_slug: type,
    limit: limit,
    skip: skip,
    sort: sort
  };

  var data = new _promise2.default(function (resolve) {
    _cosmicjs2.default.getObjectType(_config2.default, params, function (err, res) {
      resolve(res);
    });
  });
  return data;
}

function getPostBySlug(slug) {
  var data = new _promise2.default(function (resolve) {
    _cosmicjs2.default.getObject(_config2.default, { slug: slug }, function (err, res) {
      resolve(res);
    });
  });
  return data;
}

/*eslint-disable*/
function getObjectBySearch(config, object, callback) {
  var searchParams = '/search?' + 'metafield_key=' + object.metafield_key;
  if (object.metafield_value) searchParams += '&metafield_value=' + object.metafield_value;else if (object.metafield_object_slug) searchParams += '&metafield_object_slug=' + object.metafield_object_slug;else searchParams += '&metafield_value_has=' + object.metafield_value_has;
  var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/object-type/' + object.type_slug + searchParams + '&read_key=' + config.bucket.read_key;
  if (object.limit) endpoint += '&limit=' + object.limit;
  if (object.skip) endpoint += '&skip=' + object.skip;
  fetch(endpoint).then(function (response) {
    if (response.status >= 400) {
      var err = {
        "message": "There was an error with this request."
      };
      return callback(err, false);
    }
    return response.json();
  }).then(function (response) {
    // Constructor
    var cosmic = {};
    var objects = response.objects;
    cosmic.objects = {};
    cosmic.objects.all = objects;
    cosmic.object = _lodash2.default.map(objects, keyMetafields);
    cosmic.object = _lodash2.default.keyBy(cosmic.object, "slug");
    cosmic.total = response.total;
    return callback(false, cosmic);
  });
}

function getRelatedPost(object) {
  var data = new _promise2.default(function (resolve, reject) {
    getObjectBySearch(_config2.default, object, function (err, res) {
      if (res) resolve(res);else reject(Error("error getting related post"));
    });
  });
  return data;
}

module.exports = {
  getAllObjectsByType: getAllObjectsByType,
  getPostBySlug: getPostBySlug,
  getRelatedPost: getRelatedPost
};