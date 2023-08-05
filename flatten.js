/**
 * Function takes a nested array and returns a single-level array
 * @param {array} array
 * @returns A new array that is a single level
 */
const flatten = function(array) {
  let flattenedArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattenedArray.push(array[i]);
    } else {
      flattenedArray = flattenedArray.concat(array[i]);
    }
  }

  return flattenedArray;
};

// Exporting Function
module.exports = flatten;