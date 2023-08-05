// Importing eq Arrays function which checks if an array is equal
const eqArrays = require('./eqArrays');

// Function determines accepts two arrays and if they are equal returns a success message. Otherwise returns a fail message
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ The provided arrays are a perfect match`);
  } else {
    console.log(`⛔⛔⛔ The provided arrays are not a perfect match due to either an mismatch in data type or value`);
  }
};

// Exporting function
module.exports = assertArraysEqual;