var Promise = require('bluebird');

var cache = {
    first: 1,
    second: 2,
    third: 3
};

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Cache(){
    this.get = function(key, callback){
        setTimeout(function(){
            callback(null, cache[key])
        }, getRandomInt(50, 100));
    },
    this.set = function(key, value, callback){
        setTimeout(function(){
            cache[key] = value;
            callback(null, value);
        }, getRandomInt(50, 100));
    }
}

function PromisesCache(){
    this.get = function(key){
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve(cache[key])
            }, getRandomInt(50, 100));
        });
    },
    this.set = function(key, value){
        return new Promise(function(resolve) {
            setTimeout(function () {
                cache[key] = value;
                resolve( value);
            }, getRandomInt(50, 100));
        });
    }
}

module.exports = new Cache();
module.exports.promises = new PromisesCache();