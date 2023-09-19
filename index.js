function isPalindrome(word) {
 let start = 0;
 let end = word.length - 1;
 while (start < end) {
  if (word[start] !== word[end]) {
    return false;
  }
  start++;
  end--;
 }
 return true;
}

//1. create a function names isPalindrome that takes a string as an argument
//2. dicipher the start and the end of the word
//3.if the start chracter is not the same as the end charcter then read false
//4. if the loop is complete that means that palindrome is true and return true


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
