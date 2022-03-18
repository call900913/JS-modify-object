String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}


function Phrase(content) {
  this.content = content

  this.lowerCase = function (str) {
    return str.toLowerCase()
   }

  this.palindromeTestString = function palindromeTestString() {
    return this.lowerCase(this.content)
  }

  this.palindrome = function() {
    return this.palindromeTestString().reverse() === this.palindromeTestString()
  }
}


String.prototype.palindrome = function palindrome() {
  return new Phrase(this).palindrome();
}

// test case
console.log("'racecar'.palindrome()" + "\n" + "racecar".palindrome())
