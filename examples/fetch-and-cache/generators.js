var cache = require('../../utils/cache').promises;
var db = require('../../utils/db').promises;

function * getValue(id){
    var cachedValue = yield cache.get(id);
    if(cachedValue) { return cachedValue; }

    var dbValue = yield db.query('SELECT * FROM values WHERE id = $1', [id]);
    yield cache.set(id, dbValue);
    return dbValue;
}

var result = yield getValue(1);
console.log(result);