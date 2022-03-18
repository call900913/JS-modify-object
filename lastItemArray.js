// Add a method to the Array object to return the last item in it.
// non-mutative

Array.prototype.lastItem = function lastItem() {
  return this[this.length-1]
}
