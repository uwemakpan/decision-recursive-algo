// Palindrome Checker: Create a recursive function to check if a given string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization.

const test = 'sees'

function isPalindrome(str) {
  let len = 0

  // remove non-alphanumeric characters and
  // change the string to lowercase
  // and get the length of the string
  str = str.replace(/[^a-z0-9]/i, '').toLowerCase()
  len = str.length

  for (let i = 0, mid = len >> 1; i < mid; i++) {
    if (str[i] !== str[len - i - 1]) return false
  }

  return len > 0
}

console.log(isPalindrome(test))
