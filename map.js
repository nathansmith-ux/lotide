/**
 * Function returns a new array with elements that meet the criteria of the callback function
 * @param {array} array
 * @param {function} callback
 * @returns returns a new array
 */
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

// Exporting Function
module.exports = map;