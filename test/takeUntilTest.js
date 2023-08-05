const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("#takeUntil", () => {
  it("returns the numbers in an array until one is less than 0", () => {
    const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const callBack = function(element) {
      return element < 0;
    };
    assert.deepEqual(takeUntil(array, callBack), [1, 2, 5, 7, 2]);
  });

  it("returns the strings until it encounters a comma", () => {
    const array = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const callBack = function(element) {
      return element === ",";
    };
    assert.deepEqual(takeUntil(array, callBack), ["I've", "been", "to", "Hollywood"]);
  });

  it("returns only numbers", () => {
    const array = [1, 15, 23, "string", 543, "hello"];
    const callBack = function(element) {
      return typeof element === "string";
    };
    assert.deepEqual(takeUntil(array, callBack), [1, 15, 23]);
  });
});