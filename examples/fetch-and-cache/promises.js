var cache = require('../../utils/cache').promises;
var db = require('../../utils/db').promises;

function getValue(id){
    return cache.get(id).then(function(cachedValue){
        if(cachedValue){ return cachedValue; }

        return getFromDb(id).then(function(dbValue){
            return saveToCache(id, dbValue);
        }).then()
    });
}

function getFromDb(id){
    return db.query("SELECT * FROM values WHERE id = $1", [id]);
}

function saveToCache(id, value){
    return cache.set(id, value);
}

getValue(1).done(function(result){
    console.log(result);
});