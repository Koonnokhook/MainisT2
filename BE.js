var Chance = require('chance');
var chance = new Chance();

var roll = function() {
    return chance.integer({ min: 1, max: 100 })
}

var pull = function() {

    var result = roll();

    if(result >= 1 && result <= 27) {
        return '✰Easy Lunarians appear!'
    }

    if(result >= 28 && result <= 44) {
        return '✰✰Medium Lunarians appear!'
    }

    if(result >= 45 && result <= 51) {
        return '✰✰✰Hard Lunarians appear!'
    }

    if(result >= 52 && result <= 56) {
        return '✰✰✰✰Insane Lunarians appear!'
    }
    if(result >= 57 && result <= 61) {
        return 'You found Fire Obsidian fraction!'
    }
    if(result >= 62 && result <= 64) {
        return 'You found Piece of clothing!'
    }
    if(result >= 65 && result <= 66) {
        return 'You found Unidentifiable Gems fraction!'
    }
    return 'Nothing';
}

module.exports.roll = roll
module.exports.pull = pull