let shopTitle = document.querySelector("h1");
let buttonHero = document.querySelector(".hero button");
let body = document.querySelector("body");
let address = document.querySelector(".footer__details p");
function changeHeader() {
  shopTitle.innerText = "The Great Store";
}

let changeBgc = () => {
  body.style.backgroundColor = "lighgray";
};

let changeAddress = () => {
  address.innerHTML = "18011 Biscayne Blvd,</br> North Miami Beach FL</br> USA";
};

changeHeader();
changeBgc();
changeAddress();
