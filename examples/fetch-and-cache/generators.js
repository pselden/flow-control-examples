var cache = require('../../utils/cache').promises;
var db = require('../../utils/db').promises;
var co = require('co');

function * getValue(id){
    var cachedValue = yield cache.get(id);
    if(cachedValue) { return cachedValue; }

    var dbValue = yield db.query('SELECT * FROM values WHERE id = $1', [id]);
    yield cache.set(id, dbValue);
    return dbValue;
}


co(function *(){
    var result = yield getValue(1);
    console.log(result);
})();
