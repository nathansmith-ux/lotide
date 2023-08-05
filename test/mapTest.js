const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  it("returns the first letter of each array element", () => {
    const array = ["ground", "control", "to", "major", "tom"];
    const callBack = function(element) {
      return element[0];
    };
    assert.deepEqual(map(array, callBack), ["g", "c", "t", "m", "t"]);
  });

  it("multiplies the numbers in an array,", () => {
    const array = [1, 2, 3, 4, 5];
    const callBack = function(element) {
      return element * 3;
    };
    assert.deepEqual(map(array, callBack), [3, 6, 9, 12, 15]);
  });

  it("returns an array with the data type of each element,", () => {
    const array = ["hello", 1, 2, 3, "here"];
    const callBack = function(element) {
      return typeof element === "string" ? "string" : "number";
    };
    assert.deepEqual(map(array, callBack), ["string", "number", "number", "number", "string"]);
  });
});