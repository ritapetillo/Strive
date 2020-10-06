let shopTitle = document.querySelector("h1");
let buttonHero = document.querySelector(".hero button");
let body = document.querySelector("body");
let address = document.querySelector(".footer__details p");
let toggle = document.querySelector("#toggle");
let switcher = document.querySelector("#switch");

/*EXERCISE 1 
     Create a new welcome alert message when the page successfully loads
    */
// window.onload = function () {
//   alert("Welcome to the page");
// };

/* EXERCISE 2
      Write a function to change the Title of the page in something else (execute the function in browser console)
  */

function changeHeader() {
  shopTitle.innerText = "THE WORST STORE";
}

/* EXERCISE 3a
      Write a function to add a class to the page's h1 title in "red-color" (execute the function when title is hovered by mouse).
  */

shopTitle.onmouseover = () => {
  shopTitle.classList.add("red-color");
};

shopTitle.onmouseover = function () {
  shopTitle.classList.add("red-color");
};

/* EXERCISE 3b
      Write a function to remove "red-color" class from previous h1 (execute the function when the mouse leaves the title).
  */
shopTitle.onmouseout = () => {
  shopTitle.classList.remove("red-color");
};

/* EXERCISE 4
      Add the following html snippet to your page:
          <h2 id="listTitle">Todo List</h2>
          <ul id="firstList">
              <li><p>1st</p></li>
              <li>2nd</li>
              <li>3rd</li>
          </ul>
          <ul id="secondList">
              <li>1st</li>
              <li>2nd</li>
              <li>3rd</li>
          </ul>
          <div>
              <p>This text is just for the exercise</p>
          </div>
  Write a function to change the text of only the p which are child of a div (execute the function by assigning it to a button's click event)
  */
let changeTextBtn = document.getElementById("changeTextBtn");

const changePContent = function () {
  return (document.querySelector(".to-do div>p").innerText =
    "Just playing around with JS");
};

changeTextBtn.onclick = changePContent;

/* EXERCISE 5
      Write a function to change the list title (you can use previous day's textarea as input or create a new text input field to grab the content)
  */
let inputTitle = document.querySelector("#listTitleInput");
let changeTitleBtn = document.querySelector("#changeTitleBtn");
const changeListTitle = function (e) {
  document.querySelector("#listTitle").innerText = inputTitle.value;
};

changeTitleBtn.onclick = changeListTitle;

/* EXERCISE 6
       Write a function to add a new item ONLY to the second list (create an input field + add button)
  */
let addItem2Btn = document.querySelector("#addItem2Btn");
let itemToAdd = document.querySelector("#itemToAddInput");

const addToTheSecond = function (e) {
  let newItem = document.createElement("li");
  newItem.innerText = itemToAdd.value;
  console.log(newItem);
  document.querySelector("#secondList").appendChild(newItem);
};

addItem2Btn.onclick = addToTheSecond;
/* EXERCISE 7
     Write a function to make the first UL disappear (button)
 */
let removeListOneBtn = document.getElementById("removeListOne");
let firstList = document.querySelector("#firstList");
const firstUlDisappear = function (e) {
  document.querySelector(".to-do-list").removeChild(firstList);
};

removeListOneBtn.onclick = firstUlDisappear;

/* EXERCISE 8
     Write a function to make the background of every UL green (button)

 */

let allGreenBtn = document.getElementById("allGreenBtn");
const paintItGreen = function () {
  // document
  //   .querySelectorAll(".to-do ul")
  //   .forEach((ul) => (ul.style.backgroundColor = "green"));
  let allUl = document.querySelectorAll("ul");
  for (let i = 0; i < allUl.length; i++) {
    allUl[i].style.backgroundColor = "green";
  }
};
allGreenBtn.onclick = paintItGreen;
/* EXERCISE 9
     Add a "magnifier function" to the table.
     When the user mouse goes on a table cell (not the image one) the font size must increase.
     HINT use mouseenter / mouseleave events
 */
let tds = document.querySelectorAll("td");

const makeThemMagnifiable = function (i) {
  tds[i].style.fontSize = "25px";
};
const makeThemSmallerAgain = function (i) {
  tds[i].style.fontSize = "18px";
};

for (let i = 0; i < tds.length; i++) {
  tds[i].onmouseenter = function () {
    makeThemMagnifiable(i);
  };
}

for (let i = 0; i < tds.length; i++) {
  tds[i].onmouseleave = function () {
    makeThemSmallerAgain(i);
  };
}

/* EXERCISE 10
     Add a button to toggle all the product images (toggle => if visible, hide, if not visible, show)
 */
let imgs = document.getElementsByTagName("img");

let hideImgs = document.querySelector("#hideImgs");
let icon = document.querySelector("#hideImgs i");
const toggleShowImages = function () {
  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].style.display === "none") {
      imgs[i].style.display = "block";
      icon.classList.replace("fa-toggle-off", "fa-toggle-on");
    } else {
      imgs[i].style.display = "none";
      icon.classList.replace("fa-toggle-on", "fa-toggle-off");
      // icon.classList.remove("fa-toggle-on");
      // icon.classList.add("fa-toggle-off");
    }
  }
};

hideImgs.onclick = toggleShowImages;
//##### EXTRA

/* EXERCISE 11
     Make the heading of the page change color radomly every time the user clicks on it

     */

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let logo = document.querySelector(".nav__logo");

const makeItClickable = function () {
  let color = getRandomColor();
  logo.style.color = color;
};

logo.onclick = makeItClickable;

/*EXERCISE 12
   Refactor your HTML code with HTML5 semantic tags such as header, section, footer, etc
*/

let changeBgc = () => {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    toggle.innerHTML = `<i class="fas fa-toggle-off">`;
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    toggle.innerHTML = `<i class="fas fa-toggle-on">`;
    body.style.color = "white";
  }
};

// let changeAddress = () => {
//   address.innerHTML = "18011 Biscayne Blvd,</br> North Miami Beach FL</br> USA";
// };

// let changeTitleAddress = () => {
//   changeAddress();
//   changeHeader();
// };

// // changeHeader();
// // changeAddress();
