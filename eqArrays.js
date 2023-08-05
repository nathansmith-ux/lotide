// Function accepts two arrays and determines if they are equal
const eqArrays = function(array1, array2) {
  // If elements do not have the same number of elements, return false.
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      // If the individual elements within the array are not equal, return false
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

// Exporting Function
module.exports = eqArrays;