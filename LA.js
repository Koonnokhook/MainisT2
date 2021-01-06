var Chance = require('chance');
var chance = new Chance();

var roll = function() {
    return chance.integer({ min: 1, max: 100 })
}

var pull = function() {

    var result = roll();

    if(result >= 1 && result <= 12) {
        return '✰Easy Lunarians appear!'
    }

    if(result >= 13 && result <= 33) {
        return '✰✰Medium Lunarians appear!'
    }

    if(result >= 34 && result <= 40) {
        return '✰✰✰Hard Lunarians appear!'
    }

    return 'Nothing';
}

module.exports.roll = roll
module.exports.pull = pull