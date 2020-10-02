const movies = require("./Movies.js");

/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/

let test = "this is a test";

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/

let sum = 10 + 20;
/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/
let random = Math.floor(Math.random() * 20 + 0);

/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/

let Me = {
  name: "Rita",
  surname: "Petillo",
  age: 33,
};

/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/

delete Me.age;

/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/
Me.skills = ["javascript", "html", "css"];
/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/
Me.skills.pop();

// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/

const dice = () => {
  return Math.floor(Math.random() * 6 + 1);
};

/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/
const WhoIsBigger = (x, y) => {
  return Math.max(x, y);
};

/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/

const SplitMe = (s) => {
  return s.split(" ");
};
/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/

const DeleteOne = (s, b) => {
  return b ? s.slice(1) : s;
};
/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

const OnlyLetters = (s) => {
  //method to delete numbers in string. Replace the number with an empty space''
  return s.replace(/[0-9]/g, "");
};

/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/
const IsThisAnEmail = (email) => {
  //create expression to validate email - this is a standard expression
  let validation = /\S+@\S+\.\S+/;
  //test the email to check if there is a matching with the validation. If the test is positive, it resturn true
  return validation.test(email);
};

/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WhatDayIsIt = () => {
  const now = new Date();
  return daysOfWeek[now.getDay() - 1];
};

/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

const RollTheDices = (x) => {
  let results = [];
  for (let i = 0; i <= x; i++) {
    //generate random number between 1 and 6 by calling previous functions and push it in the array results
    results.push(dice());
  }

  //reduce method can be used to iterate through an array, adding current element to the sum
  return results.reduce((a, b) => a + b);
};

/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/

const HowManyDays = (date) => {
  //I'm formatting the dates to make them equals. .getTime method return the date in milliseconds
  const today = new Date().getTime();
  const dateTime = new Date(date).getTime();

  //after formatting the dates in milliseconds, I can make a difference between those two and I can traslate the difference in # of days. ParseInt is to round the number and get an integer.
  return parseInt((today - dateTime) / (24 * 3600 * 1000));
};

/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/

//IMPORTANT ----> this will check bday with the US format mm/dd
const IsTodayMyBDay = (bday) => {
  return (
    new Date().getMonth() === new Date(bday).getMonth() &&
    new Date().getDate() === new Date(bday).getDate()
  );
};
// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/
const DeleteProp = (obj, s) => {
  //delete the prop = to s. Ex. if s= 'name', delete the prop 'name' inside the object
  delete obj[s];
  return obj;
};

/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/
const OlderMovie = () => {
  const moviesYear = [];
  movies.forEach((movie) => {
    moviesYear.push(parseInt(movie.Year));
  });
  //Using ES6 destructuring method would be the easy way, but we have not covered it yet
  // return Math.min(...moviesYear);

  //Filter the object to find the movie which corresponds to the olest one based on older date (min number in moviesYear array). I use  == because I'm comparing a number with a string. === would not work.
  return movies.filter(
    (movie) => movie.Year == Math.min.apply(Math, moviesYear)
  );
};

/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/
const CountMovies = () => movies.length;

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/
const OnlyTitles = () => {
  let movieTitles = [];
  movies.forEach((movie) => movieTitles.push(movie.Title));
  return movieTitles;
};

/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/

//I filter the array by movie.Year >=2000 so that it shows only thos objects which have a Year >=2000
const OnlyThisMillennium = () => movies.filter((movie) => movie.Year >= 2000);

/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/
//Fitler the array movies by imdbID === id I insert
const GetMovieById = (id) => movies.filter((movie) => movie.imdbID === id);
/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/

const SumYears = () => {
  //create an empty array to host movieYear
  const movieYears = [];
  movies.forEach((movie) => {
    //for each object I push movie year, converted from string to number (to be able to sum it)
    movieYears.push(parseInt(movie.Year));
  });

  //I return the sum of all years using .reduce method
  return movieYears.reduce((one, two) => one + two);
};

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/

const SearchMovie = (s) => movies.filter((movie) => movie.Title.includes(s));

/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/
const SearchAndDivide = (s) => {
  //create the matchArray
  //by filtering per title (like ex. 18)
  let matchArray = movies.filter((movie) => movie.Title.includes(s));
  //create the nonMatchArray
  //by filtering per title different from the one specified (with the ! simbol which means not)
  let nonMatchArray = movies.filter((movie) => !movie.Title.includes(s));
  //return an object with those two arrays. I can omit to specify matchArray:matchArray let's say, because they have the same name so it's not necessary.
  return {
    matchArray,
    nonMatchArray,
  };
};
/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

const arrayOfNumb = [4, 6, 1, 7, 3, 6, 12, 97, 34];

const DeleteX = (x) => {
  //I'm asking to delete 1 element starting from position x
  arrayOfNumb.splice(x, 1);
  return arrayOfNumb;
};

// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

const HalfTree = (h) => {
  for (i = 0; i <= h; i++) {
    console.log("*".repeat(i) + "\n");
  }
};
/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/
const Tree = (h) => {
  for (i = 0; i <= h; i++) {
    console.log(
      " ".repeat(h - i) + "*".repeat(2 * i + 1) + " ".repeat(h - 1) + "\n"
    );
  }
};
Tree(3);
/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/

function IsItPrime(n) {
  for (let i = 2; i < n; i++) {
    //check if the number is the result of 2 smaller numbers by using the modular operator. If it's the case it should return 0 once by going through the loop
    return !(n % i === 0);
  }
}

/* Movies array is an example array, used for the exs. Don't change it :)  */
