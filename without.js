/**
 * Function returns a new array with items not found in the itemsToRemove array
 * @param {array} source
 * @param {array} itemsToRemove
 * @returns A new array
 */
const without = function(source, itemsToRemove) {
  return source.filter(sourceItem => !itemsToRemove.includes(sourceItem));
};

// Exporting Function
module.exports = without;