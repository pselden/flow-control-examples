var cache = require('../../utils/cache').promises;
var Promise = require('bluebird');

var first = cache.get('first');
var second = cache.get('second');
var third = cache.get('third');

Promise.all([first, second, third])
    .spread(function(result1, result2, result3){
        console.log(result1);
        console.log(result2);
        console.log(result3);
    });