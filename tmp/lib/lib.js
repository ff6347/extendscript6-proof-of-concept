"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calc = calc;
exports.write = write;
var something = exports.something = 5;
function calc() {
  var a = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];
  var b = arguments.length <= 1 || arguments[1] === undefined ? 5 : arguments[1];

  return a * b;
}
function write(msg) {
  $.writeln(msg);
}