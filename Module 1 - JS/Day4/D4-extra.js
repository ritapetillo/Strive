/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returs the sum of the numbers bigger than 5.
*/

/* WRITE YOUR CODE HERE */
const giveMeRandom = (n) => {
  let arrayN = [];
  for (i = 0; i <= n; i++) {
    arrayN.push(Math.floor(Math.random() * 10 + 0));
  }
  return arrayN;
};
const newArray = giveMeRandom(8);
const checkArray = (arrayToCheck) => {
  arrayToCheck.forEach((value) => {
    value > 5
      ? console.log("the number is > 5")
      : console.log("the number is < 5");
  });
};

checkArray(newArray);

/* EXERCISE 12
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

const shoppingCart = [];
const generateItems = () => {
  for (i = 0; i < 8; i++) {
    shoppingCart.push({
      price: 15 + i,
      name: "Cover" + i,
      id: "32343" + i,
      shippingId: "3423" + i,
    });
  }
  return shoppingCart;
};
generateItems();

const total = (shoppingCart) => {
  let total = 0;
  shoppingCart.map((item) => {
    total = total + item.price;
  });
  return total;
};
console.log(total(shoppingCart));

/* WRITE YOUR CODE HERE */

/* EXERCISE 13
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "addToShoppingCart" which receives a new object and add it to shoppingCart and returns the number of items in the shoppingCart.
*/

/* WRITE YOUR CODE HERE */
const addNewItem = (newItem) => {
  shoppingCart.push(newItem);
  return shoppingCart.length;
};

newItem1 = {
  price: 18,
  name: "Cover1",
  id: "32343",
  shippingId: "3423",
};

console.log(addNewItem(newItem1));
addNewItem(newItem1);
/* EXERCISE 14
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

const maxShoppingCart = (arrayCart) => {
  const prices = [];
  arrayCart.forEach((item) => {
    prices.push(item.price);
  });
  return Math.max(...prices);
};

console.log(maxShoppingCart(shoppingCart));

/* EXERCISE 15
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

const latestShoppingCart = (arrayCart) => {
  return arrayCart[arrayCart.length - 1];
};

console.log(latestShoppingCart(shoppingCart));
/* WRITE YOUR CODE HERE */

/* EXERCISE 16
Create a function "loopUntil" which receives an integer X between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than X three times in a row.
*/

/* WRITE YOUR CODE HERE */

const loopUntil = (x) => {
  let random = 5;
  while (random > x) {
    console.log(random);
    random = Math.floor(Math.random() * 10 + 0);
  }
};
loopUntil(1);

/* EXERCISE 1
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR CODE HERE */

const arrayMix = ["ciao", 1, 4, 5, "ciaociao", 8, 32, "banana", "apples"];

const averageArray = (arr) => {
  const newArrayNum = arr.filter(Number);
  let tot = 0;
  newArrayNum.forEach((number) => {
    tot = tot + number;
  });
  return tot;
};

console.log(averageArray(arrayMix));

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

/* WRITE YOUR CODE HERE */

const newArray2 = arrayMix.filter((element) => typeof element === "string");
const longest = (arr) => {
  let highest = 0;
  arr.forEach((item) => {
    let length = item.split("").length;
    highest = length > highest ? length : highest;
  });
  return highest;
};

console.log(longest(newArray2));
/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/

/* ****** EXTRA EXERCISES ****** */

/* WRITE YOUR CODE HERE */
const email = "asdasasa";


const antiSpam = (emailContent) => {
  if (
    typeof emailContent === "string" &&
    !emailContent.includes("SPAM") &&
    !emailContent.includes("SCAM")
  ) {
    console.log(`it's a valid email`);
  } else {
    console.log(`it's not a valid email`);
  }
};
antiSpam(email);
/* EXERCISE 20
Write a function that receives a date D as parameter and calculates the number of days passes since the D.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 21
Write a function "matrixGenerator" that receives X and Y as parameter. The result should be a matrix of X times Y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

/* WRITE YOUR CODE HERE */
