const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const box = 20;
const snake = new Snake();
let directionSnake = "ArrowRight";
let fruit = {
  x: 0,
  y: 0,
};
let columns = canvas.width / box;
let rows = canvas.height / box;

//clean canvas every moment so that snake could update
function clear() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

//press key to determine snake direction
document.addEventListener("keydown", (e) => {
  directionSnake = e.key;
});

//generate fruit coordinates
const generateFruitPosition = () => {
  fruit.x = Math.floor(Math.random() * columns);
  fruit.y = Math.floor(Math.random() * rows);
  
};

//draw fruit
const drawFruit = (x, y) => {
  ctx.fillStyle = "red";
  ctx.fillRect(x * box, y * box, box, box);
};

//application
window.addEventListener("load", () => {
  generateFruitPosition();
  setInterval(() => {
    clear();
    snake.draw();
    drawFruit(fruit.x, fruit.y);
    snake.update(directionSnake);
    snake.draw();
    snake.eat(fruit);
    snake.crash();
  }, 250);
});
