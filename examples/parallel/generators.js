var cache = require('../../utils/cache').promises;
var co = require('co');


co(function *(){
    var tasks = {
        first: cache.get('first'),
        second: cache.get('second'),
        third: cache.get('third')
    };

    var results = yield tasks;
    console.log(results.first);
    console.log(results.second);
    console.log(results.third);
})();


