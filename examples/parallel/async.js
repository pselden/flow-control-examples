var async = require('async');
var cache = require('../../utils/cache');

var tasks = {
  first: function(callback){
      cache.get('first', callback);
  },
  second: function(callback){
      cache.get('second', callback);
  },
  third: function(callback){
      cache.get('third', callback);
  }
};

async.parallel(tasks, function(err, results){
    console.log(results.first);
    console.log(results.second);
    console.log(results.third);
});