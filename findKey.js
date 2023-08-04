const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

const stars = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const fastFood = findKey({
  "McDonalds": {review: 5},
  "Wendys": {review: 3},
  "Burger_King": {review: 4},
  "OddBurger": {review: 5},
  "Smokes": {review: 2}
}, x => x.review === 3);

const workOut = findKey({
  "barbell_row": {sets: 3},
  "bench_press": {sets: 4},
  "dips": {sets: 6},
  "squat": {sets: 5}
}, x => x.sets === 6);

assertEqual(stars, "noma");
assertEqual(fastFood, "Wendys");
assertEqual(workOut, "dips");