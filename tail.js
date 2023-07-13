const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

// Test Case 1: Check the returned array elements with strings
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // checks that we get 2 elements
assertEqual(result[0], "Lighthouse"); // first element is "Lighthouse"
assertEqual(result[1], "Labs"); // second element is "Labs"

// Test Case 2: An array wih 1 element should yield an empty array
const finish = tail([1]);
assertEqual(finish.length, 0); // checks that we have an empty array

// Test Case 3: An empty array should yield an empty array
const final = tail([]);
assertEqual(final.length, 0); // checks that we have an empty array

// Test Case 4: Check the returned array elements with numbers
const finale = tail([1, 2, 3, 4]);
assertEqual(finale.length, 3);
assertEqual(finale[0], 2);
assertEqual(finale[1], 3);
assertEqual(finale[2], 4);




