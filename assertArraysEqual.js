const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ The provided arrays are a perfect match`);
  } else {
    console.log(`⛔⛔⛔ The provided arrays are not a perfect match due to either an mismatch in data type or value`);
  }
};

module.exports = assertArraysEqual;