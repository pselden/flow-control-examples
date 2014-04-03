function getValue(id){
    var cachedValue = cache.get(id);
    if(cachedValue) { return cachedValue; }

    var dbValue = db.query('SELECT * FROM values WHERE id = $1', [id]);
    cache.set(id, dbValue);
    return dbValue;
}

var result = getValue(1);
console.log(result);