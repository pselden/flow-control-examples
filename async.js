var async = require('async');

function getValue(id, callback){
  function getFromCache(callback){
    cache.get(id, callback);
  }

  function returnOrFetch(cachedValue, callback){
    if(cachedValue){ return callback(null, cachedValue); }

    fetchAndCache(id, callback);
  }

  function fetchAndCache(callback){
    async.waterfall([
      function (callback){
        db.query('SELECT * FROM values WHERE id = $1', [id], callback);
      },
      function (dbValue, callback){
        cache.put(id, dbValue, function(){
          callback(null, dbValue);
        });
      }
    ], callback);
  }
    
  async.waterfall([
    getFromCache,
    returnOrFetch,
  ], callback);
}
