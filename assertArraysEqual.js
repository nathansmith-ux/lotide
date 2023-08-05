// Importing eq Arrays function which checks if an array is equal
const eqArrays = require('./eqArrays');

/**
 * Functions determines if two arrays are equal
 * @param {array} array1
 * @param {array} array2
 * @returns a success or failure message
 */
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ The provided arrays are a perfect match`);
  } else {
    console.log(`⛔⛔⛔ The provided arrays are not a perfect match due to either an mismatch in data type or value`);
  }
};

// Exporting function
module.exports = assertArraysEqual;