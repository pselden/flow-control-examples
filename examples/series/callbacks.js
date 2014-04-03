var cache = require('../../utils/cache');

cache.get('first', function(err, result1){
   cache.get('second', function(err, result2){
      cache.get('third', function(err, result3){
          console.log(result1);
          console.log(result2);
          console.log(result3);
      });
   });
});