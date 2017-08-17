// Expose objects in the regular node fashion. This is not required but it may
// be useful for other developers who want to include your library in their own
// project.
module.exports.getMessage = getMessage;
module.exports.sayHello = sayHello;
module.exports.sayHelloAsync = sayHelloAsync;

// Export the main object in the global scope to make it available for users.
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
