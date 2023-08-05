// Function accepts an array and a callback function then returns an array with elements that don't meet the callback function criteria.
const takeUntil = function(array, callback) {
  const result = [];
  
  for (const element of array) {
    // If the callback function is true returns the result array
    if (callback(element)) {
      return result;
    }
    // If the callback function is false push the element to the result array
    result.push(element);
  }
  return result;
};

// Exporting Function
module.exports = takeUntil;

// Function accepts two arrays and determines if they are equal
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

// Function accepts two arrays and returns a message based on equality
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ TakeUntil Is Working!`);
  } else {
    console.log(`⛔⛔⛔ This Ain't It Chief`);
  }
};

// Returning the numbers in the array until one is less than 0
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

// Return the strings until it encounters a comma
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Returns only numbers 
const data3 = [1, 15, 23, "string", 543, "hello"];
const results3 = takeUntil(data3, x => typeof x === 'string');
console.log(results3);

// AssertArraysEqual
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results3, [1, 15, 23]);

