// Function checks if two primitive values are strictly equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function accepts an array (allItems) and object (itemsToCount)
const countOnly = function(allItems, itemsToCount) {
  // Declaring an empty object to record the count
  const results = {}
  
  // Looping through each item of the allItems array
  for (const item of allItems) {
    // If the object's value is equal to true then continue 
    if (itemsToCount[item]) {
      // If the object's key value pair already exist increase the count by 1
      if (results[item]) {
        results[item] += 1;
      } else {
        // If the object's key value pair doesn't exist make it equal to 1
        results[item] = 1;
      }
    }
  }
  return results;
}

// Export Function
module.exports = countOnly;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);