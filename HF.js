var Chance = require('chance');
var chance = new Chance();

var roll = function() {
    return chance.integer({ min: 1, max: 100 })
}

var pull = function() {

    var result = roll();

    if(result >= 1 && result <= 7) {
        return '✰Easy Lunarians appear!'
    }

    if(result >= 8 && result <= 19) {
        return '✰✰Medium Lunarians appear!'
    }

    if(result >= 20 && result <= 36) {
        return '✰✰✰Hard Lunarians appear!'
    }

    if(result >= 37 && result <= 43) {
        return '✰✰✰✰Insane Lunarians appear!'
    }
    return 'Nothing';
}

module.exports.roll = roll
module.exports.pull = pull