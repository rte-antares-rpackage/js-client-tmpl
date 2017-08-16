(function() {
  'use strict';

  var assert = require("assert");
  require("../../src/main.js");

  describe("MyLib", function() {
    beforeEach(function() {
      $("#message").html("");
    });

    it("returns an important message", function() {
      assert.equal(MyLib.getMessage(), "Hello world!");
    });

    it("displays the message in the desired element", function() {
      MyLib.sayHello("#message");
      assert.equal($("#message").html(), MyLib.getMessage());
    })

    it("asynchronously displays the message in the desired element", function(done) {
      MyLib.sayHelloAsync("#message", 10, function() {
        assert.equal($("#message").html(), MyLib.getMessage());
        done();
      });
    })


  });

}());
