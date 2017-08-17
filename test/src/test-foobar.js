var assert = require("assert");
var foo = require("../../src/foo.js");
var bar = require("../../src/bar.js");

describe("foo()", function() {
  it("returns 'Hello'", function() {
    assert.equal(foo(), "Hello");
  });
});

describe("bar()", function() {
  it("returns 'world!'", function() {
    assert.equal(bar(), "world!");
  });
});
