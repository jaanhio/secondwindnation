import Cosmic from 'cosmicjs';
import _ from 'lodash';
import config from '../config';

/*eslint-disable*/
var api_url = 'https://api.cosmicjs.com';
var api_version = 'v1';

function keyMetafields(object){
  var metafields = object.metafields;
  if(metafields){
    object.metafield = _.keyBy(metafields, 'key');
  }
  return object;
}
/*eslint-enable*/

function getAllObjectsByType(type = 'posts', skip = 0, limit = 5, sort = '-created_at') {
  const params = {
    type_slug: type,
    limit,
    skip,
    sort,
  };

  const data = new Promise((resolve) => {
    Cosmic.getObjectType(config, params, (err, res) => {
      resolve(res);
    });
  });
  return data;
}

function getPostBySlug(slug) {
  const data = new Promise((resolve) => {
    Cosmic.getObject(config, { slug }, (err, res) => {
      resolve(res);
    });
  });
  return data;
}

/*eslint-disable*/
function getObjectBySearch (config, object, callback) {
  var searchParams = '/search?' + 'metafield_key=' + object.metafield_key;
  if (object.metafield_value) searchParams += '&metafield_value=' + object.metafield_value;
  else if (object.metafield_object_slug) searchParams += '&metafield_object_slug=' + object.metafield_object_slug;
  else searchParams += '&metafield_value_has=' + object.metafield_value_has;
  var endpoint = api_url + '/' + api_version + '/' + config.bucket.slug + '/object-type/' + object.type_slug + searchParams + '&read_key=' + config.bucket.read_key;
  if (object.limit) endpoint += '&limit=' + object.limit;
  if (object.skip) endpoint +=  '&skip=' + object.skip;
  fetch(endpoint)
  .then(function(response){
    if (response.status >= 400) {
      var err = {
        "message" : "There was an error with this request."
      }
      return callback(err, false);
    }
    return response.json()
  })
  .then(function(response){
    // Constructor
    var cosmic = {};
    var objects = response.objects;
    cosmic.objects = {};
    cosmic.objects.all = objects;
    cosmic.object = _.map(objects, keyMetafields);
    cosmic.object = _.keyBy(cosmic.object, "slug");
    cosmic.total = response.total;
    return callback(false, cosmic);
  });
}

function getRelatedPost(object) {
  const data = new Promise((resolve, reject) => {
    getObjectBySearch(config, object, (err, res) => {
      if(res) resolve(res);
      else reject(Error("error getting related post"));
    });
  });
  return data;
}

module.exports = {
  getAllObjectsByType,
  getPostBySlug,
  getRelatedPost,
};
