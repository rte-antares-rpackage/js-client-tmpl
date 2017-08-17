(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = bar;

function bar() {
  return "world!";
}

},{}],2:[function(require,module,exports){
module.exports = foo;

function foo() {
  return "Hello";
}

},{}],3:[function(require,module,exports){
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

},{"./bar.js":1,"./foo.js":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYmFyLmpzIiwic3JjL2Zvby5qcyIsInNyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGJhcjtcclxuXHJcbmZ1bmN0aW9uIGJhcigpIHtcclxuICByZXR1cm4gXCJ3b3JsZCFcIjtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZvbztcclxuXHJcbmZ1bmN0aW9uIGZvbygpIHtcclxuICByZXR1cm4gXCJIZWxsb1wiO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzLmdldE1lc3NhZ2UgPSBnZXRNZXNzYWdlO1xyXG5tb2R1bGUuZXhwb3J0cy5zYXlIZWxsbyA9IHNheUhlbGxvO1xyXG5tb2R1bGUuZXhwb3J0cy5zYXlIZWxsb0FzeW5jID0gc2F5SGVsbG9Bc3luYztcclxuXHJcbi8vIElmIHdlIGFyZSBpbiBhIGJyb3dzZXIsIGRlZmluZSBhIGdsb2JhbCB2YXJpYWJsZS5cclxuaWYgKHdpbmRvdykgd2luZG93Lk15TGliID0gbW9kdWxlLmV4cG9ydHM7XHJcblxyXG52YXIgZm9vID0gcmVxdWlyZShcIi4vZm9vLmpzXCIpO1xyXG52YXIgYmFyID0gcmVxdWlyZShcIi4vYmFyLmpzXCIpO1xyXG5cclxuZnVuY3Rpb24gZ2V0TWVzc2FnZSgpIHtcclxuICByZXR1cm4gZm9vKCkgKyBcIiBcIiArIGJhcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXlIZWxsbyhlbCkge1xyXG4gICQoZWwpLmh0bWwoZ2V0TWVzc2FnZSgpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F5SGVsbG9Bc3luYyhlbCwgZGVsYXksIGNhbGxiYWNrKSB7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIHNheUhlbGxvKGVsKTtcclxuICAgIGNhbGxiYWNrKCk7XHJcbiAgfSwgZGVsYXkpO1xyXG59XHJcbiJdfQ==
