const eqObjects = require('./eqObjects');

/**
 * Function compares if two objects are equal
 * @param {object} actual
 * @param {object} expected
 * @returns success or failure message
 */
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;