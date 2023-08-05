const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {
  it("returns a correct array using strings", () => {
    const array1 = ["hello", "world", "lighthouse"];
    const array2 = ["lighthouse"];
    assert.deepEqual(without(array1, array2), ["hello", "world"]);
  });

  it("returns a correct array with numbers", () => {
    const array1 = [1, 2, 3, 4, 5, 6];
    const array2 = [2, 4, 5];
    assert.deepEqual(without(array1, array2), [1, 3, 6]);
  });

  it("returns a correct array using strings and numbers", () => {
    const array1 = ["hello", 1, 3, "LHL", 18];
    const array2 = ["hello", 3];
    assert.deepEqual(without(array1, array2), [1, "LHL", 18]);
  });

  it("The original array is not altered by the function", () => {
    const array1 = ["hello", "world", "lighthouse"];
    const array2 = ["world"];
    assert.deepEqual(without(array1, array2), ["hello", "lighthouse"]);
    assert.deepEqual(array1, ["hello", "world", "lighthouse"]);
  });
});