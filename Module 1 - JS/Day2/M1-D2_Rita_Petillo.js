/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/

console.log(12 + 20);

/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Create a variable named X containing the number 12
*/
let x = 12;

/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Create a variable named name containing the string John Doe
*/

let name = "John Doe";
/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/
console.log(12 - x);
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/
let name1 = "john";
let name2 = "John";

console.log(name1 === name2); // terminal will print false
//if I want to be more fancy and overcomplicate my life :)
const verifyName = (x, y) =>
  x == y ? "they are the same" : "it's a false statement";
console.log(verifyName(name1, name2)); //terminal will print false

console.log(name1.toLocaleLowerCase() === name2.toLocaleLowerCase()); // terminal will print true
let result = verifyName(name1.toLocaleLowerCase(), name2.toLocaleLowerCase());
console.log(result);

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/

x = 8;
if ((x = 8)) {
  console.log("eight");
} else {
  console.log("it's not eight");
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 7 (EXTRA)
Insert a value in a variable based on the result of a ternary if
*/
x = false;
let y = x ? 8 : 9;
console.log(y);
/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the next days we'll also learn how to use GIT 
*/

x = 10;
let numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

if (0 < x < 10) {
  console.log(numbers[x - 1]);
} else {
  console.log("the value is more than 10");
}
