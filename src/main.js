module.exports.getMessage = getMessage;
module.exports.sayHello = sayHello;
module.exports.sayHelloAsync = sayHelloAsync;

// If we are in a browser, define a global variable.
if (window) window.MyLib = module.exports;

var foo = require("./foo.js");
var bar = require("./bar.js");

function getMessage() {
  return foo() + " " + bar();
}

function sayHello(el) {
  $(el).html(getMessage());
}

function sayHelloAsync(el, delay, callback) {
  setTimeout(function() {
    sayHello(el);
    callback();
  }, delay);
}
