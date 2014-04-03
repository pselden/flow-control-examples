var cache = require('../../utils/cache').promises;

var result1 = yield cache.get('first');
var result2 = yield cache.get('second');
var result3 = yield cache.get('third');

console.log(result1);
console.log(result2);
console.log(result3);