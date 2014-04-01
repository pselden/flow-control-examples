function * getValue(id){
    var cachedValue = yield cache.get(id);
    if(cachedValue !== null) { return cachedValue; }

    var dbValue = yield db.query('SELECT * FROM values WHERE id = $1', [id]);
    yield cache.put(id, dbValue);
    return dbValue;
}