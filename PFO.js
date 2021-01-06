var Chance = require('chance');
var chance = new Chance();

var roll = function() {
    return chance.integer({ min: 1, max: 112 })
}

var pull = function() {

    var result = roll();

    if(result >= 1 && result <= 70) {
        return 'You found Pine tree'
    }

    if(result >= 71 && result <= 80) {
        return '✰Easy Lunarians appear!'
    }

    if(result >= 81 && result <= 96) {
        return '✰✰Medium Lunarians appear!'
    }

    if(result >= 96 && result <= 102) {
        return '✰✰✰Hard Lunarians appear!'
    }

    return 'Nothing';
}

module.exports.roll = roll
module.exports.pull = pull