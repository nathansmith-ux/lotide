// Function determines if two arrays are equal by first checking if they have the same number of elements. If they do then it will compare each element looking for any inequalities.
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

// Function uses the eqArrays function to determine if two arrays are equal and logs either a success or failure message.
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ The source array was not altered`);
  } else {
    console.log(`⛔⛔⛔ The source array was altered`);
  }
};

// Function accepts two arrays (source and itemsToRemove). It will return a new array that contains items not found within the itemsToRemove array.
const without = function(source, itemsToRemove) {
  return source.filter(sourceItem => !itemsToRemove.includes(sourceItem));
};

// Exporting Function
module.exports = without;

// Testing To See If The Function Works With Strings 
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));

// Testing To See If The Function Works With Numbers
const numbers = [1, 2, 3, 4, 5, 6];
console.log(without(numbers, [2, 4, 5]));

// Testing To See If The Function Works With String & Numbers Test
const stringAndNumbers = ["hello", 1, 3, "LHL", 18];
console.log(without(stringAndNumbers, ["hello", 3]));

// Checking That The Original Array Was Not Altered By The without Function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(numbers, [1, 2, 3, 4, 5, 6]);
assertArraysEqual(stringAndNumbers, ["hello", 1, 3, "LHL", 18]);