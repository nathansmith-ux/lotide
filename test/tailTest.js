const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [2, 3, 4] when provided [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]) [2, 3, 4]);
  });

  it("returns an empty array when provided [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns an empty array when provided an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
});