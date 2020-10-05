let shopTitle = document.querySelector("h1");
let buttonHero = document.querySelector(".hero button");
let body = document.querySelector("body");
let address = document.querySelector(".footer__details p");
let toggle = document.querySelector("#toggle");
function changeHeader() {
  shopTitle.innerText = "The Great Store";
}

let changeBgc = () => {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    toggle.innerHTML = `<i class="fas fa-toggle-off">`;
  } else {
    body.style.backgroundColor = "black";
    toggle.innerHTML = `<i class="fas fa-toggle-on">`;
    body.style.color = "white";
  }
};

let changeAddress = () => {
  address.innerHTML = "18011 Biscayne Blvd,</br> North Miami Beach FL</br> USA";
};

// changeHeader();
// changeAddress();
