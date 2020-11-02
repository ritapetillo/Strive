/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum = (int1, int2) => {
    let sum = int1+int2
    let result = int1 === int2 ? 3 * sum : sum
    return result
}
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const numCheck = (n1, n2) => {
    return n1 > 50 || n2 >50 || n1+n2 === 50 ? true : false
}
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const changeString = (x,str) => {
    let str1 = str.substring(0, x-1);
    let str2 = str.substring(x, str.lenght);
    return(str1+str2)
}
/*

4)
 Create a function to find the largest of three given integers.
*/

//manual version
const returnLarger = (n1, n2, n3) => {
    let newArray = [n2, n3];
    let higherNumber = n1
    newArray.forEach(n => {
        higherNumber = n > higherNumber ? n : higherNumber  
    })
    return higherNumber
}

//easy version
const returnLargerEasy = (n1, n2, n3) => {
    return Math.max(n1,n2,n3)
}
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const inRange = (n1,n2) => {
    if (
        (n1 >= 40 || n1 <= 60) && (n2 >= 40 || n2 <= 60) 
        ||
        (n1 >= 70 || n1 <= 100) && (n2 >= 70 || n2 <= 100) 
    ) return true 
    else return false
}
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const copyString = (str, n) => {
    let newString = "";
    while (n > 0) {
        newString += str
        n--
    }
        return newString
}
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const displayCityName = (city) => {
    let toDisplay = city.startsWith("Los") || city.startsWith("New");
    return toDisplay ? city : false
}
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumArray = (array) => {
    let sum =  array.reduce((a, b) => 
     a + b
    )
    return sum
}
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const arrayCheck = (array) => {
    return ((array[0] === 1
    || array[1]===1) || (array[0] === 3
            || array[1] === 3)) 
     
}
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const arrayNotContain = (array) => {
    return ((array[0] !== 1
    || array[1]!==1) || (array[0] !== 3
            || array[1] !== 3)) 
     
}
/*11)

Create a function to find the longest string from a given array of strings.
*/

// const findLongestArray = (array) => {
//     var longStr ="";
//     array.forEach((word) => {
//         if(word.lenght > longStr.lenght) {
//             longStr = word
//         }
//     });
//     return longStr;
// }
// let words = findLongestArray(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
// console.log(words)

const findLong = (array) => {
     let longestWord = "";

  array.forEach((word) => {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;  
    
}
// console.log(findLong(["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]));



/*

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

    */

const angleType = (angle) => {
    let type;
    if (angle < 90) {
    type = "Acute Angle"
    } else if (angle == 90) {
      type = "Right Angle"
    } else if (angle < 180) {
    type = "Btuse Angle"
    } else if (angle == 180) {
    type = "Straight Angle"
    }
    return type
}
   /*
13)

Create a function to find the index of the greatest element of a given array of integers
*/

const greatIndex = (array) => {
    let highest = array[0]
    array.forEach((item, i) => {
        highest = item > highest ? item : highest    
    })
    return array.indexOf(highest)
}

    
/*
14)

Create a function to get the largest even number from an array of integers.
*/
const greatestEven = (array) => {
    let evenArray = array.filter(item => {
        return item % 2 === 0;
    })
    return Math.max(...evenArray)
}
/*
16)

Create a function to check from two given integers, whether one is positive and another one is negative.
*/
     const positiveOrNegative = (x, y) =>
{
  if ((x < 0 && y > 0) || x > 0 && y < 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}  
    
    /*
17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
const modifyString = (str) => {
    let newStr = ""
    if (str.lenght < 2) {
       newStr = str.toUpperCase();
        
    } else {
        let str1 = str.substring(0, 3).toLowerCase();
        let str2 = str.substring(3, str.lenght).toUpperCase()
        newStr = str1 + str2
    }
    return newStr;
}

/*
18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/

const sumInt2 = (int1, int2) => {
    let sum = int1 + int2;
    return (sum >= 50 && sum <= 80) ? 65 : 80   
}
/*
19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
*/
const returnString = (n) => {
    let str = ""
    if (n % 3 === 0) {
        str += 'Diego'
    }
    if (n % 5 === 0) {
        str += 'Riccardo'
    }
    if (n % 7 === 0) {
        str += 'Stefano'
    } else {
        str = n
    }

    return str
}

console.log(returnString(31))
/*

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
const acronymFunc = (str) => {
    let acronym = ""
    str.split(' ').map(word => {
        acronym += word.charAt(0).toUpperCase()
    })
    return acronym
}
