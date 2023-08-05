// Function will take in a single array and return the middle elements.
/**
 * Function returns the middle elements of an array
 * @param {array} array 
 * @returns Returns a new array containing the middle elements
 */
const middle = function(array) {
  let middleElement = [];
  
  if (array.length === 1 || array.length === 2) {
    array = middleElement;

  } else if (array.length % 2 === 0) {
    const startIndex = Math.floor((array.length / 2) - 1);
    const endIndex = Math.floor((array.length + 2) / 2);
    middleElement = array.slice(startIndex, endIndex);

  } else {
    const oddIndex = Math.floor(array.length - 1) / 2;
    middleElement.push(array[oddIndex]);
  }

  return middleElement;
};

// Exporting Function
module.exports = middle;