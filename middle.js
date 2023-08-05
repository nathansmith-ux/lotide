// Function will take in a single array and return the middle elements.
const middle = function(array) {
  let middleElement = [];
  
  // If the array contains 1 or 2 elements then we will return an empty array
  if (array.length === 1 || array.length === 2) {
    array = middleElement;

  // Checking if the array contains an even number of elements
  } else if (array.length % 2 === 0) {
    // Finding the index values for the two middle elements
    const startIndex = Math.floor((array.length / 2) - 1);
    const endIndex = Math.floor((array.length + 2) / 2);
    // Returning an array with these elements at these two indexes
    middleElement = array.slice(startIndex, endIndex);

  } else {
    // Finding the index value for the middle element
    const oddIndex = Math.floor(array.length - 1) / 2;
    // Pushing the middle array element into empty array
    middleElement.push(array[oddIndex]);
  }

  return middleElement;
};

// Exporting Function
module.exports = middle;