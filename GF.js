var Chance = require('chance');
var chance = new Chance();

var roll = function() {
    return chance.integer({ min: 1, max: 100 })
}

var pull = function() {

    var result = roll();

    if(result >= 1 && result <= 15) {
        return 'You found Cotton tree'
    }

    if(result >= 16 && result <= 27) {
        return 'You found Oak tree'
    }

    if(result >= 28 && result <= 42) {
        return 'You found Fuchsia'
    }

    if(result >= 43 && result <= 55) {
        return '✰Easy Lunarians appear!'
    }

    if(result >= 56 && result <= 72) {
        return '✰✰Medium Lunarians appear!'
    }

    if(result >= 73 && result <= 81) {
        return '✰✰✰Hard Lunarians appear!'
    }

    if(result >= 81 && result <= 85) {
        return '✰✰✰✰Insane Lunarians appear!'
    }
    return 'Nothing';
}

module.exports.roll = roll
module.exports.pull = pull