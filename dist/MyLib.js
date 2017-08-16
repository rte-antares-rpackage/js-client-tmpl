(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = bar;

  function bar() {
    return "world!";
  }
}());

},{}],2:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = foo;

  function foo() {
    return "Hello";
  }

}());

},{}],3:[function(require,module,exports){
(function() {
  'use strict';

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

}());

},{"./bar.js":1,"./foo.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYmFyLmpzIiwic3JjL2Zvby5qcyIsInNyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBiYXI7XHJcblxyXG4gIGZ1bmN0aW9uIGJhcigpIHtcclxuICAgIHJldHVybiBcIndvcmxkIVwiO1xyXG4gIH1cclxufSgpKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBmb287XHJcblxyXG4gIGZ1bmN0aW9uIGZvbygpIHtcclxuICAgIHJldHVybiBcIkhlbGxvXCI7XHJcbiAgfVxyXG5cclxufSgpKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgbW9kdWxlLmV4cG9ydHMuZ2V0TWVzc2FnZSA9IGdldE1lc3NhZ2U7XHJcbiAgbW9kdWxlLmV4cG9ydHMuc2F5SGVsbG8gPSBzYXlIZWxsbztcclxuICBtb2R1bGUuZXhwb3J0cy5zYXlIZWxsb0FzeW5jID0gc2F5SGVsbG9Bc3luYztcclxuXHJcbiAgLy8gSWYgd2UgYXJlIGluIGEgYnJvd3NlciwgZGVmaW5lIGEgZ2xvYmFsIHZhcmlhYmxlLlxyXG4gIGlmICh3aW5kb3cpIHdpbmRvdy5NeUxpYiA9IG1vZHVsZS5leHBvcnRzO1xyXG5cclxuICB2YXIgZm9vID0gcmVxdWlyZShcIi4vZm9vLmpzXCIpO1xyXG4gIHZhciBiYXIgPSByZXF1aXJlKFwiLi9iYXIuanNcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGdldE1lc3NhZ2UoKSB7XHJcbiAgICByZXR1cm4gZm9vKCkgKyBcIiBcIiArIGJhcigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2F5SGVsbG8oZWwpIHtcclxuICAgICQoZWwpLmh0bWwoZ2V0TWVzc2FnZSgpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNheUhlbGxvQXN5bmMoZWwsIGRlbGF5LCBjYWxsYmFjaykge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgc2F5SGVsbG8oZWwpO1xyXG4gICAgICBjYWxsYmFjaygpO1xyXG4gICAgfSwgZGVsYXkpO1xyXG4gIH1cclxuXHJcbn0oKSk7XHJcbiJdfQ==
