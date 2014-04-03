var Promise = require('bluebird');

var db = {
    1: 'one',
    2: 'two',
    3: 'three'
};

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Database(){
    this.query = function(query, values, callback){
        setTimeout(function(){
            callback(null, db[values[0]]);
        }, getRandomInt(50, 100));
    };
}

function PromisesDatabase(){
    this.query = function(query, values){
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve(db[values[0]]);
            }, getRandomInt(50, 100));
        });
    };
}

module.exports = new Database();
module.exports.promises = new PromisesDatabase();