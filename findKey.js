/**
 * Function returns the first key that matches the criteria of the callback function
 * @param {object} object
 * @param {function} callback
 * @returns String (Object Key)
 */
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// Exporting Function
module.exports = findKey;