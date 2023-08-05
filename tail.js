/**
 * Function returns an array without the first element
 * @param {array} array
 * @returns array
 */
const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;