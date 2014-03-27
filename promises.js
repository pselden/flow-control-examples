function getValue(id, callback){
    getFromCache(id)
        .then(function(cachedValue){
           if(cachedValue){ return cachedValue; }
        
           getFromDb(id)
               .then(function(dbValue){
                   saveToCache(id, dbValue);
                   return dbValue;
               })
        })
        .done(callback);
}

function getFromCache(id){
    return cache.get(id);
}

function getFromDb(id){
    return db.query("SELECT * FROM values WHERE id = $1", [id]);
}

function saveToCache(id, value){
    return cache.put(id, value);
}
