/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
const mostUsedChar = (str) => {
    let arrayChar = str.split('');
    arrayChar = arrayChar.filter((item, i) => {
        return arrayChar.indexOf(item) == i
    })

    let n_char = 0;
    let charMore = ""
    arrayChar.forEach(char => {
        let thisChar_n = str.split(new RegExp(char, "gi")).length - 1
        if (thisChar_n > n_char) {
            n_char = thisChar_n
            charMore = char
        }
    })

return charMore
}

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

const checkAnagram = (str1, str2) => {
    let result;
    if (str1.length == str2.length) {
        let array1 = str1.split('').sort()
        let array2 = str2.split('').sort()
        result = [...array1].toString().toLowerCase() === [...array2].toString().toLowerCase()
        
    } else { 
        result = false;
    }
    return result
}
/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/
const findAnagram = (str, array) => {
    let newArray = array.filter(item => {
        return checkAnagram(str,item) === true
    })
    return [...newArray].toString()
}
/* 4) PALINDROME

Given a string, return tre if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

const checkPalindrome = (str1, str2) => {
    let arr1 = str1.split('');
    let arr2 = str2.split('').reverse()
    return arr1.toString() == arr2.toString()
}
/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.


--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */
const reverseNumber = (n) => {
    let rev_n;
    if (n > 0) {
        rev_n = n.toString().split('').reverse().join('')
    } else {
    
        let newString = n.toString()
        
        rev_n = "-" + newString.substring(1, newString.length).split('').reverse().join('')

        if (rev_n.charAt(1) == "0") {
            rev_n = rev_n.slice(0,1) + rev_n.slice(2, rev_n.length);

        } 
    }
    return rev_n
}
/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

const steps = (n, i = 1) => {
  if (i > n) return;
  console.log('#'.repeat(i) + ' '.repeat(n - i));
  steps(n, i + 1);
}
/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

const newStringReturn = (str) => {
     return str.split('').reverse().join('').toString()
}
/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/
const arrayChunks = (array, chunck) => {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, chunck + index));
    index += chunck;
  }
  return chunked_arr;
}
console.log(arrayChunks([2,3,5,2,4,7],2))
/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

   function pyramid(n, row = 0, level = '') {
  if (row === n) return;
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}
/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;

  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}