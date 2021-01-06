var Chance = require('chance');
var chance = new Chance();

var roll = function() {
    return chance.integer({ min: 1, max: 100 })
}

var pull = function() {

    var result = roll();

    if(result >= 1 && result <= 40) {
        return 'You found Hevea Brasiliensis'
    }

    if(result >= 41 && result <= 56) {
        return '✰Easy Lunarians appear!'
    }

    if(result >= 57 && result <= 66) {
        return '✰✰Medium Lunarians appear!'
    }

    if(result >= 67 && result <= 73) {
        return '✰✰✰Hard Lunarians appear!'
    }

    return 'Nothing';
}

module.exports.roll = roll
module.exports.pull = pull