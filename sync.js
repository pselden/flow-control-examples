function getValue(id){
    var cachedValue = cache.get(id);
    if(cachedValue !== null) { return cachedValue; }
    var dbValue = db.query('SELECT * FROM values WHERE id === $1', [id]);
    cache.put(id, dbValue);
    return dbValue;
}
