let assert = require("assert")
let Phrase = require("../index.js")

describe("Phrase", function() {
  
  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function() {
      let notaPalin = new Phrase("Mr. Anderson")
      assert(!notaPalin.palindrome());
    })

    it("should return true for a simple palindrome", function() {
      let simplePalin = new Phrase("racecar");
      assert(simplePalin.palindrome());     
    })

    it("should return true for a mixed-case palindrome", function() {
      let mixedCasePalin = new Phrase("RaCeCaR");
      assert(mixedCasePalin.palindrome())
    })


  })  

})
