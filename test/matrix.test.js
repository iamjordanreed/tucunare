const assert = require("assert");
const mat4 = require("../src/matrix").mat4;

describe("mat4", function() {
  it("constructor", function() {
    var values = [
       0,  1,  2,  3,
       4,  5,  6,  7,
       8,  9, 10, 11,
      12, 13, 14, 15
    ];

    var mat = new mat4(
      values[ 0], values[ 1], values[ 2], values[ 3],
      values[ 4], values[ 5], values[ 6], values[ 7],
      values[ 8], values[ 9], values[10], values[11],
      values[12], values[13], values[14], values[15]
    );

    assert.deepEqual(mat.values, values);
  });

  it("identity", function() {
    var mat = mat4.identity();
    assert.deepEqual(mat.values, [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ]);
  });
});