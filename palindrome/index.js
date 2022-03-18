module.exports = Phrase;

String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}


function Phrase(content) {
  this.content = content

  this.getletters = function getletters() {
    let letters = Array.from(this.content).map( (member) => {
      if (member.match(/[a-zA-Z]/)) {
        return member
      } else {
        return ""
      }
    })
    return letters.join("")
  }

  this.palindromeTestString = function palindromeTestString() {
    return this.getletters().toLowerCase() 
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
