var cache = require('../../utils/cache').promises;

cache.get('first')
    .then(function(result1){
        return cache.get('second')
            .then(function(result2){
                return cache.get('third')
                    .then(function(result3){
                        return {
                            result1: result1,
                            result2: result2,
                            result3: result3
                        };
                    });
            });
    }).then(function(results){
        console.log(results.result1);
        console.log(results.result2);
        console.log(results.result3);
    });