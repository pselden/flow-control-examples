function getValue(id, callback){
    getFromCache(id)
        .then(returnOrFetch.bind(this, id))
        .done(callback);
}

function getFromCache(id){
    return cache.get(id);
}

function returnOrFetch(id, cachedValue){
    if(cachedValue){ return cachedValue; }

    return getFromDb(id)
        .done(saveToCache.bind(this, id));
}

function getFromDb(id){
    return db.query("SELECT * FROM values WHERE id = $1", [id]);
}

function saveToCache(id, value){
    return cache.put(id, value);
}