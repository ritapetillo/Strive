/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */

const arrayNumbers = [1, 2, 3, 4, 5];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
const userRita = {
  name: "Rita",
  surname: "Petillo",
  email: "rita.petillo@me.com",
  //address: "18041 Biscayne Blvd, Aventura FL",
  age: 33,
};
/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */
userRita.hasDriverLicense = true;

/* EXERCISE 4
Remove from the previously created object the age
*/
delete userRita.age;
console.log(userRita);
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/
const userJohn = {
  name: "John",
  surname: "Petillo",
  email: "john.petillo@me.com",
  address: "18041 Biscayne Blvd, Aventura FL",
  age: 40,
};

console.log(userRita.email === userJohn.email); //should return false or
userRita.email === userJohn.email
  ? console.log("the same email")
  : console.log("different email");

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */
let totalShoppingCart = 60;

totalShoppingCart =
  totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + 10;
console.log(totalShoppingCart);

//or

const totalPrice = (itemPrice) => {
  const totPrice = itemPrice > 50 ? itemPrice : itemPrice + 10;
  return totPrice;
};
const cart1 = totalPrice(40);
const cart2 = totalPrice(70);
console.log(`the total for cart one is ${cart1} and for cart 2 is ${cart2}`);

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */
const discount = 0.2;
const discountedPrice =
  totalShoppingCart > 50
    ? totalShoppingCart * (1 - discount)
    : (totalShoppingCart + 10) * (1 - discount);
console.log(discountedPrice);

//or
const totalDiscountedPrice = (itemPrice) => {
  const totPrice =
    itemPrice > 50
      ? itemPrice * (1 - discount)
      : (itemPrice + 10) * (1 - discount);
  return totPrice;
};
const discountedCart1 = totalDiscountedPrice(40);
const discountedCart2 = totalDiscountedPrice(70);

console.log(
  `the dicounted total for cart one is ${discountedCart1} and for cart 2 is ${discountedCart2}`
);

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */
const car = {
  brand: "Tesla",
  model: "3",
  licensePlate: "DW3423",
};

const ritaCar = Object.assign({}, car);
ritaCar.licensePlate = "DW43334";
const ritaCar2 = Object.assign({}, car);
ritaCar2.licensePlate = "DW41334";
const ritaCar3 = Object.assign({}, car);
ritaCar3.licensePlate = "DW47334";
const ritaCar4 = Object.assign({}, car);
ritaCar4.licensePlate = "DW47664";
console.log(ritaCar);

// IMPORTANT ALTERNATIVE AND SMARTER WAY!
const cars = [];
for (let i = 0; i < 5; i++) {
  const newCar = Object.assign({}, car);
  cars.push(newCar);
  newCar.licensePlate = "aaaa" + i;
}
console.log(cars);

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */

let carsForRent = [car, ritaCar, ritaCar2, ritaCar3, ritaCar4];
console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */
carsForRent.shift();
carsForRent.pop();
console.log(carsForRent);

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/
const typeCar = typeof car;
const typeLicensePlate = typeof car.licensePlate;
const typeBrand = typeof car.brand;
console.log(`${typeCar} ${typeLicensePlate} ${typeBrand}`);
/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* WRITE YOUR CODE HERE */
const carsForSale = [
  car,
  ritaCar,

  {
    brand: "Fiat",
    model: "500",
    licensePlate: "D534544",
  },
];
let totalCars = carsForSale.length + carsForRent.length;
console.log(totalCars);
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array


/* WRITE YOUR CODE HERE */

//method 1
for (let x = 0; x < carsForSale.length; x++) {
  console.log(carsForSale[x]);
}

//method 2
carsForRent.forEach((car) => {
  console.log(car);
});

//method 3

carsForRent.map((car) => {
  console.log(car);
});

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
