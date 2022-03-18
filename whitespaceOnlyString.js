/*
A method that returns a Bool whether the string comprises only of whitespace (\n, \t, etc)
e.g. "\f".whitespaceOnly() >> true
 */

String.prototype.whitespaceOnly = function () {
  return !!(this.match(/^\s*$/g))
}
