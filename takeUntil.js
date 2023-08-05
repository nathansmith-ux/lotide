/**
 * Function returns a new array with elements that don't meet the callback function's criteria
 * @param {array} array 
 * @param {function} callback 
 * @returns A new array
 */
const takeUntil = function(array, callback) {
  const result = [];
  
  for (const element of array) {
    if (callback(element)) {
      return result;
    }
    result.push(element);
  }

  return result;
};

// Exporting Function
module.exports = takeUntil;