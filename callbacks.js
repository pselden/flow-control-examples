function getValue(id, callback) {
  cache.get(id, function (err, cachedValue) {
    if (cachedValue !== null) { return callback(null, cachedValue); }
    
    db.get('SELECT * FROM values WHERE id = $1', [id], function (err, dbValue) {
      cache.put(id, dbValue, function () {
        callback(null, dbValue);
      });
    });
  });
}
