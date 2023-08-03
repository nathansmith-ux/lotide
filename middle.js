// Function Implementation
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

module.exports = middle;