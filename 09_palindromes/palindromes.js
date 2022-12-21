const palindromes = function (a) {
    let word = a.replace(/[^\w']|_/g, "")
    let isPalindrome = true
    for (let i = 0; i < word.length; i++) {
      let testLetter1 = word[i] 
      let testLetter2 = word[word.length - 1 - i] 
      if (testLetter1.toUpperCase() !== testLetter2.toUpperCase() ) {
        isPalindrome = false
        break
      }
    }
    return isPalindrome
};

// Do not edit below this line
module.exports = palindromes;
