const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true for shirtObject and anotherShirtObject", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject))
  });

  it("returns false for shirtObject and longSleeveShirtObject", () => {
    const shirtObject = { color: "red", size: "medium" };
    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject))
  });

  it("should return true for objects with the same keys and values but in different orders", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });

  it("returns undefined for []", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assert.isFalse(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject))
  });
});
