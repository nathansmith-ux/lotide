const findKey = require('../findKey');
const assert = require('chai').assert;

describe("#findKey", () => {
  it("returns 'noma' when provided stars object and callback", () => {
    const stars = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    const callBack = function(element) {
      return element.stars === 2;
    };

    assert.strictEqual(findKey(stars, callBack), "noma");
  });

  it("returns 'Wendys' when provided restaurants object and callback", () => {
    const restaurants = {
      "McDonalds": {review: 5},
      "Wendys": {review: 3},
      "Burger_King": {review: 4},
      "OddBurger": {review: 5},
      "Smokes": {review: 2}
    };

    const callBack = function(element) {
      return element.review === 3;
    };

    assert.strictEqual(findKey(restaurants, callBack), "Wendys");
  });

  it("returns 'dips' when provided workout object and callback", () => {
    const workout = {
      "barbell_row": {sets: 3},
      "bench_press": {sets: 4},
      "dips": {sets: 6},
      "squat": {sets: 5}
    };

    const callBack = function(element) {
      return element.sets === 6;
    };

    assert.strictEqual(findKey(workout, callBack), "dips");
  });
});