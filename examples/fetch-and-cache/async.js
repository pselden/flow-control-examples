var async = require('async');

function getValue(id, callback){
    async.waterfall([
        getFromCache.bind(this, id),
        returnOrFetch.bind(this, id)
    ], callback);
}

function getFromCache(id, callback){
    cache.get(id, callback);
}

function returnOrFetch(id, cachedValue, callback){
    if(cachedValue){ return callback(null, cachedValue); }

    fetchAndCache(id, callback);
}

function getFromDb(id, callback){
    db.query('SELECT * FROM values WHERE id = $1', [id], callback);
}

function fetchAndCache(id, callback){
    async.waterfall([
        getFromDb.bind(this, id),
        function (dbValue, callback){
            cache.set(id, dbValue, function(){});
            callback(null, dbValue);
        }
    ], callback);
}