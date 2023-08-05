const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns a single level array of numbers", () => {
    const onlyNumbers = [1, 2, 3, 4, 5, 6];
    const beforeOnlyNumbers = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(beforeOnlyNumbers), onlyNumbers);
  });

  it("returns a single level array of strings", () => {
    const onlyStrings = ["LHL", "bootcamp", "is", "fun"];
    const beforeOnlyStrings = ["LHL", "bootcamp", ["is", "fun"]];
    assert.deepEqual(flatten(beforeOnlyStrings), onlyStrings);
  });

  it("returns an array that doesn't contain any empty arrays", () => {
    const emptyArray = [1, 2, 3, 5];
    const beforeEmptyArray = [1, 2, 3, [], 5];
    assert.deepEqual(flatten(beforeEmptyArray), emptyArray);
  });

  it("returns a single level array of numbers and strings", () => {
    const stringAndNumbers = [1, 2, 3, 4, "LHL", "Lighthouse", 6, "Web"];
    const beforeStringAndNumbers = [1, 2, 3, 4, ["LHL", "Lighthouse"], 6, "Web"];
    assert.deepEqual(flatten(beforeStringAndNumbers), stringAndNumbers);
  });
});