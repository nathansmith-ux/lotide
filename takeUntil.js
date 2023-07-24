const takeUntil = function(array, callback) {
  const result = [];
  
  for (const element of array) {
    if (callback(element)) {
      return result;
    }
    result.push(element);
  }
  return result;
};

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
    console.log(`✅✅✅ TakeUntil Is Working!`);
  } else {
    console.log(`⛔⛔⛔ This Ain't It Chief`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [1, 15, 23, "string", 543, "hello"];
const results3 = takeUntil(data3, x => typeof x === 'string');
console.log(results3);

// AssertArraysEqual
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results3, [1, 15, 23]);

/* Expected Output
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

