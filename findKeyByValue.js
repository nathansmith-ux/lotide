/**
 * Function returns the first key that matches the provided value
 * @param {object} object
 * @param {string} value
 * @returns The key as a string
 */
const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);

  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

// Exporting Function
module.exports = findKeyByValue;