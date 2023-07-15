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
    console.log(`✅✅✅ The provided arrays are a perfect match`);
  } else {
    console.log(`⛔⛔⛔ The provided arrays are not a perfect match due to either an mismatch in data type or value`);
  }
};

// True Test Case
assertArraysEqual([5, 6, 7], [5, 6, 7]);
assertArraysEqual(["5", "6", "7"], ["5", "6", "7"]);

// False Test Case
assertArraysEqual(["5", "6", "7"], ["5", "6", "8"]);
assertArraysEqual(["5", "6", "7"], ["5", "6", 7]);
assertArraysEqual([15, 6, 7], [5, 6, 7]);


