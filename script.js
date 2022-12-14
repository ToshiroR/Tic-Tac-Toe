const x_class = "x";
const circle_class = "circle";
const cellElement = document.querySelectorAll("[data-cell");
const board = document.getElementById("board");
let circleTurn;

//    eventlistener for clicking the tiles   //

startGame();

function startGame() {
  circleTurn = false;
  cellElement.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? circle_class : x_class;
  placeMark(cell, currentClass);
  swapTurns();
  setBoardHoverClass();
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(x_class);
  board.classList.remove(circle_class);

  if (classTurn) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  }
}
