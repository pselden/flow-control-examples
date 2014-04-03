var cache = require('../../utils/cache');
var db = require('../../utils/db');

function getValue(id, callback) {
    cache.get(id, function (err, cachedValue) {
        if (cachedValue) { return callback(null, cachedValue); }

        db.query('SELECT * FROM values WHERE id = $1', [id], function (err, dbValue) {
            cache.set(id, dbValue, function () {});
            callback(null, dbValue);
        });
    });
}

getValue(1, function(err, result){
    console.log(result);
});