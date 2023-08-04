const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns an empty array when provided with an array with 1 element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array when provided with an array with 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  // Odd Number Tests
  it("returns [2] when provided with [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] when provided with [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  // Even Number Tests
  it("returns [2, 3] when provided with [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] when provided with [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});