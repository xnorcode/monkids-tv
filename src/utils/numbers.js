/**
 * Method to get a random Integer number within a given range.
 * 
 * @param {Integet} min The begining of the range (inclusive)
 * @param {Integer} max The end of the range (exclusive)
 * @returns Random integer number
 */
 export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }