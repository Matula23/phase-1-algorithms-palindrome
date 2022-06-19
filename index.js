function reverseWord(word){
  return word.split('').reverse().join('')
}

function isPalindrome(word) {
  // Write your algorithm here
  return reverseWord(word) === word
}

/* 
  Add your pseudocode here
  1) Convert string into an array of letters
  2) identify first half of array and second half array
  3) Join each array into one string
  4) Compare the 2 and return true if they match
*/

/*
  Add written explanation of your solution here
  If the first half of a string is the same half of the string it is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('Expecting: true');
  console.log('=>', isPalindrome('abba'))

  console.log('Expecting: false');
  console.log('=>', isPalindrome('dog'))
}

module.exports = isPalindrome;
