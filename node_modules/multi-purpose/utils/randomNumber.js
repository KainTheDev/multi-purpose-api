/**
 * 
 * @param {Number} number number to randomize
 * @returns {Number}
 */
async function randomNumber (number) {
        if(typeof number !== 'number') throw new Error("Parameter number must be a number.");
        return Math.floor(Math.random()*number)
}

module.exports = randomNumber