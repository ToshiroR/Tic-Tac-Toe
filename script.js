const x_class = "x";
const circle_class = "circle";
const cellElement = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
let circleTurn;

const winning_Combos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

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

//    styles the Dom    //
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

//    swaps between  X and Circle   //
function swapTurns() {
  circleTurn = !circleTurn;
  console.log(circleTurn);
}

//    allows the X/circle hover effect to work    //
function setBoardHoverClass() {
  board.classList.remove(x_class);
  board.classList.remove(circle_class);

  if (circleTurn) {
    board.classList.add(circle_class);
  } else {
    board.classList.add(x_class);
  }
}
