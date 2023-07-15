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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ The source array was not altered`);
  } else {
    console.log(`⛔⛔⛔ The source array was altered`);
  }
};

const without = function(source, itemsToRemove) {
  return source.filter(sourceItem => !itemsToRemove.includes(sourceItem));
};

// String Test
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));

// Numbers Test
const numbers = [1, 2, 3, 4, 5, 6];
console.log(without(numbers, [2, 4, 5]));

// String & Numbers Test
const stringAndNumbers = ["hello", 1, 3, "LHL", 18];
console.log(without(stringAndNumbers, ["hello", 3]));

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(numbers, [1, 2, 3, 4, 5, 6]);
assertArraysEqual(stringAndNumbers, ["hello", 1, 3, "LHL", 18]);