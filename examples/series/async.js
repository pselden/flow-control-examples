var async = require('async');
var cache = require('../../utils/cache');

var tasks = [
    function(callback){
        cache.get('first', callback);
    },
    function(callback){
        cache.get('second', callback);
    },
    function(callback){
        cache.get('third', callback);
    }
];

async.series(tasks, function(err, results){
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
});