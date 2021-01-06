var Chance = require('chance');
var chance = new Chance();

var roll = function() {
    return chance.integer({ min: 1, max: 105 })
}

var pull = function() {

    var result = roll();

    if(result >= 1 && result <= 40) {
        return 'You found Gems'
    }

    if(result >= 41 && result <= 45) {
        return 'You found Iron'
    }

    if(result >= 46 && result <= 50) {
        return 'You found Platinum'
    }

    if(result >= 51 && result <= 55) {
        return 'You found Gold'
    }

    if(result >= 56 && result <= 60) {
        return 'You found Alloy'
    }

    if(result >= 61 && result <= 73) {
        return '✰Easy Lunarians appear!'
    }

    if(result >= 74 && result <= 90) {
        return '✰✰Medium Lunarians appear!'
    }

    if(result >= 91 && result <= 97) {
        return '✰✰✰Hard Lunarians appear!'
    }
        return '✰✰✰✰Insane Lunarians appear!'
}

module.exports.roll = roll
module.exports.pull = pull