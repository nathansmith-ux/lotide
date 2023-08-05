/**
 * Function will check if two primitive data types are equal
 * @param {primitive data type} actual 
 * @param {primitive data type} expected 
 * @returns success or fail message
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Exporting function
module.exports = assertEqual;