/**
 * Function counts the number of times an element appears in an array
 * @param {array} allItems
 * @param {object} itemsToCount
 * @returns object that records the element name and count
 */
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// Export Function
module.exports = countOnly;